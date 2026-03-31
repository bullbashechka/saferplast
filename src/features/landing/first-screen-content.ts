export type NavigationLink = {
  href: string;
  label: string;
};

export type FirstScreenContent = {
  headline: string;
  description: string;
  audienceLine: string;
  trustItems: [string, string, string, string];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  phoneHref: string;
  phoneLabel: string;
  cityLabel: string;
  whatsappHref: string;
  telegramHref: string;
  navigationLinks: NavigationLink[];
};

export const firstScreenContent: FirstScreenContent = {
  headline: "Окна, двери и балконы из ПВХ и алюминия напрямую от производителя",
  description:
    "Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет.",
  audienceLine: "Для квартир, частных домов, офисов и коммерческих помещений.",
  trustItems: [
    "Собственное производство",
    "Цены без посредников",
    "Быстрый выезд и расчет",
    "Гарантия 1 год",
  ],
  primaryCta: {
    label: "Бесплатный замер",
    href: "#lead-form",
  },
  secondaryCta: {
    label: "Получить расчет",
    href: "#lead-form",
  },
  phoneHref: "tel:+77079999999",
  phoneLabel: "+77079999999",
  cityLabel: "г. Караганда",
  whatsappHref: "https://wa.me/77079999999",
  telegramHref: "https://t.me/saferplast",
  navigationLinks: [
    { href: "#top", label: "главная" },
    { href: "#lead-form", label: "рассчитать стоимость" },
    { href: "#projects", label: "наши работы" },
    { href: "#contacts", label: "контакты" },
  ],
};
