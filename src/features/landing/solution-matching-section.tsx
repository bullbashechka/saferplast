import Image from "next/image";

import { solutionMatchingContent } from "@/features/landing/solution-matching-content";
import type {
  SolutionMatchingBottomCard,
  SolutionMatchingTopCard,
} from "@/features/landing/solution-matching-types";

type SolutionMatchingCard =
  | SolutionMatchingTopCard
  | SolutionMatchingBottomCard;

const COLD_NOISE_OVERLAY_CLASS =
  "bg-[linear-gradient(360deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]";
const TOP_OVERLAY_CLASS =
  "bg-[linear-gradient(360deg,rgba(255,255,255,0.69)_0%,rgba(255,255,255,0)_100%)]";
const SECOND_TOP_OVERLAY_CLASS =
  "bg-[linear-gradient(360deg,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0)_100%)]";
const BOTTOM_LEFT_OVERLAY_CLASS =
  "bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(360deg,rgba(255,255,255,0.69)_0%,rgba(255,255,255,0)_100%)]";

function SolutionCard({
  card,
  isBottomLeft,
}: {
  card: SolutionMatchingCard;
  isBottomLeft: boolean;
}) {
  const officeCommercialOverlayStyle =
    card.id === "office-commercial"
      ? {
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(360deg, rgba(255, 255, 255, 0.69) 0%, rgba(255, 255, 255, 0) 100%)",
        }
      : undefined;

  const overlayClassName =
    card.row === "top"
      ? card.id === "cold-noise"
        ? COLD_NOISE_OVERLAY_CLASS
        : card.id === "balcony-turnkey"
          ? SECOND_TOP_OVERLAY_CLASS
          : card.id === "broken-window-door"
            ? TOP_OVERLAY_CLASS
            : ""
      : card.id === "office-commercial"
        ? BOTTOM_LEFT_OVERLAY_CLASS
        : isBottomLeft
          ? BOTTOM_LEFT_OVERLAY_CLASS
          : TOP_OVERLAY_CLASS;

  return (
    <article
      className={`relative overflow-hidden rounded-[20px] bg-[#d9e5ea] p-[12px] ${card.row === "top" ? "h-[368px]" : "h-[290px]"}`}
    >
      <Image
        alt={card.title}
        className={`rounded-[20px] object-cover ${
          card.id === "cold-noise" ? "opacity-[0.32]" : card.id === "broken-window-door" ? "opacity-[0.7]" : ""
        }`}
        fill
        sizes={
          card.row === "top"
            ? "(max-width: 1024px) 100vw, 387px"
            : "(max-width: 1024px) 100vw, 590px"
        }
        src={card.imageSrc}
      />

      {overlayClassName ? (
        <div
          className={`absolute inset-0 rounded-[20px] ${overlayClassName}`}
          style={officeCommercialOverlayStyle}
        />
      ) : null}

      {card.id === "cold-noise" ? (
        <div className="absolute bottom-0 right-0 z-[1] pointer-events-none">
          <Image
            alt=""
            aria-hidden="true"
            className="block"
            height={292}
            src="/images/webp/freezing-wooman.webp"
            width={184}
          />
        </div>
      ) : null}

      <div className="relative z-10 flex h-full flex-col">
        <div
          className={`liquid-glass-strong rounded-[10px] p-[10px] ${card.row === "top" ? "h-[123px]" : "h-[106px]"}`}
        >
          <div
            className={
              card.row === "top"
                ? `flex min-h-[60px] ${card.id === "cold-noise" ? "items-start" : "items-end"}`
                : undefined
            }
          >
            <h3 className="font-['Sansation'] text-[30px] font-normal leading-[1] tracking-[0] text-[hsla(194,100%,19%,1)]">
              {card.title}
            </h3>
          </div>
          <p className="mt-3 font-body text-[16px] font-normal leading-[1] tracking-[0] text-[hsla(0,0%,14%,1)]">
            {card.subtitle}
          </p>
        </div>

        <a
          className={`${card.typography.ctaClassName} ${
            card.row === "top"
              ? "absolute bottom-[38px] left-[30px] right-[197px]"
              : "absolute bottom-[32px] left-[30px] right-[400px]"
          } whitespace-nowrap text-[#004B62]`}
          href={card.ctaHref}
        >
          {card.ctaLabel}
        </a>
      </div>
    </article>
  );
}

function MobileSolutionCard({ card }: { card: SolutionMatchingCard }) {
  return (
    <article className="relative mx-auto flex h-[96px] w-[300px] gap-[12px] rounded-[10px] bg-[hsla(190,5%,95%,1)] p-[5px]">
      <div className="relative h-[86px] w-[80px] shrink-0 overflow-hidden rounded-[5px]">
        <Image
          alt={card.title}
          className={`object-cover ${card.id === "cold-noise" ? "opacity-[0.53]" : ""}`}
          fill
          sizes="80px"
          src={card.imageSrc}
        />
      </div>

      {card.id === "cold-noise" ? (
        <div className="pointer-events-none absolute left-[15px] top-[-10px] z-10 h-[100px] w-[63px]">
          <Image
            alt=""
            aria-hidden="true"
            className="object-contain"
            fill
            sizes="63px"
            src="/images/webp/freezing-wooman.webp"
          />
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-[6px]">
        <h3 className="font-['Sansation'] text-[18px] font-normal leading-[1] tracking-[0] text-[#004B62]">
          {card.title}
        </h3>
        <p className="font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[#242424]">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export function SolutionMatchingSection() {
  const { section, rows } = solutionMatchingContent;
  const mobileCards = [...rows.topCards, ...rows.bottomCards];

  return (
    <section
      id="solution-matching"
      aria-labelledby="solution-matching-title"
      className="mt-[20px] bg-[rgba(250,254,255,1)] px-[10px] pb-16 pt-0 lg:mt-0 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-content">
        <h2
          id="solution-matching-title"
          className="font-['Sansation'] text-center text-[20px] font-normal leading-[1] tracking-[0] text-[hsla(194,100%,19%,1)] lg:font-display lg:text-[44px]"
        >
          {section.heading}
        </h2>
        <p
          className="mx-auto mt-[10px] max-w-[300px] text-center font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[hsla(0,0%,14%,1)] lg:mt-4 lg:max-w-[51rem] lg:font-body lg:text-[16px]"
        >
          {section.subtitle}
        </p>

        <div className="mt-[20px] space-y-[10px] lg:hidden">
          {mobileCards.map((card) => (
            <MobileSolutionCard card={card} key={card.id} />
          ))}
        </div>

        <div className="hidden lg:mt-8 lg:block lg:space-y-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {rows.topCards.map((card) => (
              <SolutionCard card={card} isBottomLeft={false} key={card.id} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {rows.bottomCards.map((card, index) => (
              <SolutionCard
                card={card}
                isBottomLeft={index === 0}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
