# Architecture Patterns

**Domain:** Windows company landing site with calculator and lead capture
**Researched:** 2026-03-24
**Overall confidence:** HIGH

## Recommended Architecture

Build this as a single App Router landing page with mostly server-rendered sections and a few narrow client islands for interactivity. The current scaffold already has the right top-level shape: `src/app/page.tsx` composes landing, calculator, and lead sections. Keep that direction, but move from placeholder sections to a layered architecture where content, calculator logic, and lead submission are separate concerns.

The key architectural decision is to have one canonical lead-submission boundary on the server and let every CTA feed into it. Hero CTA, inline contact forms, calculator handoff, sticky mobile CTA, and footer contact form should all normalize into the same payload contract. This avoids duplicated validation, inconsistent tracking, and divergent delivery behavior.

Because this is deployed on Cloudflare and built on Next.js App Router, keep the page static-first and use dynamic behavior only where required: form submission, calculator state, analytics events, and optional anti-spam checks. Route handlers are the cleanest boundary for this project because they keep external integrations and secrets off the client while remaining easy to test and reuse across multiple forms.

### Recommended System Shape

```text
src/app/
  layout.tsx
  page.tsx
  api/
    leads/route.ts           # canonical lead submission endpoint
    calculator/route.ts      # optional only if pricing rules become server-owned

src/features/
  landing/
    sections/
      hero.tsx
      services.tsx
      benefits.tsx
      projects.tsx
      testimonials.tsx
      faq.tsx
      contacts.tsx
    components/
      site-header.tsx
      sticky-cta.tsx
      media-gallery.tsx
  calculator/
    components/
      calculator-shell.tsx
      dimension-fields.tsx
      option-selectors.tsx
      estimate-summary.tsx
      calculator-lead-bridge.tsx
    lib/
      calculator-schema.ts
      calculator-rules.ts
      calculator-engine.ts
      calculator-mappers.ts
  lead-form/
    components/
      lead-form.tsx
      lead-form-fields.tsx
      lead-success-state.tsx
    lib/
      lead-schema.ts
      lead-payload.ts
      lead-source.ts

src/components/
  ui/
    button.tsx
    input.tsx
    textarea.tsx
    select.tsx
    section-shell.tsx
    section-heading.tsx

src/lib/
  site-content.ts            # company copy, contact info, nav, offers
  media-content.ts           # local image/video metadata
  analytics.ts               # event names and helpers
  env.ts                     # validated environment variables
  api/
    lead-service.ts          # application-level orchestration
    providers/
      whatsapp.ts
      telegram.ts
    anti-spam.ts
```

## Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `app/page.tsx` | Compose the landing page from feature sections only | Landing sections, calculator section, lead sections |
| Landing section components | Render mostly static marketing content from structured content config | `src/lib/site-content.ts`, shared UI |
| Shared UI components | Presentational primitives only; no business logic | All feature modules |
| `calculator-shell` | Own interactive calculator state and step progression | Calculator engine, lead bridge, analytics |
| `calculator-engine` | Pure estimate math and option mapping; no React, no network | Calculator shell |
| `lead-form` | Capture user inputs and submit canonical lead payload | Lead schema, `/api/leads`, analytics |
| `lead-service` | Orchestrate validation, spam screening, provider fallback, audit logging | Provider adapters, anti-spam helpers |
| Provider adapters (`whatsapp`, `telegram`) | Translate canonical lead payload to external provider format | External APIs only |
| `site-content.ts` | Single source of truth for phone, city, nav, offers, section copy | Header, hero, contact blocks, footer |
| Media/gallery components | Render optimized local assets and optional before/after showcases | `media-content.ts`, `next/image` |

## Data Flow

### 1. Content/Data Flow

Keep marketing content top-down and file-driven:

```text
site-content.ts / media-content.ts
  -> page/section components
  -> shared UI components
  -> rendered HTML
```

Guidance:

- Do not hardcode phone, city, CTA labels, and offer text inside section components.
- Move current inline values from `first-screen.tsx` and `site-header.tsx` into `src/lib/site-content.ts`.
- Treat all section copy as structured content objects, not scattered string literals.
- Only introduce a CMS later if content operations become frequent. For launch, code-managed content is simpler and safer.

### 2. Calculator Data Flow

The calculator should be an isolated client island with pure calculation logic behind it:

```text
User input
  -> calculator-shell client state
  -> zod/schema validation
  -> calculator-engine
  -> estimate summary
  -> CTA to submit lead with calculation snapshot
```

Boundary rules:

- Keep price logic in pure functions under `src/features/calculator/lib/`.
- Do not mix pricing math into JSX components.
- Keep the first version approximate, with explicit messaging that final price follows measurement.
- Prefer local calculation in the browser for instant feedback.
- Only add `app/api/calculator/route.ts` if pricing rules need secrecy, remote updates, or auditing.

Recommended calculator model:

- Inputs: product type, width, height, material, profile tier, glazing type, opening type, extras, installation need, delivery need.
- Derived outputs: estimated range, selected options summary, disclaimer text.
- Submission payload addition: attach calculator snapshot to the canonical lead payload so the sales team receives context.

### 3. Lead Submission Flow

All lead capture surfaces should use one server boundary:

```text
Hero CTA / inline form / calculator CTA / footer form
  -> lead-form component
  -> client-side validation
  -> POST /api/leads
  -> server validation + anti-spam
  -> lead-service
  -> WhatsApp provider
  -> Telegram provider fallback
  -> success/error response
  -> client confirmation state
```

Canonical lead payload:

```ts
type LeadPayload = {
  name: string;
  phone: string;
  comment?: string;
  source:
    | "hero-cta"
    | "hero-form"
    | "calculator"
    | "contacts"
    | "footer"
    | "mobile-sticky";
  intent:
    | "consultation"
    | "measurement"
    | "price-estimate"
    | "callback";
  calculatorSnapshot?: {
    productType: string;
    dimensions: { width: number; height: number };
    optionsSummary: string[];
    estimatedRange?: { min: number; max: number };
  };
  utm?: Record<string, string>;
  pagePath: string;
  submittedAt: string;
};
```

Submission rules:

- Validate on both client and server.
- Keep all provider tokens and chat IDs in server environment variables only.
- Normalize phone format on the server before sending.
- Return a stable response shape so every form variant shares the same success/error UI contract.
- Log failed primary delivery and attempt Telegram fallback before surfacing a failure to the user.

### 4. Analytics/Event Flow

This should be lightweight but deliberate:

```text
CTA click / calculator completion / lead submit success or failure
  -> analytics helper
  -> Cloudflare-compatible analytics destination
```

Track at minimum:

- Hero primary CTA click
- Calculator start
- Calculator complete
- Lead submit success by source
- Lead submit failure by source

## Recommended Patterns

### Pattern 1: Server Components By Default
**What:** Keep landing sections as server components unless they need browser state.
**When:** Use for hero, services, benefits, projects, testimonials, FAQ, footer, contact details.
**Why:** Better cacheability, simpler code, smaller client bundle.

### Pattern 2: Client Islands For Interaction
**What:** Mark only calculator shell, form interactions, and sticky CTA behavior as client components.
**When:** Use when state, browser APIs, or transient interaction are needed.
**Why:** Limits hydration cost on a marketing page.

### Pattern 3: Canonical Domain Contracts
**What:** Create one lead payload contract and one calculator input/output contract.
**When:** Before building multiple form variants.
**Why:** Prevents each section from inventing its own payload shape.

### Pattern 4: Adapter-Based External Integrations
**What:** Keep WhatsApp and Telegram delivery behind provider adapters.
**When:** For any third-party notification channel.
**Why:** Makes fallback, testing, and later channel changes manageable.

## Anti-Patterns To Avoid

### Anti-Pattern 1: Per-Section Form Implementations
**What:** Separate submission code in hero, calculator, and footer sections.
**Why bad:** Validation drifts, analytics drift, harder security hardening.
**Instead:** Reuse one `lead-form` system and one `/api/leads` endpoint.

### Anti-Pattern 2: Business Copy Hardcoded In JSX
**What:** Phone numbers, city, offers, and CTA text embedded directly in components.
**Why bad:** Updates become error-prone and duplicate across sections.
**Instead:** Centralize in `site-content.ts`.

### Anti-Pattern 3: Pricing Rules Embedded In UI Components
**What:** Calculator math written inline inside event handlers and JSX.
**Why bad:** Un-testable, brittle, and difficult to revise when offers change.
**Instead:** Use pure calculation modules plus typed schemas.

### Anti-Pattern 4: Direct Client Calls To External Messaging APIs
**What:** Browser submits directly to WhatsApp or Telegram APIs.
**Why bad:** Exposes secrets, weakens validation, complicates fallback and observability.
**Instead:** Route everything through server handlers.

## Build-Order Dependencies

The build order should follow dependency direction, not page order.

### Phase 1: Shared Contracts And Content Backbone

Build first:

1. `src/lib/site-content.ts`
2. shared UI primitives
3. `lead-schema.ts` and canonical `LeadPayload`
4. calculator input/output types and schema

Why first:

- Every section depends on content and UI primitives.
- All forms depend on the payload contract.
- The calculator depends on typed input/output boundaries before UI work starts.

### Phase 2: Static Landing Sections

Build next:

1. header/navigation
2. hero
3. service/benefit/media/proof sections
4. contact/footer blocks

Why here:

- These sections are mostly static and unblock visual integration with Figma.
- They establish anchor targets used by CTA links and sticky navigation.

### Phase 3: Lead Infrastructure

Build before multiple forms:

1. `/api/leads`
2. `lead-service`
3. provider adapters
4. anti-spam and validation
5. reusable `lead-form`

Why before rollout:

- Hero CTA, calculator CTA, and footer forms should all land on the same tested path.
- This is the main business-critical conversion path.

### Phase 4: Calculator Engine And UI

Build after lead infrastructure:

1. pure calculator rules and engine
2. calculator shell UI
3. estimate summary
4. calculator-to-lead bridge

Why after lead infra:

- The calculator is valuable only if its result can convert into a lead.
- Reusing the canonical lead contract prevents rework when adding the calculator handoff.

### Phase 5: Analytics, Hardening, And Deployment

Finish with:

1. event instrumentation
2. error states and retry behavior
3. environment validation
4. Cloudflare deployment config
5. production verification

Why last:

- Instrumentation is easier once interaction points are stable.
- Deployment hardening should validate real final routes and secrets, not placeholders.

## Build-Order Dependency Graph

```text
site-content + shared UI
  -> static landing sections

lead schema + lead-service + /api/leads
  -> hero form
  -> footer/contact form
  -> calculator lead handoff

calculator schema + calculator engine
  -> calculator shell
  -> calculator summary
  -> calculator lead handoff

all interactive surfaces
  -> analytics instrumentation
  -> production deployment verification
```

## Scalability Considerations

| Concern | At launch | Later growth path |
|---------|-----------|-------------------|
| Traffic | Static-first page and small client islands are sufficient | Add cache tuning and edge analytics if campaigns scale |
| Lead volume | Route handler plus provider adapters is sufficient | Add durable queue or database persistence if delivery guarantees become necessary |
| Pricing logic changes | Pure local calculator rules are sufficient | Move rules server-side or to managed config if frequent updates are needed |
| Content operations | Code-managed content is sufficient | Introduce headless CMS only if marketing updates become frequent and non-technical |
| Multi-page expansion | Single-page route is sufficient | Reuse the same feature modules and lead service across future service-specific routes |

## Recommended Implementation Order For This Repo

1. Replace inline config in current landing files with `src/lib/site-content.ts`.
2. Introduce reusable section wrappers and UI form primitives under `src/components/ui`.
3. Define `lead-schema.ts`, `lead-payload.ts`, and `/app/api/leads/route.ts`.
4. Build provider adapters and fallback orchestration in `src/lib/api/`.
5. Refactor `LeadFormSection` into a reusable `lead-form` feature used by all CTA surfaces.
6. Expand the landing from `FirstScreen` plus placeholders into section-based feature modules.
7. Build the calculator engine and typed form state in `src/features/calculator/lib/`.
8. Add the calculator lead bridge so estimate requests submit through the same lead path.
9. Add analytics events, anti-spam hardening, and Cloudflare production checks.

## Sources

- Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware
- Next.js documentation hub for App Router architecture and server/client component model: https://nextjs.org/docs
- Cloudflare Next.js deployment guidance noting Workers as the recommended path: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Local project context: `.planning/PROJECT.md`
- Local scaffold architecture: `.planning/codebase/ARCHITECTURE.md`
