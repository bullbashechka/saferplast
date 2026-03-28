import Image from "next/image";

import { advantagesSectionContent } from "@/features/landing/advantages-section-content";

export function AdvantagesSection() {
  return (
    <section aria-labelledby="advantages-title" className="bg-[rgba(250,254,255,1)] pb-12 pt-8 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:w-[90rem] lg:max-w-none lg:px-[7.5rem]">
        <h2
          id="advantages-title"
          className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[2.75rem]"
        >
          {advantagesSectionContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[40rem] text-center text-[1rem] leading-[1.2] text-[#242424]">
          {advantagesSectionContent.subtitle}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-[17.8125rem_17.8125rem_17.6875rem_17.8125rem] lg:grid-rows-[13.125rem_13.125rem] lg:gap-5">
          {advantagesSectionContent.cards.map((card, index) => {
            const isImage = card.kind === "image";
            const isGradient = card.variant === "gradient";
            const isDark = card.variant === "dark";
            const positionClassName =
              index === 0
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

            if (isImage) {
              return (
                <article
                  key={`image-card-${index}`}
                  className={`${positionClassName} relative min-h-[17rem] overflow-hidden rounded-[1.25rem] bg-[#d9e5ea] sm:min-h-[22rem] lg:min-h-[27.5rem]`}
                >
                  <Image
                    alt="Фирменный стиль SaFerplast"
                    className="rounded-[1.25rem] object-cover blur-[2.5px] opacity-[0.29]"
                    fill
                    sizes="(max-width: 1024px) 100vw, 285px"
                    src="/images/cloud.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <Image alt="SaFerplast" height={300} src="/images/logoinadvantages.png" width={430} />
                  </div>
                </article>
              );
            }

            const baseClassName = isDark
              ? "bg-[#004B62] text-white"
              : isGradient
                ? "bg-[linear-gradient(to_bottom_left,#FFFCFC00_0%,#004B624D_80%)] text-[#242424]"
                : "bg-[linear-gradient(241.21deg,rgba(255,252,252,1)_0%,rgba(0,75,98,0.3)_100%)] text-[#242424]";

            const titleClassName = isDark ? "text-white" : "text-[#004B62]";

            const content = (
              <>
                <h3 className={`max-w-[33.125rem] font-display text-[1.75rem] font-normal leading-[1] sm:text-[1.875rem] ${titleClassName}`}>
                  {card.title}
                </h3>
                <p className="mt-8 max-w-[33.125rem] text-[1rem] leading-[1.2]">{card.description}</p>
                {isDark ? <span className="absolute right-6 top-10 text-[1.375rem] leading-none">→</span> : null}
              </>
            );

            if (card.href) {
              return (
                <a
                  key={card.title}
                  className={`${positionClassName} relative min-h-[13.125rem] rounded-[1.25rem] px-[1.875rem] py-[2.5rem] transition-colors hover:bg-[#00384a] ${baseClassName}`}
                  href={card.href}
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={card.title}
                className={`${positionClassName} min-h-[13.125rem] rounded-[1.25rem] px-[1.875rem] py-[2.5rem] ${baseClassName}`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
