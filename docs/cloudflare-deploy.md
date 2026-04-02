# Деплой проекта в Cloudflare Workers

Этот проект уже подготовлен для деплоя в Cloudflare Workers через `@opennextjs/cloudflare`.
Ниже полная пошаговая инструкция: что установить, что написать в `env`, какие команды запускать и что делать в панели Cloudflare.

## Как это устроено в этом проекте

- Приложение написано на `Next.js`
- Для Cloudflare используется `OpenNext`
- Конфиг Worker лежит в `wrangler.jsonc`
- Команды деплоя уже добавлены в `package.json`
- Серверный маршрут `/api/lead` использует Telegram и читает:
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`

Важно:

- Для обычной локальной разработки используется `.env`
- Для локального preview в runtime Cloudflare Workers используется `.dev.vars`
- Для production в Cloudflare используются `secrets`, задаваемые через `wrangler secret put`

## Что нужно заранее

1. Должен быть установлен `Node.js`
2. Должен быть установлен `npm`
3. Должен быть доступ к аккаунту Cloudflare
4. В Cloudflare должен быть доступен Workers

## Что уже настроено в проекте

Ничего вручную в коде добавлять не нужно. Уже настроены:

- `open-next.config.ts`
- `wrangler.jsonc`
- `public/_headers`
- команды `preview`, `deploy`, `upload`, `cf-typegen`

## Первый запуск на новой машине

В корне проекта:

```bash
npm install
```

Потом авторизоваться в Cloudflare:

```bash
npx wrangler login
```

После команды откроется браузер. Нужно подтвердить доступ к нужному Cloudflare-аккаунту.

## Какие env нужны в этом проекте

### 1. `.env` для локального `npm run dev`

Создайте файл `.env` рядом с `.env.example`.

Минимальный пример:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_PHONE=
TELEGRAM_BOT_TOKEN=сюда_токен_бота
TELEGRAM_CHAT_ID=сюда_chat_id
```

Пояснение:

- `TELEGRAM_BOT_TOKEN` обязателен, если форма должна реально отправлять заявки
- `TELEGRAM_CHAT_ID` обязателен, если форма должна реально отправлять заявки
- `NEXT_PUBLIC_SITE_URL` можно указать как `http://localhost:3000` для локальной работы
- `NEXT_PUBLIC_CONTACT_PHONE` сейчас кодом не используется, можно оставить пустым

Если Telegram пока не нужен, локально сайт всё равно запустится, но отправка формы через `/api/lead` будет возвращать ошибку конфигурации.

### 2. `.dev.vars` для `npm run preview`

Создайте файл `.dev.vars` рядом с `.dev.vars.example`.

Рекомендуемое содержимое:

```dotenv
NEXTJS_ENV=development
TELEGRAM_BOT_TOKEN=сюда_токен_бота
TELEGRAM_CHAT_ID=сюда_chat_id
```

Зачем это нужно:

- `NEXTJS_ENV=development` говорит OpenNext/Wrangler использовать development-окружение при локальном preview
- `TELEGRAM_*` нужны именно для локального запуска в runtime Cloudflare Workers, если вы хотите проверить отправку формы до production-деплоя

Если хотите просто проверить рендеринг, а форму не тестируете, можно оставить в `.dev.vars` только:

```dotenv
NEXTJS_ENV=development
```

Но тогда `/api/lead` в preview не сможет отправлять данные в Telegram.

## Какие secrets нужны в Cloudflare production

Для production `TELEGRAM_*` нужно задавать не в файле, а как secrets Worker.

Выполните в корне проекта:

```bash
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
```

После каждой команды Cloudflare попросит вставить значение.

Важно:

- Эти значения не нужно коммитить в репозиторий
- Эти значения не нужно писать в `wrangler.jsonc`
- Для production достаточно хранить их как secrets в Cloudflare

## Что именно делать для первого деплоя

### Шаг 1. Установить зависимости

```bash
npm install
```

### Шаг 2. Авторизоваться в Cloudflare

```bash
npx wrangler login
```

### Шаг 3. Подготовить локальные env-файлы

Создать:

- `.env`
- `.dev.vars`

по примерам выше.

### Шаг 4. Задать production secrets в Cloudflare

```bash
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
```

### Шаг 5. Проверить типы и линтер

```bash
npm run typecheck
npm run lint
```

### Шаг 6. Проверить обычную production-сборку

```bash
npm run build
```

### Шаг 7. Проверить Cloudflare preview локально

```bash
npm run preview
```

Что здесь стоит проверить:

- открывается главная страница
- загружаются стили и изображения
- корректно работает навигация
- форма отправляется, если в `.dev.vars` заданы `TELEGRAM_*`

### Шаг 8. Сделать production deploy

```bash
npm run deploy
```

После этого Cloudflare создаст или обновит Worker с именем из `wrangler.jsonc`.
В текущем проекте имя Worker:

```txt
saferplast-main
```

## Что делать после первого деплоя в Cloudflare Dashboard

1. Откройте Cloudflare Dashboard
2. Перейдите в `Workers & Pages`
3. Найдите Worker `saferplast-main`
4. Откройте его

Дальше обычно нужно проверить:

- что deploy прошёл успешно
- что secrets присутствуют
- что сайт отвечает без ошибок

## Как привязать домен

После первого успешного деплоя:

1. Откройте Worker в Cloudflare Dashboard
2. Перейдите в `Settings -> Domains & Routes`
3. Нажмите добавление домена или route
4. Привяжите нужный production-домен

Примеры:

- `site.com`
- `www.site.com`
- или route вида `site.com/*`

Если DNS этого домена уже находится в Cloudflare, привязка обычно делается прямо из панели.

## Как обновлять проект после изменений

Если вы поменяли код:

```bash
npm run typecheck
npm run lint
npm run deploy
```

Если хотите сначала проверить сборку в Cloudflare runtime:

```bash
npm run preview
```

## Если нужно сменить имя Worker

Имя задаётся в `wrangler.jsonc`:

```json
"name": "saferplast-main"
```

Если измените имя:

- Cloudflare будет считать это другим Worker
- для нового имени придётся заново задать secrets
- возможно, придётся заново привязать домен

Поэтому без причины имя лучше не менять.

## Что важно помнить про env и secrets

Коротко:

- `.env` нужен для `npm run dev`
- `.dev.vars` нужен для `npm run preview`
- `wrangler secret put ...` нужен для production в Cloudflare

То есть одно и то же значение `TELEGRAM_BOT_TOKEN` может существовать в трёх местах:

- в `.env` для обычной локальной разработки
- в `.dev.vars` для локального preview через Workers runtime
- в Cloudflare secrets для production

Это нормально, потому что это три разных окружения.

## Типовой сценарий без путаницы

Если нужно просто развернуть проект:

1. Вписать реальные `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в `.env`
2. Вписать те же значения в `.dev.vars`
3. Выполнить:

```bash
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
```

4. Проверить:

```bash
npm run typecheck
npm run lint
npm run preview
```

5. Задеплоить:

```bash
npm run deploy
```

## Полезные команды

Локальная разработка:

```bash
npm run dev
```

Проверка production-сборки:

```bash
npm run build
```

Локальный Cloudflare preview:

```bash
npm run preview
```

Production deploy:

```bash
npm run deploy
```

Загрузка новой версии без немедленного переключения трафика:

```bash
npm run upload
```

Генерация типов Cloudflare env:

```bash
npm run cf-typegen
```

## Текущие особенности проекта

- `next/image` работает через binding `IMAGES` в `wrangler.jsonc`
- кэширование `/_next/static/*` настроено в `public/_headers`
- R2 сейчас не нужен, потому что проект не использует ISR-кэш, которому требуется внешнее хранилище

## Если что-то не работает

Проверьте по порядку:

1. Выполнен ли `npm install`
2. Выполнен ли `npx wrangler login`
3. Есть ли `.env` для `npm run dev`
4. Есть ли `.dev.vars` для `npm run preview`
5. Заданы ли `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`
6. Выполняются ли `npm run typecheck`
7. Выполняются ли `npm run lint`
8. Проходит ли `npm run build`
9. Проходит ли `npm run preview`
10. Заданы ли secrets в Cloudflare через `wrangler secret put`

Если проблема только в отправке формы, почти всегда причина в одном из этих пунктов:

- отсутствует `TELEGRAM_BOT_TOKEN`
- отсутствует `TELEGRAM_CHAT_ID`
- secrets не были заданы в Cloudflare для production
- в локальном preview не заполнен `.dev.vars`
