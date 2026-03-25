# Roadmap: SaFerplast

## Overview

This roadmap takes the existing Next.js landing scaffold to a production-ready, conversion-first launch. The sequence follows business risk: refine the offer and above-the-fold conversion path first, complete the responsive landing and SEO structure second, centralize lead handling before wiring more entry points, add the calculator only after it can hand off into the canonical lead path, and finish with analytics plus Cloudflare runtime validation.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Offer Backbone and First-Screen Refinement** - Align the existing Figma-driven hero flow with the real offer, audience, and primary conversion path.
- [ ] **Phase 2: Responsive Landing and Proof Architecture** - Complete the rest of the landing with responsive sections, trust content, and search-visible structure.
- [ ] **Phase 3: Canonical Lead Capture System** - Ship one secure lead pipeline for phone and form requests without fragmenting handling.
- [ ] **Phase 4: Calculator and Qualification Handoff** - Add an honest estimate flow that feeds directly into the lead path.
- [ ] **Phase 5: Launch Analytics and Cloudflare Validation** - Instrument the funnel and validate the production runtime before launch.

## Phase Details

### Phase 1: Offer Backbone and First-Screen Refinement
**Goal**: Visitors immediately understand what SaFerplast offers, who it serves, why it is credible, and what action to take from the refined first screen.
**Depends on**: Nothing (first phase)
**Requirements**: CONT-01, CONT-02, CONT-05, TRST-01, SITE-03
**Success Criteria** (what must be TRUE):
  1. Visitor can tell from the first screen that SaFerplast manufactures, installs, and repairs PVC and aluminum windows, doors, and balconies.
  2. Visitor sees a clear primary CTA above the fold for consultation, measurement, or estimate request.
  3. Visitor can see that the company serves apartments, private houses, offices, and commercial spaces.
  4. Visitor can see the company differentiators and find visible contact/service-area relevance without scrolling through the full page.
**Plans**: 3 plans
Plans:
- [x] 01-01-PLAN.md - Lock first-screen content contract and composition wiring for Header + Hero
- [ ] 01-02-PLAN.md - Map header demo styles to Tailwind and finalize contact/service-area cluster
- [ ] 01-03-PLAN.md - Map hero demo styles to Tailwind with locked copy/CTA and unchanged right photo
**UI hint**: yes

### Phase 2: Responsive Landing and Proof Architecture
**Goal**: Visitors can browse a complete, responsive landing that explains the offer in depth, answers objections, and exposes search-friendly structure.
**Depends on**: Phase 1
**Requirements**: CONT-03, CONT-04, TRST-02, TRST-03, TRST-04, TRST-05, SITE-01, SITE-02
**Success Criteria** (what must be TRUE):
  1. Visitor can browse clearly structured service and product sections for windows, doors, balconies, glazing units, hardware, sills, and slopes.
  2. Visitor can understand the difference between PVC and aluminum solutions and when each is appropriate.
  3. Visitor can review warranty/guarantee details, real proof content, and the end-to-end service process before submitting a request.
  4. Visitor can find answers to common objections in an FAQ and use the page comfortably on desktop and mobile.
  5. Search engines can detect meaningful page metadata and structure for the landing.
**Plans**: TBD
**UI hint**: yes

### Phase 3: Canonical Lead Capture System
**Goal**: Visitors can contact SaFerplast through one reliable, secure lead flow that persists requests and routes them to operations.
**Depends on**: Phase 2
**Requirements**: LEAD-01, LEAD-02, LEAD-03, LEAD-04, LEAD-05, LEAD-06, LEAD-07
**Success Criteria** (what must be TRUE):
  1. Visitor can start contact from a visible phone action anywhere the landing expects it.
  2. Visitor can submit the hero request form with full name, phone, and optional comment.
  3. Visitor can submit the end-of-page request form with the same canonical payload and receive a consistent success or error experience.
  4. Submitted leads are validated, protected against spam, stored reliably, and still retained if messenger delivery has an issue.
  5. Operational handling receives the submitted lead through the WhatsApp-first, Telegram-secondary routing path defined for launch.
**Plans**: TBD
**UI hint**: yes

### Phase 4: Calculator and Qualification Handoff
**Goal**: Visitors can get a simple approximate estimate and pass that context into the existing lead flow without duplicate effort.
**Depends on**: Phase 3
**Requirements**: CALC-01, CALC-02, CALC-03, CALC-04
**Success Criteria** (what must be TRUE):
  1. Visitor can use a lightweight calculator to request an approximate estimate for relevant products or services.
  2. Visitor can see which key inputs affect the estimate without being forced through a deep configurator.
  3. Visitor can clearly see that the result is an estimate rather than a final contract price.
  4. Visitor can hand calculator context into the lead flow without re-entering the core request details.
**Plans**: TBD
**UI hint**: yes

### Phase 5: Launch Analytics and Cloudflare Validation
**Goal**: The landing is measurable and validated in the real Cloudflare runtime before public launch.
**Depends on**: Phase 4
**Requirements**: SITE-04, SITE-05
**Success Criteria** (what must be TRUE):
  1. Core CTA clicks, form submissions, and calculator handoff interactions can be tracked for launch analysis.
  2. The site can be deployed successfully to the Cloudflare target runtime and validated there rather than only in local development.
  3. Launch verification confirms the production path is ready for public traffic with the current landing feature set.
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Offer Backbone and First-Screen Refinement | 3/3 | Reopened (executing fixes) | 2026-03-24 |
| 2. Responsive Landing and Proof Architecture | 0/TBD | Not started | - |
| 3. Canonical Lead Capture System | 0/TBD | Not started | - |
| 4. Calculator and Qualification Handoff | 0/TBD | Not started | - |
| 5. Launch Analytics and Cloudflare Validation | 0/TBD | Not started | - |
