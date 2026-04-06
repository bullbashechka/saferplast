type Env = {
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

const TELEGRAM_API_URL = "https://api.telegram.org";
const MAX_NAME_LENGTH = 100;
const MAX_TASK_LENGTH = 300;
const MIN_PHONE_DIGITS = 11;

function getAllowedOrigin(origin: string | null) {
  if (!origin) {
    return "*";
  }

  if (origin === "http://localhost:5173") {
    return origin;
  }

  try {
    const url = new URL(origin);
    if (url.hostname.endsWith(".pages.dev")) {
      return origin;
    }
  } catch {
    return null;
  }

  return null;
}

function buildCorsHeaders(origin: string | null) {
  const allowedOrigin = getAllowedOrigin(origin);

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

function jsonResponse(body: unknown, status: number, corsHeaders: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const corsHeaders = buildCorsHeaders(origin);

    if (!corsHeaders) {
      return new Response("Origin is not allowed.", { status: 403 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (request.method !== "POST" || url.pathname !== "/api/lead") {
      return new Response("Not found", { status: 404, headers: corsHeaders });
    }

    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
      return jsonResponse({ error: "Telegram integration is not configured." }, 500, corsHeaders);
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
