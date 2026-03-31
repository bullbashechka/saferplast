# Saferplast Main

Стартовый каркас лендинга для пластиковых окон на `Next.js + TypeScript + Tailwind CSS`.

## Структура

- `src/app` - App Router, layout и страницы.
- `src/features/landing` - секции лендинга.
- `src/features/calculator` - калькулятор стоимости.
- `src/features/lead-form` - форма заявки.
- `src/components` - переиспользуемые UI-компоненты.
- `src/lib` - конфиги и утилиты.
- `src/types` - общие типы.
- `public` - изображения, иконки и статические файлы.
- `docs` - архитектурные заметки, дизайн-материалы и handoff-планы.
- `scripts` - вспомогательные скрипты проекта.

## Команды

- `npm run dev` - локальный dev-сервер.
- `npm run build` - production build.
- `npm run start` - запуск production-сборки.
- `npm run lint` - проверка ESLint.
- `npm run typecheck` - проверка TypeScript без emit.

## Быстрый ориентир

- Сохранённый план по следующему блоку FAQ: `docs/faq-section-plan.md`
- Базовые архитектурные заметки: `docs/architecture.md`
- Материалы по визуальной системе: `docs/DESIGN_SYSTEM.md`

## Дальше

1. Реализовать секцию FAQ по плану из `docs/faq-section-plan.md`.
2. Продолжить наполнение лендинга и связанные UI-блоки по feature-структуре.
3. Держать `lint` и `typecheck` зелёными после каждого изменения.
