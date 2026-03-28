# Quick Plan 260328-lar

## Goal
Change the advantage card gradient in `src/features/landing/advantages-section.tsx` so it runs diagonally from bottom-left to top-right.

## Tasks

1. Update the gradient class used by the `gradient` card variant.
   - Files: `src/features/landing/advantages-section.tsx`
   - Action: Replace the current linear-gradient angle with `to_top_right` while keeping the same color stops.
   - Verify: The gradient direction is diagonal and the rendered cards keep their existing layout and copy.
   - Done: The requested diagonal gradient is applied.

## Notes

- Do not alter the other card variants or the section structure.