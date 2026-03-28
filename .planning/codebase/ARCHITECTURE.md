# АРХИТЕКТУРА

## Форма приложения
- Это небольшое одностраничное маркетинговое приложение на App Router.
- `src/app/page.tsx` собирает текущую страницу из feature-секций.
- Страница рендерится как линейная последовательность: first screen, calculator section и lead form section.

## Модель слоев
- Route layer: `src/app/*`
- Feature layer: `src/features/*`
- Shared UI layer: `src/components/*`
- Shared support layer: `src/lib/*`, `src/types/*`, `src/styles/*`
- Static assets: `public/*`

## Текущий поток данных
- Поток данных почти полностью статический и идет сверху вниз.
- `FirstScreen` определяет `navigationLinks` inline и передает их в `SiteHeader`.
- Пока не используются server actions, API routes, hooks или context providers.
- Нет пути к fetched data, mutation path или derived state pipeline.

## Точки входа
- Root document: `src/app/layout.tsx`
- Home route: `src/app/page.tsx`
- Основные UI-секции:
  - `src/features/landing/first-screen.tsx`
  - `src/features/calculator/calculator-section.tsx`
  - `src/features/lead-form/lead-form-section.tsx`

## Сильные стороны архитектуры
- Feature-папки уже отделяют landing, calculator и lead capture.
- Настройка App Router минимальна и легко расширяется.
- Общие стилистические токены централизованы в `tailwind.config.js`.

## Ограничения архитектуры
- Бизнес-данные дублируются между UI и `src/lib/site-config.ts`.
- Пустые папки вроде `src/components/ui` и `src/hooks` показывают задуманную структуру, но реальных абстракций пока нет.
- Нет доменной модели для calculator inputs, pricing rules или lead submission states.
