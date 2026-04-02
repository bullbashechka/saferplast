import Image from "next/image";

import {
  advantagesSectionContent,
  type AdvantagesCard,
} from "@/features/landing/advantages-section-content";

function getDesktopPositionClassName(index: number) {
  return index === 0
    ? "md:col-start-1 md:row-start-1"
    : index === 1
      ? "md:col-start-1 md:row-start-2"
      : index === 2
        ? "md:col-start-2 md:row-start-1 md:row-span-2"
        : index === 3
          ? "md:col-start-3 md:row-start-1 md:col-span-2"
          : index === 4
            ? "md:col-start-3 md:row-start-2"
            : "md:col-start-4 md:row-start-2";
}

function getCardClassNames(card: AdvantagesCard) {
  const isGradient = card.variant === "gradient";
  const isDark = card.variant === "dark";

  return {
    isDark,
    baseClassName: isDark
      ? "bg-[#004B62] text-white"
      : isGradient
        ? "bg-[linear-gradient(to_bottom_left,#FFFCFC00_0%,#004B624D_80%)] text-[#242424]"
        : "bg-[linear-gradient(241.21deg,rgba(255,252,252,1)_0%,rgba(0,75,98,0.3)_100%)] text-[#242424]",
    titleClassName: isDark ? "text-white" : "text-[#004B62]",
  };
}

function MobileAdvantagesCard({ card }: { card: AdvantagesCard }) {
  const { baseClassName, isDark, titleClassName } = getCardClassNames(card);
  const mobileCardClassName = `relative flex h-[5.5rem] w-full max-w-[18.75rem] flex-col justify-center rounded-[10px] px-[10px] py-3 ${baseClassName}`;
  const titleSpacingClassName = isDark ? "mt-3" : "mt-2.5";

  if (card.href) {
    return (
      <a
        className={`${mobileCardClassName} transition-colors hover:bg-[#00384a]`}
        href={card.href}
      >
        <h3 className={`max-w-[16rem] whitespace-nowrap font-display text-[0.9375rem] font-normal leading-[1] tracking-[-0.01em] ${titleClassName}`}>
          {card.title}
        </h3>
        <p className={`${titleSpacingClassName} max-w-[14.875rem] font-body text-[0.75rem] font-normal leading-[1]`}>{card.description}</p>
        {isDark ? <span className="absolute right-4 top-4 text-[1rem] leading-none">&rarr;</span> : null}
      </a>
    );
  }

  return (
    <article className={mobileCardClassName}>
      <h3 className={`max-w-[16rem] whitespace-nowrap font-display text-[0.9375rem] font-normal leading-[1] tracking-[-0.01em] ${titleClassName}`}>
        {card.title}
      </h3>
      <p className={`${titleSpacingClassName} max-w-[14.875rem] font-body text-[0.75rem] font-normal leading-[1]`}>{card.description}</p>
    </article>
  );
}

function DesktopAdvantagesCard({ card, index }: { card: AdvantagesCard; index: number }) {
  const positionClassName = getDesktopPositionClassName(index);

  if (card.kind === "image") {
    return (
      <article
        className={`${positionClassName} relative min-h-[13rem] overflow-hidden rounded-[1.25rem] bg-[#d9e5ea] lg:min-h-[27.5rem]`}
      >
        <Image
          alt="Фирменный стиль Saferplast"
          className="rounded-[1.25rem] object-cover blur-[2.5px] opacity-[0.29]"
          fill
          sizes="(max-width: 1024px) 100vw, 285px"
          src="/images/webp/cloud.webp"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <Image alt="Saferplast" className="h-auto w-[12rem] lg:w-auto" height={300} src="/images/original/logo.PNG" width={430} />
        </div>
      </article>
    );
  }

  const { baseClassName, isDark, titleClassName } = getCardClassNames(card);
  const content = (
    <>
      <h3 className={`max-w-[33.125rem] font-display text-[1.25rem] font-normal leading-[1] lg:text-[1.875rem] ${titleClassName}`}>
        {card.title}
      </h3>
      <p className="mt-4 max-w-[33.125rem] text-[0.8125rem] leading-[1.2] lg:mt-8 lg:text-[1rem]">{card.description}</p>
      {isDark ? <span className="absolute right-4 top-6 text-[1.125rem] leading-none lg:right-6 lg:top-10 lg:text-[1.375rem]">&rarr;</span> : null}
    </>
  );

  if (card.href) {
    return (
      <a
        className={`${positionClassName} relative min-h-[10.5rem] rounded-[1.25rem] px-4 py-5 transition-colors hover:bg-[#00384a] lg:min-h-[13.125rem] lg:px-[1.875rem] lg:py-[2.5rem] ${baseClassName}`}
        href={card.href}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`${positionClassName} min-h-[10.5rem] rounded-[1.25rem] px-4 py-5 lg:min-h-[13.125rem] lg:px-[1.875rem] lg:py-[2.5rem] ${baseClassName}`}>
      {content}
    </article>
  );
}

export function AdvantagesSection() {
  const imageCard = advantagesSectionContent.cards.find((card) => card.kind === "image");
  const mobileCards = advantagesSectionContent.cards.filter((card) => card.kind !== "image");

  return (
    <section
      aria-label={advantagesSectionContent.title}
      className="relative z-10 -mt-[5.3125rem] rounded-t-[1.875rem] bg-[rgba(250,254,255,1)] pb-0 pt-8 md:mt-[120px] md:pt-0 xl:rounded-t-none"
    >
      <div className="mx-auto max-w-[90rem] px-[10px] sm:px-6 md:px-5 lg:px-8 xl:w-[90rem] xl:max-w-none xl:px-[7.5rem]">
        <div className="mx-auto flex max-w-[18.75rem] flex-col items-center md:hidden">
          <h2 className="text-center font-display text-[1.25rem] font-normal leading-[1] text-[#004B62]">
            {advantagesSectionContent.title}
          </h2>
          <p className="mt-3 text-center font-body text-[0.75rem] font-normal leading-[1] text-[#242424]">
            {advantagesSectionContent.mobileSubtitleLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>

          {imageCard ? (
            <div className="mt-5 flex h-[11.5625rem] w-[16.4375rem] items-center justify-center">
              <Image alt="Saferplast" className="h-auto w-full object-contain" height={185} src="/images/original/logo.PNG" width={263} />
            </div>
          ) : null}

          <div className="mt-5 grid w-full gap-3">
            {mobileCards.map((card) => (
              <MobileAdvantagesCard card={card} key={card.title} />
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <h2 className="text-center font-display text-[1.75rem] font-normal leading-[1] text-[#004B62] lg:text-[2.25rem] xl:text-[2.75rem]">
            {advantagesSectionContent.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[34rem] text-center text-[0.875rem] leading-[1.2] text-[#242424] lg:mt-4 lg:max-w-[40rem] lg:text-[1rem]">
            {advantagesSectionContent.subtitle}
          </p>

          <div className="mt-8 grid md:grid-cols-4 md:grid-rows-[8.75rem_8.75rem] md:gap-3 lg:grid-rows-[10.5rem_10.5rem] lg:gap-4 xl:mt-10 xl:grid-cols-[17.8125rem_17.8125rem_17.6875rem_17.8125rem] xl:grid-rows-[13.125rem_13.125rem] xl:gap-5">
            {advantagesSectionContent.cards.map((card, index) => (
              <DesktopAdvantagesCard card={card} index={index} key={card.title ?? `image-card-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
