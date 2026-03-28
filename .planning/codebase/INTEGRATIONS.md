# ИНТЕГРАЦИИ

## Текущие внешние интеграции
- В application code пока нет живых API-интеграций.
- Не настроен клиент базы данных.
- Не настроен провайдер аутентификации.
- Нет analytics, error reporting, payment, CRM или email SDK.

## Ссылки на инфраструктуру
- `wrangler.jsonc` указывает на запланированный target Cloudflare.
- `README.md` явно упоминает будущую Cloudflare deployment work.
- `.env.example` сейчас определяет:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_CONTACT_PHONE`

## Интеграция ассетов
- Статические ассеты обслуживаются из `public/`.
- Иконки header лежат в `public/icons/location.svg` и `public/icons/phone.svg`.
- Brand и hero images лежат в `public/images/logo.png` и `public/images/herophotogirl.png`.

## Источники дизайна
- `docs/DESIGN_SYSTEM.md` выступает текущим design reference.
- Реализация лендинга использует этот файл для цветов, типографики, spacing и blur tokens.

## Запланировано, но не реализовано
- Lead capture подразумевается в `src/features/lead-form/lead-form-section.tsx`, но backend для отправки пока отсутствует.
- Pricing logic подразумевается в `src/features/calculator/calculator-section.tsx`, но engine расчета пока нет.
- `src/lib/site-config.ts` намекает на будущий централизованный источник business metadata, но он пока не связан с UI или env vars.

## Риски интеграции
- Environment variables заданы, но не используются, из-за чего возникает расхождение между config и runtime behavior.
- Cloudflare deployment intent есть, но adapter или worker runtime constraints пока не задокументированы.
- Contact и city data захардкожены в UI-компонентах вместо того, чтобы приходить из shared config source.
