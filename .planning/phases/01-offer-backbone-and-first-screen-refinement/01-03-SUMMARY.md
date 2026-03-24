---
phase: 01-offer-backbone-and-first-screen-refinement
plan: "03"
subsystem: ui
tags: [nextjs, react, tailwind, hero, landing]
requires:
  - phase: 01-offer-backbone-and-first-screen-refinement
    provides: "Shared first-screen content contract and header contact cluster"
provides:
  - "Hero copy driven by first-screen shared content"
  - "Real primary and secondary hero CTA anchors"
  - "Audience line and compact trust chips in the first screen"
affects: [phase-02-responsive-landing-and-proof-architecture, landing-first-screen]
tech-stack:
  added: []
  patterns: ["Static first-screen sections consume shared content objects", "Hero persuasion remains inline and compact instead of spawning extra sections"]
key-files:
  created: []
  modified: [src/features/landing/hero-section.tsx]
key-decisions:
  - "Kept the hero as a two-column grid and injected content from first-screen-content.ts instead of creating another content source."
  - "Rendered audience and trust proof as compact inline text/chips inside the hero flow to preserve Phase 1 scope."
patterns-established:
  - "Hero CTA hierarchy uses a filled primary anchor for measurement and an outlined secondary anchor for calculator handoff."
  - "First-screen proof content stays adjacent to the hero copy rather than expanding into a deferred advantages block."
requirements-completed: [CONT-01, CONT-02, CONT-05, TRST-01]
duration: 6min
completed: 2026-03-24
---

# Phase 01 Plan 03: Hero Offer and CTA Refinement Summary

**Shared-content hero copy with anchored CTAs, audience coverage text, and compact first-screen trust chips for the SaFerplast landing**  

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-24T12:57:30Z
- **Completed:** 2026-03-24T13:03:01Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- Replaced hardcoded hero copy with `firstScreenContent` values for the headline, description, and CTA metadata.
- Converted both hero CTAs into real anchor actions with clear primary and secondary visual hierarchy.
- Added the audience coverage line and all four trust differentiators directly into the hero flow without introducing the deferred advantages section.

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace hardcoded hero copy and inert buttons with the approved CTA/content model** - `b84c08b` (feat)
2. **Task 2: Add compact trust and audience messaging inside the hero without expanding scope** - `71df0dd` (feat)

## Files Created/Modified
- `src/features/landing/hero-section.tsx` - Refactored hero to consume shared content, expose real CTA anchors, and render compact trust/audience messaging.

## Decisions Made

- Kept the existing hero image and two-column structure, adjusting spacing and responsive typography rather than redesigning the first screen.
- Used inline chips plus one audience line for trust/audience proof so Phase 1 stays above-the-fold and does not bleed into Phase 2 content sections.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- The approved Figma MCP input `fileKey: shs2jpWZgLlIqH32Lt1M8f`, `nodeId: 118:8` returned an invalid-node error during execution, so implementation used the locked phase context, current first-screen structure, and design-system constraints instead of live node context.
- `npm.cmd run lint` fails repository-wide on pre-existing `.codex/get-shit-done/**/*.cjs` `require()` lint violations unrelated to this plan. The changed hero file itself passes targeted ESLint, and `npm.cmd run typecheck` passes.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 1 now has the header contact cluster plus a first-screen hero that exposes the offer, trust, audience, and CTA hierarchy above the fold.
- Before broader UI verification, the invalid Figma node reference should be corrected so future phase work can compare against live MCP design context again.

---
*Phase: 01-offer-backbone-and-first-screen-refinement*
*Completed: 2026-03-24*
