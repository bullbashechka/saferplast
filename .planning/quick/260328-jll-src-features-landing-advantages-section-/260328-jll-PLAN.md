# Quick Plan 260328-jll

## Goal
Apply the requested gradient background to the four light advantage cards in `src/features/landing/advantages-section.tsx` by moving the visual distinction into the content model.

## Tasks

1. Update the advantage card variant type and content entries so the four target cards use `gradient`.
   - Files: `src/features/landing/advantages-section-content.ts`
   - Action: Extend the variant union and mark the four target cards as gradient-backed cards.
   - Verify: The data model explicitly distinguishes the requested cards from the plain light card.
   - Done: The content source expresses the four-card gradient rule.

2. Apply the gradient class in the section renderer.
   - Files: `src/features/landing/advantages-section.tsx`
   - Action: Render `gradient` cards with the requested Tailwind arbitrary background value.
   - Verify: The four target cards use `background: linear-gradient(241.21deg, rgba(255, 252, 252, 0) 0%, rgba(0, 75, 98, 0.3) 94.97%)` and other card behavior stays unchanged.
   - Done: The section renders the new gradient styling.

## Notes

- Keep the change proportional and avoid touching unrelated layout, spacing, or copy.