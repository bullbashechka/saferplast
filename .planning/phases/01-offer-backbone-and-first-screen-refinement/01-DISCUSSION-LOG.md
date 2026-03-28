# Phase 1: Основа предложения и доработка первого экрана - Журнал обсуждения

> **Audit trail only.** Не использовать как input для planning, research или execution agents.
> Решения фиксируются в CONTEXT.md.

**Дата:** 2026-03-25
**Фаза:** 01-offer-backbone-and-first-screen-refinement
**Обсуждаемые области:** Header source-of-truth, Hero content lock, Hero visual lock, Image handling

---

## Header source-of-truth

| Option | Description | Selected |
|--------|-------------|----------|
| Figma + header style spec as canonical | Использовать Figma intent и `docs/headerDemoStyles.md`; переводить в valid Tailwind | ✓ |
| Keep previous implementation choices | Сохранить прежнюю интерпретацию из предыдущей discuss session | |

**Выбор пользователя:** Следовать Figma и `docs/headerDemoStyles.md` как source of truth для header.
**Notes:** Пользователь явно напомнил, что проект Figma-driven, и попросил привести style implementation к корректному Tailwind.

---

## Hero content lock

| Option | Description | Selected |
|--------|-------------|----------|
| Lock exact headline/subheadline/button labels | Использовать предоставленный copy verbatim в hero | ✓ |
| Keep prior exploratory copy rules | Оставить дальнейшую интерпретацию из старого контекста | |

**Выбор пользователя:** Зафиксировать hero text по предоставленным headline/subheadline и двум CTA labels.
**Notes:** Это снимает неоднозначность из предыдущей итерации контекста.

---

## Hero visual lock

| Option | Description | Selected |
|--------|-------------|----------|
| Use hero demo style spec as canonical | Применять `docs/heroDemoStyles.md` через Tailwind mapping | ✓ |
| Keep previous trust-heavy hero interpretation | Сохранить предыдущий trust/audience-heavy visual approach | |

**Выбор пользователя:** Использовать `docs/heroDemoStyles.md` как канонический visual guidance для hero.
**Notes:** Главная цель - лучшая fidelity и меньше drift интерпретации.

---

## Image handling

| Option | Description | Selected |
|--------|-------------|----------|
| Keep current right-side photo for now | Не менять hero image asset в этом correction step | ✓ |
| Replace/rework image now | Изменить photo и его asset behavior в этом же проходе | |

**Выбор пользователя:** Оставить текущую правую фотографию без изменений.
**Notes:** Пользователь отметил отдельные нюансы вокруг photo и явно отложил их.

## Дискреция агента

- Responsive interpolation demo values into production Tailwind layout.
- Accessibility/semantic details, которые не меняют зафиксированные visual и content decisions.

## Отложенные идеи

- Переработка/замена фото и связанные image nuances.
- Нижние секции лендинга и non-first-screen scope.
