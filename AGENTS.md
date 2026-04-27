# Repository Guidelines

## Project Structure & Module Organization

This repository is an `Astro 5 + React islands + TypeScript + Tailwind CSS` landing site with a Cloudflare Worker backend.

- `src/pages` contains Astro routes such as `index.astro`, `[city].astro`, and legal pages.
- `src/layouts` contains shared Astro layouts.
- `src/features` contains page sections and feature modules (`landing`, `lead-form`, `seo`, `legal`).
- `src/components` contains reusable React and UI primitives.
- `src/lib` contains shared helpers and SEO config.
- `src/styles/globals.css` contains global Tailwind styles.
- `public` contains static assets plus `_redirects`, `_headers`, `robots.txt`, and `sitemap.xml`.
- `worker/src` contains the Cloudflare Worker for `POST /api/lead`.
- `docs` contains deployment notes and project-specific documentation.

## Build, Test, and Development Commands

Run from the repository root:

- `npm run dev` — start the Astro dev server.
- `npm run build` — generate the static frontend into `dist/`.
- `npm run preview` — preview the built site locally.
- `npm run lint` — run ESLint across the repo.
- `npm run typecheck` — run `astro check` and `tsc --noEmit`.
- `npm run worker:dev` — run the Worker locally with Wrangler.
- `npm run worker:deploy` — deploy the Worker.
- `npm run deploy:pages` — deploy `dist/` to Cloudflare Pages.

## Coding Style & Naming Conventions

- Use TypeScript and functional React components.
- Use `PascalCase` for component/type names and `kebab-case` for filenames such as `geo-service-page.tsx`.
- Keep feature content colocated inside `src/features/<feature>/`.
- Prefer Tailwind utilities over ad hoc CSS; keep app-wide styles in `src/styles/globals.css`.
- Follow existing import alias usage like `@/features/...`.

## Testing Guidelines

There is no dedicated automated test suite yet. Every change should pass:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

If behavior changes, also verify in `npm run dev`. Add future tests near the related feature files.

## Commit & Pull Request Guidelines

- Use short, imperative commit messages, for example: `Refine geo page navigation`.
- Keep commits focused and avoid unrelated file churn.
- PRs should include a concise summary, affected paths, screenshots for UI changes, and any Cloudflare or env impacts.

## Security & Configuration Tips

- Never commit secrets or `.env` values.
- Use `.env.example` and `.dev.vars.example` as templates.
- If frontend origin or domain rules change, review Worker CORS in `worker/src/index.ts` and static SEO files in `public/`.
