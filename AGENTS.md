# Repository Guidelines

## Project Structure & Module Organization
This is a `React 19 + Vite` landing-page app with `TypeScript`, `Tailwind CSS`, and a Cloudflare Worker backend.

- `src/main.tsx`, `src/App.tsx`: SPA entrypoints.
- `src/features/landing`, `src/features/calculator`, `src/features/lead-form`, `src/features/legal`: feature modules and page sections.
- `src/components` and `src/components/ui`: shared/reusable UI primitives.
- `src/lib`: shared config/utilities; `src/types`: shared domain types; `src/hooks`: reusable hooks.
- `src/styles/globals.css`: Tailwind imports, base resets, global utilities.
- `public/icons`, `public/images`: static assets.
- `worker/src`: Cloudflare Worker API (`POST /api/lead`).
- `docs`: architecture/notes; `scripts`: automation helpers.

## Build, Test, and Development Commands
Run from repository root:

- `npm run dev`: start frontend dev server (Vite).
- `npm run build`: build production frontend bundle.
- `npm run preview`: preview built frontend locally.
- `npm run worker:dev`: run Worker API locally.
- `npm run worker:deploy`: deploy Worker.
- `npm run deploy:pages`: deploy frontend (`dist/`) to Cloudflare Pages.
- `npm run lint`: run ESLint.
- `npm run typecheck`: run TypeScript in no-emit mode.

On restricted PowerShell setups, use `npm.cmd run <script>`.

## Coding Style & Naming Conventions
- Use TypeScript and functional React components.
- Keep feature content colocated (`*-content.ts`, `*-types.ts`, `*-section.tsx`).
- Use `kebab-case` for filenames (e.g., `first-screen.tsx`), `PascalCase` for component/type names.
- Prefer Tailwind utilities for styling.
- Keep Russian/Kazakh text in UTF-8 and check edited text-heavy files for mojibake (for example, broken fragments like `РџР`/`СЃ`). Fix source strings directly before finishing.
- Keep global styles in `src/styles/globals.css` only when truly app-wide.
- Preserve existing visual language unless redesign is explicitly requested.
- Follow project ESLint/TS config and import aliases like `@/features/...`.

## Testing Guidelines
There is no dedicated automated test suite yet. Every change must pass:

- `npm run lint`
- `npm run typecheck`

If behavior changes, also validate in `npm run dev`. When adding tests, place them near the feature and use names like `hero-section.test.tsx`.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (example: `Refine lead form layout`).
- Keep commits focused; avoid unrelated edits.
- PRs should include a concise summary, affected paths, screenshots for UI changes, and related references/issues.

## Security & Configuration Tips
- Never commit secrets.
- Use `.env.example` as the local env template.
- Do not commit generated outputs (`dist/`, `node_modules/`, `tsconfig.tsbuildinfo`).

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
