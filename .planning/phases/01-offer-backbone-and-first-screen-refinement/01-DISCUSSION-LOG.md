# Phase 1: Offer Backbone and First-Screen Refinement - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md.

**Date:** 2026-03-25
**Phase:** 01-offer-backbone-and-first-screen-refinement
**Areas discussed:** Header source-of-truth, Hero content lock, Hero visual lock, Image handling

---

## Header source-of-truth

| Option | Description | Selected |
|--------|-------------|----------|
| Figma + header style spec as canonical | Use Figma intent and `docs/headerDemoStyles.md`; convert to valid Tailwind | ✓ |
| Keep previous implementation choices | Preserve prior interpretation from earlier discuss session | |

**User's choice:** Follow Figma and `docs/headerDemoStyles.md` as the header source of truth.
**Notes:** User explicitly reminded that this project is Figma-driven and asked to normalize style implementation into proper Tailwind.

---

## Hero content lock

| Option | Description | Selected |
|--------|-------------|----------|
| Lock exact headline/subheadline/button labels | Use provided copy verbatim in first-screen hero | ✓ |
| Keep prior exploratory copy rules | Allow further interpretation from old context | |

**User's choice:** Lock the hero text to the provided headline/subheadline and two CTA labels.
**Notes:** This replaces ambiguity from the previous context iteration.

---

## Hero visual lock

| Option | Description | Selected |
|--------|-------------|----------|
| Use hero demo style spec as canonical | Apply `docs/heroDemoStyles.md` through Tailwind mapping | ✓ |
| Keep previous trust-heavy hero interpretation | Preserve prior trust/audience-heavy visual approach | |

**User's choice:** Use `docs/heroDemoStyles.md` as canonical visual guidance for hero.
**Notes:** Core aim is better fidelity and reduced interpretation drift.

---

## Image handling

| Option | Description | Selected |
|--------|-------------|----------|
| Keep current right-side photo for now | Do not change hero image asset in this correction step | ✓ |
| Replace/rework image now | Modify photo and its asset behavior in this same pass | |

**User's choice:** Keep current right-side photo unchanged for now.
**Notes:** User flagged separate nuances around the photo, explicitly deferred.

## the agent's Discretion

- Responsive interpolation of demo values into production Tailwind layout.
- Accessibility/semantic details that do not change locked visuals and text.

## Deferred Ideas

- Photo rework/replacement and related image nuance handling.
- Lower landing sections and non-first-screen scope.

