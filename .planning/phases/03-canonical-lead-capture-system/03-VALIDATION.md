---
phase: 03
slug: canonical-lead-capture-system
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-30
---

# Phase 03 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none (lint + typecheck gate) |
| **Config file** | none — Wave 0 installs (if tests are added) |
| **Quick run command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Full suite command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Estimated runtime** | ~25-30 seconds (target) |

---

## Sampling Rate

- **After every task commit:** Run `npm.cmd run lint && npm.cmd run typecheck`
- **After every plan wave:** Run `npm.cmd run lint && npm.cmd run typecheck`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds target; acceptable ceiling 45 seconds when both commands are required

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | CALC-01, FLOW-01 | static + manual UI smoke | `npm.cmd run lint && npm.cmd run typecheck` | ✅ | ⬜ pending |
| 03-01-02 | 01 | 1 | CALC-02, CALC-03 | static + manual UI smoke | `npm.cmd run lint && npm.cmd run typecheck` | ✅ | ⬜ pending |
| 03-01-03 | 01 | 1 | CALC-04 | contract/code review + static | `npm.cmd run lint && npm.cmd run typecheck` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `tests/calculator-section.test.tsx` — interaction stubs for CALC-01..04 (optional if test framework introduced)
- [ ] `vitest` + React Testing Library setup (optional; current phase can pass with lint/typecheck + manual checks)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Calculator block is directly after advantages section | FLOW-01 | Section order perception is UX-level | Open homepage, verify visual order: FirstScreen -> Advantages -> Calculator |
| Hover collapse + reveal CTA on desktop cards | CALC-01, CALC-03 | Hover/timing behavior is visual interaction | On desktop, hover card: height shrinks, button appears; mouse leave restores |
| Mobile 2-column cards and tap-safe interaction | CALC-01, CALC-03 | Touch behavior cannot be validated via static checks | Open mobile viewport, verify 2-column grid and tappable CTA flow |
| Estimate disclaimer clarity | CALC-02 | Text meaning/readability is human judgment | Verify disclaimer text visible near result/modal entry |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency target <= 30s, with documented exception up to 45s when lint+typecheck are both mandatory
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
