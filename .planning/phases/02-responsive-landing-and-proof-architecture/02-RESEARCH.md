# Фаза 2: Адаптивный лендинг и архитектура доказательств - Исследование

**Исследовано:** 2026-03-25
**Область:** Реализация блока преимуществ (`docs/preimushestva.md`) с SEO semantics и mobile-first адаптацией
**Уверенность:** ВЫСОКАЯ

## Реальность scope

Roadmap Фазы 2 шире, но текущий утвержденный scope выполнения намеренно сужен до одной секции: блока преимуществ/доказательств `Почему к нам обращаются`.
Планирование и реализация не должны расширяться на другие секции Фазы 2 в этом проходе.

## Направление реализации

1. Построить отдельный component для landing section под `src/features/landing` для advantages.
2. Рендерить content как индексируемый semantic HTML: `<section>`, `<h2>`, шесть карточек с `<h3>` + paragraph.
3. Маппить style tokens из `docs/preimushestva.md` в Tailwind classes (без absolute coordinates).
4. Оставить одну dark CTA card заметной и кликабельной (anchor на `#lead-form` или существующую request section).
5. Добавить responsive layout rules:
   - Desktop: асимметричная card grid, похожая на intent дизайна.
   - Tablet: упрощенный 2-column layout.
   - Mobile: строгий 1-column flow, без horizontal overflow.
6. Держать русский copy UTF-8 clean, избегать mojibake regressions.

## SEO стратегия (для этого scope)

- Использовать heading hierarchy секции: один `h2` для title секции, `h3` для каждого card title.
- Держать все value propositions как реальный text в DOM (не текст внутри изображений).
- Сохранять краткий keyword cluster вокруг: производство, гарантия, скорость, опыт, бесплатный замер.
- Не перегружать секцию повторяющимися keywords.

## Mobile стратегия

- На маленьких экранах `px` spacing уменьшается, typography масштабируется вниз, но иерархия сохраняется.
- Карточки складываются в одну колонку на `sm` и ниже.
- Длинные заголовки должны переноситься естественно; избегать clipping/cropping.
- Dark CTA card остается визуально доминирующей и удобной для нажатия.

## Риски

- Точные абсолютные позиции из Figma плохо переносятся в responsive code; нужно переводить их в adaptive grid rules.
- Риск повреждения UTF-8 в русских литералах; нужно проверять сохраненные файлы и рендер.

## Архитектура валидации

- Быстрая команда: `npm.cmd run lint`
- Полная команда: `npm.cmd run lint && npm.cmd run typecheck`
- Ручные проверки: desktop/tablet/mobile visual pass по иерархии секции и читаемости карточек.
