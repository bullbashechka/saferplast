# Phase 03: canonical-lead-capture-system - Research

**Researched:** 2026-03-30
**Domain:** Next.js 15 + TypeScript + Tailwind calculator-section UI with hover/tap cards and modal trigger
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
### Тексты и типографика
- **D-01:** Заголовок секции: `Рассчитайте примерную стоимость`.
- **D-02:** Типографика заголовка: `Sansation`, `400`, `44px`, `line-height: 100%`, `letter-spacing: 0%`, `text-align: center`.
- **D-03:** Подзаголовок секции: `Выберите, что именно нужно рассчитать, и получите предварительный расчет за несколько шагов`.
- **D-04:** Типографика подзаголовка: `Montserrat`, `400`, `16px`, `line-height: 100%`, `letter-spacing: 0%`, `text-align: center`.

### Карточки категорий (desktop)
- **D-05:** В блоке 4 карточки: `окно`, `дверь`, `балкон`, `подоконник`.
- **D-06:** Desktop-геометрия карточки: `285x210`, `border-radius: 20px`, `padding: 40px 30px`, `gap: 37px`.
- **D-07:** Карточки расположены горизонтально.
- **D-08:** В правом нижнем углу карточки размещается стрелка.
- **D-09:** Фон карточки: фото + градиент `linear-gradient(122.07deg, #FAFEFF 22.68%, rgba(255, 255, 255, 0) 95.9%)`.

### Интеракции карточки
- **D-10:** На hover карточка меняет высоту `210 -> 152` (ширина сохраняется).
- **D-11:** На hover под карточкой появляется кнопка размером `286x50`, `border-radius: 15px`, `padding: 13px 62px`, `gap: 20px`.
- **D-12:** Цвет кнопки: `hsla(194, 100%, 19%, 1)`.
- **D-13:** Текст кнопки одинаковый для всех карточек: `Рассчитать`.
- **D-14:** На кнопке используется SVG-иконка: `public/images/svg-on-button-рассчитать.svg`.
- **D-15:** Кнопка открывает калькулятор через модалку.
- **D-16:** При уходе курсора карточка возвращается в исходное состояние, кнопка скрывается.

### Адаптив (mobile)
- **D-17:** На мобильных карточки идут в 2 колонки.
- **D-18:** Mobile-геометрия карточки: `145x106`, `border-radius: 10px`, `padding: 15px`, `gap: 37px`.

### Claude's Discretion
- Точные тайминги и easing анимации hover/tap.
- Технический touch-fallback для mobile (без hover) при сохранении утвержденного UX.
- Точное сопоставление файлов фото-карточек из `public/images` с типами карточек.

### Deferred Ideas (OUT OF SCOPE)
- Детальная формула расчета и коэффициенты.
- Полный сценарий модалки калькулятора по шагам.
- Передача контекста калькулятора в будущую форму из фазы 8.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CALC-01 | Простая примерная калькуляция | Карточечный entry-point + modal-trigger pattern, без глубокого конфигуратора |
| CALC-02 | Явное пояснение про estimate | Рекомендован fixed estimate disclaimer в секции и/или модалке |
| CALC-03 | Сбор только ключевых факторов | Ограничение до 4 категорий и lightweight interaction model |
| CALC-04 | Передача контекста в lead-flow | В фазе 03 зафиксировать typed context contract; полноценная передача отложена по CONTEXT.md |
| FLOW-01 | Калькулятор сразу после преимуществ | Обязательная проверка порядка секций в `src/app/page.tsx` |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- Tech stack must remain Next.js + TypeScript + Tailwind CSS.
- Figma is source of truth for approved layout details.
- Tailwind-first styling; global CSS must stay minimal.
- Layout must prefer flex/grid and container/max-width patterns.
- Cloudflare deployment compatibility must be preserved.
- Lead-related UX must stay security-conscious (personal data handling context).
- Do not edit files outside a GSD workflow unless explicitly requested (this task is inside GSD phase workflow).

## Summary

Phase 03 should be planned as a focused UI/interaction phase: replace the placeholder calculator section with a card-driven estimate entry section that matches locked visual specs, supports desktop hover + mobile tap behavior, and opens a modal entrypoint. The most important implementation boundary is to avoid deep calculator logic in this phase and keep behavior aligned with the deferred scope in CONTEXT.

The current codebase is already aligned on Next.js App Router, Tailwind-first section composition, and static feature modules. The main integration risk is structural: current page composition places `ProofSection` before `CalculatorSection`, which violates FLOW-01. Planning must include explicit section-order verification and correction.

**Primary recommendation:** Implement Phase 03 as a client boundary inside `src/features/calculator/` (interactive card grid + modal trigger) and fix page ordering to satisfy FLOW-01 before visual polish.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | `15.x` (repo), latest `16.2.1` published `2026-03-20` | App Router, optimized rendering, `next/image` | Project baseline + official component model |
| react / react-dom | `19.x` (repo), latest `19.2.4` published `2026-01-26` | Interactive state for hover/tap/modal | Required for client interactivity |
| tailwindcss | `3.4.17` (repo), latest `4.2.2` published `2026-03-18` | Responsive and state variants (`hover`, `md`, `lg`, transitions) | Already configured with project tokens |
| typescript | `5.7.x` (repo), latest `6.0.2` published `2026-03-23` | Strict typed content/config contracts | Prevents fragile ad-hoc props/state |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @fontsource/sansation | `5.2.2` (published `2025-09-17`) | Heading font match for D-02 | Section title typography |
| @fontsource/montserrat | `5.2.8` (published `2025-09-17`) | Body/subtitle typography match | Subtitle + button text consistency |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Native `<dialog>` + semantic button flow | Radix Dialog | Better built-in a11y primitives, but adds dependency/scope |
| Tailwind state variants | Custom CSS modules with media queries | More flexibility, but conflicts with Tailwind-first project rule |

**Installation:**
```bash
# No new package required for phase 03 scope
npm.cmd install
```

**Version verification:** Verified via `npm.cmd view <package> version time --json` on 2026-03-30.

## Architecture Patterns

### Recommended Project Structure
```text
src/
└── features/
    └── calculator/
        ├── calculator-section.tsx            # section shell + semantic heading/subheading
        ├── calculator-cards.tsx              # interactive card grid (client component)
        ├── calculator-cards-content.ts       # typed card metadata (title, image, key)
        └── calculator-entry-modal.tsx        # modal trigger and lightweight estimate entry UI
```

### Pattern 1: Server Shell + Client Interaction Island
**What:** Keep section wrapper server-rendered, move only interactive card/modal logic into a `'use client'` child.
**When to use:** Any stateful interaction (`hover`, `tap`, open/close modal) in App Router.
**Example:**
```tsx
'use client'

import { useState } from 'react'

export function CalculatorCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  return null
}
```
Source: Next.js App Router `use client` directive docs (`/vercel/next.js` Context7).

### Pattern 2: Responsive Grid + Variant-Driven Interactions
**What:** Use Tailwind responsive/state variants (`grid`, `md:`, `lg:`, `hover:`, `focus-visible:`) rather than custom breakpoint CSS blocks.
**When to use:** Locked desktop/mobile geometry plus hover/tap state transitions.
**Example:**
```tsx
<div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
  <button className="transition-all hover:-translate-y-1 focus-visible:outline focus-visible:outline-2" />
</div>
```
Source: Tailwind docs (`https://tailwindcss.com/docs/hover-focus-and-other-states`).

### Pattern 3: Pointer-Aware Hover Fallback
**What:** Apply hover visuals only where hover is truly available; provide explicit tap action for coarse pointers.
**When to use:** D-10..D-16 behavior needs parity across desktop/mobile.
**Example:**
```css
@media (hover: hover) {
  .card:hover { /* desktop hover behavior */ }
}
```
Source: MDN `@media (hover)` (`https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/hover`).

### Anti-Patterns to Avoid
- **All-client section conversion:** making entire page section client just for one interaction increases JS/hydration cost.
- **Hover-only CTA reveal:** breaks usability on touch devices.
- **Absolute-positioned layout scaffold:** conflicts with project constraints (flex/grid/container patterns).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Modal accessibility behavior | Custom focus trap from scratch in ad-hoc div overlay | Native `<dialog>` behavior + APG keyboard/focus rules | Reduces keyboard/focus regressions |
| Image rendering optimization | Raw `<img>` everywhere for card backgrounds | `next/image` with `fill`, `sizes`, proper `alt` | Better loading and consistency with existing code |
| Breakpoint and state switching | Manual JS viewport listeners | Tailwind responsive/state variants + CSS media features | Fewer bugs and lower complexity |

**Key insight:** Custom interaction plumbing (focus management, hover/touch parity, responsive branching) is where most regressions happen; lean on platform + framework primitives.

## Common Pitfalls

### Pitfall 1: FLOW-01 Broken by Section Order
**What goes wrong:** Calculator is not immediately after advantages.
**Why it happens:** `src/app/page.tsx` currently renders `ProofSection` before `CalculatorSection`.
**How to avoid:** Make section order verification a first implementation task and lock it with a quick smoke checklist.
**Warning signs:** Visual pass looks correct in isolation, but page flow still violates requirement.

### Pitfall 2: Asset Path Drift for CTA Icon
**What goes wrong:** CTA icon missing at runtime.
**Why it happens:** Context references `public/images/svg-on-button-рассчитать.svg`, but file currently exists at `public/icons/svg-on-button-рассчитать.svg`.
**How to avoid:** Resolve canonical path in plan before coding and update references consistently.
**Warning signs:** 404 in devtools; button renders without icon.

### Pitfall 3: Hover Mechanics Not Replicated on Mobile
**What goes wrong:** Card CTA appears only on hover-capable devices.
**Why it happens:** Mouse-centric state logic without touch fallback.
**How to avoid:** Use explicit tap interaction on mobile and guard hover behavior with pointer/hover-capable conditions.
**Warning signs:** No actionable “Рассчитать” path on phones.

### Pitfall 4: Modal Opens but Fails Keyboard Flow
**What goes wrong:** Focus escapes dialog or does not return to opener.
**Why it happens:** Missing modal semantics and close/focus lifecycle handling.
**How to avoid:** Follow APG modal behavior: initial focus in dialog, tab loop, Escape close, focus restore.
**Warning signs:** Tab moves behind overlay; keyboard users get trapped incorrectly.

## Code Examples

Verified patterns from official sources:

### Next.js Client Interactivity Boundary
```tsx
'use client'

import { useState } from 'react'

export function CardState() {
  const [open, setOpen] = useState(false)
  return <button onClick={() => setOpen(true)}>Рассчитать</button>
}
```
Source: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/01-directives/use-client.mdx

### React Conditional Render for Lightweight UI States
```tsx
{isOpen ? <DialogContent /> : null}
```
Source: https://react.dev/learn/state-a-components-memory

### Tailwind Responsive + Interaction Variants
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4">
  <button className="hover:bg-sky-700 focus-visible:outline-2" />
</div>
```
Source: https://tailwindcss.com/docs/hover-focus-and-other-states

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| JS-heavy hover/touch branching | CSS/media-query-driven capability checks (`hover`, pointer variants) | MQ4 baseline broadly available since 2018+ | Better cross-device reliability |
| Div-based custom modal semantics | Native dialog semantics + APG-compliant keyboard/focus behavior | Widely supported baseline for dialog since 2022 | Lower accessibility risk for simple modal UX |

**Deprecated/outdated:**
- Hover-only conversion triggers on mobile-first flows.
- Entire-section client rendering for small local interaction needs.

## Open Questions

1. **CALC-04 scope interpretation for Phase 03**
   - What we know: Requirement includes context transfer to lead-flow; CONTEXT deferred ideas postpone full transfer to Phase 8.
   - What's unclear: Whether Phase 03 should only define context contract or persist/share it already.
   - Recommendation: Plan a non-breaking contract now (typed `calculatorContext` object), integrate final transfer in Phase 8.

2. **Icon canonical location**
   - What we know: Context path points to `public/images`, file currently in `public/icons`.
   - What's unclear: Which path is canonical by design spec.
   - Recommendation: Resolve before implementation; avoid duplicate files unless design owner requests.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| node | Next.js runtime/build scripts | ✓ | v24.14.0 | — |
| npm.cmd | install/lint/typecheck commands | ✓ | 11.9.0 | — |
| npx.cmd | optional local tool execution | ✓ | 11.9.0 | — |

**Missing dependencies with no fallback:**
- None.

**Missing dependencies with fallback:**
- None.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None (repo currently uses lint + typecheck as quality gate) |
| Config file | none — no dedicated test runner configured |
| Quick run command | `npm.cmd run lint && npm.cmd run typecheck` |
| Full suite command | `npm.cmd run lint && npm.cmd run typecheck` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CALC-01 | User can initiate approximate estimate flow | manual UI smoke + static checks | `npm.cmd run lint && npm.cmd run typecheck` | ✅ |
| CALC-02 | Estimate disclaimer is visible | manual UI assertion + static checks | `npm.cmd run lint && npm.cmd run typecheck` | ✅ |
| CALC-03 | Input scope remains lightweight (not deep configurator) | manual UX review + static checks | `npm.cmd run lint && npm.cmd run typecheck` | ✅ |
| CALC-04 | Context contract prepared for lead-flow handoff | contract/code review + static checks | `npm.cmd run lint && npm.cmd run typecheck` | ✅ |
| FLOW-01 | Calculator appears directly after advantages | manual page-order smoke + static checks | `npm.cmd run lint && npm.cmd run typecheck` | ✅ |

### Sampling Rate
- **Per task commit:** `npm.cmd run lint && npm.cmd run typecheck`
- **Per wave merge:** `npm.cmd run lint && npm.cmd run typecheck`
- **Phase gate:** lint + typecheck green and manual FLOW-01 order verification

### Wave 0 Gaps
- [ ] `tests/calculator-section.test.tsx` — no component test harness for calculator interactions yet
- [ ] Testing framework setup (e.g., Vitest + RTL) if automated interaction testing is required later

## Sources

### Primary (HIGH confidence)
- Context7 `/vercel/next.js` - `use client`, client interactivity, routing guidance.
- Context7 `/reactjs/react.dev` - `useState`, conditional rendering, state/reset behavior.
- WAI APG modal dialog pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Tailwind states/responsive docs: https://tailwindcss.com/docs/hover-focus-and-other-states
- MDN hover media feature: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/hover
- npm registry metadata (`npm.cmd view`) for package latest versions and publish dates.

### Secondary (MEDIUM confidence)
- None.

### Tertiary (LOW confidence)
- None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - verified against npm registry + existing repo dependencies.
- Architecture: HIGH - validated against current code structure and official Next.js/React/Tailwind guidance.
- Pitfalls: HIGH - directly tied to current repo state (`page.tsx` order, existing asset paths) and APG/MDN interaction constraints.

**Research date:** 2026-03-30
**Valid until:** 2026-04-29
