# Фаза 1: Основа предложения и доработка первого экрана - Исследование

**Исследовано:** 2026-03-24
**Область:** Доработка первого экрана landing на Next.js под Figma-дизайн
**Уверенность:** СРЕДНЯЯ

<user_constraints>
## Ограничения пользователя (из CONTEXT.md)

### Зафиксированные решения
### Предложение и копирайт
- **D-01:** Заголовок hero `h1` должен быть таким: `Окна, двери и балконы из ПВХ и алюминия напрямую от производителя`.
- **D-02:** Поддерживающий текст hero должен быть таким: `Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет стоимости.`
- **D-03:** Первый экран должен сразу показывать полный масштаб бизнеса: производство, монтаж и ремонт оконных изделий из ПВХ и алюминия.

### Иерархия CTA
- **D-04:** Основной CTA на первом экране - `Бесплатный замер`.
- **D-05:** Вторичный CTA на первом экране - `Получить расчет`.
- **D-06:** Иерархия CTA должна делать запрос на замер главным путем конверсии, а запрос расчета - визуально вторичным.

### Trust-сигналы первого экрана
- **D-07:** На первом экране должны быть короткие тезисы о доверии/ценности внутри hero или рядом с ним, а не полноценная сетка карточек.
- **D-08:** Короткие trust/value тезисы для первого экрана: `Собственное производство`, `Быстрый выезд и расчет`, `Гарантия 1 год`.
- **D-09:** Отдельная секция `Почему к нам обращаются` с несколькими карточками преимуществ явно вне этой фазы и останется для более позднего блока лендинга.

### Подача контактов
- **D-10:** На первом экране должны быть видны телефон, город, WhatsApp и Telegram.
- **D-11:** Телефон остается главным текстовым контактом в контактной зоне.
- **D-12:** WhatsApp и Telegram должны показываться как отдельные ссылочные иконки, визуально сгруппированные с телефоном, а не конкурирующие с основным CTA.

### Дискреция Claude
- Точная визуальная подача коротких trust/value тезисов внутри hero-flow
- Точное расстояние, размеры и адаптивное поведение, если они соответствуют Figma и правилам layout репозитория
- Появляется ли город в header contact group, в supporting text hero или в обоих местах, если сохраняется релевантность первого экрана

### Отложенные идеи (ВНЕ ОБЪЕМА)
- Полноценная много-карточная секция преимуществ `Почему к нам обращаются` - более поздняя секция лендинга, не часть фазы доработки первого экрана
- FAQ, услуги, отзывы и другие нижние секции лендинга - работа Фазы 2
- Функциональное поведение lead form - работа Фазы 3
- Поведение калькулятора и передача данных - работа Фазы 4
</user_constraints>

<phase_requirements>
## Требования фазы

| ID | Описание | Поддержка исследования |
|----|----------|------------------------|
| CONT-01 | Посетитель в первом экране понимает, что SaFerplast производит, устанавливает и ремонтирует окна, двери и балконы из ПВХ и алюминия | Использовать зафиксированные `h1` + supporting text, делать copy героя явным и не прятать основное предложение в нижних секциях |
| CONT-02 | Посетитель видит ясный основной CTA для консультации, замера или запроса расчета above the fold | Сделать оба CTA реальными ссылками/действиями above the fold; основной CTA должен визуально доминировать |
| CONT-05 | Посетитель видит, что компания работает с квартирами, частными домами, офисами и коммерческими помещениями | Добавить краткую аудиторию-линейку или набор chips в hero support/trust area, а не отдельную нижнюю секцию |
| TRST-01 | Посетитель видит отличия компании, включая собственное производство, прямое ценообразование и скорость работы | Использовать короткие trust bullets рядом с hero, а не целую сетку карточек; держать их читаемыми и близкими к CTA |
| SITE-03 | Посетитель может найти контактные данные и релевантность по зоне обслуживания | Держать телефон/город видимыми на первом экране, добавить WhatsApp/Telegram и убрать или исправить мертвые contact anchors |
</phase_requirements>

## Краткое содержание

Эту фазу следует планировать как сфокусированную доработку существующего `FirstScreen`, `SiteHeader` и `HeroSection`, а не как редизайн или более широкий build-out лендинга. В репозитории уже есть нужный технический стек для работы: Next.js App Router, React function components, Tailwind CSS, локальная загрузка шрифтов и статические ассеты для логотипа и hero-изображения. Планировочный вопрос здесь в основном структурный и контентный: как сделать первый экран так, чтобы он сразу сообщал предложение, аудиторию, доверие и действие, оставаясь верным Figma и правилам Tailwind-first layout из репозитория.

Самое важное ограничение - дисциплина по scope. Фаза 1 не должна вводить новые библиотеки, новые нижние секции или рефакторинг content-model по всему приложению. Нужно исправить текущие пробелы первого экрана: инертные CTA-кнопки, мертвые навигационные anchors (`#projects`, `#contacts`), отсутствующие WhatsApp/Telegram assets/links и неполные trust/audience-сообщения. Также не стоит преждевременно централизовать business copy в `src/lib/site-config.ts`, потому что сейчас там неверные/поврежденные данные и это небезопасный shared source.

**Основная рекомендация:** планировать Фазу 1 как чистую first-screen-pass для лендинга, которая сохраняет текущий split компонентов, добавляет небольшой typed content source внутри `src/features/landing/`, превращает CTA и contact items в реальные ссылки и реализует trust/audience-сигналы внутри hero-flow с помощью Tailwind flex/grid, а не новых секций или абсолютного позиционирования.

## Ограничения проекта (из CLAUDE.md)

- Использовать существующий стек: Next.js, TypeScript, Tailwind CSS.
- Figma - источник истины; реализация должна близко следовать утвержденному макету.
- Оставаться Tailwind-first с минимальным глобальным CSS.
- Предпочитать flex/grid, spacing в rem и container/max-width patterns.
- Сохранять совместимость с Cloudflare.
- Сообщения должны оставаться достаточно широкими для квартир, частных домов, офисов и коммерческих пространств.
- Использовать TypeScript для всего app code.
- Держать компоненты маленькими, компонуемыми и функциональными.
- Держать application code под `src/` и feature code под `src/features`.
- Использовать имена файлов в `kebab-case`, а компонентов - в PascalCase.
- Пока что валидация - это `npm run lint` и `npm run typecheck`.
- На PowerShell с ограничениями на script execution предпочитать `npm.cmd run <script>`.

## Стандартный стек

### Основной
| Библиотека | Версия | Назначение | Почему это стандарт |
|-----------|--------|------------|---------------------|
| Next.js | 15.5.14 | Композиция страницы App Router, `next/image`, `next/link` | Уже установлен, стандарт репозитория, идеально для статического marketing first screen |
| React | 19.2.4 | Композиция function components | Уже установлен, state-heavy UI для этой фазы не нужен |
| Tailwind CSS | 3.4.19 | Layout, spacing, typography, responsive behavior | Соответствует правилам репозитория и существующим токенам в `tailwind.config.js` |
| TypeScript | 5.9.3 | Строгая типизация content/config и props | Уже enforced в репозитории и достаточно для статического data flow этой фазы |

### Поддерживающий
| Библиотека | Версия | Назначение | Когда использовать |
|-----------|--------|------------|------------------|
| `@fontsource/montserrat` | 5.2.8 | Локальная доставка body font | Сохранять текущую локальную загрузку шрифта; не возвращать remote imports |
| `@fontsource/sansation` | 5.2.2 | Локальная доставка display font | Сохранять текущий pattern display font для hero headline |
| `next/image` | bundled with Next.js 15.5.14 | Оптимизированные logo и hero images | Использовать для всех first-screen raster assets |

### Рассмотренные альтернативы
| Вместо | Можно использовать | Компромисс |
|-------|------------------|-----------|
| Существующий Tailwind + feature components | UI kit/component library | Добавляет churn зависимостей и mismatch с дизайн-системой для маленькой Figma-locked фазы |
| Локальный typed landing content module | Рефактор `src/lib/site-config.ts` прямо сейчас | Это шире, чем требует фаза; текущий файл содержит плохие данные и проблемы с кодировкой |
| Существующие static assets + собственные messenger icons в `public/` | Внешняя icon library | Быстрее вначале, но лишнее для двух иконок и добавляет шум в bundle/dependencies |

**Установка:**
```bash
npm.cmd install
```

**Проверка версий:** подтверждено 2026-03-24 локальными проверками install и npm registry lookup.
- `next`: установлен `15.5.14`; upstream latest `16.2.1`, опубликован `2026-03-20`
- `react`: установлен `19.2.4`; upstream latest `19.2.4`, опубликован `2026-01-26`
- `tailwindcss`: установлен `3.4.19`; upstream latest `4.2.2`, опубликован `2026-03-18`
- `typescript`: установлен `5.9.3`; upstream latest `6.0.2`, опубликован `2026-03-23`

**Планировочное следствие:** не превращать эту фазу в фазу апгрейда. Использовать установленный стек.

## Архитектурные паттерны

### Рекомендуемая структура проекта
```text
src/
├── app/
│   ├── layout.tsx        # Root metadata и html/body shell
│   └── page.tsx          # Композиция landing page
├── features/
│   └── landing/
│       ├── first-screen.tsx          # Composition root для первого экрана
│       ├── hero-section.tsx          # Hero copy, CTAs, trust cues, image
│       ├── site-header.tsx           # Logo, nav, contact cluster
│       └── first-screen-content.ts   # Новый typed local content/config для этой фазы
└── styles/
    └── globals.css       # Только шрифты и минимальные base rules
```

### Паттерн 1: Оставить `FirstScreen` как composition root
**Что:** Продолжить собирать header и hero в `first-screen.tsx`; не превращать весь первый экран в монолит.
**Когда использовать:** Для изменений Фазы 1, охватывающих и header, и hero, но все еще принадлежащих одному above-the-fold experience.
**Пример:**
```tsx
export function FirstScreen() {
  return (
    <section id="top">
      <SiteHeader navigationLinks={navigationLinks} />
      <HeroSection />
    </section>
  );
}
```
Источник: существующий паттерн репозитория в `src/features/landing/first-screen.tsx`

### Паттерн 2: Использовать локальный typed content object для business copy первого экрана
**Что:** Поместить hero copy, trust bullets, audience line, city, phone и messenger URLs в небольшой typed module внутри `src/features/landing/`.
**Когда использовать:** Когда нескольким first-screen компонентам нужен один и тот же текст, но более широкий refactor site-wide config сейчас не нужен.
**Пример:**
```ts
export type FirstScreenContent = {
  headline: string;
  supportingText: string;
  trustBullets: string[];
  audienceLine: string;
  phone: string;
  city: string;
  whatsappHref: string;
  telegramHref: string;
};
```
Источник: inference по текущему статическому top-down data flow

### Паттерн 3: Сделать hero семантическим, адаптивным двухколоночным layout
**Что:** На больших экранах использовать двухколоночную сетку для текста и изображения; на маленьких экранах stack'ить контент вертикально, оставляя copy и CTAs выше изображения.
**Когда использовать:** Всегда для утвержденного first-screen layout, если Figma явно не требует иной responsive order.
**Пример:**
```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">...</div>
  </div>
</div>
```
Источник: https://v3.tailwindcss.com/docs/responsive-design

### Паттерн 4: Использовать реальные ссылки для navigation и conversion actions
**Что:** Навигационные элементы и CTAs должны сейчас вести в осмысленные места, а не ждать будущих фаз.
**Когда использовать:** Для header nav links, phone/messenger actions и hero CTAs.
**Пример:**
```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
Источник: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/link.mdx

**Специфическая рекомендация фазы:** для этого репозитория основной CTA, вероятно, должен вести на `#lead-form`, а secondary CTA - на `#calculator`, если утвержденная Figma явно не задает другой путь действия.

### Паттерн 5: Сохранять images через `next/image` с явными размерами и полезным alt text
**Что:** Продолжать использовать `next/image` для logo и hero imagery с width/height или `fill`, и с осмысленным alt text, если изображение не декоративное.
**Когда использовать:** Для всех above-the-fold raster assets.
**Пример:**
```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```
Источник: https://nextjs.org/docs/pages/api-reference/components/image

### Антипаттерны, которых нужно избегать
- **Мертвые anchors:** `#projects` и `#contacts` не существуют на текущей странице. Фаза 1 должна убрать или переназначить их.
- **Инертные CTA buttons:** текущие hero buttons - это просто buttons без действия. Это не соответствует `CONT-02`.
- **Figma-by-absolute-positioning:** не переносить desktop coordinates напрямую в absolute layout для основной структуры.
- **Преждевременный shared config refactor:** не делать Фазу 1 зависимой от исправления всех site-wide business data в `src/lib/site-config.ts`.
- **Trust-card creep:** не тащить будущую `Почему к нам обращаются` card grid на первый экран.

## Не делать вручную

| Проблема | Не строить | Использовать вместо | Почему |
|---------|------------|--------------------|-------|
| Responsive hero layout | Абсолютно позиционированную desktop reconstruction | Tailwind flex/grid с max-width контейнерами | Проще поддерживать, безопаснее для mobile и соответствует правилам репозитория |
| Доставку изображений | Голый `<img>` с ручной оптимизацией | `next/image` | Встроенная оптимизация, sizing и accessibility expectations |
| Иконки для двух messenger buttons | Целую icon library | Два локальных SVG в `public/icons` | Меньше bundle и зависимостей, проще бренд-контроль |
| Shared business content | Переписывать весь app-wide config в этой фазе | Локальный typed `first-screen-content.ts` | Держит Фазу 1 сфокусированной и избегает сломанного `site-config` dependency |
| Поведение CTA | Временные no-op buttons | Реальные anchor/contact links | Убирает fake affordances и делает первый экран реально usable |

**Ключевой вывод:** эта фаза достаточно мала, чтобы custom UI abstraction и расширение зависимостей принесли больше рисков, чем пользы. Используйте текущий feature module и добавляйте только самые маленькие недостающие части.

## Типичные ошибки

### Ошибка 1: Считать первый экран «только визуальным»
**Что идет не так:** UI выглядит ближе к Figma, но CTAs и nav items по-прежнему ничего не делают.
**Почему так происходит:** Команды откладывают wiring взаимодействий, потому что функциональный lead capture запланирован позже.
**Как избежать:** Планировать Фазу 1 так, чтобы CTAs и корректные nav items уже сейчас стали реальными anchors.
**Сигналы риска:** `button type="button"` без handler; anchors, ведущие на несуществующие IDs.

### Ошибка 2: Перегрузить hero слишком большим количеством persuasive content
**Что идет не так:** Первый экран становится плотным, трудно сканируется и дублирует нижние секции.
**Почему так происходит:** Trust и audience requirements решают, просто добавляя cards и paragraphs.
**Как избежать:** Оставить trust в виде коротких bullets/chips, а audience fit - в одной компактной supporting line.
**Сигналы риска:** Более одной строки trust, несколько карточек или текстовые блоки, конкурирующие с `h1`.

### Ошибка 3: Воссоздавать Figma в фиксированных desktop pixels
**Что идет не так:** Desktop может совпасть с мокапом, но tablet/mobile ломаются.
**Почему так происходит:** Значения Figma копируются буквально вместо адаптации в responsive layout rules.
**Как избежать:** Использовать spacing на rem, width constraints и breakpoint-driven stacking.
**Сигналы риска:** Большие fixed widths, absolute positioning и отсутствие reflow ниже `lg`.

### Ошибка 4: Централизовать контент в неправильный shared module
**Что идет не так:** Планирование выбирает `src/lib/site-config.ts`, затем implementation натыкается на плохие city/phone values и encoding issues.
**Почему так происходит:** Shared config кажется более аккуратным в теории.
**Как избежать:** Пока держать first-screen content локально; при необходимости позже отдельно планировать очистку shared business-data.
**Сигналы риска:** В плане фазы появляется несвязанный config cleanup work.

### Ошибка 5: Видимость контактов без их usability
**Что идет не так:** Телефон, город, WhatsApp и Telegram видны, но не кликабельны или сгруппированы неясно.
**Почему так происходит:** Контакты рассматриваются как декор, а не как часть action design.
**Как избежать:** Сделать phone главным текстовым действием, messengers - иконками или secondary icon-plus-label, а город - не конкурирующим элементом.
**Сигналы риска:** Messengers визуально громче CTA или контактные значения рендерятся как plain text.

## Примеры кода

Проверенные паттерны из официальных источников:

### Responsive Marketing Layout
```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">...</p>
    </div>
  </div>
</div>
```
Источник: https://v3.tailwindcss.com/docs/responsive-design

### Явно заданный размер Next Image
```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```
Источник: https://nextjs.org/docs/pages/api-reference/components/image

### Прямое использование Next Link
```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
Источник: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/link.mdx

## Современное состояние

| Старый подход | Текущий подход | Когда изменилось | Влияние |
|--------------|----------------|------------------|---------|
| Вложенный `<a>` внутри `<Link>` | Прямое использование `<Link>` | Next.js 13+ | Проще nav/link markup в App Router |
| Голый `<img>` для hero/logo | `next/image` с явным sizing/alt | Долгосрочная best practice Next.js, актуальна и в docs 2026 | Лучшая оптимизация и меньше layout shift |
| Desktop-only Figma reconstruction | Responsive flex/grid containerization | Текущий Tailwind/marketing-page стандарт | Меньше mobile regressions и меньше переделок |
| Remote Google Font imports из design examples | Локальные `@fontsource` imports уже в `globals.css` | Существующая реализация репозитория | Нет runtime font dependency drift |

**Устаревшее/неактуальное:**
- Вложенные anchors внутри `next/link`: для этой фазы не использовать.
- Возврат к `@import url(...)` Google Fonts из `docs/DESIGN_SYSTEM.md`: репозиторий уже использует локальные font packages и должен оставаться таким.

## Открытые вопросы

1. **Какой именно approved Figma file key и node ID у первого экрана?**
   - Что известно: фаза требует близкой Figma fidelity, и Figma auth доступна в этой среде.
   - Что неясно: в repo/context нет Figma URL, file key или node ID.
   - Рекомендация: planner должен считать утвержденный Figma node обязательным входом до начала реализации.

2. **Какие финальные phone number и messenger URLs нужны к запуску?**
   - Что известно: на первом экране должны быть phone, city, WhatsApp и Telegram.
   - Что неясно: текущий `site-header.tsx` использует placeholder phone data, а `site-config.ts` неверен.
   - Рекомендация: в план включить задачу на получение и wiring финальных contact values, с локальным typed content storage для этой фазы.

3. **Должны ли CTA Фазы 1 скроллить к placeholder'ам или вести к прямым contact actions?**
   - Что известно: на странице уже есть секции `#lead-form` и `#calculator`, даже если их бизнес-логика пока не завершена.
   - Что неясно: ожидает ли утвержденная Figma/пользователь, что оба CTA останутся внутренними, или один должен вести к телефону/мессенджеру.
   - Рекомендация: по умолчанию использовать `#lead-form` для primary и `#calculator` для secondary, если утвержденный дизайн не задает иное.

## Доступность окружения

| Зависимость | Нужна для | Доступна | Версия | Фоллбек |
|------------|----------|----------|--------|---------|
| Node.js | Next.js build/dev/typecheck | ✓ | 24.14.0 | — |
| npm через `npm.cmd` | Scripts, installs, lint, typecheck | ✓ | 11.9.0 | Использовать `npm.cmd`; plain `npm` блокируется политикой PowerShell |
| Figma MCP auth | Верочная реализация с Figma | ✓ | authenticated | — |
| `rg` | Быстрый поиск по коду/файлам во время работы | ✗ | — | Использовать PowerShell `Get-ChildItem` + `Select-String` |

**Отсутствующие зависимости без фоллбека:**
- Нет, для планирования ничего критического.

**Отсутствующие зависимости с фоллбеком:**
- `rg` не установлен; используйте PowerShell-native search commands.

## Архитектура валидации

### Test Framework
| Свойство | Значение |
|----------|----------|
| Framework | Пока нет - только lint и typecheck |
| Config file | `eslint.config.mjs` и `tsconfig.json` |
| Быстрая команда | `npm.cmd run lint` |
| Полный suite | `npm.cmd run lint` затем `npm.cmd run typecheck` |

### Маппинг требований фазы в тесты
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CONT-01 | Scope предложения ясен в копирайте первого экрана | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| CONT-02 | Primary CTA ясен и actionable above the fold | manual smoke + static validation | `npm.cmd run typecheck` | ❌ Wave 0 |
| CONT-05 | Audience coverage visible in first screen | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| TRST-01 | Trust differentiators visible near the hero | manual smoke + static validation | `npm.cmd run lint` | ❌ Wave 0 |
| SITE-03 | Contact details and service-area relevance are visible and usable | manual smoke + static validation | `npm.cmd run typecheck` | ❌ Wave 0 |

### Частота sampling
- **На каждый task commit:** `npm.cmd run lint`
- **На каждое wave merge:** `npm.cmd run lint` затем `npm.cmd run typecheck`
- **Phase gate:** manual desktop/mobile visual review плюс обе команды должны быть green перед `/gsd:verify-work`

### Wave 0 gaps
- [ ] Нет component или visual regression framework для `src/features/landing/site-header.tsx`
- [ ] Нет component или visual regression framework для `src/features/landing/hero-section.tsx`
- [ ] Нет documented viewport checklist для desktop/tablet/mobile first-screen verification

## Источники

### Основные (HIGH confidence)
- `/vercel/next.js` - использование Link и текущие рекомендации по `next/image`
- `/websites/v3_tailwindcss` - responsive marketing layout и breakpoint/container patterns
- `/reactjs/react.dev` - текущие рекомендации по function-component composition
- https://nextjs.org/docs/app/getting-started - актуальная App Router документация, last updated 2026-02-27
- https://nextjs.org/docs/pages/api-reference/components/image - `Image` props и sizing guidance, last updated 2026-02-27
- https://v3.tailwindcss.com/docs/responsive-design - patterns responsive utilities
- https://v3.tailwindcss.com/docs/theme - определения breakpoint
- npm registry verification через `npm.cmd view` на 2026-03-24 для `next`, `react`, `tailwindcss`, `typescript`

### Вторичные (MEDIUM confidence)
- Локальные источники репозитория:
  - `src/features/landing/first-screen.tsx`
  - `src/features/landing/site-header.tsx`
  - `src/features/landing/hero-section.tsx`
  - `src/app/page.tsx`
  - `src/lib/site-config.ts`
  - `docs/DESIGN_SYSTEM.md`
  - `.planning/codebase/CONVENTIONS.md`
  - `.planning/codebase/TESTING.md`

### Третичные (LOW confidence)
- Нет

## Метаданные

**Разбивка confidence:**
- Standard stack: HIGH - подтверждено установленными пакетами и npm registry state на 2026-03-24
- Architecture: MEDIUM - паттерны репозитория ясны, но точные Figma node details все еще отсутствуют
- Pitfalls: HIGH - напрямую подтверждены текущим code inspection (dead anchors, inert CTAs, broken config, no messenger assets)

**Дата исследования:** 2026-03-24
**Актуально до:** 2026-04-23
