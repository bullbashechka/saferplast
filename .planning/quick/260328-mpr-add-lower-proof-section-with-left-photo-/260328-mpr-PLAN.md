# Quick Plan 260328-mpr

## Goal
Add a lower proof section with a left photo card and a right composite card based on the provided dimensions and images.

## Tasks

1. Build the new proof section layout.
   - Files: `src/features/landing/proof-section.tsx`, `src/app/page.tsx`
   - Action: Add a new section below advantages with a 387px left image card and a 793px right composite card using the supplied assets.
   - Verify: The section appears below the advantages block and matches the requested two-column geometry on desktop.
   - Done: The new proof section is rendered in the landing page.

2. Include the image assets used by the section.
   - Files: `public/images/male-worker-factory.jpg`, `public/images/glass-broken-from- house-by-accident- man-checking- repair.jpg`
   - Action: Ensure the referenced source images are committed so the section works from a clean checkout.
   - Verify: The images are present in `public/images` and resolve in the component.
   - Done: The referenced assets are available in the repository.

## Notes

- Keep the existing advantages section intact.
- The new section is intentionally visual and sits under the existing benefits.