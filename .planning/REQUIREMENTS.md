# Requirements: SaFerplast

**Defined:** 2026-03-24
**Core Value:** Visitors can quickly understand the offer and safely send a request for consultation, measurement, or price estimation without friction.

## v1 Requirements

### Content Backbone

- [x] **CONT-01**: Visitor can understand within the first screen that SaFerplast manufactures, installs, and repairs PVC and aluminum windows, doors, and balconies
- [x] **CONT-02**: Visitor can see a clear primary CTA for consultation, measurement, or estimate request above the fold
- [x] **CONT-03**: Visitor can browse structured service and product categories for windows, doors, balconies, glazing units, hardware, sills, and slopes
- [x] **CONT-04**: Visitor can understand the difference between PVC and aluminum solutions and their use cases
- [x] **CONT-05**: Visitor can see that the company works with apartments, private houses, offices, and commercial spaces

### Trust and Proof

- [x] **TRST-01**: Visitor can see the company differentiators, including own production, direct pricing, and speed of work
- [x] **TRST-02**: Visitor can see warranty or guarantee information for production and installation work
- [x] **TRST-03**: Visitor can view real trust proof such as project media, testimonials, or equivalent credibility content
- [x] **TRST-04**: Visitor can understand the service process from request to installation or repair completion
- [x] **TRST-05**: Visitor can find answers to common objections in an FAQ section

### Lead Capture

- [ ] **LEAD-01**: Visitor can call the business from the landing page via a visible phone action
- [ ] **LEAD-02**: Visitor can submit a request from the first screen with full name, phone, and optional comment
- [ ] **LEAD-03**: Visitor can submit a request from the end of the landing with the same canonical payload
- [ ] **LEAD-04**: All landing forms submit through one validated server-side lead ingestion path
- [ ] **LEAD-05**: Submitted leads are stored reliably even if messenger delivery fails
- [ ] **LEAD-06**: Submitted leads are routed to WhatsApp-first operational handling with Telegram as fallback or secondary delivery
- [ ] **LEAD-07**: Lead submission is protected against spam and invalid payloads

### Calculator and Price Discovery

- [ ] **CALC-01**: Visitor can request a simple approximate calculation for relevant products or services
- [ ] **CALC-02**: The calculator explains that the result is an estimate, not a final contract price
- [ ] **CALC-03**: The calculator captures the key factors that affect price without becoming a deep configurator
- [ ] **CALC-04**: Visitor can hand calculator context into the lead flow without re-entering core request information

### UX, SEO, and Delivery

- [x] **SITE-01**: Visitor can use the landing comfortably on desktop and mobile layouts
- [x] **SITE-02**: The landing exposes search-friendly metadata and structure for browser discoverability
- [x] **SITE-03**: Visitor can find contact details and service-area relevance on the page
- [ ] **SITE-04**: The site can be deployed and validated on Cloudflare in a production-ready runtime
- [ ] **SITE-05**: Core CTA and form interactions can be instrumented for launch analytics

## v2 Requirements

### Conversion Enhancements

- **CVRT-01**: Visitor can send calculator results directly into a messenger conversation with richer context
- **CVRT-02**: Visitor can use an urgent repair shortcut flow distinct from full replacement requests
- **CVRT-03**: Visitor can choose preferred contact channel between callback, WhatsApp, and Telegram

### Richer Persuasion

- **RICH-01**: Visitor can browse a before-and-after gallery of completed work
- **RICH-02**: Visitor can compare materials and system types through dedicated comparison tables
- **RICH-03**: Visitor can view production or team credibility sections with authentic media

### Growth Features

- **GROW-01**: The site can expand into service pages and unique location pages without redesigning core content architecture
- **GROW-02**: Pricing coefficients can be updated through a clear operational process without fragile code edits

## Out of Scope

| Feature | Reason |
|---------|--------|
| Full ecommerce checkout | Window and door work is custom-scoped after measurement |
| Personal account or customer cabinet | Not needed for the first public lead-generation version |
| CRM dashboard | Operational follow-up can stay outside the site for v1 |
| Large blog or content hub | Does not help the initial launch path enough to justify scope |
| Deep technical configurator or visualizer | High effort and likely to create false precision in v1 |
| Email-based lead delivery | Client priority is WhatsApp and Telegram rather than email |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CONT-01 | Phase 1 | Complete |
| CONT-02 | Phase 1 | Complete |
| CONT-03 | Phase 2 | Complete |
| CONT-04 | Phase 2 | Complete |
| CONT-05 | Phase 1 | Complete |
| TRST-01 | Phase 1 | Complete |
| TRST-02 | Phase 2 | Complete |
| TRST-03 | Phase 2 | Complete |
| TRST-04 | Phase 2 | Complete |
| TRST-05 | Phase 2 | Complete |
| LEAD-01 | Phase 3 | Pending |
| LEAD-02 | Phase 3 | Pending |
| LEAD-03 | Phase 3 | Pending |
| LEAD-04 | Phase 3 | Pending |
| LEAD-05 | Phase 3 | Pending |
| LEAD-06 | Phase 3 | Pending |
| LEAD-07 | Phase 3 | Pending |
| CALC-01 | Phase 4 | Pending |
| CALC-02 | Phase 4 | Pending |
| CALC-03 | Phase 4 | Pending |
| CALC-04 | Phase 4 | Pending |
| SITE-01 | Phase 2 | Complete |
| SITE-02 | Phase 2 | Complete |
| SITE-03 | Phase 1 | Complete |
| SITE-04 | Phase 5 | Pending |
| SITE-05 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0

---
*Requirements defined: 2026-03-24*
*Last updated: 2026-03-24 after roadmap creation*
