# СТЕК

## Runtime и язык
- Основной runtime: Node.js для локальной разработки и сборки.
- Фреймворк приложения: `Next.js 15` с App Router.
- UI-библиотека: `React 19`.
- Язык: `TypeScript` со `strict` mode в `tsconfig.json`.
- Система стилизации: `Tailwind CSS 3` с кастомным token extension в `tailwind.config.js`.

## Основные зависимости
- `next`, `react`, `react-dom` обеспечивают shell приложения и routing.
- `@fontsource/montserrat` и `@fontsource/sansation` используются для локальной доставки типографики.
- Пока нет state-management library, form library, API client или CMS SDK.

## Инструменты
- Проверка типов: `tsc --noEmit` через `npm run typecheck`.
- Линтинг: `eslint .` через `npm run lint`.
- ESLint-конфигурация использует flat-config и находится в `eslint.config.mjs`.
- PostCSS-конфигурация задана в `postcss.config.mjs`.

## Сборка и routing
- `next.config.ts` включает `reactStrictMode`, `typedRoutes` и задает `outputFileTracingRoot`.
- Path alias `@/*` маппится на `./src/*` в `tsconfig.json`.
- Точки входа приложения: `src/app/layout.tsx` и `src/app/page.tsx`.

## Токены стилизации
- Семейство brand color tokens находится в `tailwind.config.js` под `brand`.
- Токены текста и поверхностей включают `ink`, `surface`, `muted` и `secondary`.
- Font tokens включают `font-body` и `font-display`.

## Состояние поставки
- `wrangler.jsonc` существует, значит deployment на Cloudflare запланирован.
- Cloudflare integration пока только scaffolded; build chain под конкретный adapter не подключен.
- Пока нет CI-конфигурации или deployment pipeline в репозитории.
