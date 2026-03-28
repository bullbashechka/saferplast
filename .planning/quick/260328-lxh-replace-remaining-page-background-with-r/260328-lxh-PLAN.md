# Quick Plan 260328-lxh

## Goal
Replace the remaining section-level white background with `rgba(250, 254, 255, 1)`.

## Tasks

1. Update the advantages section shell background.
   - Files: `src/features/landing/advantages-section.tsx`
   - Action: Replace `bg-white` on the section wrapper with the requested RGBA tint.
   - Verify: The section background matches the page background and only card interiors remain white.
   - Done: The remaining full-width white section background is removed.

## Notes

- Do not alter card backgrounds or spacing.