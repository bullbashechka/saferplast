# Деплой в Cloudflare Workers

Этот проект настроен для деплоя в Cloudflare Workers через `@opennextjs/cloudflare`.

## Что нужно заранее

- аккаунт Cloudflare с включённым Workers
- выполненный `npm install`
- авторизация через `npx wrangler login`

## Локальные команды

- `npm run build` собирает обычное production-приложение Next.js
- `npm run preview` собирает OpenNext worker и запускает локальный preview в runtime Cloudflare Workers
- `npm run deploy` собирает проект и деплоит его в Cloudflare Workers
- `npm run upload` собирает проект и загружает новую версию Worker без переключения трафика

## Обязательные secrets

Маршрут `/api/lead` отправляет заявки в Telegram, поэтому перед `preview` или `deploy` нужно задать secrets для Worker:

```bash
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
```

Если используются environments, добавляйте `--env <name>` к каждой команде.

## Рекомендуемая локальная настройка

1. Скопировать `.env.example` в `.env` для локального `next dev`
2. Скопировать `.dev.vars.example` в `.dev.vars`
3. Добавить те же Telegram-значения в Cloudflare secrets для локального preview и production deploy

## Порядок деплоя

1. Запустить `npm run typecheck`
2. Запустить `npm run lint`
3. Запустить `npm run preview`
4. Запустить `npm run deploy`

## Подключение домена

После первого деплоя:

1. Открыть Worker в Cloudflare Dashboard
2. Перейти в `Settings -> Domains & Routes`
3. Привязать production-домен или нужный route

## Примечания

- Оптимизация `next/image` включена через binding `IMAGES` в `wrangler.jsonc`
- Кэширование статических файлов `/_next/static/*` настроено в `public/_headers`
- В текущей конфигурации не нужен R2, потому что приложение не использует ISR-кэш, требующий внешнего хранилища
