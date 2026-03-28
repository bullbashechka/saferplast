# Фаза 2: Адаптивный лендинг и архитектура доказательств - Контекст

**Собрано:** 2026-03-25
**Статус:** Готово к планированию

<domain>
## Граница фазы

В этой итерации Фаза 2 намеренно сужена до одной секции: блока преимуществ/доказательств `Почему к нам обращаются`. Другие landing-секции не входят в scope исполнения для этого прохода.

</domain>

<decisions>
## Решения по реализации

### Фиксация scope
- **D-01:** Объем реализации Фазы 2 - только блок преимуществ.
- **D-02:** Секции услуг/категорий, сравнение PVC vs aluminum, процесс, отзывы и FAQ отложены и не входят в выполнение этой фазы.

### Контент секции и визуальный контракт
- **D-03:** Заголовок секции: `Почему к нам обращаются`.
- **D-04:** Подзаголовок секции: `Понятные условия, собственное производство и готовое решение`.
- **D-05:** Блок содержит 6 фреймов/карточек со структурой и текстом, определенными в `docs/preimushestva.md`.
- **D-06:** Маппинг стилей должен использовать Tailwind classes (не raw absolute-position CSS); demo coordinates - это только визуальные ориентиры.
- **D-07:** Карточки используют согласованный визуальный язык: Sansation для заголовков, Montserrat для body text, radius `20px`, padding карточек `40px 30px`, светлые gradient cards + одна dark CTA card.

### SEO-логика (предварительно зафиксирована для этой фазы)
- **D-08:** Блок преимуществ должен рендериться как semantic section content (`<section>` + иерархия заголовков с `<h2>` для title секции и `<h3>` для заголовков карточек).
- **D-09:** Тексты преимуществ должны быть обычным, индексируемым HTML text (не текстом внутри изображений).
- **D-10:** Сохранять один ясный keyword cluster вокруг производства, гарантии, скорости и опыта без keyword stuffing.

### Mobile/adaptive правила (предварительно зафиксированы для этой фазы)
- **D-11:** Требуются desktop/tablet/mobile layouts; горизонтальный overflow запрещен.
- **D-12:** На mobile карточки выстраиваются в single-column flow; spacing и typography уменьшаются, но читаемость и иерархия сохраняются.
- **D-13:** Dark CTA card остается визуально отличимой на mobile и остается actionable без overlap/cropping.

### Дискреция Claude
- Точные breakpoint values и выбор Tailwind token'ов, если они сохраняют fidelity к утвержденному стилю блока и проходят responsive readability checks.

</decisions>

<canonical_refs>
## Канонические ссылки

**Downstream agents MUST читать это перед планированием или реализацией.**

### Фаза и требования
- `.planning/ROADMAP.md` - цель Фазы 2 и базовая матрица требований
- `.planning/REQUIREMENTS.md` - идентификаторы требований Фазы 2 (`CONT-03`, `CONT-04`, `TRST-02`, `TRST-03`, `TRST-04`, `TRST-05`, `SITE-01`, `SITE-02`)
- `.planning/PROJECT.md` - проектные и продуктовые ограничения

### Дизайн и content source для суженной фазы
- `docs/preimushestva.md` - source content/styles для блока преимуществ
- `docs/DESIGN_SYSTEM.md` - typography/color и component-level style conventions

### Существующие якоря реализации
- `src/app/page.tsx` - текущая композиция landing sections
- `src/features/landing/*` - существующие паттерны first-screen, которые нужно сохранить

</canonical_refs>

<code_context>
## Данные о существующем коде

### Повторно используемые assets
- Существующий landing собирается в `src/app/page.tsx` через feature-based sections.
- Tailwind + TypeScript patterns уже установлены в `src/features/landing/*`.

### Установленные паттерны
- Tailwind-first implementation с semantic React components.
- Избегать absolute-position page construction в production code.

### Интеграционные точки
- Новый advantages section должен быть интегрирован в page composition под `src/features` и подключен к `src/app/page.tsx`.

</code_context>

<specifics>
## Конкретные идеи

- Пользователь явно ограничил эту фазу только блоком преимуществ и попросил заранее продумать SEO и mobile behavior до реализации.
- SEO и adaptive logic в этом файле считаются зафиксированными ограничениями для планирования и исполнения.

</specifics>

<deferred>
## Отложенные идеи

- Все остальные запланированные секции Фазы 2, кроме блока преимуществ, отложены на более поздний follow-up phase/pass.

</deferred>

---
*Фаза: 02-responsive-landing-and-proof-architecture*
*Контекст собран: 2026-03-25*
