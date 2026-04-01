export type AdvantagesCardVariant = "light" | "gradient" | "dark";
export type AdvantagesCardKind = "text" | "image";

export type AdvantagesCard = {
  title?: string;
  description?: string;
  variant: AdvantagesCardVariant;
  kind?: AdvantagesCardKind;
  href?: string;
};

export type AdvantagesSectionContent = {
  title: string;
  subtitle: string;
  mobileSubtitleLines: [string, string];
  cards: [AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard];
};

export const advantagesSectionContent: AdvantagesSectionContent = {
  title: "Почему к нам обращаются",
  subtitle: "Понятные условия, собственное производство и готовое решение под вашу задачу",
  mobileSubtitleLines: ["Понятные условия, собственное", "производство и готовое решение"],
  cards: [
    {
      title: "Собственное производство",
      description: "Без переплаты посредникам",
      variant: "gradient",
    },
    {
      title: "Гарантия 1 год",
      description: "Несем ответственность за результат",
      variant: "gradient",
    },
    {
      kind: "image",
      variant: "light",
    },
    {
      title: "Быстрый выезд и расчет",
      description: "Не теряете время",
      variant: "gradient",
    },
    {
      title: "Опыт работы более 10 лет",
      description: "Работаем аккуратно, в срок и без лишних обещаний",
      variant: "gradient",
    },
    {
      title: "Бесплатный замер",
      description: "Запишем на выезд мастера в удобное для вас время",
      variant: "dark",
      href: "#lead-form",
    },
  ],
};
