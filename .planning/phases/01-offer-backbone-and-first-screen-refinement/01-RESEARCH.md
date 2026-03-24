# Phase 1: Offer Backbone and First-Screen Refinement - Research

**Researched:** 2026-03-24
**Domain:** Figma-driven Next.js landing first screen refinement
**Confidence:** MEDIUM

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
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
- **D-08:** The short trust/value тезисы for the first screen are: `Собственное производство`, `Быстрый выезд и расчет`, `Гарантия 1 год`.
- **D-09:** The separate section `Почему к нам обращаются` with multiple advantage cards is explicitly out of this phase and remains a later landing block.

### Contact presentation
- **D-10:** The first screen must visibly include phone, city, WhatsApp, and Telegram.
- **D-11:** The phone remains the main textual contact in the contact zone.
- **D-12:** WhatsApp and Telegram must be shown as separate icon links visually grouped with the phone rather than competing with the primary CTA.

### Claude's Discretion
- Exact visual treatment of the short trust/value тезисы within the hero flow
- Exact spacing, sizing, and responsive behavior, as long as they follow Figma and the repository layout rules
- Whether the city appears in the header contact group, hero support text, or both, as long as first-screen relevance is preserved

### Deferred Ideas (OUT OF SCOPE)
- Full multi-card advantages section `Почему к нам обращаются` - later landing section, not part of the first-screen refinement phase
- FAQ, services, reviews, and other lower landing sections - Phase 2 work
- Functional lead form behavior - Phase 3 work
- Calculator behavior and handoff - Phase 4 work
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CONT-01 | Visitor can understand within the first screen that SaFerplast manufactures, installs, and repairs PVC and aluminum windows, doors, and balconies | Use the locked `h1` + supporting text, keep hero copy explicit, and avoid hiding core offer in lower sections |
| CONT-02 | Visitor can see a clear primary CTA for consultation, measurement, or estimate request above the fold | Make both CTAs real links/actions above the fold; primary CTA must visually dominate secondary |
| CONT-05 | Visitor can see that the company works with apartments, private houses, offices, and commercial spaces | Add a concise audience line or chip group in hero support/trust area rather than a new lower-page section |
| TRST-01 | Visitor can see the company differentiators, including own production, direct pricing, and speed of work | Use short trust bullets near the hero, not a full card grid; keep them scannable and adjacent to CTA block |
| SITE-03 | Visitor can find contact details and service-area relevance on the page | Keep phone/city visible in the first screen, add WhatsApp/Telegram links, and remove or fix dead contact anchors |
</phase_requirements>

## Summary

This phase should be planned as a focused refinement of the existing `FirstScreen`, `SiteHeader`, and `HeroSection` rather than a redesign or a broader landing build-out. The repo already has the right technical stack for the work: Next.js App Router, React function components, Tailwind CSS, local font loading, and static assets for logo/hero imagery. The planning question is mostly structural and content-driven: how to make the first screen communicate offer, audience, trust, and action immediately while staying faithful to Figma and the repo's Tailwind-first layout rules.

The most important planning constraint is scope discipline. Phase 1 should not introduce new libraries, new lower-page sections, or a content-model refactor across the whole app. It should fix the first screen's current gaps: inert CTA buttons, dead navigation anchors (`#projects`, `#contacts`), missing WhatsApp/Telegram assets/links, and incomplete trust/audience messaging. It should also avoid prematurely centralizing business copy into `src/lib/site-config.ts`, which currently contains wrong/corrupted data and is not a safe shared source yet.

**Primary recommendation:** Plan Phase 1 as a pure landing-first-screen pass that keeps the existing component split, adds a small typed content source local to `src/features/landing/`, converts CTAs and contact items into real links, and implements the trust/audience signals inside the hero flow using Tailwind flex/grid patterns rather than new sections or absolute-positioned Figma translation.

## Project Constraints (from CLAUDE.md)

- Use the existing stack: Next.js, TypeScript, Tailwind CSS.
- Figma is the source of truth; implementation should follow the approved layout closely.
- Stay Tailwind-first with minimal global CSS.
- Prefer flex/grid, rem-based spacing, and container/max-width patterns.
- Keep Cloudflare compatibility intact.
- Messaging must stay broad enough for apartments, private homes, offices, and commercial spaces.
- Use TypeScript for all app code.
- Keep components small, composable, and functional.
- Keep application code under `src/` with feature code under `src/features`.
- Use `kebab-case` filenames and PascalCase component names.
- For now, validation is `npm run lint` and `npm run typecheck`.
- On PowerShell systems with script restrictions, prefer `npm.cmd run <script>`.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15.5.14 | App Router page composition, `next/image`, `next/link` | Already installed, current repo standard, ideal for a static marketing first screen |
| React | 19.2.4 | Function component composition | Already installed, no state-heavy UI needed for this phase |
| Tailwind CSS | 3.4.19 | Layout, spacing, typography, responsive behavior | Matches repo conventions and existing tokens in `tailwind.config.js` |
| TypeScript | 5.9.3 | Strict typing for content/config and props | Already enforced by repo and enough for this phase's static data flow |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@fontsource/montserrat` | 5.2.8 | Local body font delivery | Keep existing local font loading; do not reintroduce remote imports |
| `@fontsource/sansation` | 5.2.2 | Local display font delivery | Keep existing display font pattern for hero headline |
| `next/image` | bundled with Next.js 15.5.14 | Optimized logo and hero imagery | Use for all first-screen raster assets |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Existing Tailwind + feature components | UI kit/component library | Adds dependency churn and design-system mismatch for a small Figma-locked phase |
| Local typed landing content module | `src/lib/site-config.ts` refactor now | Broader cleanup than this phase needs; current file has bad data and encoding issues |
| Existing static assets + custom messenger icons in `public/` | External icon library | Faster initially, but unnecessary for two icons and adds bundle/dependency noise |

**Installation:**
```bash
npm.cmd install
```

**Version verification:** Verified on 2026-03-24 with local install checks plus npm registry lookups.
- `next`: installed `15.5.14`; upstream latest `16.2.1`, published `2026-03-20`
- `react`: installed `19.2.4`; upstream latest `19.2.4`, published `2026-01-26`
- `tailwindcss`: installed `3.4.19`; upstream latest `4.2.2`, published `2026-03-18`
- `typescript`: installed `5.9.3`; upstream latest `6.0.2`, published `2026-03-23`

**Planning implication:** do not turn this phase into an upgrade phase. Use the installed stack.

## Architecture Patterns

### Recommended Project Structure
```text
src/
├── app/
│   ├── layout.tsx        # Root metadata and html/body shell
│   └── page.tsx          # Landing page composition
├── features/
│   └── landing/
│       ├── first-screen.tsx          # Composition root for first screen
│       ├── hero-section.tsx          # Hero copy, CTAs, trust cues, image
│       ├── site-header.tsx           # Logo, nav, contact cluster
│       └── first-screen-content.ts   # New typed local content/config for this phase
└── styles/
    └── globals.css       # Fonts and minimal base rules only
```

### Pattern 1: Keep `FirstScreen` as a composition root
**What:** Continue composing the header and hero in `first-screen.tsx`; do not collapse the whole first screen into one monolith.
**When to use:** For Phase 1 changes spanning both header and hero but still belonging to one above-the-fold experience.
**Example:**
```tsx
export function FirstScreen() {
  return (
    <section id="top">
      <SiteHeader navigationLinks={navigationLinks} />
      <HeroSection />
    </section>
  );
}
```
Source: existing repo pattern in `src/features/landing/first-screen.tsx`

### Pattern 2: Use a local typed content object for first-screen business copy
**What:** Put hero copy, trust bullets, audience line, city, phone, and messenger URLs into a small typed module under `src/features/landing/`.
**When to use:** When multiple first-screen components need the same text, but broader app-wide config cleanup is out of scope.
**Example:**
```ts
export type FirstScreenContent = {
  headline: string;
  supportingText: string;
  trustBullets: string[];
  audienceLine: string;
  phone: string;
  city: string;
  whatsappHref: string;
  telegramHref: string;
};
```
Source: repo architecture inference based on current static top-down data flow

### Pattern 3: Make the hero a semantic, responsive two-column layout
**What:** On large screens, use a two-column grid for copy and imagery; on small screens, stack content vertically with copy and CTAs before the image.
**When to use:** Always for the approved first-screen layout unless Figma explicitly dictates a different responsive order.
**Example:**
```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">...</div>
  </div>
</div>
```
Source: https://v3.tailwindcss.com/docs/responsive-design

### Pattern 4: Use real links for navigation and conversion actions
**What:** Navigation items and CTAs must point somewhere meaningful now, not wait for later phases.
**When to use:** For header nav links, phone/messenger actions, and hero CTAs.
**Example:**
```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
Source: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/link.mdx

**Phase-specific guidance:** for this repo, the primary CTA should likely point to `#lead-form` and the secondary CTA to `#calculator` unless the approved Figma explicitly defines another action path.

### Pattern 5: Keep images in `next/image` with explicit sizing and useful alt text
**What:** Continue using `next/image` for logo and hero imagery with width/height or `fill`, and with meaningful alt text unless decorative.
**When to use:** For all above-the-fold raster assets.
**Example:**
```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```
Source: https://nextjs.org/docs/pages/api-reference/components/image

### Anti-Patterns to Avoid
- **Dead anchors:** `#projects` and `#contacts` do not exist in the current page. Phase 1 should remove or remap them.
- **Inert CTA buttons:** current hero buttons are plain buttons with no action. That fails the intent of `CONT-02`.
- **Figma-by-absolute-positioning:** do not translate desktop coordinates directly into absolute layouts for main structure.
- **Premature shared config refactor:** do not make Phase 1 depend on fixing all site-wide business data in `src/lib/site-config.ts`.
- **Trust-card creep:** do not pull the later `Почему к нам обращаются` card grid into the first screen.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Responsive hero layout | Absolute-positioned desktop recreation | Tailwind flex/grid with max-width containers | Easier to maintain, mobile-safe, aligned with repo rules |
| Image delivery | Raw `<img>` with manual optimization | `next/image` | Built-in optimization, sizing, and accessibility expectations |
| Icon delivery for two messenger buttons | Whole icon library | Two local SVG assets in `public/icons` | Smaller scope and bundle, easier brand control |
| Shared business content | App-wide config rewrite in this phase | Local typed `first-screen-content.ts` | Keeps Phase 1 focused and avoids broken `site-config` dependency |
| CTA behavior | Temporary no-op buttons | Real anchor/contact links | Prevents fake affordances and makes first screen actually usable |

**Key insight:** this phase is small enough that custom UI abstraction and dependency expansion will create more planning risk than value. Reuse the current feature module and add only the smallest missing pieces.

## Common Pitfalls

### Pitfall 1: Treating the first screen as “visual only”
**What goes wrong:** The UI looks closer to Figma but CTAs and nav items still do nothing.
**Why it happens:** Teams defer interaction wiring because functional lead capture is scheduled later.
**How to avoid:** Plan Phase 1 to convert CTAs and valid nav items into real anchors now.
**Warning signs:** `button type="button"` with no handler; anchors pointing to missing IDs.

### Pitfall 2: Overloading the hero with too much persuasion content
**What goes wrong:** The first screen becomes dense, hard to scan, and duplicates later sections.
**Why it happens:** Trust and audience requirements get solved by piling on cards and paragraphs.
**How to avoid:** Keep trust to short bullets/chips and audience fit to one concise supporting line.
**Warning signs:** More than one trust row, multiple cards, or copy blocks competing with the `h1`.

### Pitfall 3: Recreating Figma in fixed desktop pixels
**What goes wrong:** The desktop layout may match the mockup, but tablet/mobile breaks badly.
**Why it happens:** Figma values are copied literally instead of adapted into responsive layout rules.
**How to avoid:** Use rem-based spacing, width constraints, and breakpoint-driven stacking.
**Warning signs:** Large fixed widths, absolute positioning, and no content reflow below `lg`.

### Pitfall 4: Centralizing content into the wrong shared module
**What goes wrong:** Planning picks `src/lib/site-config.ts`, then implementation trips over bad city/phone values and encoding issues.
**Why it happens:** Shared config seems cleaner in theory.
**How to avoid:** Keep first-screen content local for now; schedule shared business-data cleanup separately if needed.
**Warning signs:** Phase plan contains unrelated config cleanup work.

### Pitfall 5: Contact visibility without contact usability
**What goes wrong:** Phone, city, WhatsApp, and Telegram are visible but not clickable or grouped clearly.
**Why it happens:** Contact treatment is handled as decoration rather than action design.
**How to avoid:** Make phone the dominant text action, messengers icon-only or icon-plus-label secondary actions, and city non-competitive.
**Warning signs:** Messengers visually louder than CTA, or contact values rendered as plain text.

## Code Examples

Verified patterns from official sources:

### Responsive Marketing Layout
```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">...</p>
    </div>
  </div>
</div>
```
Source: https://v3.tailwindcss.com/docs/responsive-design

### Explicitly Sized Next Image
```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```
Source: https://nextjs.org/docs/pages/api-reference/components/image

### Direct Next Link Usage
```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
Source: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/link.mdx

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Nested `<a>` inside `<Link>` | Direct `<Link>` usage | Next.js 13+ | Simpler nav/link markup in App Router |
| Raw `<img>` for hero/logo | `next/image` with explicit sizing/alt | Longstanding Next.js best practice, still current in 2026 docs | Better optimization and less layout shift |
| Desktop-only Figma reconstruction | Responsive flex/grid containerization | Current Tailwind/marketing-page standard | Fewer mobile regressions and less rework |
| Remote Google Font imports from design examples | Local `@fontsource` imports already in `globals.css` | Existing repo implementation | Avoids runtime font dependency drift |

**Deprecated/outdated:**
- Nested anchor usage inside `next/link`: do not use it for this phase.
- Reintroducing `@import url(...)` Google Fonts from `docs/DESIGN_SYSTEM.md`: the repo already uses local font packages and should stay that way.

## Open Questions

1. **What is the exact approved Figma file key and node ID for the first screen?**
   - What we know: the phase context requires close Figma fidelity, and Figma auth is available in this environment.
   - What's unclear: no Figma URL, file key, or node ID is recorded in the repo/context.
   - Recommendation: planner should treat the approved Figma node as a required input before implementation starts.

2. **What are the final phone number and messenger URLs for launch?**
   - What we know: the first screen must show phone, city, WhatsApp, and Telegram.
   - What's unclear: current `site-header.tsx` uses placeholder phone data, and `site-config.ts` is incorrect.
   - Recommendation: planner should include a task to source and wire final contact values, with local typed content storage for this phase.

3. **Should Phase 1 CTAs scroll to placeholders or use direct contact actions?**
   - What we know: the page already has `#lead-form` and `#calculator` sections, even if their business logic is not complete yet.
   - What's unclear: whether the approved Figma/user expects both CTAs to stay internal or one to map to phone/messenger.
   - Recommendation: default to `#lead-form` primary and `#calculator` secondary unless the approved design specifies otherwise.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js build/dev/typecheck | ✓ | 24.14.0 | — |
| npm via `npm.cmd` | Scripts, installs, lint, typecheck | ✓ | 11.9.0 | Use `npm.cmd`; plain `npm` is blocked by PowerShell policy |
| Figma MCP auth | Figma-driven implementation verification | ✓ | authenticated | — |
| `rg` | Fast code/file search during execution | ✗ | — | Use PowerShell `Get-ChildItem` + `Select-String` |

**Missing dependencies with no fallback:**
- None for planning. Implementation still needs the approved Figma file/node reference as an input artifact, not a tool install.

**Missing dependencies with fallback:**
- `rg` is not installed; use PowerShell-native search commands.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None yet — lint and typecheck only |
| Config file | `eslint.config.mjs` and `tsconfig.json` |
| Quick run command | `npm.cmd run lint` |
| Full suite command | `npm.cmd run lint` then `npm.cmd run typecheck` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CONT-01 | Offer scope is explicit in first screen copy | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| CONT-02 | Primary CTA is clear and actionable above the fold | manual smoke + static validation | `npm.cmd run typecheck` | ❌ Wave 0 |
| CONT-05 | Audience coverage is visible in first screen | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| TRST-01 | Trust differentiators are visible near the hero | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| SITE-03 | Contact details and service-area relevance are visible and usable | manual smoke + static validation | `npm.cmd run typecheck` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm.cmd run lint`
- **Per wave merge:** `npm.cmd run lint` then `npm.cmd run typecheck`
- **Phase gate:** manual desktop/mobile visual review plus both commands green before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] No component or visual regression framework exists for `src/features/landing/site-header.tsx`
- [ ] No component or visual regression framework exists for `src/features/landing/hero-section.tsx`
- [ ] No documented viewport checklist exists for desktop/tablet/mobile first-screen verification

## Sources

### Primary (HIGH confidence)
- `/vercel/next.js` - Link usage and current `next/image` guidance
- `/websites/v3_tailwindcss` - responsive marketing layout and breakpoint/container patterns
- `/reactjs/react.dev` - current function-component composition guidance
- https://nextjs.org/docs/app/getting-started - App Router current docs, last updated 2026-02-27
- https://nextjs.org/docs/pages/api-reference/components/image - `Image` props and sizing guidance, last updated 2026-02-27
- https://v3.tailwindcss.com/docs/responsive-design - responsive utility patterns
- https://v3.tailwindcss.com/docs/theme - breakpoint definitions
- npm registry verification via `npm.cmd view` on 2026-03-24 for `next`, `react`, `tailwindcss`, and `typescript`

### Secondary (MEDIUM confidence)
- Local repo sources:
  - `src/features/landing/first-screen.tsx`
  - `src/features/landing/site-header.tsx`
  - `src/features/landing/hero-section.tsx`
  - `src/app/page.tsx`
  - `src/lib/site-config.ts`
  - `docs/DESIGN_SYSTEM.md`
  - `.planning/codebase/CONVENTIONS.md`
  - `.planning/codebase/TESTING.md`

### Tertiary (LOW confidence)
- None

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - verified against installed packages and npm registry state on 2026-03-24
- Architecture: MEDIUM - repo patterns are clear, but exact Figma node details are still missing
- Pitfalls: HIGH - directly supported by current code inspection (dead anchors, inert CTAs, broken config, no messenger assets)

**Research date:** 2026-03-24
**Valid until:** 2026-04-23
