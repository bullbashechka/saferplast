import { advantagesSectionContent } from "@/features/landing/advantages-section-content";

export function AdvantagesSection() {
  return (
    <section
      aria-labelledby="advantages-title"
      className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-12"
    >
      <div className="mx-auto max-w-[75rem]">
        <h2
          id="advantages-title"
          className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[2.75rem]"
        >
          {advantagesSectionContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[40rem] text-center text-[1rem] leading-[1.3] text-[#242424]">
          {advantagesSectionContent.subtitle}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {advantagesSectionContent.cards.map((card, index) => {
            const isDark = card.variant === "dark";
            const cardBaseClassName = isDark
              ? "bg-[#004B62] text-white hover:bg-[#00384a]"
              : "bg-[linear-gradient(241.21deg,rgba(255,252,252,1)_0%,rgba(0,75,98,0.3)_94.97%)] text-[#242424]";
            const cardSpanClassName = index === 3 ? "lg:col-span-2" : "lg:col-span-1";
            const titleClassName = isDark ? "text-white" : "text-[#004B62]";

            const content = (
              <>
                <h3 className={`font-display text-[1.65rem] font-normal leading-[1] sm:text-[1.875rem] ${titleClassName}`}>
                  {card.title}
                </h3>
                <p className="mt-10 text-[1rem] leading-[1.3]">{card.description}</p>
              </>
            );

            if (card.href) {
              return (
                <a
                  key={card.title}
                  className={`${cardSpanClassName} block rounded-[1.25rem] px-[1.875rem] py-[2.5rem] transition-colors ${cardBaseClassName}`}
                  href={card.href}
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={card.title}
                className={`${cardSpanClassName} rounded-[1.25rem] px-[1.875rem] py-[2.5rem] ${cardBaseClassName}`}
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
