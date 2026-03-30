"use client";

import Image from "next/image";
import { useState } from "react";

import { calculatorSectionContent } from "@/features/calculator/calculator-content";
import type { CalculatorCategoryKey } from "@/features/calculator/calculator-types";

type CalculatorCardsProps = {
  onOpenModal: (category: CalculatorCategoryKey) => void;
};

const cardImagePaths = ["/images/window.jpg", "/images/door.png", "/images/balcony.png", "/images/windowsill.png"] as const;

const desktopButtonColor = "hsla(194, 100%, 19%, 1)";

export function CalculatorCards({ onOpenModal }: CalculatorCardsProps) {
  const [activeCategory, setActiveCategory] = useState<CalculatorCategoryKey | null>(null);

  return (
    <div className="mt-8 grid grid-cols-2 justify-items-center gap-x-3 gap-y-4 lg:mt-10 lg:flex lg:flex-nowrap lg:justify-between lg:gap-[2.3125rem]">
      {calculatorSectionContent.cards.map((card, index) => {
        const isActive = activeCategory === card.key;

        return (
          <article
            key={card.key}
            className="relative h-[8.625rem] w-[9.0625rem] lg:h-[13.125rem] lg:w-[17.8125rem]"
            onMouseEnter={() => setActiveCategory(card.key)}
            onMouseLeave={() => setActiveCategory((current) => (current === card.key ? null : current))}
          >
            <button
              aria-label={`${card.title} - ${calculatorSectionContent.cta.label}`}
              className={[
                "group relative w-full overflow-hidden text-left transition-all duration-200",
                "h-[6.625rem] rounded-[0.625rem] p-[0.9375rem]",
                "lg:rounded-[1.25rem] lg:px-[1.875rem] lg:pb-[2.5rem] lg:pt-[2.5rem]",
                isActive ? "lg:h-[9.5rem]" : "lg:h-[13.125rem]",
              ].join(" ")}
              onBlur={() => setActiveCategory((current) => (current === card.key ? null : current))}
              onClick={() => setActiveCategory((current) => (current === card.key ? null : card.key))}
              type="button"
            >
              <Image
                alt={card.title}
                className="object-cover"
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 286px, 145px"
                src={cardImagePaths[index]}
                style={{ opacity: index === 0 ? 0.71 : 0.4 }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#FAFEFF_22.68%,rgba(255,255,255,0)_95.9%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="font-display text-[1rem] font-normal leading-[1] text-[#004B62] lg:text-[1.5rem]">{card.title}</span>
                <span className="flex justify-end">
                  <Image
                    alt=""
                    aria-hidden
                    className={[
                      "h-3 w-3 transition-opacity duration-200 lg:h-4 lg:w-4",
                      isActive ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                    height={16}
                    src="/icons/arrow.svg"
                    width={16}
                  />
                </span>
              </div>
            </button>

            <button
              className={[
                "absolute left-0 z-10 flex items-center justify-center gap-3 text-white transition-all duration-200",
                "rounded-[0.625rem] px-3 py-2 text-[0.75rem] leading-[1]",
                "top-[4.5rem] h-[2rem] w-[9.0625rem]",
                "lg:top-[10rem] lg:h-[3.125rem] lg:w-[17.875rem] lg:rounded-[0.9375rem] lg:px-[3.875rem] lg:py-[0.8125rem] lg:text-[1rem]",
                isActive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
              onClick={() => onOpenModal(card.key)}
              style={{ backgroundColor: desktopButtonColor }}
              type="button"
            >
              <span>{calculatorSectionContent.cta.label}</span>
              <Image
                alt=""
                aria-hidden
                className="h-4 w-4 lg:h-[1.125rem] lg:w-[1.125rem]"
                height={18}
                src={calculatorSectionContent.cta.iconPath}
                width={18}
              />
            </button>
          </article>
        );
      })}
    </div>
  );
}
