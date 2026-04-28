# Cloudflare Deploy

This document describes the production deployment flow for the Astro frontend and the Cloudflare Worker API.

## Runtime Setup

Pages project:

- `VITE_LEAD_API_URL=https://<your-worker-domain>/api/lead`
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

## Local Validation

Run these checks before publishing:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

The release deploy script already runs lint, typecheck, build, and the Pages preflight step.

## Deploy Frontend

1. Ensure the Pages environment variables are set in Cloudflare.
2. Verify `VITE_LEAD_API_URL` points to the deployed Worker endpoint.
3. Run:

```bash
npm run deploy:pages
```

This command performs release checks and then deploys `dist` to Cloudflare Pages.

## Deploy Worker

1. Ensure the Worker secrets and vars are configured.
2. Ensure `RATE_LIMIT_KV` is bound in `worker/wrangler.jsonc` and in Cloudflare.
3. Run:

```bash
npm run worker:deploy
```

This command runs the Worker preflight and deploys the Worker with Wrangler.

## Local Development Notes

- `npm run dev` starts the Astro app on `127.0.0.1:4321`.
- `npm run worker:dev` runs the Worker locally through Wrangler.
- For local CORS testing, allow `http://localhost:4321` and `http://127.0.0.1:4321` in `ALLOWED_ORIGINS`.
- `.dev.vars` can be used for local Worker secrets, and `.dev.vars.example` is the template.

## Behavior

- The client form submits to `POST /api/lead`.
- The Worker validates the payload and verifies Turnstile.
- Requests are rate-limited with Worker KV time buckets.
- Successful leads are forwarded to Telegram.

## Troubleshooting

- If the lead form is missing on the rendered page, verify `VITE_LEAD_API_URL` and `PUBLIC_TURNSTILE_SITE_KEY` in the Pages environment.
- If the form is visible but submit is disabled, check the same variables first, then redeploy with `npm run deploy:pages`.
