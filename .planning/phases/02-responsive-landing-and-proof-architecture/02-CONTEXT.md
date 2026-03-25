# Phase 2: Responsive Landing and Proof Architecture - Context

**Gathered:** 2026-03-25
**Status:** Ready for planning

<domain>
## Phase Boundary

In this iteration, Phase 2 is intentionally narrowed to a single section only: the advantages/proof block `Почему к нам обращаются`. No other landing sections are included in execution scope for this phase pass.

</domain>

<decisions>
## Implementation Decisions

### Scope lock
- **D-01:** Phase 2 implementation scope is only the advantages block.
- **D-02:** Service/category sections, PVC-vs-aluminum comparison, process, testimonials, and FAQ are deferred and not part of this phase execution.

### Section content and visual contract
- **D-03:** Section headline: `Почему к нам обращаются`.
- **D-04:** Section subheadline: `Понятные условия, собственное производство и готовое решение`.
- **D-05:** The block contains 6 frames/cards with the structure and text defined in `docs/preimushestva.md`.
- **D-06:** Style mapping must use Tailwind classes (not raw absolute-position CSS); demo coordinates are visual references only.
- **D-07:** Cards use the agreed visual language: Sansation headings, Montserrat body text, radius `20px`, card padding `40px 30px`, light gradient cards + one dark CTA card.

### SEO logic (pre-baked for this phase)
- **D-08:** The advantages block must be rendered as semantic section content (`<section>` + heading hierarchy with `<h2>` for section title and `<h3>` for card titles).
- **D-09:** Advantage texts must be plain, indexable HTML text (no image-only text content).
- **D-10:** Keep one clear keyword cluster in this section around production, warranty, speed, and experience without stuffing.

### Mobile/adaptive rules (pre-baked for this phase)
- **D-11:** Desktop/tablet/mobile layouts are required; no horizontal overflow is allowed.
- **D-12:** On mobile, cards stack into a single-column flow; spacing and typography scale down while preserving readability and visual hierarchy.
- **D-13:** The dark CTA card remains visually distinct on mobile and stays actionable without overlap/cropping.

### the agent's Discretion
- Fine-grained breakpoint values and exact Tailwind token choices, provided they keep fidelity to the approved block style and pass responsive readability checks.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase and requirements
- `.planning/ROADMAP.md` - Phase 2 goal and requirement mapping baseline
- `.planning/REQUIREMENTS.md` - Phase 2 requirement IDs (`CONT-03`, `CONT-04`, `TRST-02`, `TRST-03`, `TRST-04`, `TRST-05`, `SITE-01`, `SITE-02`)
- `.planning/PROJECT.md` - project-level constraints and product framing

### Design and content source for this narrowed phase
- `docs/preimushestva.md` - source content/styles for the advantages block
- `docs/DESIGN_SYSTEM.md` - typography/color and component-level style conventions

### Existing implementation anchors
- `src/app/page.tsx` - current landing section composition
- `src/features/landing/*` - existing first-screen implementation patterns to stay consistent with

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Existing landing is composed in `src/app/page.tsx` with feature-based sections.
- Tailwind + TypeScript patterns are established in `src/features/landing/*`.

### Established Patterns
- Tailwind-first implementation with semantic React components.
- Avoid absolute-position page construction in production code.

### Integration Points
- New advantages section should be integrated into page composition under `src/features` and wired into `src/app/page.tsx`.

</code_context>

<specifics>
## Specific Ideas

- User explicitly constrained this phase to only the advantages block and asked to pre-think SEO and mobile behavior before implementation.
- SEO and adaptive logic in this file are considered locked constraints for planning and execution.

</specifics>

<deferred>
## Deferred Ideas

- All other planned Phase 2 sections beyond the advantages block are deferred for a later follow-up phase/pass.

</deferred>

---
*Phase: 02-responsive-landing-and-proof-architecture*
*Context gathered: 2026-03-25*

