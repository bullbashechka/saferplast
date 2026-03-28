# ОПАСЕНИЯ

## Немедленные технические риски
- В нескольких файлах вне основного landing-flow все еще встречаются mojibake или encoding damage, включая видимый русский текст в placeholder-секциях вроде `src/features/calculator/calculator-section.tsx`, `src/features/lead-form/lead-form-section.tsx` и `src/lib/site-config.ts`.
- В репозитории появляется сгенерированный шум вроде `tsconfig.tsbuildinfo` в `git status`, что говорит о неполном `.gitignore`.
- Проект сейчас design-driven и очень итеративный, поэтому churn по layout ожидаем.

## Архитектурные риски
- `src/features/calculator/` и `src/features/lead-form/` пока только заглушки, поэтому текущая архитектура еще не проверена реальной продуктовой логикой.
- Контактные данные по-прежнему захардкожены в header вместо того, чтобы последовательно брать их из `src/lib/site-config.ts` или env-backed configuration.
- Навигация содержит targets вроде `#projects` и `#contacts`, но соответствующие секции еще не реализованы.

## Риски поставки
- Cloudflare запланирован, но adapter, build target и deployment validation пока отсутствуют.
- Приложение еще не доказывает совместимость с Pages- или Workers-runtime.
- Нет CI, который бы enforced lint, typecheck или будущие build-правила.

## Риски качества фронтенда
- Pixel matching с Figma уже подтолкнул код к спору между absolute positioning и flow-based layout.
- Без документированной "layout policy" повторная переработка почти неизбежна.
- Репозиторию нужно стабильное решение о том, что важнее: точная координатная fidelity или масштабируемая responsive structure.

## Рекомендованные следующие шаги
- Исправить encoding issues в оставшихся placeholder-файлах.
- Добавить `tsconfig.tsbuildinfo` в `.gitignore`.
- Нормализовать business constants в `src/lib/site-config.ts` и использовать их в UI.
- Зафиксировать и задокументировать одну layout strategy для будущих landing-работ.
