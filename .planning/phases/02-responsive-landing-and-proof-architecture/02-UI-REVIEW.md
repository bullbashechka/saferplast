# Фаза 02 - UI Review

**Проверено:** 2026-03-25
**Baseline:** abstract 6-pillar standards (no `02-UI-SPEC.md` found)
**Screenshots:** не были захвачены (dev server отвечал на `localhost:3000`, но Playwright CLI не создал image files)

---

## Оценки по pillar

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 2/4 | Russian copy quality в целом хорош, но mojibake появляется в hero labels, а один headline все еще содержит placeholder `X`. |
| 2. Visuals | 3/4 | Иерархия и semantic structure понятны, но mobile header nav скрыт без альтернативного menu path. |
| 3. Color | 2/4 | Несколько hardcoded hex/rgba colors (`11` matches) снижают consistency и maintainability токенов. |
| 4. Typography | 2/4 | Система веса дисциплинирована, но scale типографики фрагментирован (`14` distinct text size/color tokens в просмотренных файлах). |
| 5. Spacing | 2/4 | Сильная зависимость от arbitrary spacing values (`29` bracketed px/rem matches) повышает риск несогласованности. |
| 6. Experience Design | 2/4 | Секции читаемы и семантически доступны, но loading/error/empty/disabled states отсутствуют. |

**Итого: 13/24**

---

## Топ-3 приоритетных исправления

1. **Исправить encoding regressions в hero copy** - mojibake подрывает доверие и читабельность - заменить поврежденные строки в `aria-label` и `Image alt` на корректный UTF-8 русский текст.
2. **Заменить hardcoded color literals на Tailwind theme tokens** - drift цветов приводит к визуальной несогласованности - перенести повторяющиеся `#004B62`, `#00384a`, grayscale и gradient stops в tokenized classes/config.
3. **Добавить mobile navigation fallback в header** - пользователи на small screens теряют primary navigation routes - добавить menu button/drawer, когда desktop nav скрыт (`lg:flex` сейчас полностью скрывает nav).

---

## Подробные наблюдения

### Pillar 1: Copywriting (2/4)
- Encoding corruption (mojibake) присутствует в production-facing strings:
  - `aria-label` в trust list: `src/features/landing/hero-section.tsx:43`
  - Hero image `alt`: `src/features/landing/hero-section.tsx:58`
- Placeholder business value остается неурегулированным:
  - `Опыт работы - более X лет`: `src/features/landing/advantages-section-content.ts:36`
- Грубых CTA labels типа `Submit/Click Here/OK` в просмотренных UI files не найдено.

### Pillar 2: Visuals (3/4)
- Сильная semantic hierarchy присутствует:
  - Header/nav structure: `src/features/landing/site-header.tsx:23`, `src/features/landing/site-header.tsx:35`
  - Hero title `h1`: `src/features/landing/hero-section.tsx:12`
  - Advantages heading structure `h2` + `h3`: `src/features/landing/advantages-section.tsx:9`, `src/features/landing/advantages-section.tsx:65`
- Риск: main nav скрыт на mobile (`hidden ... lg:flex`) без видимого replacement pattern:
  - `src/features/landing/site-header.tsx:35`

### Pillar 3: Color (2/4)
- Найдено hardcoded color usage в просмотренных секциях (`11` matches), включая:
  - `#004B62`, `#00384a`, `#242424`, `#FAFEFF`, `#F5FCFF`, `#F2F4F5`, `#d9e5ea`
  - Примеры: `src/features/landing/hero-section.tsx:25`, `src/features/landing/site-header.tsx:52`, `src/features/landing/advantages-section.tsx:59`
- Градиенты и направление contrast у dark CTA хороши, но bypass токенов усложняет глобальную настройку.

### Pillar 4: Typography (2/4)
- Плюс: использование веса шрифтов контролируемо (`font-normal`, `font-medium` only).
- Фрагментация: `14` distinct `text-[...]` tokens across header/hero/advantages (including mixed size and color bracket values), например:
  - `text-[3.4375rem]`: `src/features/landing/hero-section.tsx:14`
  - `text-[2.75rem]`: `src/features/landing/advantages-section.tsx:11`
  - `text-[0.9375rem]`: `src/features/landing/site-header.tsx:59`
- Многие строки используют `leading-[1]`; это слишком tight для длинных блоков на small screens.

### Pillar 5: Spacing (2/4)
- Плотность arbitrary spacing высокая (`29` bracketed px/rem matches) в просмотренных файлах.
- Примеры:
  - Header spacing system: `src/features/landing/site-header.tsx:23`, `src/features/landing/site-header.tsx:52`
  - Hero spacing system: `src/features/landing/hero-section.tsx:23`, `src/features/landing/hero-section.tsx:25`
  - Advantages spacing system: `src/features/landing/advantages-section.tsx:19`, `src/features/landing/advantages-section.tsx:77`
- Direct overflow bug в code patterns не найден, но долгосрочный риск consistency повышен.

### Pillar 6: Experience Design (2/4)
- Композиция и порядок секций coherent:
  - Landing flow включает first screen и advantages before calculator/form: `src/app/page.tsx:8`
- В audited sections нет explicit state handling patterns:
  - Нет loading/skeleton, error или empty state logic в header/hero/advantages/page files.
- CTA interaction существует (`href="#lead-form"`), но нет disabled или pending states для async actions в этом scope.

---

## Файлы, которые были проверены
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-01-SUMMARY.md`
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-01-PLAN.md`
- `.planning/phases/02-responsive-landing-and-proof-architecture/02-CONTEXT.md`
- `src/features/landing/site-header.tsx`
- `src/features/landing/hero-section.tsx`
- `src/features/landing/advantages-section.tsx`
- `src/features/landing/advantages-section-content.ts`
- `src/app/page.tsx`
