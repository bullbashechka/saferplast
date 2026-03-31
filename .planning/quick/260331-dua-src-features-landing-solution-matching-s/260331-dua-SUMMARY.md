# Quick Summary 260331-dua

## Result
Проверка показала использование inline-стилей в `src/features/landing/solution-matching-section.tsx`.

## Findings

- Нарушение Tailwind-first практики: найдено `5` inline-style вхождений.
- Точки в файле:
  - `src/features/landing/solution-matching-section.tsx:16`
  - `src/features/landing/solution-matching-section.tsx:38`
  - `src/features/landing/solution-matching-section.tsx:53`
  - `src/features/landing/solution-matching-section.tsx:58`
  - `src/features/landing/solution-matching-section.tsx:66`

## Files Changed

- `.planning/quick/260331-dua-src-features-landing-solution-matching-s/260331-dua-PLAN.md`
- `.planning/quick/260331-dua-src-features-landing-solution-matching-s/260331-dua-SUMMARY.md`

## Recommendation

Вынести инлайн-значения в Tailwind-классы и/или в типизированный контент-контракт, чтобы компонент остался без `style={...}`.
