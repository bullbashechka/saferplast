# Domain Pitfalls

**Domain:** Service-business landing page for PVC/aluminum windows, doors, balconies, repair, and installation
**Project:** SaFerplast
**Researched:** 2026-03-24
**Overall confidence:** MEDIUM-HIGH

## Critical Pitfalls

### Pitfall 1: Generic "we do everything" messaging that never answers the buyer's actual job
**What goes wrong:** The page speaks in broad claims like "quality windows and doors" instead of matching the concrete intent users arrive with: replacement, repair, glazing, balcony work, measurement, urgency, and service area.
**Why it happens:** Owners try to keep one broad page for all audiences, all property types, and all services.
**Consequences:** High bounce on paid and organic traffic, poor CTA response, weak ad-to-page message match, and shallow relevance for local search.
**Warning signs:**
- Hero headline could fit any contractor.
- Ads mention one offer but the page opens with a different promise.
- Services are collapsed into one undifferentiated block.
- Users ask basic qualifying questions that the page should answer immediately.
**Prevention:**
- Make the above-the-fold section answer four things fast: service, geography, trust reason, next action.
- Separate major intents in-page or across dedicated pages: manufacturing, installation, repair, balconies, doors, glazing units, hardware.
- Keep the first CTA tightly aligned with the offer: consultation, free measurement, calculator, or discount claim.
- Use plain buyer language, not internal product taxonomy first.
**Phase to address:** Phase 1 `Messaging + Offer Strategy`, Phase 2 `Information Architecture`

### Pitfall 2: Thin SEO structure that relies on one homepage and a generic services block
**What goes wrong:** The site is launched as a nice single-page brochure with no durable search footprint for service + city intent.
**Why it happens:** Teams optimize for speed of launch and assume one landing page is enough for local SEO.
**Consequences:** Weak rankings for high-intent queries, low discoverability outside branded traffic, and overdependence on ads or referrals.
**Warning signs:**
- Only one indexable page targets every service.
- Title tags and headings lack service-area intent.
- No crawlable internal links to service/location content.
- Search Console shows low impressions for non-brand queries.
**Prevention:**
- Treat the landing page as conversion core, not the entire SEO strategy.
- Add dedicated indexable pages for major services and, only where genuinely distinct, major service areas.
- Ensure city/service pages have unique value, not spun duplicates, to avoid doorway-page patterns.
- Submit a sitemap and validate indexing after launch.
- Add `LocalBusiness`/relevant structured data with accurate business fields.
**Phase to address:** Phase 2 `Information Architecture + SEO Foundation`, Phase 5 `Launch SEO`

### Pitfall 3: Doorway-style city pages or duplicate location content
**What goes wrong:** The team creates many near-identical "[service] in [city]" pages with swapped place names.
**Why it happens:** Local SEO is reduced to page-count tactics.
**Consequences:** Weak quality signals, crawl waste, possible spam classification, and pages that do not convert because they contain no real local proof.
**Warning signs:**
- Only city names differ between location pages.
- Pages are hard to reach from normal navigation.
- Each location page funnels to the same generic section with no unique content.
- Teams talk about "covering keywords" more than user needs.
**Prevention:**
- Create location pages only where SaFerplast can add distinct content: service constraints, photos, delivery details, testimonials, neighborhoods, or logistics.
- Keep pages integrated into real navigation and internal linking.
- Use one strong service-area page over many low-value city pages if unique proof is not available.
**Phase to address:** Phase 2 `Information Architecture + SEO Foundation`

### Pitfall 4: Weak trust proof for a high-ticket home-service purchase
**What goes wrong:** The site asks homeowners or facility managers to submit a lead before proving legitimacy.
**Why it happens:** Design focuses on aesthetics, not risk reduction.
**Consequences:** Users compare competitors instead of converting; paid traffic becomes expensive and low quality.
**Warning signs:**
- Stock photos dominate.
- No real installation photos, team photos, reviews, guarantees, or certification/manufacturer proof.
- No clear address/service area/phone/hours.
- Promotional discount appears before credibility does.
**Prevention:**
- Put trust evidence above and around CTAs: real project photos, review excerpts, years in business, warranty/guarantee terms, installation process, response time, and service area clarity.
- Show the difference between in-house production and intermediary resellers with evidence, not slogans.
- Include proof for residential and commercial work if both are targeted.
**Phase to address:** Phase 1 `Messaging + Proof Collection`, Phase 3 `UI Implementation`

### Pitfall 5: Long or premature lead forms that ask for too much before trust exists
**What goes wrong:** The first conversion step asks for full address, multiple specs, attachments, and detailed measurements.
**Why it happens:** Sales wants fully qualified leads before first contact.
**Consequences:** Form abandonment, fake data, lower WhatsApp/Telegram handoff volume, and worse mobile completion.
**Warning signs:**
- More than a few required fields on the first form.
- Mobile users start but do not submit.
- Form completion rate is much lower than CTA click rate.
- Users prefer calling or messaging because the form feels heavier.
**Prevention:**
- Keep first-step capture minimal: name, phone/contact method, service need, optional comment.
- Use a second step or human follow-up for detailed dimensions and product specifics.
- If a calculator exists, convert it into a lead assist, not a qualification gate.
- Make CTA choice explicit: call, WhatsApp, Telegram, or form.
**Phase to address:** Phase 4 `Lead Capture + Calculator UX`

### Pitfall 6: Unsafe lead handling and bot abuse on public forms
**What goes wrong:** Lead endpoints are exposed without strong server-side validation, anti-automation, or rate limiting.
**Why it happens:** Landing pages feel "simple," so security is treated as optional.
**Consequences:** Spam floods, fake leads, broken WhatsApp/Telegram workflows, possible data leakage, and launch-day fire drills.
**Warning signs:**
- Sudden spikes in empty or nonsense submissions.
- Secrets or chat IDs leak into client code.
- Anti-bot widget exists, but no server validation is implemented.
- Lead routes accept repeated requests from the same source unchecked.
**Prevention:**
- Keep all messaging credentials server-side only.
- Validate anti-bot tokens on the server; do not rely on client-only checks.
- Add route-level rate limiting and input validation.
- Log failed submissions and abuse signals.
- Add abuse-safe fallbacks so lead delivery failure does not silently drop requests.
**Phase to address:** Phase 4 `Lead Capture Backend`, Phase 5 `Production Hardening`

### Pitfall 7: Calculator logic that looks precise but is actually misleading
**What goes wrong:** The calculator produces exact-looking prices for a product that depends on measurement, installation conditions, hardware, glazing, and repair complexity.
**Why it happens:** Teams want a strong conversion device and overstate pricing certainty.
**Consequences:** Mistrust, poor lead quality, sales friction, and post-lead disappointment.
**Warning signs:**
- Calculator outputs a single definitive number without caveats.
- No note about measurement, access, dismantling, add-ons, or installation variables.
- Sales team frequently overrides quoted numbers.
**Prevention:**
- Position the tool as an approximate estimator.
- Use ranges or "from" pricing where appropriate.
- Explain key assumptions inline.
- Route users from estimate to measurement request, not to a false checkout mindset.
**Phase to address:** Phase 4 `Calculator UX + Logic`

### Pitfall 8: Mobile-first failure on the exact device mix local leads use
**What goes wrong:** The page looks good on desktop comps but loads slowly, shifts during render, or hides the main CTA on phones.
**Why it happens:** Large hero media, unbounded layout changes, and desktop-biased QA.
**Consequences:** Lost local leads, weaker rankings, and poor ad efficiency because Google indexes mobile first.
**Warning signs:**
- Tap targets are cramped.
- Sticky bars cover content or conflict with keyboards.
- Images dominate LCP.
- Users bounce before reaching services or forms.
**Prevention:**
- Design and QA the mobile flow first.
- Reserve space for media and dynamic blocks to avoid layout shift.
- Compress imagery aggressively and keep the first screen lightweight.
- Track Core Web Vitals, especially LCP, INP, and CLS, on mobile.
**Phase to address:** Phase 3 `Responsive UI`, Phase 5 `Performance Tuning`

### Pitfall 9: CTA fragmentation between call, WhatsApp, Telegram, calculator, and form
**What goes wrong:** The page offers too many equivalent actions with no hierarchy.
**Why it happens:** Every stakeholder wants their preferred channel visible at once.
**Consequences:** Choice paralysis, poor analytics clarity, weaker funnel optimization.
**Warning signs:**
- Every section introduces a different primary action.
- Buttons have different promises for the same outcome.
- Team cannot say which CTA is primary for cold traffic.
**Prevention:**
- Define one primary CTA per section and one primary conversion path overall.
- Use secondary actions as support, not competition.
- Keep message framing consistent across button labels and destination flows.
- Instrument each CTA channel separately so results can be compared.
**Phase to address:** Phase 1 `Conversion Strategy`, Phase 3 `UI Implementation`, Phase 5 `Analytics`

### Pitfall 10: No attribution or operational visibility after launch
**What goes wrong:** Leads arrive through calls and messengers, but nobody knows which page, campaign, or CTA produced them.
**Why it happens:** The launch focuses on visual completion rather than measurement.
**Consequences:** The team cannot improve copy, layout, or spend allocation with confidence.
**Warning signs:**
- No event tracking on CTA clicks and submits.
- Messenger links drop campaign context.
- Team judges success only from anecdotal lead volume.
**Prevention:**
- Track CTA clicks, form starts, form submits, calculator completion, and channel handoffs.
- Preserve source/UTM context into lead payloads where feasible.
- Define a basic reporting view before launch: sessions, conversion rate, top CTA, top source, failed submissions.
**Phase to address:** Phase 5 `Analytics + Launch Readiness`

## Moderate Pitfalls

### Pitfall 11: Treating the business like a storefront instead of a service-area business
**What goes wrong:** Address, service area, and Google Business Profile setup do not reflect how the company actually operates.
**Prevention:** Align site and GBP with the real operating model, keep one accurate profile per legitimate location, and avoid fake offices or misleading address display.
**Warning signs:** Mismatch between site footer, maps presence, and actual dispatch/service model.
**Phase to address:** Phase 2 `Local SEO Setup`, Phase 5 `Launch SEO`

### Pitfall 12: Overpromising with discount language and urgency banners
**What goes wrong:** "Up to 15%" and similar promos become the dominant story without clear conditions.
**Prevention:** State qualifying conditions, keep urgency honest, and avoid making the discount more prominent than the core value proposition.
**Warning signs:** Users ask what the discount really means; team changes promo text often; trust feels lower after the hero.
**Phase to address:** Phase 1 `Offer Strategy`, Phase 3 `Copy Integration`

### Pitfall 13: Figma-perfect implementation that ignores production content reality
**What goes wrong:** The page matches the design visually but breaks when real testimonials, long city names, legal copy, or messenger states are inserted.
**Prevention:** Implement with real content lengths, multiple breakpoints, and content-stress QA rather than screenshot QA only.
**Warning signs:** Layout holds only with placeholder text; cards break when content changes.
**Phase to address:** Phase 3 `UI Implementation`

### Pitfall 14: Testing only in `next dev` and missing Cloudflare runtime issues
**What goes wrong:** Features work locally in Node-based development but fail or behave differently in the Cloudflare Workers runtime.
**Prevention:** Run preview/testing in the Cloudflare-target runtime before release, verify env vars in build/deploy, and avoid unsupported assumptions in middleware/runtime usage.
**Warning signs:** Environment-specific bugs appear only after deployment; secrets are missing in build; runtime APIs differ from local expectations.
**Phase to address:** Phase 5 `Deployment Validation`

## Minor Pitfalls

### Pitfall 15: Accessibility debt on core conversion actions
**What goes wrong:** Contrast, focus states, labels, and keyboard flow are weak on forms and CTA controls.
**Prevention:** Audit the primary funnel for accessible labels, tap sizes, error messaging, and visible focus states.
**Warning signs:** Form errors are color-only; buttons are hard to activate on mobile; screen-reader labels are absent.
**Phase to address:** Phase 3 `UI Implementation`, Phase 5 `QA`

### Pitfall 16: Ignoring freshness and operational accuracy
**What goes wrong:** Prices, hours, service area, promo text, or warranty claims age out after launch.
**Prevention:** Keep a lightweight maintenance checklist for business data, GBP, promo content, and social proof rotation.
**Warning signs:** Outdated copyright, expired offers, mismatched hours, stale gallery.
**Phase to address:** Phase 5 `Launch Ops`

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Messaging and offer definition | Generic hero and unfocused CTA hierarchy | Define one primary promise and one primary action per audience entry point |
| Information architecture | Single-page brochure structure | Add service-led content structure and only create location pages with unique proof |
| SEO setup | Doorway pages, weak titles, missing structured data | Build unique service/location assets, submit sitemap, implement accurate local business schema |
| UI implementation | Desktop-first polish, mobile pain | QA mobile first, reserve layout space, prioritize fast first-screen rendering |
| Trust content | Empty claims with no proof | Gather real photos, reviews, guarantees, and service-area evidence before final build |
| Lead capture backend | Spam, silent delivery failures, exposed secrets | Server-side validation, rate limiting, retry/failure logging, secrets only on server |
| Calculator | False precision and qualification friction | Use ranges/assumptions and hand off to measurement request |
| Deployment | Works in `dev`, fails on Cloudflare | Test in Cloudflare preview/runtime before launch |
| Analytics | No attribution across CTA channels | Track each CTA separately and preserve campaign context |
| Post-launch ops | Stale business details | Maintain a recurring content/GBP accuracy checklist |

## Recommended Roadmap Implications

1. Start with messaging, proof collection, and CTA hierarchy before pixel-perfect Figma implementation.
2. Treat SEO architecture as a separate planning concern from the single-page launch shell.
3. Build form delivery, anti-spam, and analytics before calling the landing page "done."
4. Validate in the Cloudflare target runtime before public launch, not after.

## Sources

- `.planning/PROJECT.md` for project scope and constraints
- Google Search Central: Local business structured data — https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central: Mobile-first indexing best practices — https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- Google Search Central blog: doorway pages guidance — https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages
- Google Search Central: link best practices — https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Business Profile Help: guidelines for representing your business — https://support.google.com/business/answer/3038177
- Google Business Profile Help: service businesses overview — https://support.google.com/business/answer/10514743
- Google Business Profile Help: service areas — https://support.google.com/business/answer/9157481
- web.dev: Core Web Vitals thresholds — https://web.dev/articles/vitals
- web.dev: INP — https://web.dev/inp/
- web.dev: CLS — https://web.dev/articles/cls
- Cloudflare Turnstile: server-side validation — https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Cloudflare Workers: rate limiting — https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/
- Cloudflare Workers: Next.js on Workers / preview vs dev — https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- Industry pattern references, used as supporting evidence only: NexSite contractor lead failures (2025), BusySeed local SEO for home services (updated Jan 2026), Sash Window Websites SEO mistakes (2025), Darren Slaughter contractor conversion failures (2025), Home Service Direct window replacement SEO guide (2026)

## Confidence Notes

- **HIGH:** Mobile-first indexing, structured data, doorway-page risk, service-area business setup, Turnstile server validation, Cloudflare rate limiting, `dev` vs Cloudflare preview/runtime distinction.
- **MEDIUM:** Trust-proof placement, CTA hierarchy, form-friction, estimator positioning, and attribution recommendations. These are strongly supported by current industry evidence, but not all come from primary platform docs.
