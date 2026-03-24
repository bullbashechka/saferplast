# TESTING

## Current State
- No unit test runner is configured.
- No integration or end-to-end test framework is configured.
- There are no `*.test.ts`, `*.test.tsx`, or `*.spec.tsx` files in `src/`.

## Active Quality Gates
- `npm run lint` runs ESLint across the repository.
- `npm run typecheck` runs TypeScript in no-emit mode.
- These two commands are the only enforced quality checks currently visible in the repo.

## What Is Not Covered
- Visual regressions in the landing page are not tested.
- Navigation anchors are not tested.
- Hero/header responsive behavior is not tested.
- Placeholder calculator and lead form sections have no behavioral tests because there is no logic yet.

## Recommended Near-Term Testing Plan
- Add component tests for `src/features/landing/site-header.tsx` and `src/features/landing/hero-section.tsx` once a test runner is introduced.
- Add snapshot or visual review coverage for first-screen layout changes.
- Add future form tests once `lead-form` gains state and submission handling.
- Add pricing logic tests once `calculator-section` is backed by real business rules.

## Testing Risk Summary
- The repo currently relies on manual visual review for frontend correctness.
- Layout regressions are likely during iterative Figma-driven refinement.
- Lack of automated tests is acceptable for the current small scope, but it will become a bottleneck once calculator and lead logic are implemented.
