# Repository Guidelines

## Project Structure & Module Organization
This repository is a `Next.js 15` app using `TypeScript` and `Tailwind CSS`. Keep application code under `src/`. Use `src/app` for routes and layouts, `src/features` for page-level feature modules such as `landing`, `calculator`, and `lead-form`, `src/components` for reusable UI, `src/lib` for shared config and utilities, and `src/types` for shared types. Static assets live in `public/` with icons in `public/icons` and images in `public/images`. Project notes and design references belong in `docs/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local Next.js dev server.
- `npm run build`: create a production build.
- `npm run start`: run the production server after build.
- `npm run lint`: run ESLint across the repo.
- `npm run typecheck`: run TypeScript without emitting files.

Run `npm install` before first use. On PowerShell systems with script restrictions, prefer `npm.cmd run <script>`.

## Coding Style & Naming Conventions
Use TypeScript for all new app code. Prefer functional React components and keep components small and composable. Use Tailwind utility classes instead of custom component CSS; `src/styles/globals.css` should stay limited to font imports and minimal global base rules. Use `kebab-case` for feature files like `first-screen.tsx`, `PascalCase` for component names, and descriptive prop/type names. Follow the existing ESLint setup in `eslint.config.mjs`.

## Testing Guidelines
There is no dedicated test runner configured yet. For now, every change must pass `npm run lint` and `npm run typecheck`. When tests are introduced, place them near the related feature or component and use clear names such as `hero-section.test.tsx`.

## Commit & Pull Request Guidelines
Recent history shows short imperative commit subjects; keep that pattern, but make messages specific, for example: `Implement hero header layout`. Keep commits focused. Pull requests should include a short summary, affected paths, screenshots for UI changes, and any Figma or design reference used.

## Configuration Notes
Do not commit secrets. Use `.env.example` as the template for local variables. Ignore generated files such as `.next/`, `node_modules/`, and `tsconfig.tsbuildinfo`.
