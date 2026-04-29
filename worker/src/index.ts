type KvListResult = {
  keys: Array<{ name: string }>;
  cursor?: string;
  list_complete: boolean;
};

type RateLimitStore = {
  get: <T>(key: string, options: { type: "json" }) => Promise<T | null>;
  list: (options: { prefix: string; cursor?: string; limit?: number }) => Promise<KvListResult>;
  put: (key: string, value: string, options: { expirationTtl: number }) => Promise<void>;
};

type Env = {
  ALLOWED_ORIGINS?: string;
  RATE_LIMIT_KV: RateLimitStore;
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  TURNSTILE_EXPECTED_HOSTNAME?: string;
  TURNSTILE_SECRET_KEY: string;
};

type LeadFormPayload = {
  name: string;
  phone: string;
  task: string;
  consentsAccepted: boolean;
  source?: string;
  turnstileToken: string;
};

type SanitizedLeadPayload = {
  name: string;
  phone: string;
  task: string;
  consentsAccepted: boolean;
  source: string | null;
};

type RateLimitResult =
  | { allowed: true }
  | {
      allowed: false;
      retryAfterSec: number;
    };

type TurnstileVerificationResult = {
  success: boolean;
  hostname?: string;
};

const DEFAULT_ALLOWED_ORIGINS = ["https://saferplast.pages.dev"];
const TELEGRAM_API_URL = "https://api.telegram.org";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_NAME_LENGTH = 100;
const MAX_TASK_LENGTH = 300;
const MAX_PHONE_LENGTH = 20;
const MAX_SOURCE_LENGTH = 200;
const MIN_PHONE_DIGITS = 11;
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const RATE_LIMIT_WINDOW_SEC = 10 * 60;
const RATE_LIMIT_BUCKET_SEC = 2 * 60;
const KV_TIMEOUT_MS = 1500;
const TELEGRAM_TIMEOUT_MS = 8000;
const TURNSTILE_TIMEOUT_MS = 5000;
const NO_STORE_HEADERS = {
  "Cache-Control": "no-store",
};

function isLeadFormPayload(value: unknown): value is LeadFormPayload {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.name === "string" &&
    typeof payload.phone === "string" &&
    typeof payload.task === "string" &&
    typeof payload.consentsAccepted === "boolean" &&
    typeof payload.turnstileToken === "string" &&
    (payload.source === undefined || typeof payload.source === "string")
  );
}

function sanitizeLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s{2,}/g, " ").trim();
}

function normalizePhone(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "");

  let normalizedDigits = digits;

  if (digits.length === 10) {
    normalizedDigits = `7${digits}`;
  } else if (digits.length === 11 && digits.startsWith("8")) {
    normalizedDigits = `7${digits.slice(1)}`;
  }

  if (normalizedDigits.length !== 11 || !normalizedDigits.startsWith("7")) {
    return null;
  }

  return `+7-${normalizedDigits.slice(1, 4)}-${normalizedDigits.slice(4, 7)}-${normalizedDigits.slice(7, 9)}-${normalizedDigits.slice(9)}`;
}

function normalizeSource(rawValue: string | undefined) {
  if (!rawValue) {
    return null;
  }

  if (rawValue.length > MAX_SOURCE_LENGTH) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(rawValue);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && !(url.protocol === "http:" && isLocalDevelopmentOrigin(url.origin))) {
    return null;
  }

  return `${url.origin}${url.pathname}`;
}

function normalizeLeadPayload(payload: LeadFormPayload): SanitizedLeadPayload | null {
  const normalizedPhone = normalizePhone(payload.phone);
  const normalizedSource = normalizeSource(payload.source);

  if (!normalizedPhone) {
    return null;
  }

  if (payload.source && !normalizedSource) {
    return null;
  }

  return {
    name: sanitizeLine(payload.name),
    phone: normalizedPhone,
    task: sanitizeLine(payload.task),
    consentsAccepted: payload.consentsAccepted,
    source: normalizedSource,
  };
}

function validateLeadPayload(payload: LeadFormPayload, normalizedPayload: SanitizedLeadPayload | null) {
  if (!normalizedPayload) {
    return "Некорректно указан номер телефона или источник заявки.";
  }

  if (!normalizedPayload.name || normalizedPayload.name.length > MAX_NAME_LENGTH) {
    return "Некорректно указано имя.";
  }

  if (payload.phone.trim().length > MAX_PHONE_LENGTH) {
    return "Некорректно указан номер телефона.";
  }

  const phoneDigits = normalizedPayload.phone.replace(/\D/g, "");
  if (phoneDigits.length < MIN_PHONE_DIGITS) {
    return "Некорректно указан номер телефона.";
  }

  if (normalizedPayload.task.length > MAX_TASK_LENGTH) {
    return "Описание задачи слишком длинное.";
  }

  if (!payload.consentsAccepted) {
    return "Необходимо подтвердить согласие на обработку данных.";
  }

  if (!payload.turnstileToken || payload.turnstileToken.length > 2048) {
    return "Не удалось проверить защиту формы. Попробуйте еще раз.";
  }

  return null;
}

function formatTelegramMessage(payload: SanitizedLeadPayload) {
  const lines = [
    "Новая заявка с сайта Saferplast",
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Задача: ${payload.task || "Не указана"}`,
    `Источник: ${payload.source || "Не указан"}`,
    `Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`,
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

function isLocalDevelopmentOrigin(origin: string) {
  try {
    const url = new URL(origin);
    return (
      (url.hostname === "localhost" || url.hostname === "127.0.0.1") &&
      (url.protocol === "http:" || url.protocol === "https:")
    );
  } catch {
    return false;
  }
}

function getAllowedOrigins(env: Env) {
  return (env.ALLOWED_ORIGINS ?? DEFAULT_ALLOWED_ORIGINS.join(","))
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function buildCorsHeaders(origin: string | null, env: Env) {
  if (!origin) {
    return null;
  }

  if (isLocalDevelopmentOrigin(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin",
    };
  }

  const allowedOrigins = getAllowedOrigins(env);
  if (!allowedOrigins.includes(origin)) {
    return null;
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function validateRuntimeEnv(env: Env) {
  if (!env.RATE_LIMIT_KV) {
    return "Rate limit storage is not configured.";
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return "Telegram integration is not configured.";
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    return "Turnstile integration is not configured.";
  }

  const allowedOrigins = getAllowedOrigins(env);
  if (allowedOrigins.length === 0) {
    return "Allowed origins are not configured.";
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

async function withTimeout<T>(label: string, timeoutMs: number, operation: Promise<T>) {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`${label} timed out.`)), timeoutMs);
  });

  return Promise.race([operation, timeoutPromise]);
}

async function listKeysWithPrefix(env: Env, prefix: string, limit: number) {
  const keys: string[] = [];
  let cursor: string | undefined;

  do {
    const page = await withTimeout(
      "KV list",
      KV_TIMEOUT_MS,
      env.RATE_LIMIT_KV.list({ prefix, cursor, limit: Math.max(1, limit - keys.length) }),
    );

    for (const entry of page.keys) {
      keys.push(entry.name);
      if (keys.length >= limit) {
        return keys;
      }
    }

    cursor = page.cursor;
    if (page.list_complete) {
      break;
    }
  } while (cursor);

  return keys;
}

async function checkAndConsumeRateLimit(env: Env, ip: string): Promise<RateLimitResult> {
  const nowSec = Math.floor(Date.now() / 1000);
  const currentBucket = Math.floor(nowSec / RATE_LIMIT_BUCKET_SEC);
  const windowBuckets = Math.ceil(RATE_LIMIT_WINDOW_SEC / RATE_LIMIT_BUCKET_SEC);
  const ipKey = encodeURIComponent(ip);
  const attemptKey = `lead-rate-limit:${ipKey}:${currentBucket}:${nowSec}:${crypto.randomUUID()}`;

  await withTimeout(
    "KV put",
    KV_TIMEOUT_MS,
    env.RATE_LIMIT_KV.put(attemptKey, "", {
      expirationTtl: RATE_LIMIT_WINDOW_SEC + RATE_LIMIT_BUCKET_SEC,
    }),
  );

  let count = 0;
  let oldestAttemptSec = nowSec;

  for (let bucketOffset = 0; bucketOffset < windowBuckets; bucketOffset += 1) {
    const bucketId = currentBucket - bucketOffset;
    const prefix = `lead-rate-limit:${ipKey}:${bucketId}:`;
    const keys = await listKeysWithPrefix(env, prefix, RATE_LIMIT_MAX_ATTEMPTS + 1 - count);

    count += keys.length;

    for (const key of keys) {
      const attemptSec = Number(key.split(":")[3] ?? nowSec);
      if (Number.isFinite(attemptSec)) {
        oldestAttemptSec = Math.min(oldestAttemptSec, attemptSec);
      }
    }

    if (count > RATE_LIMIT_MAX_ATTEMPTS) {
      const retryAfterSec = Math.max(1, RATE_LIMIT_WINDOW_SEC - (nowSec - oldestAttemptSec));
      return {
        allowed: false,
        retryAfterSec,
      };
    }
  }

  return { allowed: true };
}

async function verifyTurnstileToken(env: Env, token: string, clientIp: string, origin: string) {
  const requestBody = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
    remoteip: clientIp,
  });

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestBody.toString(),
    signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Turnstile verification failed with status ${response.status}.`);
  }

  const result = (await response.json()) as TurnstileVerificationResult;
  if (!result.success) {
    return false;
  }

  const originUrl = new URL(origin);
  const expectedHostname = env.TURNSTILE_EXPECTED_HOSTNAME?.trim();

  if (expectedHostname && !isLocalDevelopmentOrigin(origin) && result.hostname !== expectedHostname) {
    return false;
  }

  if (isLocalDevelopmentOrigin(originUrl.origin)) {
    return true;
  }

  return result.hostname === originUrl.hostname;
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
    signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API request failed: ${response.status} ${errorText}`);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const requestUrl = new URL(request.url);

    if (requestUrl.pathname !== "/api/lead") {
      return new Response("Not found", {
        status: 404,
        headers: NO_STORE_HEADERS,
      });
    }

    const origin = request.headers.get("Origin");
    const corsHeaders = buildCorsHeaders(origin, env);

    if (!corsHeaders) {
      return jsonResponse({ error: "Origin is not allowed." }, 403, {});
    }

    if (!origin) {
      return jsonResponse({ error: "Origin header is required." }, 400, corsHeaders);
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

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed." }, 405, corsHeaders, { Allow: "POST, OPTIONS" });
    }

    const runtimeConfigError = validateRuntimeEnv(env);
    if (runtimeConfigError) {
      console.error(runtimeConfigError);
      return jsonResponse({ error: "Service is temporarily unavailable." }, 500, corsHeaders);
    }

    const clientIp = getClientIp(request);
    if (!clientIp) {
      return jsonResponse({ error: "Unable to process the request." }, 400, corsHeaders);
    }

    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid request body." }, 400, corsHeaders);
    }

    if (!isLeadFormPayload(payload)) {
      return jsonResponse({ error: "Некорректный формат заявки." }, 400, corsHeaders);
    }

    const normalizedPayload = normalizeLeadPayload(payload);
    const validationError = validateLeadPayload(payload, normalizedPayload);
    if (validationError || !normalizedPayload) {
      return jsonResponse({ error: validationError }, 400, corsHeaders);
    }

    try {
      const turnstilePassed = await verifyTurnstileToken(env, payload.turnstileToken, clientIp, origin);
      if (!turnstilePassed) {
        return jsonResponse({ error: "Не удалось проверить защиту формы. Попробуйте еще раз." }, 403, corsHeaders);
      }
    } catch (error) {
      console.error("Turnstile verification failed", error);
      return jsonResponse({ error: "Не удалось проверить защиту формы. Попробуйте еще раз." }, 502, corsHeaders);
    }

    try {
      const rateLimit = await checkAndConsumeRateLimit(env, clientIp);
      if (!rateLimit.allowed) {
        return jsonResponse(
          {
            error: "Слишком много попыток. Попробуйте позже.",
            retryAfterSec: rateLimit.retryAfterSec,
          },
          429,
          corsHeaders,
          { "Retry-After": String(rateLimit.retryAfterSec) },
        );
      }
    } catch (error) {
      console.error("Rate limit check failed", error);
      return jsonResponse({ error: "Service is temporarily unavailable." }, 503, corsHeaders);
    }

    try {
      await sendTelegramMessage(env, formatTelegramMessage(normalizedPayload));
      return jsonResponse({ ok: true }, 200, corsHeaders);
    } catch (error) {
      console.error("Failed to send lead to Telegram", error);
      return jsonResponse({ error: "Не удалось отправить заявку. Попробуйте еще раз позже." }, 502, corsHeaders);
    }
  },
};
