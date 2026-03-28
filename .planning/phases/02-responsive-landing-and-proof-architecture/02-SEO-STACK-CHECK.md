# Фаза 02 - SEO and Stack Check (No UI Changes)

**Date:** 2026-03-25  
**Mode:** design freeze, review-only, no implementation changes

## Scope Reviewed

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/features/landing/site-header.tsx`
- `src/features/landing/hero-section.tsx`
- `src/features/landing/advantages-section.tsx`
- `src/features/landing/first-screen-content.ts`
- `src/features/landing/advantages-section-content.ts`
- `package.json`
- `.planning/codebase/STACK.md`

## SEO Snapshot

### Что уже хорошо

- App-level metadata существует (`title`, `description`) в `layout.tsx`.
- Язык явно задан как русский (`<html lang="ru">`).
- First screen и advantages используют semantic structure:
  - `h1` в hero
  - `h2` section headings
  - `h3` card headings
  - `section` + `aria-labelledby` usage
- Значимые image `alt` text присутствуют у контентных изображений.

### Текущие SEO gaps (только запись, без фикса)

- Metadata минимальна (нет Open Graph, Twitter card, canonical).
- В `src/app` не найдено `robots` или `sitemap` route/file.
- Навигация содержит anchors `#projects` и `#contacts`, но matching section IDs сейчас отсутствуют в rendered page flow.
- Одна trust card все еще имеет placeholder text: `Опыт работы - более X лет`.

## Stack Compliance Snapshot

### Соответствие заявленному стеку

- Framework/runtime: Next.js 15 + React 19.
- Language: TypeScript со строгой типизацией в feature-модулях.
- Styling: Tailwind CSS utility approach с arbitrary values там, где это нужно для Figma mapping.
- Typography delivery: `@fontsource/montserrat` и `@fontsource/sansation`.
- Routing/composition следуют App Router entrypoints (`src/app/layout.tsx`, `src/app/page.tsx`).

### Validation commands

- `npm.cmd run typecheck` -> pass
- `npm.cmd run lint` -> fail, но ошибки находятся в `.codex/get-shit-done/*.cjs` tooling scripts (не в landing feature implementation files)

## Decision Log

- Дизайн и layout намеренно оставлены как есть по последней инструкции.
- Эта проверка - только документация и не изменяет UI/code behavior.
