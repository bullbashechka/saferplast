# Cloudflare Deploy

This project uses:

- Astro 5 for the frontend
- React islands only where interactivity is needed
- Cloudflare Pages for the site
- Cloudflare Worker for `POST /api/lead`

## Runtime Setup

Pages project:

- `VITE_LEAD_API_URL=https://saferplast-api.saidashev-kirill2004.workers.dev/api/lead`
- `PUBLIC_TURNSTILE_SITE_KEY=<Cloudflare Turnstile site key>`

Worker secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TURNSTILE_SECRET_KEY`

Worker vars:

- `ALLOWED_ORIGINS=https://saferplast.pages.dev`
- `TURNSTILE_EXPECTED_HOSTNAME=saferplast.pages.dev`

Worker binding:

- `RATE_LIMIT_KV` -> KV namespace

## Local Checks

```bash
npm ci
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

- `npm run deploy:pages` now runs `lint`, `typecheck`, `build`, and Pages env preflight before deployment.
- `npm run worker:deploy` now validates Worker env and the KV binding before deployment.
- `public/_redirects`, `public/robots.txt`, and `public/sitemap.xml` are generated from the canonical site config.
- The worker validates payloads, verifies Turnstile, rate-limits by KV time buckets, and sends leads to Telegram.
