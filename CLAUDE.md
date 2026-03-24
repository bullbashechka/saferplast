<!-- GSD:project-start source:PROJECT.md -->
## Project

**SaFerplast**

SaFerplast is a scalable marketing landing page for a company that manufactures, installs, and repairs PVC and aluminum windows, doors, balconies, and related components. The site is aimed at customers across apartments, private homes, offices, and commercial spaces, and its job is to turn traffic into qualified leads through clear service presentation, fast contact actions, and a simple price calculator.

**Core Value:** Visitors can quickly understand the offer and safely send a request for consultation, measurement, or price estimation without friction.

### Constraints

- **Tech stack**: Next.js, TypeScript, Tailwind CSS — chosen and already in use
- **Design source**: Figma is the source of truth — implementation should follow the approved layout closely
- **Styling approach**: Tailwind-first with minimal global CSS — repository convention
- **Layout approach**: Prefer flex/grid, rem-based spacing, and container/max-width patterns — explicit project rule
- **Deployment**: Cloudflare target — hosting path should remain compatible with that platform
- **Security**: Lead submission must be safe — forms will handle personal data
- **Audience**: All property types — messaging must stay broad enough for residential and commercial use
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Language and Typing
- Use TypeScript for all application code.
- `strict` mode is enabled, so new code should stay fully typed.
- Path imports should use the `@/` alias where practical.
## Component Style
- Components are function components.
- Props are explicitly typed with local `type` aliases.
- Current code favors named exports over default exports inside feature modules.
## Styling Rules in Practice
- The user explicitly requested Tailwind-first styling.
- Layout should use `flex` and `grid`, not coordinate-driven absolute positioning for main structure.
- Recent direction prefers `rem` for typography, spacing, and radii.
- Widths should prefer `%`, `vw`, `vh`, and `max-width` over rigid fixed widths.
- `line-height` should be unitless.
## File and Naming Rules
- Kebab-case for filenames such as `hero-section.tsx`.
- PascalCase for component names.
- Semantic HTML is expected for landing sections: `header`, `nav`, `section`, `h1`, `p`, `a`, `button`.
## Shared Styling Sources
- Design tokens live in `tailwind.config.js`.
- Global CSS should stay minimal and is currently limited to fonts and base element rules in `src/styles/globals.css`.
- Typography is backed by local font packages, not remote Google imports at runtime.
## Error Handling and Validation
- There is no dedicated runtime error handling strategy yet.
- There are no schema validators, form validators, or API error contracts in the current codebase.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Application Shape
- This is a small single-page marketing application built with the App Router.
- `src/app/page.tsx` composes the current page from feature sections.
- The page is rendered as a linear stack: first screen, calculator section, and lead form section.
## Layering Model
- Route layer: `src/app/*`
- Feature layer: `src/features/*`
- Shared UI layer: `src/components/*`
- Shared support layer: `src/lib/*`, `src/types/*`, `src/styles/*`
- Static assets: `public/*`
## Current Data Flow
- Data flow is almost entirely static and top-down.
- `FirstScreen` defines `navigationLinks` inline and passes them to `SiteHeader`.
- No server actions, API routes, hooks, or context providers are used.
- There is no fetched data path, mutation path, or derived state pipeline yet.
## Entry Points
- Root document: `src/app/layout.tsx`
- Home route: `src/app/page.tsx`
- Main UI sections:
## Architectural Strengths
- Feature folders already separate landing, calculator, and lead capture concerns.
- App Router setup is minimal and easy to extend.
- Shared styling tokens are centralized in `tailwind.config.js`.
## Architectural Limitations
- Business data is duplicated between UI and `src/lib/site-config.ts`.
- Empty folders such as `src/components/ui` and `src/hooks` indicate intended structure but no real abstractions yet.
- There is no domain model for calculator inputs, pricing rules, or lead submission states.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
