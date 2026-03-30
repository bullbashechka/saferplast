import Image from "next/image";

import { solutionMatchingContent } from "@/features/landing/solution-matching-content";
import type { SolutionMatchingBottomCard, SolutionMatchingTopCard } from "@/features/landing/solution-matching-types";

type SolutionMatchingCard = SolutionMatchingTopCard | SolutionMatchingBottomCard;

const TOP_OVERLAY_CLASS = "bg-[linear-gradient(360deg,rgba(255,255,255,0.69)_0%,rgba(255,255,255,0)_100%)]";
const BOTTOM_LEFT_OVERLAY_CLASS =
  "bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(360deg,rgba(255,255,255,0.69)_0%,rgba(255,255,255,0)_100%)]";

function SolutionCard({ card, isBottomLeft }: { card: SolutionMatchingCard; isBottomLeft: boolean }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[20px] bg-[#d9e5ea] p-[30px] pt-[40px] ${
        card.row === "top" ? "h-[368px]" : "h-[290px]"
      }`}
      style={{
        borderRadius: card.geometry.borderRadius,
      }}
    >
      <Image
        alt={card.title}
        className="object-cover"
        fill
        sizes={card.row === "top" ? "(max-width: 1024px) 100vw, 387px" : "(max-width: 1024px) 100vw, 590px"}
        src={card.imageSrc}
      />

      <div className={`absolute inset-0 ${card.row === "top" ? TOP_OVERLAY_CLASS : isBottomLeft ? BOTTOM_LEFT_OVERLAY_CLASS : TOP_OVERLAY_CLASS}`} />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div
          className="liquid-glass-strong rounded-[10px] p-[10px]"
          style={{
            borderRadius: card.textBlockGeometry.borderRadius,
            padding: card.textBlockGeometry.padding,
          }}
        >
          <h3
            className="font-['Sansation'] text-[30px] font-normal leading-[1] tracking-[0]"
            style={{ color: card.typography.titleColor }}
          >
            {card.title}
          </h3>
          <p className="mt-3 font-body text-[16px] font-normal leading-[1] tracking-[0]" style={{ color: card.typography.subtitleColor }}>
            {card.subtitle}
          </p>
        </div>

        <a className={`${card.typography.ctaClassName} text-[#004B62]`} href={card.ctaHref}>
          {card.ctaLabel}
        </a>
      </div>
    </article>
  );
}

export function SolutionMatchingSection() {
  const { section, rows } = solutionMatchingContent;

  return (
    <section aria-labelledby="solution-matching-title" className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-content">
        <h2
          id="solution-matching-title"
          className={`${section.typography.headingClassName} text-center text-[hsla(194,100%,19%,1)]`}
        >
          {section.heading}
        </h2>
        <p className={`${section.typography.subtitleClassName} mx-auto mt-4 max-w-[51rem] text-[hsla(0,0%,14%,1)]`}>{section.subtitle}</p>

        <div className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {rows.topCards.map((card) => (
              <SolutionCard card={card} isBottomLeft={false} key={card.id} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {rows.bottomCards.map((card, index) => (
              <SolutionCard card={card} isBottomLeft={index === 0} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
