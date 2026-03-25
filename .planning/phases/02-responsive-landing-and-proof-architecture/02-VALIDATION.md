---
phase: 2
slug: responsive-landing-and-proof-architecture
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-25
---

# Phase 2 - Validation Strategy

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | ESLint + TypeScript typecheck |
| **Config file** | `eslint.config.mjs`, `tsconfig.json` |
| **Quick run command** | `npm.cmd run lint` |
| **Full suite command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Estimated runtime** | ~25 seconds |

## Sampling Rate

- After every task commit: `npm.cmd run lint`
- After plan wave completion: `npm.cmd run lint && npm.cmd run typecheck`
- Before `$gsd-verify-work`: full suite green + manual responsive check

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | SITE-01 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | SITE-02 | static + manual | `npm.cmd run typecheck` | ❌ W0 | ⬜ pending |
| 02-01-03 | 01 | 1 | TRST-02, TRST-03, TRST-04, TRST-05 | static + manual | `npm.cmd run lint && npm.cmd run typecheck` | ❌ W0 | ⬜ pending |

## Wave 0 Requirements

- [ ] No dedicated component/UI regression tests for the advantages section yet.
- [ ] No documented viewport checklist file for this section yet.

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Card grid remains readable on desktop/tablet/mobile | SITE-01 | Visual layout behavior | Check 360px, 768px, 1280px widths; confirm no overflow/clipping |
| Section uses semantic heading structure (`h2` + `h3`) | SITE-02 | Requires rendered DOM review | Inspect rendered markup in browser devtools |
| Dark CTA card remains distinct and actionable | TRST-02/03/04/05 | Visual and interaction hierarchy | Verify contrast and clickable target from card |

## Validation Sign-Off

- [ ] All tasks have automated verify or explicit Wave 0 gap
- [ ] No 3 consecutive tasks without validation hooks
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set after successful execution

**Approval:** pending
