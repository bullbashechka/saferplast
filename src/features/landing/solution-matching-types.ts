export type SolutionMatchingCardId =
  | "cold-noise"
  | "balcony-turnkey"
  | "broken-window-door"
  | "office-commercial"
  | "new-object";

export type SolutionMatchingCtaLabel = "Узнать подробнее";
export type SolutionMatchingCtaHref = "#lead-form";

export type SolutionMatchingSectionTypography = {
  headingClassName: "font-['Sansation'] font-normal text-[44px] leading-[1] tracking-[0]";
  subtitleClassName: "font-body font-normal text-[16px] leading-[1] tracking-[0] text-center";
};

export type SolutionMatchingCardTypography = {
  titleColor: "hsla(194, 100%, 19%, 1)";
  subtitleColor: "hsla(0, 0%, 14%, 1)";
  ctaClassName: "font-body text-[16px] font-bold leading-[1] underline";
};

export type SolutionMatchingTopCardGeometry = {
  width: "387px";
  height: "368px";
  borderRadius: "20px";
  padding: "40px 30px";
};

export type SolutionMatchingBottomCardGeometry = {
  width: "590px";
  height: "290px";
  borderRadius: "20px";
  padding: "40px 30px";
};

export type SolutionMatchingTopTextBlockGeometry = {
  width: "365px";
  height: "123px";
  borderRadius: "10px";
  padding: "10px";
};

export type SolutionMatchingBottomTextBlockGeometry = {
  width: "567px";
  height: "106px";
  borderRadius: "10px";
  padding: "10px";
  background: "hsla(0, 0%, 100%, 0.75)";
};

type SolutionMatchingCardBase = {
  id: SolutionMatchingCardId;
  title: string;
  subtitle: string;
  imageSrc: `/images/${string}`;
  ctaLabel: SolutionMatchingCtaLabel;
  ctaHref: SolutionMatchingCtaHref;
  typography: SolutionMatchingCardTypography;
};

export type SolutionMatchingTopCard = SolutionMatchingCardBase & {
  row: "top";
  geometry: SolutionMatchingTopCardGeometry;
  textBlockGeometry: SolutionMatchingTopTextBlockGeometry;
};

export type SolutionMatchingBottomCard = SolutionMatchingCardBase & {
  row: "bottom";
  geometry: SolutionMatchingBottomCardGeometry;
  textBlockGeometry: SolutionMatchingBottomTextBlockGeometry;
};

export type SolutionMatchingRows = {
  topCards: [SolutionMatchingTopCard, SolutionMatchingTopCard, SolutionMatchingTopCard];
  bottomCards: [SolutionMatchingBottomCard, SolutionMatchingBottomCard];
};

export type SolutionMatchingSection = {
  heading: "Подберем решение под вашу задачу";
  subtitle: "Не нужно во всем разбираться самим. Мы подскажем, что подойдет именно в вашей ситуации";
  typography: SolutionMatchingSectionTypography;
};

export type SolutionMatchingContent = {
  section: SolutionMatchingSection;
  rows: SolutionMatchingRows;
};
