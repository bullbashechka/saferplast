# СТРУКТУРА

## Верхний уровень
- `src/` содержит весь application code.
- `public/` содержит статические media assets.
- `docs/` содержит human documentation и design references.
- `.planning/codebase/` содержит сгенерированный mapping output.

## Дерево исходников
- `src/app/layout.tsx` задает root HTML shell.
- `src/app/page.tsx` - текущая композиция home page.
- `src/features/landing/` содержит реализацию first screen:
  - `first-screen.tsx`
  - `site-header.tsx`
  - `hero-section.tsx`
- `src/features/calculator/calculator-section.tsx` - placeholder section.
- `src/features/lead-form/lead-form-section.tsx` - placeholder section.
- `src/lib/site-config.ts` содержит company metadata.
- `src/types/calculator.ts` определяет простой `WindowProfile` union.
- `src/styles/globals.css` содержит импорт шрифтов и базовые глобальные правила.

## Раскладка статических ассетов
- `public/images/logo.png`
- `public/images/herophotogirl.png`
- `public/icons/phone.svg`
- `public/icons/location.svg`

## Паттерны именования
- Feature-файлы используют kebab-case, например `first-screen.tsx`.
- Имена React-компонентов используют PascalCase, например `FirstScreen`, `HeroSection`, `SiteHeader`.
- Route-файлы следуют соглашениям Next.js, например `page.tsx`, `layout.tsx`.

## Заметные пробелы
- Пока не реализованы примитивы в `src/components`.
- Нет директорий с тестами.
- Нет API routes или обработчиков `src/app/api/*`.
