# Saferplast Main

Landing page project on `Astro 5 + React islands + TypeScript + Tailwind CSS` with a Cloudflare Worker backend for lead submissions.

## Current Stack

- Frontend: `Astro` static site generation
- Interactive UI: `React 19` islands only where needed
- Styling: `Tailwind CSS`
- API: `Cloudflare Worker`
- Deployment:
  - frontend to `Cloudflare Pages`
  - API to `Cloudflare Workers`

## Frontend Split

Astro sections:

- `advantages-section.astro`
- `proof-section.astro`
- `solution-matching-section.astro`
- `work-process-section.astro`
- `site-footer.astro`

React islands:

- `projects-section.tsx` - Embla carousel, horizontal scroll, mobile snap
- `testimonials-section.tsx` - Embla carousel and modal interaction
- `faq-section.tsx` - accordion state
- `lead-form-section.tsx` - form state, validation, submit flow

Rule of thumb:

- keep static content in Astro
- keep stateful or carousel-driven blocks in React
- if a section needs `useState`, hydration, or Embla, keep it as an island

## Project Structure

- `src/pages` - Astro routes
- `src/layouts` - Astro layouts
- `src/features` - landing sections, legal pages, geo pages, lead form
- `src/components` - reusable React/UI components
- `src/lib` - utilities and SEO config
- `public` - static files, redirects, robots, sitemap
- `worker/src` - Worker API for `POST /api/lead`

## Local Development

Run from the project root:

```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd install
npm.cmd run dev
```

Astro dev server usually starts on `http://localhost:4321`.

## Scripts

- `npm run dev` - start Astro dev server
- `npm run build` - build static frontend into `dist`
- `npm run preview` - preview Astro build locally
- `npm run lint` - run ESLint
- `npm run typecheck` - run `astro check` and `tsc --noEmit`
- `npm run deploy:pages` - deploy `dist` to Cloudflare Pages
- `npm run worker:dev` - run Worker locally with Wrangler
- `npm run worker:deploy` - deploy Worker

## Environment

Frontend `.env`:

```env
VITE_LEAD_API_URL=https://example.workers.dev/api/lead
```

`VITE_LEAD_API_URL` is required. Point it at the deployed Cloudflare Worker endpoint that serves `POST /api/lead`.

Worker secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

For local Worker development you can also use:

- `.dev.vars`
- `.dev.vars.example`

## Routing and SEO

- Astro pages are generated statically from `src/pages`
- canonical host is `https://saferplast-main.pages.dev`
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
- `public/robots.txt` and `public/sitemap.xml` are shipped as static files

## Lead Form Flow

- client form submits to `POST /api/lead`
- Worker validates payload
- request is rate-limited via Worker KV
- successful leads are delivered to Telegram

## Cloudflare Overview

- Pages project serves static Astro output from `dist`
- Worker project serves `/api/lead`
- frontend must point `VITE_LEAD_API_URL` to the deployed Worker URL
- Worker CORS allows:
  - same-origin requests
  - `localhost` and `127.0.0.1` on any port
  - any `*.pages.dev` origin

## Verification Before Deploy

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment Docs

See [docs/cloudflare-deploy.md](/C:/Users/fm/Documents/Business/saferplast_DONTDELETE/docs/cloudflare-deploy.md) for the full Pages + Worker deployment flow.

See [docs/frontend-architecture.md](/C:/Users/fm/Documents/Business/saferplast_DONTDELETE/docs/frontend-architecture.md) for the current Astro/React split.
