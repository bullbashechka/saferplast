# Phase 02 - SEO and Stack Check (No UI Changes)

**Date:** 2026-03-25  
**Mode:** design freeze, review-only, no implementation changes

## Scope Reviewed

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/features/landing/site-header.tsx`
- `src/features/landing/hero-section.tsx`
- `src/features/landing/advantages-section.tsx`
- `src/features/landing/first-screen-content.ts`
- `src/features/landing/advantages-section-content.ts`
- `package.json`
- `.planning/codebase/STACK.md`

## SEO Snapshot

### What is already good

- App-level metadata exists (`title`, `description`) in `layout.tsx`.
- Language is explicitly set to Russian (`<html lang="ru">`).
- First screen and advantages use semantic structure:
  - `h1` in hero
  - `h2` section headings
  - `h3` card headings
  - `section` + `aria-labelledby` usage
- Meaningful image `alt` text is present for content images.

### Current SEO gaps (record only, no fixes applied)

- Metadata is minimal (no Open Graph, no Twitter card, no canonical).
- No `robots` or `sitemap` route/file was found in `src/app`.
- Navigation contains anchors `#projects` and `#contacts`, but no matching section IDs currently exist in rendered page flow.
- One trust card still has placeholder text: `Опыт работы - более X лет`.

## Stack Compliance Snapshot

### Matches declared stack

- Framework/runtime: Next.js 15 + React 19.
- Language: TypeScript with strict typing flow in feature modules.
- Styling: Tailwind CSS utility approach with arbitrary values where needed for Figma mapping.
- Typography delivery: `@fontsource/montserrat` and `@fontsource/sansation`.
- Routing/composition follows App Router entrypoints (`src/app/layout.tsx`, `src/app/page.tsx`).

### Validation commands

- `npm.cmd run typecheck` -> pass
- `npm.cmd run lint` -> fail, but failures are in `.codex/get-shit-done/*.cjs` tooling scripts (not in landing feature implementation files)

## Decision Log

- Design and layout are intentionally kept as-is per latest instruction.
- This check is documentation-only and does not modify UI/code behavior.

