# Cloudflare Deploy

This project uses:

- Astro 5 for the frontend
- React islands only where interactivity is needed
- Cloudflare Pages for the site
- Cloudflare Worker for `POST /api/lead`

## Runtime Setup

Pages project:

- `VITE_LEAD_API_URL` (required; set to the deployed Worker URL, for example `https://saferplast-api.example.workers.dev/api/lead`)

Worker secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Worker binding:

- `RATE_LIMIT_KV` -> KV namespace

## Local Checks

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Deploy

Frontend:

```bash
npm run build
npm run deploy:pages
```

Worker:

```bash
npm run worker:deploy
```

## Notes

- `public/_redirects` is deployed with the Pages build.
- `public/robots.txt` and `public/sitemap.xml` are static files.
- The worker validates payloads, rate-limits by KV, and sends leads to Telegram.
- The frontend does not fall back to a same-origin `/api/lead`; it must be configured with the Worker endpoint explicitly.
