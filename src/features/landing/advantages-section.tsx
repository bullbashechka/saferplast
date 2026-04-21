import { Image } from "@/components/ui/image";
import { PageEnter, ScrollReveal } from "@/components/ui/reveal";

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
        ? "bg-[linear-gradient(241.21deg,rgba(255,252,252,0.12)_0%,rgba(0,75,98,0.16)_94.97%)] text-[#242424]"
        : "bg-[linear-gradient(90deg,rgba(255,252,252,1)_0%,rgba(255,252,252,1)_100%)] text-[#242424]",
    titleClassName: isDark ? "text-white" : "text-[#004B62]",
  };
}

function MobileAdvantagesCard({ card }: { card: AdvantagesCard }) {
  const { baseClassName, isDark, titleClassName } = getCardClassNames(card);
  const mobileCardClassName = `landing-mobile-card relative flex h-[100px] w-[300px] flex-col justify-between rounded-[10px] p-[20px] ${baseClassName}`;
  const titleSpacingClassName = "mt-0";

  if (card.href) {
    return (
      <a
        className={`${mobileCardClassName} transition-colors hover:bg-[#00384a]`}
        href={card.href}
      >
        <h3 className={`max-w-[16rem] whitespace-nowrap font-['Sansation'] text-[18px] font-normal leading-[1] tracking-[0] ${titleClassName}`}>
          {card.title}
        </h3>
        <p className={`${titleSpacingClassName} max-w-[14.875rem] font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0]`}>
          {card.description}
        </p>
        {isDark ? <span className="absolute right-4 top-4 text-[1rem] leading-none">&rarr;</span> : null}
      </a>
    );
  }

  return (
    <article className={mobileCardClassName}>
      <h3 className={`max-w-[16rem] whitespace-nowrap font-['Sansation'] text-[18px] font-normal leading-[1] tracking-[0] ${titleClassName}`}>
        {card.title}
      </h3>
      <p className={`${titleSpacingClassName} max-w-[14.875rem] font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0]`}>
        {card.description}
      </p>
    </article>
  );
}

function DesktopAdvantagesCard({ card, index }: { card: AdvantagesCard; index: number }) {
  const positionClassName = getDesktopPositionClassName(index);

  if (card.kind === "image") {
    return (
      <article
        className={`${positionClassName} relative min-h-[25rem] overflow-hidden rounded-[1.25rem] bg-[#d9e5ea] min-[1025px]:min-h-[27.5rem]`}
      >
        <Image
          alt="Фирменный стиль Saferplast"
          className="rounded-[1.25rem] object-cover blur-[2.5px] opacity-[0.29]"
          fill
          sizes="(max-width: 767px) 100vw, 285px"
          src="/images/webp/cloud.webp"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <Image
            alt="Saferplast"
            className="h-auto w-[22rem] min-[1025px]:w-[26.875rem]"
            height={300}
            src="/images/versioned/logo.v2.webp"
            unoptimized
            width={430}
          />
        </div>
      </article>
    );
  }

  const { baseClassName, isDark, titleClassName } = getCardClassNames(card);
  const content = (
    <div className="flex h-full flex-col">
      <h3
        className={`max-w-[33.125rem] font-display text-[1.8125rem] font-normal leading-[1] min-[1025px]:text-[1.875rem] ${titleClassName}`}
      >
        {card.title}
      </h3>
      <p className="mt-auto max-w-[33.125rem] pt-6 text-[0.9375rem] leading-[1.2] min-[1025px]:pt-8 min-[1025px]:text-[1rem]">
        {card.description}
      </p>
      {isDark ? (
        <span className="absolute right-5 top-8 text-[1.25rem] leading-none min-[1025px]:right-6 min-[1025px]:top-10 min-[1025px]:text-[1.375rem]">
          &rarr;
        </span>
      ) : null}
    </div>
  );

  if (card.href) {
    return (
      <a
        className={`${positionClassName} relative min-h-[12.25rem] rounded-[1.25rem] px-6 py-8 transition-colors hover:bg-[#00384a] min-[1025px]:min-h-[13.125rem] min-[1025px]:px-[1.875rem] min-[1025px]:py-[2.5rem] ${baseClassName}`}
        href={card.href}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className={`${positionClassName} min-h-[12.25rem] rounded-[1.25rem] px-6 py-8 min-[1025px]:min-h-[13.125rem] min-[1025px]:px-[1.875rem] min-[1025px]:py-[2.5rem] ${baseClassName}`}
    >
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
      <div className="mx-auto max-w-[90rem] px-[var(--landing-mobile-shell-x)] md:px-5 min-[1025px]:px-8 min-[1440px]:w-[90rem] min-[1440px]:max-w-none min-[1440px]:px-[7.5rem]">
        <div className="landing-mobile-shell mx-auto flex flex-col items-center md:hidden">
          <PageEnter delayMs={140}>
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
          </PageEnter>

          <ScrollReveal>
            {imageCard ? (
              <div className="mt-5 flex h-[11.5625rem] w-[16.4375rem] items-center justify-center">
                <Image
                  alt="Saferplast"
                  className="h-auto w-full object-contain"
                  height={185}
                  src="/images/versioned/logo.v2.webp"
                  unoptimized
                  width={263}
                />
              </div>
            ) : null}
          </ScrollReveal>

          <ScrollReveal className="mt-5 w-full">
            <div className="grid w-full gap-3">
              {mobileCards.map((card) => (
                <MobileAdvantagesCard card={card} key={card.title} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="hidden md:block">
          <PageEnter delayMs={140}>
            <h2 className="text-center font-display text-[2.6875rem] font-normal leading-[1] text-[#004B62] min-[1025px]:text-[2.75rem]">
              {advantagesSectionContent.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[40rem] text-center text-[0.9375rem] leading-[1.2] text-[#242424] min-[1025px]:text-[1rem]">
              {advantagesSectionContent.subtitle}
            </p>
          </PageEnter>

          <ScrollReveal className="mt-8 min-[1025px]:mt-10">
            <div className="grid md:grid-cols-4 md:grid-rows-[12.25rem_12.25rem] md:gap-4 min-[1025px]:grid-rows-[13.125rem_13.125rem] min-[1025px]:gap-5 xl:grid-cols-[17.8125rem_17.8125rem_17.6875rem_17.8125rem]">
              {advantagesSectionContent.cards.map((card, index) => (
                <DesktopAdvantagesCard
                  card={card}
                  index={index}
                  key={card.title ?? `image-card-${index}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
