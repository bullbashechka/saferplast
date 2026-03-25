# Phase 1: Offer Backbone and First-Screen Refinement - Context

**Gathered:** 2026-03-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Refine only the first screen (`Header + Hero`) to match the approved Figma design direction and the agreed demo style specs. This pass does not introduce lower sections or new feature scope.

</domain>

<decisions>
## Implementation Decisions

### Source of truth
- **D-01:** Phase 1 implementation must follow the Figma design for the first screen.
- **D-02:** Header styling decisions are locked by `docs/headerDemoStyles.md` and must be translated to valid Tailwind utilities (no raw CSS dump in components).
- **D-03:** Hero styling decisions are locked by `docs/heroDemoStyles.md` and must be translated to valid Tailwind utilities.

### Header
- **D-04:** Header composition is: logo, nav links, phone block, location block.
- **D-05:** Header visual parameters (spacing, typography, box styles, icon sizes/colors) follow `docs/headerDemoStyles.md`.
- **D-06:** Keep header implementation responsive with Tailwind/flex-grid patterns; absolute coordinates from demo specs are visual reference only, not layout method.

### Hero content
- **D-07:** Hero headline is locked to: `Окна, двери и балконы из ПВХ и алюминия напрямую от производителя`.
- **D-08:** Hero subheadline is locked to: `Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет.`
- **D-09:** Hero has exactly two primary actions: `Бесплатный замер` and `Получить расчет`.

### Hero visual
- **D-10:** Hero typography and CTA sizing/styling follow `docs/heroDemoStyles.md`.
- **D-11:** Right-side hero photo remains the current site photo for now; no image swap/rework in this phase step.

### the agent's Discretion
- Fine-grained responsive breakpoints and spacing interpolation between desktop and mobile.
- Exact semantic markup details and accessibility attributes while preserving locked visual/content decisions.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase requirements and scope
- `.planning/ROADMAP.md` - Phase 1 goal, constraints, and success criteria
- `.planning/REQUIREMENTS.md` - Phase 1 requirement IDs (`CONT-01`, `CONT-02`, `CONT-05`, `TRST-01`, `SITE-03`)
- `.planning/PROJECT.md` - product/business framing and constraints

### Design and first-screen styling
- `docs/headerDemoStyles.md` - locked header visual spec to map into Tailwind classes
- `docs/heroDemoStyles.md` - locked hero visual spec to map into Tailwind classes
- `src/features/landing/site-header.tsx` - current header implementation target
- `src/features/landing/hero-section.tsx` - current hero implementation target
- `src/features/landing/first-screen-content.ts` - locked headline/subheadline/button labels source

### Repo conventions
- `AGENTS.md` - repository coding/layout conventions

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/features/landing/site-header.tsx`: existing header structure with logo, nav, contact blocks.
- `src/features/landing/hero-section.tsx`: existing hero layout, CTA block, and image area.
- `src/features/landing/first-screen-content.ts`: centralized text and CTA labels for first screen.
- `public/images/herophotogirl.png`: current hero image to keep unchanged for now.
- `public/icons/phone.svg`, `public/icons/location.svg`: existing contact icons used by header.

### Established Patterns
- Tailwind-first styling with minimal global CSS.
- Responsive layout through flex/grid and container spacing; avoid hardcoded absolute page coordinates in production components.
- `next/image` remains the default pattern for image rendering.

### Integration Points
- `src/features/landing/first-screen.tsx` composes `SiteHeader` + `HeroSection`.
- `src/app/page.tsx` mounts the first screen into the landing page.

</code_context>

<specifics>
## Specific Ideas

- The team explicitly aligns this phase to Figma fidelity for Header/Hero because previous pass was misunderstood.
- Hero text and CTA labels are now treated as locked content, not exploratory copy.
- Hero image stays as-is during this correction pass due known separate image nuances.

</specifics>

<deferred>
## Deferred Ideas

- Any changes to hero photo asset/cropping strategy beyond current image reuse.
- Lower landing sections (`Почему к нам обращаются`, FAQ, services, reviews, etc.) remain outside this correction pass.
- Lead-processing behavior and form handling remain Phase 3 scope.

</deferred>

---
*Phase: 01-offer-backbone-and-first-screen-refinement*
*Context gathered: 2026-03-25*

