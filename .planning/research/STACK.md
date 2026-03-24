# Technology Stack

**Project:** SaFerplast
**Researched:** 2026-03-24
**Scope:** Stack dimension for a Cloudflare-hosted lead-generation landing site for PVC/aluminum windows, doors, balconies, and related installation services.
**Overall recommendation confidence:** HIGH

## Recommended Stack

This repo should stay a lean `Next.js 15 + React 19 + TypeScript + Tailwind` application and be deployed to **Cloudflare Workers using `@opennextjs/cloudflare`**, not rebuilt into a CMS-heavy marketing stack or a generic SaaS architecture.

The core shape is:

- **Mostly static App Router pages** for fast first paint, SEO, and easy Figma implementation.
- **Small client islands** only where interaction is real: calculator, form validation UX, sticky CTA behavior.
- **One server-side lead ingestion boundary** on Cloudflare for validation, anti-spam, persistence, and delivery fanout.
- **Cloudflare-native protection and deployment** instead of bolting on third-party hosting patterns.

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 15.x | Rendering, routing, metadata, route handlers | Already in repo; App Router is a strong fit for SEO-first marketing pages with a few interactive sections. |
| React | 19.x | UI runtime | Already in repo; keep component logic small and isolated to true interactive blocks. |
| TypeScript | 5.x | Type safety for lead payloads, calculator inputs, content config | Valuable here because pricing logic and lead schemas will drift without typed boundaries. |
| Tailwind CSS | 3.4.x for this milestone | Styling and design-token implementation | Repo already uses Tailwind 3; upgrading to Tailwind 4 during landing build adds migration risk with little business value. |

### Cloudflare Runtime and Delivery

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `@opennextjs/cloudflare` | latest stable | Adapt Next.js build output to Cloudflare Workers | Cloudflare’s current documented path for existing Next.js apps on Workers. |
| `wrangler` | latest stable | Local preview, secrets, deploys, CI integration | Required for Workers deployments and already scaffolded via `wrangler.jsonc`. |
| Cloudflare Workers | current platform | Hosting dynamic routes, route handlers, and edge delivery | Best fit for this repo’s Cloudflare target and lead-form handling needs. |
| Cloudflare Static Assets via OpenNext | current platform | Serve compiled static assets from `.open-next/assets` | Matches Cloudflare’s documented Next.js-on-Workers setup. |

### Lead Capture and Validation

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next Route Handlers (`app/api/...`) | built-in | Canonical form ingestion endpoint | Better boundary than scattering submission logic across UI components; easier to test, log, and fan out. |
| Zod | 4.x | Server-side schema validation for form and calculator payloads | Strong typed validation with low complexity; explicitly recommended by Next.js docs for form validation patterns. |
| Cloudflare Turnstile | current platform | Bot/spam protection on lead forms | Better fit than reCAPTCHA on a Cloudflare-hosted lead site; server-side verification runs cleanly on Workers. |

### Persistence and Delivery

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Cloudflare D1 | current platform | Persist lead submissions and captured attribution fields | The business explicitly wants a customer base; do not rely on chat delivery alone. D1 is sufficient for a landing-site lead table. |
| Telegram Bot API | current API | Secondary notification channel | Simple operational fallback and good for instant team visibility. |
| WhatsApp delivery | depends on business setup | Primary operator-facing lead delivery | Use official WhatsApp Business/Cloud API only if the client has Meta business readiness; otherwise use WhatsApp click-to-chat as CTA, not as the sole backend transport. |
| Cloudflare Queues | optional | Async fanout to WhatsApp/Telegram/webhooks | Not required on day one, but the right upgrade once you want retries and decoupled delivery. |

### Analytics and SEO

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next Metadata API | built-in | Titles, descriptions, canonical tags, OG metadata | Standard App Router SEO path; no extra package needed. |
| `robots.txt` and `sitemap.xml` file conventions | built-in | Crawlability and indexing | Table stakes for a search-visible local service site. |
| JSON-LD (`LocalBusiness`, `Service`) | manual script output | Rich local/business search context | Important for a regional service landing page. |
| Cloudflare Web Analytics | current platform | Baseline traffic analytics with minimal code | Good default if the team wants lightweight analytics without immediately adding a full marketing pixel stack. |

## Recommended Stack Shape For This Repo

### What should remain simple

- Keep the app as a **single App Router landing experience** with section-based composition under `src/features`.
- Keep the calculator as a **client component with local state only**.
- Keep pricing rules in **typed config/data files** under `src/lib` or `src/types`, not in a database.
- Keep content editable in code for now. A CMS is unnecessary for this first public version.
- Keep form ingestion behind **one route handler** and one shared schema module.

### What should be server-side

- Lead submission validation
- Turnstile verification
- Lead persistence to D1
- Delivery to Telegram and, if available, official WhatsApp API
- UTM and click-id capture normalization

### What should be client-side

- Calculator field interactions and instant estimate display
- Inline form validation feedback
- CTA micro-interactions like sticky mobile buttons or section jumps

## Deployment Pattern

## Recommended pattern

1. Build the Next.js app with OpenNext for Cloudflare.
2. Deploy to **Cloudflare Workers**, not a separate Node server.
3. Use `wrangler.jsonc` with:
   - `main: ".open-next/worker.js"`
   - `assets.directory: ".open-next/assets"`
   - `compatibility_flags: ["nodejs_compat"]`
4. Use **Workers Builds** for branch previews and production deployments from the main branch, or GitHub Actions if the team wants explicit CI steps.
5. Store secrets in Cloudflare, not `.env` in production.

### Why this is the right deployment choice

- It fits the repo’s existing `wrangler.jsonc` direction.
- It keeps hosting, WAF/CDN, analytics, and anti-bot tools in one platform.
- It supports the small amount of dynamic behavior this site needs without introducing a separate backend.
- It is easier to scale operationally than a purely static site once forms and attribution handling matter.

### What not to do

- Do not convert this into a fully static export if you need secure form processing.
- Do not introduce a separate Express/Nest backend just for lead capture.
- Do not add a headless CMS before launch.
- Do not depend on browser-only form delivery to Telegram/WhatsApp; secrets and validation must stay server-side.

## Form Delivery Options

### Recommended production path

**Route handler -> Zod validation -> Turnstile verify -> D1 insert -> delivery fanout**

That gives three things the business actually needs:

- reliable submission handling
- retained lead history
- operator notification

### Delivery choice ranking

| Option | Use | Recommendation | Tradeoff |
|--------|-----|----------------|----------|
| Official WhatsApp Business/Cloud API + Telegram fallback + D1 | Mature setup, client has Meta business approval | Best long-term option | Strongest workflow, but onboarding and template/policy setup can slow launch. |
| Telegram bot + D1 + WhatsApp click-to-chat CTA | Fastest launch path | Best MVP option if WhatsApp API is not ready | Reliable storage and notification, but WhatsApp remains human/manual. |
| Direct WhatsApp-only delivery without persistence | Simple on paper | Do not use | Too fragile; loses leads when delivery fails and leaves no internal lead database. |

### Practical recommendation for SaFerplast

For this milestone, build the backend so that **D1 is mandatory** and notification fanout is pluggable:

- `lead_submissions` table in D1
- `sendTelegramLead()` adapter
- `sendWhatsAppLead()` adapter behind a feature flag/config

This lets the site launch with Telegram fallback immediately while keeping the code ready for official WhatsApp API activation later.

## Calculator Implementation Shape

The calculator should be a **client component** backed by a typed pricing model, not a server-computed workflow.

### Recommended shape

- Inputs: width, height, room/property type, frame material, glazing package, opening type, extras
- Pricing data: typed constants/config in code
- Output: approximate range plus CTA to submit for measurement
- Submission: pass selected calculator options into the lead form payload

### Why this shape is right

- Price estimation is approximate anyway in this domain.
- Instant client-side feedback improves conversion.
- No API round-trip is needed for simple arithmetic and coefficient logic.
- The business can revise coefficients in code without introducing admin tooling.

### Guardrails

- Treat results as **estimated from standard assumptions**, not final quotes.
- Keep formulas transparent and shallow; avoid pretending the calculator is a real production estimator.
- Version pricing config so future changes do not silently skew campaign results.

## Table Stakes vs Optional Extras

### Table-stakes tooling

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- `@opennextjs/cloudflare`
- `wrangler`
- Zod
- Cloudflare Turnstile
- D1 for lead retention
- Telegram fallback notifications
- Metadata, sitemap, robots, canonical tags, OG image
- UTM capture and persistence

### Optional extras

- Cloudflare Queues for async retries
- Official WhatsApp Business/Cloud API
- GA4 / GTM / Meta Pixel / Google Ads conversion tags
- Call tracking
- A/B testing tooling
- CMS-backed content editing

## Analytics and SEO Expectations

### SEO baseline

- Unique page title and meta description
- Canonical URL
- Valid `robots.txt`
- Valid `sitemap.xml`
- Open Graph image
- JSON-LD for `LocalBusiness` and core service offerings
- Fast LCP with optimized hero media
- Static service copy rendered in HTML, not injected late on the client

### Analytics baseline

- Capture page views
- Capture form submission success/failure
- Capture calculator start/completion
- Persist UTM parameters and landing page URL with each lead

### Recommended analytics posture

- Start with **Cloudflare Web Analytics** for baseline visibility.
- Add **GA4 and ad platform conversion tags only if marketing operations actually need campaign attribution in those platforms**.
- Keep analytics scripts minimal until paid acquisition starts.

## Practical Fit For This Repository

This repo is already structured the right way for the product:

- `src/features/landing` for section-level UI
- `src/features/calculator` for a dedicated client component
- `src/features/lead-form` for the capture UX
- `src/lib` for pricing config, lead schemas, API adapters, and analytics helpers
- `src/types` for calculator and lead payload types

Recommended additions:

- `src/app/api/leads/route.ts`
- `src/lib/validation/lead-schema.ts`
- `src/lib/integrations/telegram.ts`
- `src/lib/integrations/whatsapp.ts`
- `src/lib/integrations/turnstile.ts`
- `src/lib/calculator/pricing.ts`
- `src/types/lead.ts`

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Hosting | Cloudflare Workers + OpenNext | Vercel | Wrong default for a repo that already targets Cloudflare and wants Cloudflare-native protections. |
| Form backend | Next route handler on Workers | Separate Node API | Operationally heavier than needed. |
| Validation | Zod | Ad hoc manual checks | Less maintainable and weaker type alignment. |
| Persistence | D1 | No database, chat-only delivery | Conflicts with the requirement to retain customer leads. |
| Calculator | Client-side typed config | Server-side calculator API | Extra latency and complexity without business benefit. |
| CMS | No CMS at launch | Headless CMS | Adds editorial complexity before the team has proven a content workflow need. |

## Recommended Installation

```bash
# Cloudflare deployment
npm install @opennextjs/cloudflare
npm install -D wrangler

# Validation
npm install zod
```

If D1 and Queues are adopted in the same milestone, keep the application code thin and use platform bindings through `wrangler.jsonc` rather than adding a large backend framework.

## Sources

- Cloudflare Workers Next.js framework guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs
- Cloudflare Workers CI/CD: https://developers.cloudflare.com/workers/ci-cd/
- Cloudflare Queues overview: https://developers.cloudflare.com/queues/
- Cloudflare Workers storage options: https://developers.cloudflare.com/workers/platform/storage-options/
- Cloudflare Turnstile get started: https://developers.cloudflare.com/turnstile/get-started/
- Cloudflare Turnstile verification example on Workers: https://developers.cloudflare.com/workers/examples/turnstile-html-rewriter/
- Cloudflare Web Analytics docs: https://developers.cloudflare.com/web-analytics/
- Next.js Server Actions and forms: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
- Next.js Metadata and special metadata files: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js `generateMetadata`: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Zod documentation: https://zod.dev/

## Confidence Notes

- **HIGH:** Next.js on Cloudflare Workers via OpenNext, Wrangler configuration, Turnstile, Cloudflare-native deployment pattern.
- **HIGH:** Keep calculator client-side and typed; this is a standard fit for approximate-price landing pages and matches repo structure.
- **MEDIUM:** WhatsApp backend integration specifics depend on the client’s Meta Business readiness and operating region. The architectural recommendation is stable, but exact onboarding friction must be validated during implementation.
