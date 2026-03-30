---
phase: 03-canonical-lead-capture-system
plan: "01"
subsystem: ui
tags: [nextjs, typescript, tailwind, landing-flow, calculator]
requires:
  - phase: 02-responsive-landing-and-proof-architecture
    provides: section composition and landing section patterns
provides:
  - Canonical calculator content/type contracts for Phase 03
  - FLOW-01 compliant page section order
  - Calculator section shell wired to locked copy contract
affects: [phase-03-interactive-calculator, lead-form-handoff]
tech-stack:
  added: []
  patterns: [typed feature content contract, tuple-based fixed card set, section-order enforcement]
key-files:
  created:
    - src/features/calculator/calculator-types.ts
    - src/features/calculator/calculator-content.ts
    - public/images/svg-on-button-рассчитать.svg
  modified:
    - src/app/page.tsx
    - src/features/calculator/calculator-section.tsx
key-decisions:
  - "Locked calculator heading/subtitle/cards/cta in a single typed content module."
  - "Moved CalculatorSection directly after AdvantagesSection to enforce FLOW-01 in source order."
patterns-established:
  - "Calculator content must be imported from calculator-content.ts, not hardcoded in section component."
  - "Phase 03 baseline excludes formula/modal logic and only ships shell plus typed contracts."
requirements-completed: [FLOW-01, CALC-04]
duration: 2min
completed: 2026-03-30
---

# Phase 03 Plan 01: Canonical calculator foundation Summary

**Typed calculator content/contracts with fixed four-card categories and FLOW-01 source order enforced in landing composition.**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-30T07:27:39Z
- **Completed:** 2026-03-30T07:29:35Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Added strict calculator domain contracts, including `CalculatorContextDraft` for downstream lead-flow handoff readiness.
- Locked canonical calculator copy, typography metadata, card tuple, and CTA icon metadata in one content source.
- Reordered landing flow to `FirstScreen -> AdvantagesSection -> CalculatorSection -> ProofSection -> LeadFormSection` and replaced calculator placeholder with contract-driven shell.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create typed calculator contracts and lock approved content** - `7341c52` (feat)
2. **Task 2: Reorder page flow and replace placeholder shell with contract-driven section scaffold** - `80574d8` (feat)

**Plan metadata:** pending final docs commit

## Files Created/Modified

- `src/features/calculator/calculator-types.ts` - strict types for category keys, typography metadata, CTA metadata, and context draft.
- `src/features/calculator/calculator-content.ts` - canonical section copy, fixed card tuple, and CTA metadata with locked icon path.
- `public/images/svg-on-button-рассчитать.svg` - canonical CTA icon asset for calculator actions.
- `src/app/page.tsx` - FLOW-01 section order correction.
- `src/features/calculator/calculator-section.tsx` - shell refactor to consume locked content contract.

## Decisions Made

- Locked content and contracts before interactive implementation to reduce downstream integration risk.
- Kept Task 2 scoped to section shell and composition only; deferred modal/formula mechanics per phase boundary.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- `npm.cmd run lint` fails from pre-existing `.codex/get-shit-done/**/*.cjs` rule violations unrelated to this plan.
- `npm.cmd run typecheck` passes for current plan changes.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Calculator section now has stable, typed content contracts and canonical placement in landing flow.
- Next interactive phase can implement card behaviors/modal entrypoint directly on top of the locked content/types.

## Self-Check: PASSED

---
*Phase: 03-canonical-lead-capture-system*
*Completed: 2026-03-30*
