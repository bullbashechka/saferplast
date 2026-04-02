import { NextResponse } from "next/server";

import type { LeadFormPayload } from "@/features/lead-form/lead-form-types";
import { sendTelegramMessage } from "@/lib/telegram";

const MAX_NAME_LENGTH = 100;
const MAX_TASK_LENGTH = 300;
const MIN_PHONE_DIGITS = 11;

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

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Telegram integration is not configured." }, { status: 500 });
  }

  let payload: LeadFormPayload;

  try {
    const body = (await request.json()) as LeadFormPayload;
    payload = normalizeLeadPayload(body);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateLeadPayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    await sendTelegramMessage({
      botToken,
      chatId,
      text: formatTelegramMessage(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send lead to Telegram", error);
    return NextResponse.json({ error: "Failed to deliver lead." }, { status: 502 });
  }
}
