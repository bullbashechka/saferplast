export type NavigationLink = {
  href: string;
  label: string;
};

export type HeroAction = {
  href: string;
  label: string;
};

export type SupportCardContent = {
  availabilityLabel: string;
  cta: HeroAction;
  namesLabel: string;
};

export type ServiceCardContent = {
  cta: HeroAction;
  description: string;
};

export type FirstScreenContent = {
  headline: string;
  serviceCard: ServiceCardContent;
  supportCard: SupportCardContent;
  phoneHref: string;
  phoneLabel: string;
  cityLabel: string;
  instagramHref: string;
  whatsappHref: string;
  telegramHref: string;
  headerNavigationLinks: NavigationLink[];
};

export const firstScreenContent: FirstScreenContent = {
  headline: "Окна, двери и балконы из ПВХ и алюминия напрямую от производителя",
  supportCard: {
    availabilityLabel: "Мы на связи с 09:00 до 18:00 ежедневно",
    namesLabel: "Шамиль и Хусейн",
    cta: {
      label: "Получить расчет",
      href: "#lead-form",
    },
  },
  serviceCard: {
    description:
      "Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет.",
    cta: {
      label: "Бесплатный замер",
      href: "#lead-form",
    },
  },
  phoneHref: "tel:+77478041022",
  phoneLabel: "+7 (747) 804-10-22",
  cityLabel: "г. Караганда",
  instagramHref: "https://www.instagram.com/saferplast.kz/",
  whatsappHref: "https://wa.me/77478041022",
  telegramHref: "https://t.me/+77478041022",
  headerNavigationLinks: [
    { href: "#projects", label: "Наши работы" },
    { href: "#solution-matching", label: "Подобрать решение" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ],
};
