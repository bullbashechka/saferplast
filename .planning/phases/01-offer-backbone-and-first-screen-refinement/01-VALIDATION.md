---
phase: 1
slug: offer-backbone-and-first-screen-refinement
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-24
---

# Phase 1 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | ESLint + TypeScript typecheck |
| **Config file** | `eslint.config.mjs`, `tsconfig.json` |
| **Quick run command** | `npm.cmd run lint` |
| **Full suite command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Estimated runtime** | ~20 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm.cmd run lint`
- **After every plan wave:** Run `npm.cmd run lint && npm.cmd run typecheck`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | CONT-01 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | CONT-02 | static + manual | `npm.cmd run typecheck` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 1 | SITE-03 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 1 | TRST-01 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 2 | CONT-05 | static + manual | `npm.cmd run lint && npm.cmd run typecheck` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] No dedicated visual/component regression tests exist for `src/features/landing/site-header.tsx`
- [ ] No dedicated visual/component regression tests exist for `src/features/landing/hero-section.tsx`
- [ ] No documented first-screen viewport checklist exists for desktop/tablet/mobile review

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero copy matches approved first-screen wording | CONT-01 | Copy fidelity to approved Figma/context is visual/content-driven | Open local landing, compare headline/support text against `01-CONTEXT.md` and approved Figma block |
| Primary CTA is visually dominant over secondary CTA | CONT-02 | CTA hierarchy is partly visual, not just type-safe | Open first screen on desktop and confirm `Бесплатный замер` is the strongest visible action and `Получить расчет` is clearly secondary |
| Contact zone groups phone, city, WhatsApp, and Telegram correctly | SITE-03 | Grouping and hierarchy are visual/interaction concerns | Check first screen on desktop and mobile; confirm phone is primary text action and messenger icons are visible secondary actions |
| Short trust/value signals appear in hero without turning into a full card section | TRST-01 | Trust treatment is layout/content-specific | Confirm hero contains compact trust bullets/chips only and does not include the later `Почему к нам обращаются` card grid |
| Audience breadth is visible in first screen | CONT-05 | Messaging presence depends on final copy/layout choice | Confirm first screen communicates apartments, houses, offices, and commercial spaces through copy or compact labels |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
