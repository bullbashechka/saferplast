type RateLimitStore = {
  get: <T>(key: string, options: { type: "json" }) => Promise<T | null>;
  put: (key: string, value: string, options: { expirationTtl: number }) => Promise<void>;
};

type Env = {
  RATE_LIMIT_KV: RateLimitStore;
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
};

type LeadFormPayload = {
  name: string;
  phone: string;
  task: string;
  consentsAccepted: boolean;
  source?: string;
};

type RateLimitEntry = {
  count: number;
  resetAtMs: number;
};

type RateLimitResult =
  | { allowed: true }
  | {
      allowed: false;
      retryAfterSec: number;
    };

const TELEGRAM_API_URL = "https://api.telegram.org";
const MAX_NAME_LENGTH = 100;
const MAX_TASK_LENGTH = 300;
const MIN_PHONE_DIGITS = 11;
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const RATE_LIMIT_WINDOW_SEC = 10 * 60;
const NO_STORE_HEADERS = {
  "Cache-Control": "no-store",
};

function getAllowedOrigin(origin: string | null, requestUrl: URL) {
  if (!origin) {
    return "*";
  }

  try {
    const url = new URL(origin);
    if (url.origin === requestUrl.origin) {
      return origin;
    }
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return origin;
    }
    if (url.hostname.endsWith(".pages.dev")) {
      return origin;
    }
  } catch {
    return null;
  }

  return null;
}

function buildCorsHeaders(origin: string | null, requestUrl: URL) {
  const allowedOrigin = getAllowedOrigin(origin, requestUrl);

  if (!allowedOrigin) {
    return null;
  }

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function normalizeLeadPayload(payload: LeadFormPayload): LeadFormPayload {
  return {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    task: payload.task.trim(),
    consentsAccepted: payload.consentsAccepted,
    source: payload.source?.trim(),
  };
}

function validateLeadPayload(payload: LeadFormPayload) {
  const phoneDigits = payload.phone.replace(/\D/g, "");

  if (!payload.name || payload.name.length > MAX_NAME_LENGTH) {
    return "Некорректно указано имя.";
  }

  if (phoneDigits.length < MIN_PHONE_DIGITS) {
    return "Некорректно указан номер телефона.";
  }

  if (payload.task.length > MAX_TASK_LENGTH) {
    return "Описание задачи слишком длинное.";
  }

  if (!payload.consentsAccepted) {
    return "Необходимо подтвердить согласие на обработку данных.";
  }

  return null;
}

function formatTelegramMessage(payload: LeadFormPayload) {
  const lines = [
    "Новая заявка с сайта Saferplast",
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Задача: ${payload.task || "Не указана"}`,
    `Источник: ${payload.source || "Не указан"}`,
    `Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Qyzylorda" })}`,
  ];

  return lines.join("\n");
}

function getClientIp(request: Request) {
  const cfConnectingIp = request.headers.get("CF-Connecting-IP");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  const xForwardedFor = request.headers.get("X-Forwarded-For");
  if (!xForwardedFor) {
    return null;
  }

  const firstIp = xForwardedFor.split(",")[0]?.trim();
  return firstIp || null;
}

async function checkAndConsumeRateLimit(env: Env, ip: string): Promise<RateLimitResult> {
  const nowMs = Date.now();
  const windowMs = RATE_LIMIT_WINDOW_SEC * 1000;
  const key = `lead-rate-limit:${ip}`;
  const existing = await env.RATE_LIMIT_KV.get<RateLimitEntry>(key, { type: "json" });

  if (!existing || nowMs >= existing.resetAtMs) {
    const next: RateLimitEntry = {
      count: 1,
      resetAtMs: nowMs + windowMs,
    };

    await env.RATE_LIMIT_KV.put(key, JSON.stringify(next), {
      expirationTtl: RATE_LIMIT_WINDOW_SEC,
    });

    return { allowed: true };
  }

  if (existing.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    const retryAfterSec = Math.max(1, Math.ceil((existing.resetAtMs - nowMs) / 1000));
    return { allowed: false, retryAfterSec };
  }

  const updated: RateLimitEntry = {
    count: existing.count + 1,
    resetAtMs: existing.resetAtMs,
  };
  const ttlSec = Math.max(1, Math.ceil((existing.resetAtMs - nowMs) / 1000));

  await env.RATE_LIMIT_KV.put(key, JSON.stringify(updated), {
    expirationTtl: ttlSec,
  });

  return { allowed: true };
}

async function sendTelegramMessage(env: Env, text: string) {
  const response = await fetch(`${TELEGRAM_API_URL}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API request failed: ${response.status} ${errorText}`);
  }
}

function validateRuntimeEnv(env: Env) {
  if (!env.RATE_LIMIT_KV) {
    return "Rate limit storage is not configured.";
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return "Telegram integration is not configured.";
  }

  return null;
}

function jsonResponse(
  body: unknown,
  status: number,
  corsHeaders: Record<string, string>,
  extraHeaders: Record<string, string> = {},
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...NO_STORE_HEADERS,
      ...corsHeaders,
      ...extraHeaders,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const requestUrl = new URL(request.url);
    const corsHeaders = buildCorsHeaders(origin, requestUrl);

    if (!corsHeaders) {
      return jsonResponse(
        {
          error: "Origin is not allowed.",
          origin,
          allowedOrigins: ["http://localhost:*", "http://127.0.0.1:*", "*.pages.dev", requestUrl.origin],
        },
        403,
        {},
      );
    }

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...NO_STORE_HEADERS,
          ...corsHeaders,
        },
      });
    }

    const runtimeConfigError = validateRuntimeEnv(env);

    if (runtimeConfigError) {
      return jsonResponse({ error: runtimeConfigError }, 500, corsHeaders);
    }

    if (request.method !== "POST" || requestUrl.pathname !== "/api/lead") {
      return new Response("Not found", {
        status: 404,
        headers: {
          ...NO_STORE_HEADERS,
          ...corsHeaders,
        },
      });
    }

    const clientIp = getClientIp(request);
    if (!clientIp) {
      return jsonResponse({ error: "Unable to identify client IP." }, 400, corsHeaders);
    }

    const rateLimit = await checkAndConsumeRateLimit(env, clientIp);
    if (!rateLimit.allowed) {
      return jsonResponse(
        {
          error: "Too many requests. Please try again later.",
          retryAfterSec: rateLimit.retryAfterSec,
        },
        429,
        corsHeaders,
        { "Retry-After": String(rateLimit.retryAfterSec) },
      );
    }

    let payload: LeadFormPayload;

    try {
      payload = normalizeLeadPayload((await request.json()) as LeadFormPayload);
    } catch {
      return jsonResponse({ error: "Invalid request body." }, 400, corsHeaders);
    }

    const validationError = validateLeadPayload(payload);
    if (validationError) {
      return jsonResponse({ error: validationError }, 400, corsHeaders);
    }

    try {
      await sendTelegramMessage(env, formatTelegramMessage(payload));
      return jsonResponse({ ok: true }, 200, corsHeaders);
    } catch (error) {
      console.error("Failed to send lead to Telegram", error);
      return jsonResponse({ error: "Failed to deliver lead." }, 502, corsHeaders);
    }
  },
};
