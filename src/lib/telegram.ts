const TELEGRAM_API_URL = "https://api.telegram.org";

type SendTelegramMessageParams = {
  botToken: string;
  chatId: string;
  text: string;
};

export async function sendTelegramMessage({ botToken, chatId, text }: SendTelegramMessageParams) {
  const response = await fetch(`${TELEGRAM_API_URL}/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API request failed: ${response.status} ${errorText}`);
  }
}
