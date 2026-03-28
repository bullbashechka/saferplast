# КОНВЕНЦИИ

## Язык и типизация
- Для всего application code использовать TypeScript.
- Включен `strict` mode, поэтому новый код должен быть полностью типизирован.
- Для путей по возможности использовать alias `@/`.

## Стиль компонентов
- Компоненты - function components.
- Props типизируются явно через локальные `type` aliases.
- Текущий код внутри feature-модулей предпочитает named exports вместо default exports.

## Практика стилизации
- Пользователь явно попросил Tailwind-first styling.
- Layout должен использовать `flex` и `grid`, а не coordinate-driven absolute positioning для основной структуры.
- Последнее направление предпочитает `rem` для typography, spacing и radii.
- Для ширин лучше использовать `%`, `vw`, `vh` и `max-width`, а не жесткие fixed widths.
- `line-height` должен быть unitless.

## Правила по файлам и именованию
- Kebab-case для имен файлов, например `hero-section.tsx`.
- PascalCase для имен компонентов.
- Ожидается semantic HTML для landing-секций: `header`, `nav`, `section`, `h1`, `p`, `a`, `button`.

## Общие источники стилей
- Design tokens находятся в `tailwind.config.js`.
- Global CSS должен оставаться минимальным и сейчас ограничен импортами шрифтов и базовыми правилами элементов в `src/styles/globals.css`.
- Typography опирается на локальные font packages, а не на удаленные Google imports во время runtime.

## Обработка ошибок и валидация
- Пока нет отдельной стратегии runtime error handling.
- В текущем кодовой базе нет schema validators, form validators или API error contracts.
