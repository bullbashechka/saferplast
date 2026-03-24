# STRUCTURE

## Top-Level Layout
- `src/` contains all application code.
- `public/` contains static media assets.
- `docs/` contains human documentation and design references.
- `.planning/codebase/` is generated mapping output.

## Source Tree
- `src/app/layout.tsx` defines the root HTML shell.
- `src/app/page.tsx` is the current home page composition.
- `src/features/landing/` contains the first-screen implementation:
  - `first-screen.tsx`
  - `site-header.tsx`
  - `hero-section.tsx`
- `src/features/calculator/calculator-section.tsx` is a placeholder section.
- `src/features/lead-form/lead-form-section.tsx` is a placeholder section.
- `src/lib/site-config.ts` contains company metadata.
- `src/types/calculator.ts` defines a simple `WindowProfile` union.
- `src/styles/globals.css` contains font imports and global base rules.

## Static Asset Layout
- `public/images/logo.png`
- `public/images/herophotogirl.png`
- `public/icons/phone.svg`
- `public/icons/location.svg`

## Naming Patterns
- Feature files use kebab-case, e.g. `first-screen.tsx`.
- React component names use PascalCase, e.g. `FirstScreen`, `HeroSection`, `SiteHeader`.
- Route files follow Next.js conventions, e.g. `page.tsx`, `layout.tsx`.

## Notable Gaps
- No `src/components` primitives are implemented yet.
- No test directories exist.
- No API routes or `src/app/api/*` handlers exist.
