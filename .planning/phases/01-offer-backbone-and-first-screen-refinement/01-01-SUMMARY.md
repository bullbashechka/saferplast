---
phase: 01-offer-backbone-and-first-screen-refinement
plan: "01"
subsystem: ui
tags: [nextjs, react, typescript, tailwind, landing, navigation]
requires: []
provides:
  - typed first-screen content contract for hero, CTA, trust, contact, and navigation data
  - shared first-screen navigation wiring pointing only to live page anchors
affects: [01-02, 01-03, landing, header, hero]
tech-stack:
  added: []
  patterns: [local typed feature content module, composition-root data handoff]
key-files:
  created: [src/features/landing/first-screen-content.ts]
  modified: [src/features/landing/first-screen.tsx]
key-decisions:
  - "Keep first-screen business copy in a local feature module instead of broadening scope into src/lib/site-config.ts."
  - "Replace dead first-screen navigation targets with #calculator and #lead-form so header links remain usable during Phase 1."
patterns-established:
  - "FirstScreen owns landing-first-screen data handoff into child components."
  - "Shared first-screen literals live in src/features/landing/first-screen-content.ts for downstream phase work."
requirements-completed: [CONT-02, SITE-03]
duration: 4 min
completed: 2026-03-24
---

# Phase 1 Plan 1: First-Screen Contract Summary

**Typed first-screen content with locked offer copy, real CTA anchors, and shared header navigation wiring for the landing entrypoint**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-24T12:52:10Z
- **Completed:** 2026-03-24T12:56:07Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Added a typed `firstScreenContent` contract covering headline, description, audience line, trust tuple, CTA hierarchy, contact fields, and navigation links.
- Moved first-screen navigation ownership into the shared content module so future header and hero work can consume one approved data source.
- Removed dead first-screen anchors from the composition entrypoint and kept navigation pointed at `#top`, `#calculator`, and `#lead-form`.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create the first-screen content contract** - `0ec4241` (feat)
2. **Task 2: Rewire first-screen composition to the shared contract and remove dead anchors** - `cd5fcd8` (fix)

**Plan metadata:** pending

## Files Created/Modified
- `src/features/landing/first-screen-content.ts` - typed local content source for first-screen copy, contacts, CTAs, trust items, and navigation.
- `src/features/landing/first-screen.tsx` - composition root now passes shared navigation links into `SiteHeader`.

## Decisions Made
- Kept first-screen content local to `src/features/landing` instead of expanding scope into the broken shared site config.
- Treated `#lead-form` as the current contact/request destination and removed references to deferred sections.

## Deviations from Plan

None - plan executed as specified for product code.

## Issues Encountered

- `npm.cmd run lint` fails at repo scope because `.codex/get-shit-done/**/*.cjs` has pre-existing ESLint violations unrelated to this plan, primarily `@typescript-eslint/no-require-imports`. This was left untouched per scope boundaries.
- Scoped verification with `npx.cmd eslint src/features/landing/first-screen.tsx src/features/landing/first-screen-content.ts` passed.

## Known Stubs

- `src/features/landing/first-screen-content.ts:44` - `telegramHref` is a provisional public endpoint and still needs client-confirmed contact details before the messenger links phase is finalized.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `FirstScreen` now exposes a stable content and navigation contract for the header contact-cluster work in `01-02`.
- Exact messenger destination details should be confirmed when the visual messenger links are implemented.

## Self-Check: PASSED

- Verified summary file exists: `.planning/phases/01-offer-backbone-and-first-screen-refinement/01-01-SUMMARY.md`
- Verified task commit exists: `0ec4241`
- Verified task commit exists: `cd5fcd8`

---
*Phase: 01-offer-backbone-and-first-screen-refinement*
*Completed: 2026-03-24*
