# Деплой React + Vite проекта в Cloudflare (Pages + Worker)

## Целевая схема

- Frontend: Cloudflare Pages (`*.pages.dev`)
- API формы: Cloudflare Worker (`*.workers.dev`)
- Endpoint формы: `POST /api/lead`

## Что должно быть настроено

1. Репозиторий в GitHub/GitLab
2. Проект Cloudflare Pages для фронтенда
3. Отдельный Cloudflare Worker для API
4. Секреты Worker:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

## Build и deploy фронтенда (Pages)

- Build command: `npm run build`
- Output directory: `dist`

Для ручного деплоя из CLI:

```bash
npm run deploy:pages
```

## Deploy API (Worker)

Локальный запуск:

```bash
npm run worker:dev
```

Публикация:

```bash
npm run worker:deploy
```

## Переменные окружения

Во frontend (`.env`):

```env
VITE_LEAD_API_URL=https://<your-worker>.workers.dev/api/lead
```

В Worker (Secrets):

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Проверка после деплоя

1. Открыть Pages URL и проверить загрузку лендинга.
2. Отправить форму заявки (должен прийти запрос на Worker).
3. Проверить, что заявка ушла в Telegram.
