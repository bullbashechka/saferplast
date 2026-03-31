import Image from "next/image";

import { workProcessContent } from "@/features/landing/work-process-content";

function WorkProcessCard({
  step,
  titleLines,
  imageSrc,
}: {
  step: string;
  titleLines: readonly string[];
  imageSrc: `/images/${string}`;
}) {
  return (
    <article className="relative h-[19rem] overflow-hidden rounded-[20px] bg-[#d9e5ea] sm:h-[20.5625rem]">
      <Image
        alt={titleLines.join(" ")}
        className="object-cover"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 387px"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[9px] right-[9px] top-[11px]">
        <div className="liquid-glass-strong rounded-[15px] p-3 sm:p-4">
          <div className="relative z-10 flex items-start gap-4">
            <div className="relative left-[5px] h-[55.00013px] w-[57px] shrink-0">
              <Image alt="" aria-hidden="true" fill src="/icons/square.svg" />
              <span
                className="absolute inset-0 flex items-center justify-center font-display text-[45px] font-normal leading-[1] text-[#004B62]"
                style={{ fontFamily: "Sansation" }}
              >
                {step}
              </span>
            </div>

            <h3 className="flex h-[55px] max-w-[16rem] flex-1 flex-col justify-between overflow-hidden pl-[5px] text-[1.25rem] font-medium leading-[1] text-[#004B62] sm:text-[1.5rem]">
              {titleLines.map((line, index) => (
                <span className={`${index === 1 && line === "Бесплатный замер" ? "whitespace-nowrap" : ""} block`} key={line}>
                  {line}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WorkProcessSection() {
  return (
    <section
      aria-labelledby="work-process-title"
      className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-content">
        <h2
          id="work-process-title"
          className="text-center text-[2rem] font-medium leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[2.5rem]"
        >
          {workProcessContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[30.125rem] text-center text-[1rem] font-normal leading-[1] text-[#242424]">
          {workProcessContent.subtitle}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-[19px]">
          {workProcessContent.cards.map((card) => (
            <WorkProcessCard
              imageSrc={card.imageSrc}
              key={card.id}
              step={card.step}
              titleLines={card.titleLines}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
