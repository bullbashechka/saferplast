import Image from "next/image";

import { workProcessContent } from "@/features/landing/work-process-content";

function DesktopWorkProcessCard({
  step,
  titleLines,
  imageSrc,
}: {
  step: string;
  titleLines: readonly string[];
  imageSrc: `/images/${string}`;
}) {
  return (
    <article className="relative h-[15.5rem] overflow-hidden rounded-[20px] bg-[#d9e5ea] xl:h-[20.5625rem]">
      <Image
        alt={titleLines.join(" ")}
        className="object-cover"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 387px"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[9px] right-[9px] top-[11px]">
        <div className="liquid-glass-strong rounded-[15px] p-2.5 xl:p-4">
          <div className="relative z-10 flex items-start gap-2.5 xl:gap-4">
            <div className="relative left-[1px] h-[40px] w-[42px] shrink-0 xl:left-[5px] xl:h-[55.00013px] xl:w-[57px]">
              <Image alt="" aria-hidden="true" fill src="/icons/square.svg" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-[32px] font-normal leading-[1] text-[#004B62] xl:text-[45px]">
                {step}
              </span>
            </div>

            <h3 className="flex min-h-[44px] min-w-0 flex-1 flex-col justify-center gap-0.5 pl-[2px] text-[0.8125rem] font-medium leading-[0.95] text-[#004B62] xl:h-[55px] xl:max-w-[16rem] xl:justify-between xl:gap-0 xl:pl-[5px] xl:text-[1.5rem] xl:leading-[1]">
              {titleLines.map((line, index) => (
                <span className={`${index === 1 ? "xl:whitespace-nowrap" : ""} block`} key={line}>
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

function MobileWorkProcessCard({
  step,
  titleLines,
  imageSrc,
}: {
  step: string;
  titleLines: readonly string[];
  imageSrc: `/images/${string}`;
}) {
  return (
    <article className="relative mx-auto h-[151px] w-[300px] overflow-hidden rounded-[10px] bg-[#d9e5ea]">
      <Image
        alt={titleLines.join(" ")}
        className="object-cover"
        fill
        sizes="300px"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[7px] top-[7px] h-[51px] w-[284px]">
        <div className="liquid-glass-strong flex h-full w-full items-center gap-[25px] rounded-[10px] p-[5px]">
          <div className="relative h-[41px] w-[43px] shrink-0">
            <Image alt="" aria-hidden="true" fill src="/icons/square.svg" />
            <span className="absolute inset-0 flex items-center justify-center font-display text-[34px] font-normal leading-[1] text-[#004B62]">
              {step}
            </span>
          </div>

          <h3 className="relative z-10 flex min-w-0 flex-1 flex-col justify-center font-['Sansation'] text-[18px] font-normal leading-[1] tracking-[0] text-[#004B62]">
            {titleLines.map((line, index) => (
              <span className={index === 1 ? "block whitespace-nowrap" : "block"} key={line}>
                {line}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </article>
  );
}

export function WorkProcessSection() {
  return (
    <section
      aria-labelledby="work-process-title"
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-0 pt-[60px] md:mt-[120px] md:px-5 md:pt-0 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[300px] md:max-w-content">
        <h2
          id="work-process-title"
          className="text-center font-['Sansation'] text-[20px] font-normal leading-[1] tracking-[0] text-[#004B62] md:font-sans md:text-[2rem] md:font-medium xl:text-[2.5rem]"
        >
          {workProcessContent.title}
        </h2>
        <p className="mx-auto mt-[10px] max-w-[300px] text-center font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[#242424] md:mt-4 md:max-w-[28rem] md:font-sans md:text-[0.875rem] xl:max-w-[30.125rem] xl:text-[1rem]">
          {workProcessContent.subtitle}
        </p>

        <div className="mt-[20px] space-y-[10px] md:hidden">
          {workProcessContent.cards.map((card) => (
            <MobileWorkProcessCard
              imageSrc={card.imageSrc}
              key={card.id}
              step={card.step}
              titleLines={card.titleLines}
            />
          ))}
        </div>

        <div className="hidden md:mt-8 md:grid md:grid-cols-3 md:gap-3 xl:mt-10 xl:gap-[19px]">
          {workProcessContent.cards.map((card) => (
            <DesktopWorkProcessCard
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
