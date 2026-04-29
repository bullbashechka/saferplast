# Saferplast Main

Landing page project on `Astro 5 + React islands + TypeScript + Tailwind CSS` with a Cloudflare Worker backend for lead submissions.

[Русский](#ru) | [English](#en)

<a id="ru"></a>

## Русский

### Что это

Saferplast Main - это лендинг на `Astro 5`, `React islands`, `TypeScript` и `Tailwind CSS` с отдельным `Cloudflare Worker` для отправки заявок.

### Стек

- Frontend: `Astro`
- Интерактивные блоки: `React 19` islands
- Стили: `Tailwind CSS`
- API: `Cloudflare Worker`
- Деплой:
  - сайт -> `Cloudflare Pages`
  - API -> `Cloudflare Workers`

### Структура проекта

- `src/pages` - Astro-роуты
- `src/layouts` - общие макеты
- `src/features` - секции лендинга, legal-страницы, geo-страницы, форма заявки
- `src/components` - переиспользуемые React/UI-компоненты
- `src/lib` - утилиты и SEO-конфиг
- `public` - статические файлы, `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`
- `worker/src` - Worker API для `POST /api/lead`
- `docs` - документация по деплою и архитектуре

### Локальный запуск

Требования:

- Node.js `>=22 <25`
- npm `>=10 <12`
- аккаунт Cloudflare
- `wrangler` авторизация для деплоя Worker/Pages

Установка и запуск:

```bash
npm ci
npm run dev
```

Если работаешь в PowerShell и `npm` блокируется:

```powershell
npm.cmd ci
npm.cmd run dev
```

Обычно Astro dev server поднимается на `http://localhost:4321`.

Если нужен локальный Worker:

```bash
npm run worker:dev
```

### Что нужно для локальной работы

Frontend `.env`:

```env
PUBLIC_LEAD_API_URL=http://127.0.0.1:8787/api/lead
PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
```

Worker `.dev.vars`:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
ALLOWED_ORIGINS=http://127.0.0.1:4321,http://localhost:4321,https://saferplast.pages.dev
TURNSTILE_EXPECTED_HOSTNAME=localhost
```

Файл `.dev.vars.example` уже есть в репозитории и подходит как шаблон для локальной разработки.

Важно:

- `PUBLIC_LEAD_API_URL` и `PUBLIC_TURNSTILE_SITE_KEY` нужны для production build.
- Worker принимает только разрешённые origins из `ALLOWED_ORIGINS`.
- Для локальной разработки разрешены `localhost` и `127.0.0.1`.

### Скрипты

- `npm run dev` - запустить Astro dev server
- `npm run build` - собрать статический фронтенд в `dist`
- `npm run preview` - локально проверить собранный сайт
- `npm run lint` - прогнать ESLint
- `npm run typecheck` - прогнать `astro check` и `tsc --noEmit`
- `npm run check:release` - выполнить `lint`, `typecheck` и `build`
- `npm run deploy:pages` - собрать и задеплоить сайт в Cloudflare Pages
- `npm run worker:dev` - запустить Worker локально через Wrangler
- `npm run worker:deploy` - задеплоить Worker

### Проверка перед деплоем

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run deploy:pages` уже включает эти проверки и preflight для Pages.

`npm run worker:deploy` тоже запускает preflight для Worker перед публикацией.

### Деплой

Перед первым деплоем нужно:

- залогиниться в Cloudflare через Wrangler;
- завести Pages project;
- завести Worker project;
- добавить secrets и vars;
- привязать KV namespace для rate limit.

Frontend:

```bash
npm run deploy:pages
```

Worker:

```bash
npm run worker:deploy
```

Что нужно указать в Cloudflare:

- Pages env:
  - `PUBLIC_LEAD_API_URL`
  - `PUBLIC_TURNSTILE_SITE_KEY`
- Worker secrets:
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`
  - `TURNSTILE_SECRET_KEY`
- Worker vars:
  - `ALLOWED_ORIGINS`
  - `TURNSTILE_EXPECTED_HOSTNAME`
- Worker binding:
  - `RATE_LIMIT_KV`

### Как это работает

- клиентская форма отправляет данные в `POST /api/lead`;
- Worker валидирует payload;
- Worker проверяет Turnstile;
- запрос ограничивается rate limit через Worker KV;
- успешная заявка уходит в Telegram.

### SEO и маршруты

- страницы генерируются статически из `src/pages`
- канонический хост: `https://saferplast.pages.dev`
- legal pages:
  - `/privacy`
  - `/data-processing-policy`
- geo pages:
  - `/karaganda`
  - `/temirtau`
  - `/shakhtinsk`
  - `/saran`
  - `/abay`
  - `/karaganda/maykuduk-prishakhtinsk`
- metadata и JSON-LD рендерятся на сервере
- `public/_redirects` содержит правила нормализации URL
- `public/robots.txt` и `public/sitemap.xml` раздаются как статические файлы

### Дополнительно

- [Полный deploy-guide](docs/cloudflare-deploy.md)
- [Архитектура фронтенда](docs/frontend-architecture.md)

<a id="en"></a>

## English

### What this is

Saferplast Main is a landing page built with `Astro 5`, `React islands`, `TypeScript`, and `Tailwind CSS`, plus a separate `Cloudflare Worker` for lead submissions.

### Stack

- Frontend: `Astro`
- Interactive UI: `React 19` islands
- Styling: `Tailwind CSS`
- API: `Cloudflare Worker`
- Deployment:
  - site -> `Cloudflare Pages`
  - API -> `Cloudflare Workers`

### Project Structure

- `src/pages` - Astro routes
- `src/layouts` - shared layouts
- `src/features` - landing sections, legal pages, geo pages, lead form
- `src/components` - reusable React/UI components
- `src/lib` - utilities and SEO config
- `public` - static files, `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`
- `worker/src` - Worker API for `POST /api/lead`
- `docs` - deployment and architecture notes

### Local Development

Requirements:

- Node.js `>=22 <25`
- npm `>=10 <12`
- Cloudflare account
- Wrangler access for Worker and Pages deployment

Install and start:

```bash
npm ci
npm run dev
```

If PowerShell blocks `npm`:

```powershell
npm.cmd ci
npm.cmd run dev
```

Astro usually runs at `http://localhost:4321`.

To run the Worker locally:

```bash
npm run worker:dev
```

### Required Environment

Frontend `.env`:

```env
PUBLIC_LEAD_API_URL=http://127.0.0.1:8787/api/lead
PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
```

Worker `.dev.vars`:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
ALLOWED_ORIGINS=http://127.0.0.1:4321,http://localhost:4321,https://saferplast.pages.dev
TURNSTILE_EXPECTED_HOSTNAME=localhost
```

`PUBLIC_LEAD_API_URL` and `PUBLIC_TURNSTILE_SITE_KEY` are required for production builds.

`ALLOWED_ORIGINS` must include the deployed Pages origin, plus local dev origins if you want to test locally.

### Scripts

- `npm run dev` - start the Astro dev server
- `npm run build` - build the static frontend into `dist`
- `npm run preview` - preview the built site locally
- `npm run lint` - run ESLint
- `npm run typecheck` - run `astro check` and `tsc --noEmit`
- `npm run check:release` - run `lint`, `typecheck`, and `build`
- `npm run deploy:pages` - build and deploy the site to Cloudflare Pages
- `npm run worker:dev` - run the Worker locally with Wrangler
- `npm run worker:deploy` - deploy the Worker

### Pre-deploy Checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run deploy:pages` already performs these checks and the Pages preflight.

`npm run worker:deploy` also runs the Worker preflight before publishing.

### Deployment

Before the first deployment:

- log in to Cloudflare through Wrangler;
- create the Pages project;
- create the Worker project;
- add secrets and vars;
- bind the KV namespace used for rate limiting.

Frontend:

```bash
npm run deploy:pages
```

Worker:

```bash
npm run worker:deploy
```

Cloudflare configuration:

- Pages env:
  - `PUBLIC_LEAD_API_URL`
  - `PUBLIC_TURNSTILE_SITE_KEY`
- Worker secrets:
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`
  - `TURNSTILE_SECRET_KEY`
- Worker vars:
  - `ALLOWED_ORIGINS`
  - `TURNSTILE_EXPECTED_HOSTNAME`
- Worker binding:
  - `RATE_LIMIT_KV`

### Flow

- the client form submits to `POST /api/lead`;
- the Worker validates the payload;
- the Worker verifies Turnstile;
- the request is rate-limited via Worker KV;
- successful leads are delivered to Telegram.

### SEO and Routes

- pages are generated statically from `src/pages`
- canonical host: `https://saferplast.pages.dev`
- legal pages:
  - `/privacy`
  - `/data-processing-policy`
- geo pages:
  - `/karaganda`
  - `/temirtau`
  - `/shakhtinsk`
  - `/saran`
  - `/abay`
  - `/karaganda/maykuduk-prishakhtinsk`
- metadata and JSON-LD are rendered server-side
- `public/_redirects` contains URL normalization rules
- `public/robots.txt` and `public/sitemap.xml` are served as static files

### References

- [Full deploy guide](docs/cloudflare-deploy.md)
- [Frontend architecture](docs/frontend-architecture.md)
