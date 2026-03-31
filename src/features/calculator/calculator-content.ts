import type {
  CalculatorCardContent,
  CalculatorCtaMeta,
  CalculatorSectionCopy,
} from "@/features/calculator/calculator-types";

export type CalculatorSectionContent = {
  copy: CalculatorSectionCopy;
  cards: [CalculatorCardContent, CalculatorCardContent, CalculatorCardContent, CalculatorCardContent];
  cta: CalculatorCtaMeta;
};

export const calculatorSectionContent: CalculatorSectionContent = {
  copy: {
    heading: "Рассчитайте примерную стоимость",
    subtitle: "Выберите, что именно нужно рассчитать, и получите предварительный расчет за несколько шагов",
    headingTypography: {
      fontFamily: "Sansation",
      fontWeight: 400,
      fontSizePx: 44,
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    subtitleTypography: {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontSizePx: 16,
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  cards: [
    { key: "окно", title: "Окно" },
    { key: "дверь", title: "Дверь" },
    { key: "балкон", title: "Балкон" },
    { key: "подоконник", title: "Подоконник" },
  ],
  cta: {
    label: "Рассчитать",
    iconPath: "/icons/svg-on-button-рассчитать.svg",
  },
};
