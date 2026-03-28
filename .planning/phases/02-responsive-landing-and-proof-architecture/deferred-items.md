# Отложенные пункты

- 2026-03-25: Global `npm.cmd run lint` по-прежнему падает из-за pre-existing ESLint violations в `.codex/get-shit-done/**/*.cjs` (CommonJS `require()` и unused vars). Это находится вне scope Фазы 02-01 и не вызвано текущими изменениями landing.
