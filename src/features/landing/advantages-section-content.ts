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
  cards: [AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard, AdvantagesCard];
};

export const advantagesSectionContent: AdvantagesSectionContent = {
  title: "Почему к нам обращаются",
  subtitle: "Понятные условия, собственное производство и готовое решение",
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
      title: "Опыт работы - более X лет",
      description: "Несем ответственность за результат",
      variant: "gradient",
    },
    {
      title: "Бесплатный замер",
      description: "Запишем на замер в удобное для вас время",
      variant: "dark",
      href: "#lead-form",
    },
  ],
};
