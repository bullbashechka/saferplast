# Деплой проекта через веб-интерфейс Cloudflare

Этот проект нужно деплоить не с локальной машины, а через Cloudflare Dashboard с подключённым Git-репозиторием.

То есть схема такая:

1. код лежит в GitHub или GitLab
2. Cloudflare подключается к репозиторию
3. после каждого `push` Cloudflare сам собирает и деплоит проект

## Как это работает именно в этом проекте

- проект на `Next.js`
- для Cloudflare используется `@opennextjs/cloudflare`
- Worker описан в `wrangler.jsonc`
- имя Worker в проекте сейчас: `saferplast-main`

Важно:

- имя Worker в Cloudflare Dashboard должно совпадать со значением `"name"` в `wrangler.jsonc`
- если названия не совпадут, build в Cloudflare упадёт

Сейчас в `wrangler.jsonc` указано:

```json
"name": "saferplast-main"
```

Значит при создании проекта в Cloudflare лучше тоже использовать имя `saferplast-main`.

## Что нужно заранее

Перед началом у вас должно быть:

1. аккаунт Cloudflare
2. репозиторий проекта в GitHub или GitLab
3. доступ к настройкам `Workers & Pages`
4. реальные значения:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

## Что уже настроено в проекте

В проекте уже подготовлены:

- `wrangler.jsonc`
- `open-next.config.ts`
- команды для OpenNext в `package.json`
- `public/_headers` для кэширования статики

То есть вручную код под Cloudflare дописывать не нужно.

## Что делать в Cloudflare Dashboard

### Шаг 1. Открыть создание проекта

В Cloudflare:

1. открыть `Workers & Pages`
2. нажать `Create application`
3. выбрать `Import a repository`

### Шаг 2. Подключить GitHub или GitLab

Дальше:

1. выбрать Git-провайдера
2. дать Cloudflare доступ к репозиторию
3. выбрать нужный репозиторий с этим проектом

Если репозиторий уже подключён, просто выбрать его из списка.

### Шаг 3. Указать имя Worker

На этапе настройки проекта укажите имя Worker:

```txt
saferplast-main
```

Это важно, потому что оно должно совпасть с `wrangler.jsonc`.

Если хотите другое имя, сначала поменяйте `"name"` в `wrangler.jsonc`, закоммитьте это, а уже потом создавайте проект в Cloudflare с тем же именем.

## Какие настройки сборки указать в веб-интерфейсе

Когда Cloudflare попросит заполнить Build Settings, укажите следующее.

### Production Branch

Обычно:

```txt
main
```

или та ветка, из которой у вас должен идти production deploy.

### Root Directory

Если проект лежит в корне репозитория, оставьте пусто.

Если это монорепо и проект лежит в подпапке, укажите путь до папки проекта.

Для текущего репозитория обычно нужен корень репозитория.

### Build Command

Укажите:

```bash
npx opennextjs-cloudflare build
```

### Deploy Command

Укажите:

```bash
npx opennextjs-cloudflare deploy
```

### Non-production Branch Deploy Command

Если Cloudflare попросит отдельную команду для не-production веток, укажите:

```bash
npx opennextjs-cloudflare upload
```

Это удобно для preview-сборок без немедленного выката в production.

## Что писать в Variables / Secrets

В Cloudflare есть два разных места, и их важно не путать:

1. `Build Variables and secrets`
   Это переменные, доступные только во время сборки.

2. `Variables & Secrets`
   Это runtime-переменные Worker, доступные уже после деплоя во время выполнения приложения.

## Что обязательно нужно для этого проекта

Для текущего кода обязательно нужны runtime secrets:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Именно они нужны маршруту `/api/lead`, который отправляет заявки в Telegram.

### Куда их вносить

После создания Worker:

1. открыть проект в Cloudflare
2. перейти в `Settings`
3. открыть `Variables & Secrets`
4. добавить там secrets:

```txt
TELEGRAM_BOT_TOKEN = ваш_реальный_токен_бота
TELEGRAM_CHAT_ID = ваш_реальный_chat_id
```

Их лучше добавлять именно как `Secret`, а не как plain text variable.

## Что писать в Build Variables and secrets

Для текущего проекта строго обязательных build-переменных сейчас нет, потому что в коде нет использования `NEXT_PUBLIC_*` или `process.env.*` на этапе сборки страницы.

То есть на текущий момент можно:

- либо оставить `Build Variables and secrets` пустыми
- либо сразу добавить туда будущие публичные переменные, если хотите использовать их потом

### Если хотите заполнить заранее

Можно добавить:

```txt
NEXT_PUBLIC_SITE_URL = https://ваш-домен.uz
NEXT_PUBLIC_CONTACT_PHONE = +998...
```

Но важно понимать:

- сейчас код проекта эти переменные не использует
- они не обязательны для текущего deploy
- `TELEGRAM_*` для текущего кода нужны именно в runtime secrets

## Минимальный рабочий вариант переменных

### Runtime Variables & Secrets

Добавить обязательно:

```txt
TELEGRAM_BOT_TOKEN = ваш_токен
TELEGRAM_CHAT_ID = ваш_chat_id
```

### Build Variables and secrets

Можно оставить пусто.

## Если хотите сразу заполнить всё "на будущее"

Тогда можно сделать так.

### Build Variables and secrets

```txt
NEXT_PUBLIC_SITE_URL = https://ваш-домен.uz
NEXT_PUBLIC_CONTACT_PHONE = +998...
```

### Runtime Variables & Secrets

```txt
TELEGRAM_BOT_TOKEN = ваш_токен
TELEGRAM_CHAT_ID = ваш_chat_id
NEXT_PUBLIC_SITE_URL = https://ваш-домен.uz
NEXT_PUBLIC_CONTACT_PHONE = +998...
```

Но ещё раз: для текущего кода реально обязательны только `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.

## Порядок действий без путаницы

Если вам нужно просто задеплоить сайт через веб Cloudflare, делайте так:

1. запушить актуальный код в GitHub/GitLab
2. в Cloudflare открыть `Workers & Pages`
3. выбрать `Create application`
4. выбрать `Import a repository`
5. выбрать репозиторий
6. указать имя Worker `saferplast-main`
7. в Build Settings указать:

```txt
Build Command: npx opennextjs-cloudflare build
Deploy Command: npx opennextjs-cloudflare deploy
Non-production Branch Deploy Command: npx opennextjs-cloudflare upload
```

8. завершить создание проекта
9. после создания открыть `Settings -> Variables & Secrets`
10. добавить secrets:

```txt
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

11. запустить первый deploy

Если при первом deploy secrets были ещё не добавлены, просто добавьте их и перезапустите build.

## Как запускать повторные деплои

После того как Git-интеграция настроена:

- вы меняете код локально
- делаете commit
- делаете push в production-ветку
- Cloudflare сам запускает build и deploy

То есть дальше локальный `wrangler deploy` вам не нужен.

## Как смотреть ошибки сборки

Если деплой не прошёл:

1. откройте проект в Cloudflare Dashboard
2. перейдите в раздел `Deployments` или `Build history`
3. откройте конкретную неуспешную сборку
4. посмотрите лог

На что смотреть в первую очередь:

- совпадает ли имя Worker с `wrangler.jsonc`
- правильно ли указан `Build Command`
- правильно ли указан `Deploy Command`
- не забыты ли `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`
- не указан ли неправильный `Root Directory`

## Как привязать домен

После первого успешного деплоя:

1. откройте Worker в Cloudflare Dashboard
2. перейдите в `Settings -> Domains & Routes`
3. добавьте нужный домен или route

Примеры:

- `site.com`
- `www.site.com`
- `site.com/*`

Если домен уже обслуживается через Cloudflare, дальше всё делается из панели.

## Что сейчас не нужно

Если вы деплоите только через веб Cloudflare, вам не нужно:

- запускать `wrangler secret put` локально
- делать `wrangler deploy` локально
- заполнять `.dev.vars` ради production-деплоя

`.dev.vars` нужен только если вы хотите локально запускать `npm run preview` у себя на машине.

## Когда всё же нужен `.env` или `.dev.vars`

Это только для локальной разработки и локальной проверки:

- `.env` нужен для `npm run dev`
- `.dev.vars` нужен для `npm run preview`

Если вы делаете деплой только через Cloudflare Dashboard, для production этого недостаточно и не обязательно.
Production-настройки всё равно должны жить в Cloudflare Dashboard.

## Короткая версия

Если совсем коротко, для веб-деплоя через Cloudflare вам нужно:

1. подключить репозиторий
2. задать имя Worker `saferplast-main`
3. указать команды:

```txt
Build Command: npx opennextjs-cloudflare build
Deploy Command: npx opennextjs-cloudflare deploy
```

4. в `Variables & Secrets` добавить:

```txt
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

5. нажать deploy
6. дальше просто делать `git push`, а Cloudflare всё соберёт сам
