---
phase: 1
slug: offer-backbone-and-first-screen-refinement
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-24
---

# Фаза 1 - Стратегия валидации

> Контракт валидации по фазе для sampling feedback во время исполнения.

---

## Test Infrastructure

| Свойство | Значение |
|----------|----------|
| **Framework** | ESLint + TypeScript typecheck |
| **Config file** | `eslint.config.mjs`, `tsconfig.json` |
| **Quick run command** | `npm.cmd run lint` |
| **Full suite command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Оценочное время** | ~20 секунд |

---

## Sampling Rate

- **После каждого task commit:** запускать `npm.cmd run lint`
- **После каждой plan wave:** запускать `npm.cmd run lint && npm.cmd run typecheck`
- **Перед `$gsd-verify-work`:** полный suite должен быть green
- **Максимальная задержка feedback:** 20 секунд

---

## Маппинг валидации по задачам

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-02 | 01 | 1 | CONT-02 | static + manual | `npm.cmd run typecheck` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 1 | SITE-03 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 1 | TRST-01 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 2 | CONT-05 | static + manual | `npm.cmd run lint && npm.cmd run typecheck` | ❌ W0 | ⬜ pending |

*Статус: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Требования Wave 0

- [ ] Нет dedicated visual/component regression tests для `src/features/landing/site-header.tsx`
- [ ] Нет dedicated visual/component regression tests для `src/features/landing/hero-section.tsx`
- [ ] Нет documented first-screen viewport checklist для desktop/tablet/mobile review

---

## Проверки только вручную

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero copy совпадает с утвержденной формулировкой первого экрана | CONT-01 | Copy fidelity к утвержденной Figma/context - это визуально-контентная проверка | Открыть локальный landing, сравнить headline/support text с `01-CONTEXT.md` и утвержденным Figma block |
| Primary CTA визуально доминирует над secondary CTA | CONT-02 | Иерархия CTA - это частично визуальная, а не только type-safe проверка | Открыть первый экран на desktop и подтвердить, что `Бесплатный замер` - наиболее сильное видимое действие, а `Получить расчет` явно вторичен |
| Contact zone корректно группирует phone, city, WhatsApp и Telegram | SITE-03 | Группировка и иерархия - визуально-интеракционные вопросы | Проверить первый экран на desktop и mobile; убедиться, что phone - primary text action, а messenger icons - видимые secondary actions |
| Короткие trust/value signals находятся в hero, а не превращаются в full card section | TRST-01 | Trust treatment зависит от layout/content-specific решения | Убедиться, что hero содержит только compact trust bullets/chips и не включает позднюю card grid `Почему к нам обращаются` |
| Audience breadth видна на первом экране | CONT-05 | Наличие сообщения зависит от финального копирайта и layout choice | Подтвердить, что первый экран сообщает о квартирах, домах, офисах и коммерческих помещениях через copy или компактные labels |

---

## Подписание валидации

- [ ] У всех задач есть `<automated>` verify или Wave 0 dependencies
- [ ] Sampling continuity: нет 3 последовательных задач без automated verify
- [ ] Wave 0 покрывает все MISSING references
- [ ] Нет watch-mode flags
- [ ] Feedback latency < 20s
- [ ] В frontmatter установлен `nyquist_compliant: true`

**Approval:** pending
