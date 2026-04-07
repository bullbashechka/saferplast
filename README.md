# Saferplast Main

Landing-page project on `React 19 + Vite + TypeScript + Tailwind CSS`.

## Architecture

- Frontend: Cloudflare Pages (`*.pages.dev`)
- API (lead form): Cloudflare Worker (`*.workers.dev`)
- Lead endpoint: `POST /api/lead`
- Lead delivery: Telegram bot (`sendMessage` to configured chat)
- Data storage: no dedicated DB in current setup (leads are delivered to Telegram channel/chat)

## Scripts

- `npm run dev` - Vite dev server
- `npm run build` - production build
- `npm run preview` - preview built frontend
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript no-emit check
- `npm run deploy:pages` - deploy frontend `dist` to Cloudflare Pages
- `npm run worker:dev` - run API worker locally
- `npm run worker:deploy` - deploy API worker

## Environment

Frontend (`.env`):

- `VITE_LEAD_API_URL` - full worker endpoint URL, e.g. `https://saferplast-api.workers.dev/api/lead`
- `VITE_TURNSTILE_SITE_KEY` - Cloudflare Turnstile site key for the lead form

Worker secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TURNSTILE_SECRET_KEY`

## Legal Pages

- Privacy Policy: `/privacy`
- Data Processing Policy: `/data-processing-policy`
- Public Offer: `/public-offer`

## Notes

- `public/robots.txt` and `public/sitemap.xml` are static and should be updated when production domain changes.
- API CORS allows `localhost:5173` and `*.pages.dev`.
- Lead form submissions are validated with Turnstile and rate-limited by IP in Worker KV.
