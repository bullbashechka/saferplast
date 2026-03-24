# ARCHITECTURE

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
  - `src/features/landing/first-screen.tsx`
  - `src/features/calculator/calculator-section.tsx`
  - `src/features/lead-form/lead-form-section.tsx`

## Architectural Strengths
- Feature folders already separate landing, calculator, and lead capture concerns.
- App Router setup is minimal and easy to extend.
- Shared styling tokens are centralized in `tailwind.config.js`.

## Architectural Limitations
- Business data is duplicated between UI and `src/lib/site-config.ts`.
- Empty folders such as `src/components/ui` and `src/hooks` indicate intended structure but no real abstractions yet.
- There is no domain model for calculator inputs, pricing rules, or lead submission states.
