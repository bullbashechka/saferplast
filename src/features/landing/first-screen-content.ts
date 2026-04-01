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
  whatsappHref: string;
  telegramHref: string;
  headerNavigationLinks: NavigationLink[];
};

export const firstScreenContent: FirstScreenContent = {
  headline: "Окна, двери и балконы из ПВХ и алюминия напрямую от производителя",
  supportCard: {
    availabilityLabel: "Мы на связи 09:00 до 18:00 ежедневно",
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
  phoneHref: "tel:+77079999999",
  phoneLabel: "+77079999999",
  cityLabel: "г. Караганда",
  whatsappHref: "https://wa.me/77079999999",
  telegramHref: "https://t.me/saferplast",
  headerNavigationLinks: [
    { href: "#solution-matching", label: "Подобрать решение" },
    { href: "#projects", label: "Наши работы" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ],
};
