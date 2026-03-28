# ТЕСТИРОВАНИЕ

## Текущее состояние
- Не настроен unit test runner.
- Не настроены integration или end-to-end тесты.
- В `src/` нет файлов `*.test.ts`, `*.test.tsx` или `*.spec.tsx`.

## Активные quality gates
- `npm run lint` запускает ESLint по всему репозиторию.
- `npm run typecheck` запускает TypeScript в no-emit режиме.
- Сейчас это единственные видимые обязательные проверки качества.

## Что не покрыто
- Визуальные регрессии лендинга не тестируются.
- Навигационные anchors не тестируются.
- Responsive-поведение hero/header не тестируется.
- Placeholder sections для calculator и lead form не имеют behavioral tests, потому что бизнес-логики пока нет.

## Рекомендуемый ближайший план по тестированию
- Добавить component tests для `src/features/landing/site-header.tsx` и `src/features/landing/hero-section.tsx`, когда появится test runner.
- Добавить snapshot или visual review для изменений layout первого экрана.
- Добавить будущие form tests, когда `lead-form` получит state и submission handling.
- Добавить тесты pricing logic, когда `calculator-section` будет опираться на реальные business rules.

## Краткое резюме рисков тестирования
- Сейчас репозиторий опирается на ручной visual review для correctness фронтенда.
- Регрессии layout вероятны во время итеративной Figma-driven доработки.
- Отсутствие автоматических тестов допустимо для текущего небольшого объема, но станет узким местом, когда будут реализованы calculator и lead logic.
