export type AdvantagesCardVariant = "light" | "dark";

export type AdvantagesCard = {
  title: string;
  description: string;
  variant: AdvantagesCardVariant;
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
      variant: "light",
    },
    {
      title: "Гарантия 1 год",
      description: "Несем ответственность за результат",
      variant: "light",
    },
    {
      title: "SaFerplast",
      description: "Собственный бренд и контроль качества на каждом этапе",
      variant: "light",
    },
    {
      title: "Быстрый выезд и расчет",
      description: "Не теряете время",
      variant: "light",
    },
    {
      title: "Опыт работы - более X лет",
      description: "Проверенные решения для квартир, домов и бизнеса",
      variant: "light",
    },
    {
      title: "Бесплатный замер",
      description: "Запишем на замер в удобное для вас время",
      variant: "dark",
      href: "#lead-form",
    },
  ],
};
