---
phase: 04
slug: solution-matching-for-client-task
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-30
---

# Phase 04 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | lint+typecheck (no dedicated test runner yet) |
| **Config file** | `eslint.config.mjs`, `tsconfig.json` |
| **Quick run command** | `npm run lint` |
| **Full suite command** | `npm run lint && npm run typecheck` |
| **Estimated runtime** | ~30-90 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run lint`
- **After every plan wave:** Run `npm run lint && npm run typecheck`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | FLOW-02 | static-check | `npm run lint` | ✅ | ⬜ pending |
| 04-01-02 | 01 | 1 | CONT-03 | static-check | `npm run lint` | ✅ | ⬜ pending |
| 04-01-03 | 01 | 1 | CONT-04 | static-check | `npm run lint && npm run typecheck` | ✅ | ⬜ pending |
| 04-01-04 | 01 | 2 | FLOW-02 | static-check | `npm run lint && npm run typecheck` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `tests/` baseline is absent — decide whether to introduce Vitest/Jest in a separate phase before enforcing unit-level Nyquist checks.
- [ ] Add lightweight UI smoke checks (if runner is introduced) for section order and CTA route to `#lead-form`.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Section order after calculator | FLOW-02 | Visual page-flow check | Open homepage, verify solution section appears right after calculator and before lead form |
| Card readability on real images | CONT-03 | Contrast quality depends on visual rendering | Check all 5 cards on desktop/mobile widths; ensure text remains readable |
| CTA route from every card | CONT-04 | Anchor UX behavior | Click `Узнать подробнее` in each card; verify scroll/jump to `#lead-form` |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
