# Quick Plan 260328-mbi

## Goal
Move the lower-left advantage gradient stop to `80%`.

## Tasks

1. Adjust the darker gradient stop position.
   - Files: `src/features/landing/advantages-section.tsx`
   - Action: Change the second stop from `100%` to `80%`.
   - Verify: The gradient still uses the same colors and direction, but the darker stop ends at `80%`.
   - Done: The lower-left stop is set to `80%`.

## Notes

- Keep the gradient colors unchanged.