# Phase 1: Offer Backbone and First-Screen Refinement - Context

**Gathered:** 2026-03-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Refine the existing `Header + Hero` first screen so visitors immediately understand what SaFerplast offers, who it serves, why it is credible, and what action to take. This phase does not add the next landing sections such as the full advantages grid, FAQ, or service cards.

</domain>

<decisions>
## Implementation Decisions

### Offer and copy
- **D-01:** The hero `h1` must be: `Окна, двери и балконы из ПВХ и алюминия напрямую от производителя`.
- **D-02:** The hero supporting text must be: `Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет стоимости.`
- **D-03:** The first screen must communicate the full business scope immediately: manufacturing, installation, and repair of PVC and aluminum window-related products.

### CTA hierarchy
- **D-04:** The primary CTA on the first screen is `Бесплатный замер`.
- **D-05:** The secondary CTA on the first screen is `Получить расчет`.
- **D-06:** The CTA hierarchy must make the measurement request feel like the main business conversion path, with estimate request visually secondary.

### First-screen trust signals
- **D-07:** The first screen must show short trust/value тезисы in or near the hero, not a full card grid.
- **D-08:** The short trust/value тезисы for the first screen are: `Собственное производство`, `Цены без посредников`, `Быстрый выезд и расчет`, `Гарантия 1 год`.
- **D-09:** The separate section `Почему к нам обращаются` with multiple advantage cards is explicitly out of this phase and remains a later landing block.

### Contact presentation
- **D-10:** The first screen must visibly include phone, city, WhatsApp, and Telegram.
- **D-11:** The phone remains the main textual contact in the contact zone.
- **D-12:** WhatsApp and Telegram must be shown as separate icon links visually grouped with the phone rather than competing with the primary CTA.

### the agent's Discretion
- Exact visual treatment of the short trust/value тезисы within the hero flow
- Exact spacing, sizing, and responsive behavior, as long as they follow Figma and the repository layout rules
- Whether the city appears in the header contact group, hero support text, or both, as long as first-screen relevance is preserved

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase and requirements
- `.planning/ROADMAP.md` - Phase 1 goal, boundary, and success criteria
- `.planning/REQUIREMENTS.md` - Phase 1 requirement IDs `CONT-01`, `CONT-02`, `CONT-05`, `TRST-01`, `SITE-03`
- `.planning/PROJECT.md` - product framing, business offer, and project constraints

### Design and UI rules
- `docs/DESIGN_SYSTEM.md` - project color, typography, spacing, and component styling guidance
- `src/features/landing/first-screen.tsx` - first-screen composition root
- `src/features/landing/site-header.tsx` - current header implementation
- `src/features/landing/hero-section.tsx` - current hero implementation

### Global conventions
- `AGENTS.md` - repository conventions, Tailwind-first rules, project structure, and commit expectations
- `.planning/codebase/CONVENTIONS.md` - current codebase layout/styling rules extracted from the repo

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/features/landing/first-screen.tsx`: already composes `SiteHeader` and `HeroSection` into one first screen
- `src/features/landing/site-header.tsx`: already has navigation array support, logo rendering, and contact pill structure
- `src/features/landing/hero-section.tsx`: already has the base hero layout, headline, description, CTA buttons, and hero image container
- `public/images/logo.png`: current logo asset
- `public/images/herophotogirl.png`: current hero image asset
- `public/icons/phone.svg`, `public/icons/location.svg`: current header contact icons

### Established Patterns
- Tailwind-first styling with minimal global CSS
- Main layout should use `flex`/`grid`, `rem`, `max-width`, and container padding rather than coordinate-driven absolute positioning
- Semantic HTML is expected for the landing structure
- `next/image` is already used for logo and hero image and should remain the default pattern

### Integration Points
- `src/app/page.tsx` already mounts the first screen as the top section of the landing
- `src/lib/site-config.ts` will likely become a shared source for company metadata once its encoding/content issues are corrected
- Future phase 2 sections will extend the landing below this screen, so Phase 1 should avoid locking in patterns that block lower-page composition

</code_context>

<specifics>
## Specific Ideas

- The hero should be implemented strictly against the approved Figma file and MCP Figma context, not loosely approximated.
- The first screen should feel calm and readable rather than overloaded.
- The fuller advantages block already exists in the design with the heading `Почему к нам обращаются` and should remain a separate section after the hero.
- The contact zone reference provided by the user shows a phone number with WhatsApp and Telegram icons grouped beside it, and that grouping should inform the first-screen contact treatment.

</specifics>

<deferred>
## Deferred Ideas

- Full multi-card advantages section `Почему к нам обращаются` - later landing section, not part of the first-screen refinement phase
- FAQ, services, reviews, and other lower landing sections - Phase 2 work
- Functional lead form behavior - Phase 3 work
- Calculator behavior and handoff - Phase 4 work

</deferred>

---
*Phase: 01-offer-backbone-and-first-screen-refinement*
*Context gathered: 2026-03-24*
