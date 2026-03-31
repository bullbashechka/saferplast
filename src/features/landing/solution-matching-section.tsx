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
            src="/images/freezing-wooman.png"
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

export function SolutionMatchingSection() {
  const { section, rows } = solutionMatchingContent;

  return (
    <section
      aria-labelledby="solution-matching-title"
      className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-content">
        <h2
          id="solution-matching-title"
          className={`${section.typography.headingClassName} text-center text-[hsla(194,100%,19%,1)]`}
        >
          {section.heading}
        </h2>
        <p
          className={`${section.typography.subtitleClassName} mx-auto mt-4 max-w-[51rem] text-[hsla(0,0%,14%,1)]`}
        >
          {section.subtitle}
        </p>

        <div className="mt-8 space-y-5">
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
