# Phase 2: Responsive Landing and Proof Architecture - Research

**Researched:** 2026-03-25
**Domain:** Advantages block implementation (`docs/preimushestva.md`) with SEO semantics and mobile-first adaptation
**Confidence:** HIGH

## Scope Reality

Phase 2 roadmap is broad, but current approved execution scope is intentionally narrowed to one section only: the advantages/proof block `Почему к нам обращаются`.
Planning and execution must not expand to other Phase 2 sections in this pass.

## Implementation Direction

1. Build a dedicated landing section component under `src/features/landing` for advantages.
2. Render content as indexable semantic HTML: `<section>`, `<h2>`, six cards with `<h3>` + paragraph.
3. Map style tokens from `docs/preimushestva.md` to Tailwind classes (no absolute coordinates).
4. Keep one dark CTA card distinct and clickable (anchor to `#lead-form` or existing request section).
5. Add responsive layout rules:
   - Desktop: asymmetric card grid similar to design intent.
   - Tablet: simplified 2-column layout.
   - Mobile: strict 1-column flow, no horizontal overflow.
6. Keep Russian copy UTF-8 clean, avoid mojibake regressions.

## SEO Strategy (for this scope)

- Use section heading hierarchy: one `h2` for section title, `h3` for each card title.
- Keep all value propositions as real text in DOM (no text baked into images).
- Preserve concise keyword cluster around: production, warranty, speed, experience, free measurement.
- Do not overstuff repeated keywords.

## Mobile Strategy

- `px` spacing reduced on small screens, typography scales down while preserving hierarchy.
- Cards stack into one column on `sm` and below.
- Long headings wrap naturally; ensure no clipping/cropping.
- Dark CTA card remains visually dominant and tap-friendly.

## Risks

- Exact Figma absolute positions are not portable to responsive code; must translate into adaptive grid rules.
- UTF-8 corruption risk in Russian literals; verify saved files and rendered output.

## Validation Architecture

- Quick command: `npm.cmd run lint`
- Full command: `npm.cmd run lint && npm.cmd run typecheck`
- Manual checks: desktop/tablet/mobile visual pass of section hierarchy and card readability.
