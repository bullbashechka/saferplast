# Repository Guidelines

## Project Structure & Module Organization
This repository is a `Next.js 15` landing-page app using `TypeScript`, `React 19`, and `Tailwind CSS`. Keep application code under `src/`.

- `src/app` contains the App Router entrypoints such as `layout.tsx` and `page.tsx`.
- `src/features/landing`, `src/features/calculator`, and `src/features/lead-form` contain page sections and feature-specific content/types.
- `src/components` is reserved for reusable shared UI. `src/components/ui` exists but is currently mostly empty, so prefer adding generic building blocks there rather than inside feature folders when reuse is expected.
- `src/lib` contains shared config and utilities such as site metadata.
- `src/types` contains shared domain types.
- `src/hooks` is available for reusable hooks when stateful logic starts repeating across features.
- `src/styles/globals.css` holds Tailwind imports, font imports, base element resets, and shared global utility classes already used by the UI.
- `public/icons` and `public/images` contain static assets.
- `docs` is for notes, architecture references, and design material.
- `scripts` is reserved for project helpers and automation scripts.

## Build, Test, and Development Commands
- `npm run dev`: start the local Next.js dev server.
- `npm run build`: create the production build.
- `npm run start`: serve the built app.
- `npm run lint`: run ESLint across the repository.
- `npm run typecheck`: run TypeScript in no-emit mode.

Run `npm install` before first use. On PowerShell systems with execution-policy restrictions, prefer `npm.cmd run <script>`.

## Coding Style & Naming Conventions
Use TypeScript for all new code. Prefer functional React components. Keep sections composable and colocate static content with the feature that owns it, following the existing `*-content.ts`, `*-types.ts`, and `*-section.tsx` patterns.

- Use `kebab-case` for feature files such as `first-screen.tsx`.
- Use `PascalCase` for React component names and exported types/interfaces when appropriate.
- Prefer Tailwind utilities for component styling.
- Use `src/styles/globals.css` only for app-wide concerns: font imports, base resets, shared typography/background rules, and genuinely reusable global utility classes.
- Preserve the existing visual language unless a task explicitly requires redesign.
- Follow `eslint.config.mjs`, `tsconfig.json`, and the existing import alias conventions such as `@/features/...`.

## Debugging & System Changes
- Do not fix symptoms before identifying the root cause.
- Fix issues at the source of truth, not at a downstream consumer.
- Avoid child-layer compensation such as defensive fallbacks, duplicated logic, or UI-only patches that hide a bad upstream contract.
- Research full flows before editing: `route -> page -> feature section -> shared utility/content -> assets/config`.
- Diagnose by layers: data contracts, business rules, rendering state, async/timing, integration boundaries, and deployment/runtime config.
- If a bug appears in a child component, inspect the owner feature or page composition first.
- When changing a mechanic, align all directly coupled layers, including content constants, types, props, loading/error states, and metadata.
- Be skeptical of one-file fixes; verify that adjacent layers are still correct.
- Prefer proportional systemic fixes over broad rewrites.

## Testing & Verification
There is no dedicated automated test suite yet. Every code change should pass:

- `npm run lint`
- `npm run typecheck`

If a task touches runtime behavior in a meaningful way, also validate via `npm run dev` when feasible. When tests are introduced later, place them near the related feature/component and use clear names such as `hero-section.test.tsx`.

## Commit & Pull Request Guidelines
Keep commit messages short, imperative, and specific, for example `Refine lead form layout`. Keep changes focused. Pull requests should include a short summary, affected paths, screenshots for UI changes, and any relevant design/Figma references.

## Configuration & Deployment Notes
- Do not commit secrets.
- Use `.env.example` as the template for local environment variables.
- Ignore generated output such as `.next/`, `node_modules/`, and `tsconfig.tsbuildinfo`.
- `wrangler.jsonc` is present, so treat Cloudflare/Wrangler configuration as part of the deploy surface when changing runtime or hosting behavior.
