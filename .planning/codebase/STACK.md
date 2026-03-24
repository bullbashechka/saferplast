# STACK

## Runtime and Language
- Primary runtime: Node.js for local development and build execution.
- Application framework: `Next.js 15` with App Router.
- UI library: `React 19`.
- Language: `TypeScript` with `strict` mode enabled in `tsconfig.json`.
- Styling system: `Tailwind CSS 3` with a custom token extension in `tailwind.config.js`.

## Core Dependencies
- `next`, `react`, `react-dom` power the application shell and routing.
- `@fontsource/montserrat` and `@fontsource/sansation` are used for local typography delivery.
- No state-management library, form library, API client, or CMS SDK is present yet.

## Tooling
- Type checking: `tsc --noEmit` via `npm run typecheck`.
- Linting: `eslint .` via `npm run lint`.
- ESLint config is flat-config based and lives in `eslint.config.mjs`.
- PostCSS config is defined in `postcss.config.mjs`.

## Build and Routing Configuration
- `next.config.ts` enables `reactStrictMode`, `typedRoutes`, and sets `outputFileTracingRoot`.
- Path alias `@/*` maps to `./src/*` in `tsconfig.json`.
- App entry points are `src/app/layout.tsx` and `src/app/page.tsx`.

## Styling Tokens
- Brand color token family lives in `tailwind.config.js` under `brand`.
- Text and surface tokens include `ink`, `surface`, `muted`, and `secondary`.
- Font tokens include `font-body` and `font-display`.

## Deployment State
- `wrangler.jsonc` exists, so Cloudflare deployment is intended.
- Cloudflare integration is scaffolded only; no adapter-specific build chain is wired yet.
- There is no CI configuration or deployment pipeline checked into the repo yet.
