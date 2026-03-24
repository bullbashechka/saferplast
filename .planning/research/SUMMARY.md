# Project Research Summary

**Project:** SaFerplast
**Domain:** Cloudflare-hosted lead-generation landing site for PVC/aluminum windows, doors, balconies, glazing, repair, and installation services
**Researched:** 2026-03-24
**Confidence:** HIGH

## Executive Summary

SaFerplast is not a SaaS product and it should not be built like one. The research converges on a static-first, SEO-capable local-service landing experience with a narrow set of client-side interactions: a lightweight calculator, short lead forms, sticky contact actions, and messenger handoff. The right implementation is a Next.js 15 App Router site on Cloudflare Workers via `@opennextjs/cloudflare`, with one canonical lead ingestion path on the server for validation, anti-spam, persistence, attribution capture, and operator notification.

The recommended approach is to launch a conversion-first MVP, not a feature-rich showroom. That means one clear hero promise, segmented service/product clarity, real trust proof, a simple approximate calculator, and a minimal lead capture flow backed by D1, Turnstile, and provider adapters for Telegram plus optional WhatsApp integration. Content should stay code-managed, pricing logic should stay in typed config and pure functions, and the architecture should stay modular enough to expand into service pages later without redesigning the backend.

The major risks are also consistent across the research: generic messaging, thin SEO structure, weak proof, fragmented CTAs, spam-prone lead handling, and an over-precise calculator that creates false expectations. Mitigation is straightforward but has to happen early: define the offer and CTA hierarchy before polishing UI, centralize lead handling before adding multiple forms, position the calculator as an estimator rather than a quote engine, and validate in the Cloudflare runtime before launch rather than trusting `next dev`.

## Key Findings

### Recommended Stack

The stack recommendation is stable and should not be broadened. Keep the existing `Next.js 15 + React 19 + TypeScript + Tailwind 3.4` foundation, deploy on Cloudflare Workers through `@opennextjs/cloudflare`, and use Cloudflare-native services where they directly solve business risk: Turnstile for anti-spam, D1 for lead retention, and optional Queues later for retryable fanout. The business-critical backend boundary is a Next route handler, not a separate API service.

**Core technologies:**
- `Next.js 15` App Router: routing, metadata, route handlers, and static-first rendering for an SEO-first landing site.
- `React 19`: UI runtime for mostly server-rendered sections with small client islands where interactivity is real.
- `TypeScript 5`: typed boundaries for lead payloads, pricing rules, and content config so the marketing site does not drift into untyped logic.
- `Tailwind CSS 3.4`: fast implementation of the landing UI without introducing migration risk during this milestone.
- `@opennextjs/cloudflare` and `wrangler`: the documented deployment path for Cloudflare Workers and branch preview workflows.
- `Zod 4`: shared validation for form payloads and calculator contracts on both client and server.
- `Cloudflare Turnstile`: bot protection that matches the hosting platform and can be verified server-side on Workers.
- `Cloudflare D1`: mandatory MVP persistence so leads are retained even if chat delivery fails.

**Critical version/runtime requirements:**
- Stay on `Tailwind 3.4.x` for this milestone; do not fold a Tailwind 4 migration into the landing launch.
- Use current stable `@opennextjs/cloudflare` and `wrangler` with the Workers deployment shape already implied by `wrangler.jsonc`.
- Enable the OpenNext Workers pattern with `.open-next/worker.js`, `.open-next/assets`, and `nodejs_compat`.

### Expected Features

The feature research is clear about what converts in this category: users want immediate clarity, immediate trust, and an immediate path to consultation or measurement. MVP should stay narrow and conversion-oriented rather than trying to simulate a full configurator or ecommerce flow.

**Must have (table stakes):**
- Strong first-screen CTA with visible phone and messenger actions.
- Short lead form with minimal required fields.
- Clear service and product segmentation across windows, doors, balconies, repair, glazing, hardware, sills, and slopes.
- PVC vs aluminum explanation and property-type fit.
- Real trust proof: reviews, warranty/guarantee, differentiators, and real project imagery.
- Simple price orientation: price factors, "from" messaging, or a lightweight calculator.
- Process section, timeline expectations, FAQ, service area, and local contact proof.

**Should have (competitive):**
- Calculator result capture that pre-fills lead context.
- Messenger handoff from the estimate flow.
- Use-case recommendation blocks and comparison tables.
- Urgent repair shortcut path.
- Before/after gallery or stronger project proof.

**Defer (v2+):**
- Full ecommerce checkout.
- Deep technical configurator or premium visualizer.
- Large content hub/blog at launch.
- CRM-style customer cabinet.
- Advanced channel-routing logic and rich gallery filtering.

### Architecture Approach

The architecture should follow one rule: static marketing content stays simple, interactive logic stays isolated, and every conversion surface submits through one server contract. `src/app/page.tsx` should remain a composition root, section content should be driven from structured config, the calculator should be a pure client island backed by pure functions and schemas, and all lead capture surfaces should POST to a single `/api/leads` route that orchestrates validation, anti-spam, D1 persistence, attribution capture, and provider fanout.

**Major components:**
1. Landing feature modules: mostly server-rendered sections for hero, services, benefits, proof, FAQ, and contact blocks, driven by centralized content data.
2. Calculator module: client-side shell plus pure calculation engine, schemas, mappers, and estimate summary for approximate pricing.
3. Lead form module: reusable form UI and payload helpers used by hero, calculator handoff, contacts, footer, and sticky CTA surfaces.
4. Lead service and provider adapters: server-side orchestration for validation, Turnstile, D1 insert, Telegram notification, and optional WhatsApp delivery.
5. Shared content and analytics layer: `site-content`, media metadata, environment validation, and event helpers so copy, phone numbers, offers, and event names do not drift across sections.

### Critical Pitfalls

1. **Generic offer and messaging**: avoid a vague "we do everything" homepage by making the hero answer service, geography, trust reason, and next action immediately.
2. **Thin SEO structure**: do not treat one homepage as the entire SEO strategy; the roadmap should leave room for service-led and selectively unique location pages after the conversion core is stable.
3. **Weak trust proof**: stock-heavy UI without real photos, reviews, guarantees, and local proof will suppress conversion on a high-ticket service purchase.
4. **Lead capture friction and fragility**: long forms, fragmented CTAs, exposed secrets, or missing server-side anti-spam will kill the main business outcome.
5. **False calculator precision**: use estimate ranges with explicit assumptions and route users toward measurement requests rather than pretending to generate a final quote.

## Implications for Roadmap

Based on the combined research, the roadmap should be structured around dependency order and business risk, not around visual page sections alone.

### Phase 1: Offer, Messaging, and Content Backbone
**Rationale:** Messaging quality and CTA hierarchy are upstream of every later UI and SEO decision. This phase also creates the single source of truth the architecture expects.
**Delivers:** offer hierarchy, CTA strategy, structured `site-content` model, service taxonomy, trust-proof inventory, local/contact content, and content-ready section outlines.
**Addresses:** hero CTA, service clarity, product segmentation, differentiators, warranty/proof, service area relevance.
**Avoids:** generic messaging, CTA fragmentation, overpromising discount language, and Figma-perfect implementation with placeholder content.

### Phase 2: Static Landing and Information Architecture
**Rationale:** Once the content backbone exists, the mostly server-rendered landing sections can be implemented cleanly and can establish SEO and navigation structure without waiting on backend integrations.
**Delivers:** header/navigation, hero, services, material comparison, trust/proof sections, process, FAQ, contacts/footer, metadata, sitemap, robots, JSON-LD, and a clear path for later service/location pages.
**Uses:** Next.js App Router, React server components, Tailwind, Metadata API, structured content files.
**Implements:** landing feature modules, shared UI primitives, media/content rendering patterns.
**Avoids:** thin SEO structure, doorway-page pressure, weak mobile-first layout foundations, and content drift in JSX.

### Phase 3: Lead Infrastructure and Reusable Form System
**Rationale:** Lead capture is the core business path. It has to be correct before multiple entry points are wired into it.
**Delivers:** canonical lead schema and payload contract, reusable lead form, `/api/leads`, Turnstile verification, D1 persistence, attribution capture, Telegram delivery, optional WhatsApp adapter, error/success contracts.
**Uses:** Zod, Next route handlers, Cloudflare Workers, Turnstile, D1.
**Implements:** lead-form feature, `lead-service`, provider adapters, anti-spam boundary.
**Avoids:** long-form inconsistency, spam abuse, secret leakage, silent delivery failures, and analytics drift between forms.

### Phase 4: Calculator and Qualification UX
**Rationale:** The calculator only matters if it feeds a working lead pipeline and stays honest about estimation limits.
**Delivers:** typed calculator schema, pricing config, pure calculator engine, client-side calculator UI, estimate summary, disclaimer model, and calculator-to-lead bridge.
**Addresses:** price discovery, simple calculator, free measurement handoff, estimate context capture.
**Avoids:** false precision, qualification friction, inline pricing logic in components, and orphaned calculator flows that do not convert.

### Phase 5: Analytics, Hardening, and Cloudflare Launch Validation
**Rationale:** Instrumentation and production validation should happen after the interactive surfaces are stable, but before public launch.
**Delivers:** CTA and submission analytics, calculator funnel events, mobile performance hardening, accessibility pass, rate limiting, Cloudflare preview/runtime validation, deployment config verification, and launch checklist.
**Uses:** Cloudflare Web Analytics or equivalent event helpers, Workers preview/deploy flow, runtime env validation.
**Implements:** analytics helpers, production QA, deployment verification.
**Avoids:** no-attribution launch, mobile conversion loss, `next dev` versus Workers runtime surprises, and stale or inaccurate operational details.

### Phase Ordering Rationale

- Phase 1 comes first because the biggest failure mode is bad offer definition, not missing code. Without that, later UI work optimizes the wrong message.
- Phase 2 follows because the landing shell is mostly static and depends on content structure more than backend completion.
- Phase 3 must precede broad CTA rollout because every form surface should normalize into one secure server path.
- Phase 4 is intentionally after lead infrastructure so the calculator can hand off cleanly and reuse the canonical payload contract.
- Phase 5 closes the loop by validating the real production path on Cloudflare and instrumenting the funnel once interaction points are stable.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** WhatsApp delivery should be researched against the client’s actual Meta Business readiness, approved channel options, and regional operating constraints.
- **Phase 5:** Cloudflare deployment validation may need focused runtime research if local Node assumptions or unsupported APIs appear during implementation.
- **Future SEO expansion after Phase 2:** service/location page strategy should be researched again once proof assets and genuine service-area differentiation are available.

Phases with standard patterns (skip research-phase):
- **Phase 1:** messaging/content modeling is domain-specific but already well resolved by the current research set.
- **Phase 2:** App Router landing composition, metadata, JSON-LD, and static section implementation are established patterns.
- **Phase 4:** a lightweight client-side estimator backed by typed config and pure functions is a standard fit for this product shape.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Strongly supported by official Cloudflare, Next.js, and Zod documentation; recommendation cleanly matches the existing repo direction. |
| Features | MEDIUM | Core conversion expectations are well supported by competitor patterns, but some messenger/channel preferences are more project-specific than industry-standard. |
| Architecture | HIGH | The proposed architecture directly matches Next.js App Router and Cloudflare deployment patterns and is reinforced by the local scaffold. |
| Pitfalls | MEDIUM-HIGH | Several risks are backed by platform documentation and search guidance; some conversion and trust recommendations remain informed inference rather than primary-source proof. |

**Overall confidence:** HIGH

### Gaps to Address

- **WhatsApp integration readiness:** confirm whether the business will use official WhatsApp Business/Cloud API, click-to-chat only, or Telegram-first fallback at launch.
- **Real trust assets:** validate the availability of real project photos, testimonials, guarantees, certifications, and production/team proof before finalizing the conversion-heavy sections.
- **SEO expansion scope:** decide post-MVP whether SaFerplast can support unique service pages and genuinely differentiated location pages without doorway-page risk.
- **Pricing maintenance model:** define who will own calculator coefficients and how pricing updates will be versioned once campaigns are live.
- **Analytics destination:** confirm whether Cloudflare Web Analytics alone is sufficient or if GA4/ad platform tagging is required for paid acquisition from day one.

## Sources

### Primary (HIGH confidence)
- Cloudflare Workers / Next.js framework guides - deployment shape, runtime model, Workers-native hosting, preview/deploy considerations.
- Cloudflare Turnstile docs - server-side validation pattern and anti-bot requirements.
- Cloudflare storage and analytics docs - D1 suitability, Cloudflare Web Analytics baseline, optional Queues growth path.
- Next.js App Router and route handler docs - server/client component boundaries, metadata, route handlers, and landing architecture conventions.
- Google Search Central and Google Business Profile docs - local business structured data, mobile-first indexing, doorway-page risk, service-area business guidance.
- [STACK.md](/C:/Users/fm/Documents/Business/Saferplast_main/.planning/research/STACK.md)
- [ARCHITECTURE.md](/C:/Users/fm/Documents/Business/Saferplast_main/.planning/research/ARCHITECTURE.md)

### Secondary (MEDIUM confidence)
- Competitor pattern review across Pella, Renewal by Andersen, Window World, and Anglian - table-stakes feature expectations, proof patterns, and quote-request UX.
- Industry guidance cited in pitfalls research - trust, CTA hierarchy, contractor SEO errors, and estimator expectations.
- [FEATURES.md](/C:/Users/fm/Documents/Business/Saferplast_main/.planning/research/FEATURES.md)
- [PITFALLS.md](/C:/Users/fm/Documents/Business/Saferplast_main/.planning/research/PITFALLS.md)

### Tertiary (LOW confidence)
- Project-specific inferences about channel preference, local proof availability, and future SEO rollout timing - these are reasonable but still require business validation during planning.

---
*Research completed: 2026-03-24*
*Ready for roadmap: yes*
