# Frontend Architecture

This project uses a mixed Astro + React setup.

## Astro Sections

These are static sections rendered as Astro components:

- `src/features/landing/advantages-section.astro`
- `src/features/landing/proof-section.astro`
- `src/features/landing/solution-matching-section.astro`
- `src/features/landing/work-process-section.astro`
- `src/features/landing/site-footer.astro`

## React Islands

These stay in React because they need client-side behavior:

- `src/features/landing/projects-section.tsx`
  - Embla carousel
  - horizontal scroll and snap
- `src/features/landing/testimonials-section.tsx`
  - Embla carousel
  - modal interaction
- `src/features/landing/faq-section.tsx`
  - accordion state
- `src/features/lead-form/lead-form-section.tsx`
  - form state
  - validation
  - submit flow

## Rule Of Thumb

- Use Astro for static content.
- Use React only when the section needs state, hydration, or carousel logic.
- If a block uses `useState`, Embla, or submit handling, keep it as a React island.

## Current Page Usage

- `src/pages/index.astro`
- `src/pages/[city].astro`
- `src/pages/karaganda/maykuduk-prishakhtinsk.astro`

These pages import Astro sections directly and hydrate the React islands only where needed.
