# Quick Plan 260331-dua

## Goal
Проверить компонент `src/features/landing/solution-matching-section.tsx` на использование запрещенных стилей по правилам репозитория.

## Tasks

1. Сверить правила стилей в `AGENTS.md` и текущую реализацию компонента.
   - Files: `AGENTS.md`, `src/features/landing/solution-matching-section.tsx`
   - Action: Найти в компоненте паттерны, нарушающие Tailwind-first практику.
   - Verify: Есть точный список вхождений с номерами строк.
   - Done: Сформирован список нарушений или подтверждено их отсутствие.

2. Зафиксировать результат проверки без изменения UI-кода.
   - Files: `.planning/quick/260331-dua-src-features-landing-solution-matching-s/260331-dua-SUMMARY.md`
   - Action: Описать найденные нарушения и что нужно исправить.
   - Verify: Summary содержит count + line references + рекомендацию.
   - Done: Отчет готов.

## Notes

- В AGENTS.md используется правило: Tailwind utility classes вместо custom CSS.
- Для этой quick-задачи выполняется аудит, не рефакторинг.
