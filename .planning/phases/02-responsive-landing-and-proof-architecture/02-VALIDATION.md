---
phase: 2
slug: responsive-landing-and-proof-architecture
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-25
---

# Фаза 2 - Стратегия валидации

## Test Infrastructure

| Свойство | Значение |
|----------|----------|
| **Framework** | ESLint + TypeScript typecheck |
| **Config file** | `eslint.config.mjs`, `tsconfig.json` |
| **Quick run command** | `npm.cmd run lint` |
| **Full suite command** | `npm.cmd run lint && npm.cmd run typecheck` |
| **Оценочное время** | ~25 секунд |

## Sampling Rate

- После каждого task commit: `npm.cmd run lint`
- После завершения plan wave: `npm.cmd run lint && npm.cmd run typecheck`
- Перед `$gsd-verify-work`: полный suite green + manual responsive check

## Маппинг валидации по задачам

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | SITE-01 | static + manual | `npm.cmd run lint` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | SITE-02 | static + manual | `npm.cmd run typecheck` | ❌ W0 | ⬜ pending |
| 02-01-03 | 01 | 1 | TRST-02, TRST-03, TRST-04, TRST-05 | static + manual | `npm.cmd run lint && npm.cmd run typecheck` | ❌ W0 | ⬜ pending |

## Требования Wave 0

- [ ] Нет dedicated component/UI regression tests для блока преимуществ.
- [ ] Нет documented viewport checklist file для этой секции.

## Проверки только вручную

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Сетка карточек читаема на desktop/tablet/mobile | SITE-01 | Это визуальное поведение layout | Проверить ширины 360px, 768px, 1280px; убедиться в отсутствии overflow/clipping |
| Секция использует semantic heading structure (`h2` + `h3`) | SITE-02 | Требуется проверка rendered DOM | Осмотреть rendered markup в browser devtools |
| Dark CTA card остается отличимой и actionable | TRST-02/03/04/05 | Это вопрос visual и interaction hierarchy | Проверить contrast и clickable target на карточке |

## Подписание валидации

- [ ] Все задачи имеют automated verify или явный Wave 0 gap
- [ ] Нет 3 последовательных задач без validation hooks
- [ ] Feedback latency < 30s
- [ ] В frontmatter после успешного исполнения установлен `nyquist_compliant: true`

**Approval:** pending
