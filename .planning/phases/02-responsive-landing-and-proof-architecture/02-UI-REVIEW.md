# Phase 02 - UI Review

**Audited:** 2026-03-25
**Baseline:** abstract 6-pillar standards (no `02-UI-SPEC.md` found)
**Screenshots:** not captured (dev server responded on `localhost:3000`, but Playwright CLI produced no image files)

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 2/4 | Russian copy quality is strong overall, but mojibake appears in hero labels and one headline still has placeholder `X`. |
| 2. Visuals | 3/4 | Clear hierarchy and semantic structure exist, but mobile header nav is removed with no alternate menu path. |
| 3. Color | 2/4 | Multiple hardcoded hex/rgba colors (`11` matches) reduce token consistency and maintainability. |
| 4. Typography | 2/4 | Weight system is disciplined, but typography scale is fragmented (`14` distinct text size/color tokens in reviewed files). |
| 5. Spacing | 2/4 | Heavy reliance on arbitrary spacing values (`29` bracketed px/rem matches) increases inconsistency risk. |
| 6. Experience Design | 2/4 | Sections are readable and accessible semantically, but loading/error/empty/disabled interaction states are absent. |

**Overall: 13/24**

---

## Top 3 Priority Fixes

1. **Fix encoding regressions in hero copy** - mojibake harms trust and readability - replace corrupted strings in hero `aria-label` and `Image alt` with proper UTF-8 Russian text.
2. **Replace hardcoded color literals with Tailwind theme tokens** - hardcoded color drift causes visual inconsistency - move repeated `#004B62`, `#00384a`, grayscale and gradient stops into tokenized classes/config.
3. **Add mobile navigation fallback in header** - users on small screens lose primary navigation routes - add a menu button/drawer when desktop nav is hidden (`lg:flex` currently hides nav entirely).

---

## Detailed Findings

### Pillar 1: Copywriting (2/4)
- Encoding corruption (mojibake) is present in production-facing strings:
  - `aria-label` in trust list: `src/features/landing/hero-section.tsx:43`
  - Hero image `alt`: `src/features/landing/hero-section.tsx:58`
- Placeholder business value remains unresolved:
  - `Опыт работы - более X лет`: `src/features/landing/advantages-section-content.ts:36`
- No generic low-quality CTA labels like `Submit/Click Here/OK` were found in scanned UI files.

### Pillar 2: Visuals (3/4)
- Strong semantic hierarchy is present:
  - Header/nav structure: `src/features/landing/site-header.tsx:23`, `src/features/landing/site-header.tsx:35`
  - Hero title `h1`: `src/features/landing/hero-section.tsx:12`
  - Advantages heading structure `h2` + `h3`: `src/features/landing/advantages-section.tsx:9`, `src/features/landing/advantages-section.tsx:65`
- Risk: main nav is hidden on mobile (`hidden ... lg:flex`) with no visible replacement pattern:
  - `src/features/landing/site-header.tsx:35`

### Pillar 3: Color (2/4)
- Hardcoded color usage found in reviewed sections (`11` matches), including:
  - `#004B62`, `#00384a`, `#242424`, `#FAFEFF`, `#F5FCFF`, `#F2F4F5`, `#d9e5ea`
  - Examples: `src/features/landing/hero-section.tsx:25`, `src/features/landing/site-header.tsx:52`, `src/features/landing/advantages-section.tsx:59`
- Gradients and dark CTA contrast direction are good, but token bypass makes global tuning difficult.

### Pillar 4: Typography (2/4)
- Positive: font-weight usage is controlled (`font-normal`, `font-medium` only).
- Fragmentation: `14` distinct `text-[...]` tokens across header/hero/advantages (including mixed size and color bracket values), e.g.:
  - `text-[3.4375rem]`: `src/features/landing/hero-section.tsx:14`
  - `text-[2.75rem]`: `src/features/landing/advantages-section.tsx:11`
  - `text-[0.9375rem]`: `src/features/landing/site-header.tsx:59`
- Many lines use `leading-[1]`; this is visually tight for longer copy blocks on small screens.

### Pillar 5: Spacing (2/4)
- Arbitrary spacing density is high (`29` bracketed px/rem matches) in reviewed files.
- Examples:
  - Header spacing system: `src/features/landing/site-header.tsx:23`, `src/features/landing/site-header.tsx:52`
  - Hero spacing system: `src/features/landing/hero-section.tsx:23`, `src/features/landing/hero-section.tsx:25`
  - Advantages spacing system: `src/features/landing/advantages-section.tsx:19`, `src/features/landing/advantages-section.tsx:77`
- No overflow bug was found directly in code patterns, but long-term consistency risk is elevated.

### Pillar 6: Experience Design (2/4)
- Composition and section ordering are coherent:
  - Landing flow includes first screen and advantages before calculator/form: `src/app/page.tsx:8`
- No explicit state handling patterns in audited sections:
  - No loading/skeleton, error, or empty state logic in header/hero/advantages/page files.
- CTA interaction exists (`href="#lead-form"`), but there are no disabled or pending interaction states for async actions in this scope.

---

## Files Audited
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-01-SUMMARY.md`
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-01-PLAN.md`
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-CONTEXT.md`
- `src/features/landing/site-header.tsx`
- `src/features/landing/hero-section.tsx`
- `src/features/landing/advantages-section.tsx`
- `src/features/landing/advantages-section-content.ts`
- `src/app/page.tsx`
