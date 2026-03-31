export type CalculatorCategoryKey = "окно" | "дверь" | "балкон" | "подоконник";

export type CalculatorTypographyMeta = {
  fontFamily: "Sansation" | "Montserrat";
  fontWeight: 400;
  fontSizePx: number;
  lineHeight: "100%";
  letterSpacing: "0%";
  textAlign: "center";
};

export type CalculatorSectionCopy = {
  heading: string;
  subtitle: string;
  headingTypography: CalculatorTypographyMeta;
  subtitleTypography: CalculatorTypographyMeta;
};

export type CalculatorCardContent = {
  key: CalculatorCategoryKey;
  title: string;
};

export type CalculatorCtaMeta = {
  label: "Рассчитать";
  iconPath: "/icons/svg-on-button-рассчитать.svg";
};

export type CalculatorContextDraft = {
  category: CalculatorCategoryKey;
  sourceSection: "calculator";
  ctaLabel: CalculatorCtaMeta["label"];
};
