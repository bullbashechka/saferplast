# Деплой Astro-проекта в Cloudflare Pages + Worker

Этот репозиторий теперь использует:

- `Astro 5` для статической сборки фронтенда
- `React islands` только для интерактивных зон
- `Cloudflare Pages` для сайта
- `Cloudflare Worker` для `POST /api/lead`

## Что деплоится

Фронтенд:

- статический билд из `dist`
- собирается командой `npm run build`
- публикуется в `Cloudflare Pages`

API:

- Worker из `worker/src/index.ts`
- публикуется отдельной командой через Wrangler

## Текущие проекты

- Pages project: `saferplast`
- Worker name: `saferplast-api`
- canonical host: `https://saferplast-main.pages.dev`

## Что должно быть подготовлено заранее

1. Аккаунт Cloudflare
2. Установленный и авторизованный Wrangler
3. Созданный Pages project `saferplast`
4. Созданный Worker project `saferplast-api`
5. KV namespace для rate limiting
6. Секреты Worker:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `TURNSTILE_SECRET_KEY`
7. Frontend env:
   - `VITE_LEAD_API_URL`
   - `VITE_TURNSTILE_SITE_KEY`

## Первый деплой заново

### 1. Установить зависимости

```bash
npm install
```

### 2. Проверить frontend env

Создай `.env` на основе `.env.example`:

```env
VITE_LEAD_API_URL=https://saferplast-api.<your-subdomain>.workers.dev/api/lead
VITE_TURNSTILE_SITE_KEY=<your-turnstile-site-key>
```

### 3. Проверить Worker secrets

Установи секреты:

```bash
wrangler secret put TELEGRAM_BOT_TOKEN --config worker/wrangler.jsonc
wrangler secret put TELEGRAM_CHAT_ID --config worker/wrangler.jsonc
wrangler secret put TURNSTILE_SECRET_KEY --config worker/wrangler.jsonc
```

### 4. Проверить KV binding

В [worker/wrangler.jsonc](/C:/Users/fm/Documents/Business/saferplast_DONTDELETE/worker/wrangler.jsonc) уже указан binding:

- `RATE_LIMIT_KV`

Если деплой идёт в новый аккаунт Cloudflare, нужно:

1. создать новый KV namespace
2. подставить его `id` в `worker/wrangler.jsonc`

### 5. Прогнать локальные проверки

```bash
npm run lint
npm run typecheck
npm run build
```

Если в PowerShell есть ограничения:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Локальная проверка перед продом

Фронтенд:

```bash
npm run dev
```

Worker:

```bash
npm run worker:dev
```

Примечание:
Astro dev по умолчанию запускается на `http://localhost:4321`, а Worker CORS сейчас разрешает `http://localhost:5173`. Если нужно тестировать реальную отправку формы локально через Astro dev, обнови allowlist в `worker/src/index.ts`.

## Деплой Worker

```bash
npm run worker:deploy
```

После этого проверь публичный endpoint:

```text
https://saferplast-api.<your-subdomain>.workers.dev/api/lead
```

## Деплой Pages

Сначала собери фронтенд:

```bash
npm run build
```

Потом задеплой `dist`:

```bash
npm run deploy:pages
```

Текущий script:

```bash
wrangler pages deploy dist --project-name saferplast
```

## Если Pages проект создаётся с нуля

Вариант через Cloudflare UI:

1. Create application
2. Pages
3. Connect to Git или manual upload
4. Project name: `saferplast`
5. Build command: `npm run build`
6. Build output directory: `dist`

Для Git-based деплоя также задай environment variables в Pages project:

- `VITE_LEAD_API_URL`
- `VITE_TURNSTILE_SITE_KEY`

## Если Worker создаётся с нуля

1. Создай Worker project в Cloudflare
2. Привяжи KV namespace
3. Установи secrets
4. Проверь `worker/wrangler.jsonc`
5. Запусти:

```bash
npm run worker:deploy
```

## Что проверить после деплоя

### Фронтенд

1. Открывается главная страница
2. Открываются legal pages:
   - `/privacy`
   - `/data-processing-policy`
3. Открываются geo pages:
   - `/karaganda`
   - `/temirtau`
   - `/shakhtinsk`
   - `/saran`
   - `/abay`
   - `/karaganda/maykuduk-prishakhtinsk`
4. Работают in-page anchors на geo pages
5. В исходном HTML есть:
   - canonical
   - `og:url`
   - description
   - JSON-LD

### SEO и служебные файлы

1. Доступен `/robots.txt`
2. Доступен `/sitemap.xml`
3. `public/_redirects` попал в Pages deploy
4. trailing slash и uppercase URL нормализуются как ожидается

### Форма

1. Загружается Turnstile
2. Запрос уходит в Worker
3. Worker возвращает `200`
4. Лид приходит в Telegram

## Полный порядок ручного релиза

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run worker:deploy
npm run deploy:pages
```

## Где менять настройки

- frontend routes/layout/SEO: `src/pages`, `src/layouts`, `src/lib/seo`
- redirects: `public/_redirects`
- static robots/sitemap: `public/robots.txt`, `public/sitemap.xml`
- Worker config: `worker/wrangler.jsonc`
- Worker logic: `worker/src/index.ts`
