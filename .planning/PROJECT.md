# SaFerplast

## What This Is

SaFerplast is a scalable marketing landing page for a company that manufactures, installs, and repairs PVC and aluminum windows, doors, balconies, and related components. The site is aimed at customers across apartments, private homes, offices, and commercial spaces, and its job is to turn traffic into qualified leads through clear service presentation, fast contact actions, and a simple price calculator.

## Core Value

Visitors can quickly understand the offer and safely send a request for consultation, measurement, or price estimation without friction.

## Requirements

### Validated

- ✓ Single-page Next.js landing shell exists — existing
- ✓ First-screen feature structure exists with header and hero sections — existing
- ✓ Local typography and Tailwind token foundation are configured — existing

### Active

- [ ] Pixel-accurate landing implementation from the approved Figma design
- [ ] Responsive layout that works well across desktop and mobile
- [ ] Secure lead forms that deliver requests to WhatsApp first and Telegram second
- [ ] Approximate price calculator for windows and related services
- [ ] Service presentation for manufacturing, installation, and repair of windows, doors, balconies, glazing units, sills, slopes, and hardware
- [ ] First-screen CTA flow with consultation, measurement, and promotional discount messaging
- [ ] Search-visible production deployment on Cloudflare

### Out of Scope

- CRM or admin dashboard — not needed for the first public landing version
- Online payment or checkout — pricing is partly custom and finalized after calculation
- Personal accounts — unnecessary for a lead-generation landing
- Blog or long-form content system — not core to launch
- Email delivery workflows — lead routing priority is WhatsApp and Telegram

## Context

- The project already has a working `Next.js 15 + TypeScript + Tailwind CSS` codebase with a feature-based structure under `src/`.
- The visual design is already completed in Figma, and MCP Figma is connected for implementation guidance.
- The current hero block exists in code but does not yet match the Figma file closely enough.
- The business offer covers manufacturing, installation, and repair of PVC and aluminum windows, doors, and balconies for all property types.
- Key business differentiators are in-house production, lower pricing versus intermediaries, and speed of work.
- Lead capture is the primary business goal; collecting client details for a customer base is mandatory before launch.
- Promotional ideas already mentioned by the client include free consultation, free measurement, and a conditional discount up to 15% for immediate requests.

## Constraints

- **Tech stack**: Next.js, TypeScript, Tailwind CSS — chosen and already in use
- **Design source**: Figma is the source of truth — implementation should follow the approved layout closely
- **Styling approach**: Tailwind-first with minimal global CSS — repository convention
- **Layout approach**: Prefer flex/grid, rem-based spacing, and container/max-width patterns — explicit project rule
- **Deployment**: Cloudflare target — hosting path should remain compatible with that platform
- **Security**: Lead submission must be safe — forms will handle personal data
- **Audience**: All property types — messaging must stay broad enough for residential and commercial use

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build the product as a landing page first | Fastest path to launch and lead capture | — Pending |
| Use Next.js + TypeScript + Tailwind | Stack already selected and scaffolded | — Pending |
| Use Figma as the visual source of truth | Full design is already approved and available | — Pending |
| Prioritize lead capture over content depth | The site exists to generate consultations and requests | — Pending |
| Route leads to WhatsApp first, Telegram second | Client preference for incoming requests | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-24 after initialization*
