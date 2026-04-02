import Image from "next/image";

import {
  advantagesSectionContent,
  type AdvantagesCard,
} from "@/features/landing/advantages-section-content";

function getDesktopPositionClassName(index: number) {
  return index === 0
    ? "lg:col-start-1 lg:row-start-1"
    : index === 1
      ? "lg:col-start-1 lg:row-start-2"
      : index === 2
        ? "lg:col-start-2 lg:row-start-1 lg:row-span-2"
        : index === 3
          ? "lg:col-start-3 lg:row-start-1 lg:col-span-2"
          : index === 4
            ? "lg:col-start-3 lg:row-start-2"
            : "lg:col-start-4 lg:row-start-2";
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
        className={`${positionClassName} relative min-h-[17rem] overflow-hidden rounded-[1.25rem] bg-[#d9e5ea] sm:min-h-[22rem] lg:min-h-[27.5rem]`}
      >
        <Image
          alt="Фирменный стиль Saferplast"
          className="rounded-[1.25rem] object-cover blur-[2.5px] opacity-[0.29]"
          fill
          sizes="(max-width: 1024px) 100vw, 285px"
          src="/images/webp/cloud.webp"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <Image alt="Saferplast" height={300} src="/images/original/logo.PNG" width={430} />
        </div>
      </article>
    );
  }

  const { baseClassName, isDark, titleClassName } = getCardClassNames(card);
  const content = (
    <>
      <h3 className={`max-w-[33.125rem] font-display text-[1.75rem] font-normal leading-[1] sm:text-[1.875rem] ${titleClassName}`}>
        {card.title}
      </h3>
      <p className="mt-8 max-w-[33.125rem] text-[1rem] leading-[1.2]">{card.description}</p>
      {isDark ? <span className="absolute right-6 top-10 text-[1.375rem] leading-none">&rarr;</span> : null}
    </>
  );

  if (card.href) {
    return (
      <a
        className={`${positionClassName} relative min-h-[13.125rem] rounded-[1.25rem] px-[1.875rem] py-[2.5rem] transition-colors hover:bg-[#00384a] ${baseClassName}`}
        href={card.href}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`${positionClassName} min-h-[13.125rem] rounded-[1.25rem] px-[1.875rem] py-[2.5rem] ${baseClassName}`}>
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
      className="relative z-10 -mt-[5.3125rem] rounded-t-[1.875rem] bg-[rgba(250,254,255,1)] pb-0 pt-8 lg:mt-[120px] lg:pb-20 lg:pt-0 xl:rounded-t-none"
    >
      <div className="mx-auto max-w-[90rem] px-[10px] sm:px-6 lg:w-[90rem] lg:max-w-none lg:px-[7.5rem]">
        <div className="mx-auto flex max-w-[18.75rem] flex-col items-center lg:hidden">
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

        <div className="hidden lg:block">
          <h2 className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[2.75rem]">
            {advantagesSectionContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[40rem] text-center text-[1rem] leading-[1.2] text-[#242424]">
            {advantagesSectionContent.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-[17.8125rem_17.8125rem_17.6875rem_17.8125rem] lg:grid-rows-[13.125rem_13.125rem] lg:gap-5">
            {advantagesSectionContent.cards.map((card, index) => (
              <DesktopAdvantagesCard card={card} index={index} key={card.title ?? `image-card-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
