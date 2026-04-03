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
    <article className="relative h-[20.5625rem] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
      <Image
        alt={titleLines.join(" ")}
        className="object-cover"
        fill
        sizes="(max-width: 1023px) 100vw, 387px"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[9px] right-[9px] top-[11px]">
        <div className="liquid-glass-strong rounded-[15px] p-4">
          <div className="relative z-10 flex items-start gap-4">
            <div className="relative left-[5px] h-[55.00013px] w-[57px] shrink-0">
              <Image alt="" aria-hidden="true" fill src="/icons/square.svg" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-[45px] font-normal leading-[1] text-[#004B62]">
                {step}
              </span>
            </div>

            <h3 className="flex h-[55px] min-w-0 flex-1 flex-col justify-between gap-0 max-w-[16rem] pl-[5px] text-[1.5rem] font-medium leading-[1] text-[#004B62]">
              {titleLines.map((line, index) => (
                <span className={`${index === 1 ? "whitespace-nowrap" : ""} block`} key={line}>
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
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-0 pt-[60px] lg:mt-[120px] lg:px-5 lg:pt-0 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-content">
        <h2
          id="work-process-title"
          className="text-center font-['Sansation'] text-[20px] font-normal leading-[1] tracking-[0] text-[#004B62] lg:font-sans lg:text-[2.5rem] lg:font-medium"
        >
          {workProcessContent.title}
        </h2>
        <p className="mx-auto mt-[10px] max-w-[300px] text-center font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[#242424] lg:mt-4 lg:max-w-[30.125rem] lg:font-sans lg:text-[1rem]">
          {workProcessContent.subtitle}
        </p>

        <div className="mt-[20px] space-y-[10px] lg:hidden">
          {workProcessContent.cards.map((card) => (
            <MobileWorkProcessCard
              imageSrc={card.imageSrc}
              key={card.id}
              step={card.step}
              titleLines={card.titleLines}
            />
          ))}
        </div>

        <div className="hidden lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-[19px]">
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
