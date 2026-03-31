export type WorkProcessCard = {
  id: "consultation" | "calculation" | "installation";
  step: "1" | "2" | "3";
  titleLines: readonly [string, ...string[]];
  imageSrc: `/images/${string}`;
};

export type WorkProcessContent = {
  title: string;
  subtitle: string;
  cards: readonly [WorkProcessCard, WorkProcessCard, WorkProcessCard];
};

export const workProcessContent: WorkProcessContent = {
  title: "Как проходит работа",
  subtitle: "От заявки до монтажа - понятный и прозрачный процесс",
  cards: [
    {
      id: "consultation",
      step: "1",
      titleLines: ["Консультация", "Бесплатный замер"],
      imageSrc: "/images/webp/manlookingtape.webp",
    },
    {
      id: "calculation",
      step: "2",
      titleLines: ["Расчет и подбор", "решения"],
      imageSrc: "/images/webp/calculator.webp",
    },
    {
      id: "installation",
      step: "3",
      titleLines: ["Монтаж / ремонт", "Сдача работы"],
      imageSrc: "/images/webp/mother.webp",
    },
  ],
};
