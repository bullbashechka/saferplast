import { Image } from "@/components/ui/image";

import { workProcessContent } from "@/features/landing/work-process-content";

function DesktopWorkProcessCard({
  id,
  step,
  titleLines,
  imageSrc,
}: {
  id: "consultation" | "calculation" | "installation";
  step: string;
  titleLines: readonly string[];
  imageSrc: `/images/${string}`;
}) {
  const desktopTitleLines =
    step === "2" ? (["Расчет", "Подбор решения"] as const) : titleLines;
  const desktopImageSrc = id === "installation" ? "/images/original/kidsrun.jpg" : imageSrc;

  return (
    <article className="relative h-[18.75rem] overflow-hidden rounded-[20px] bg-[#d9e5ea] min-[1025px]:h-[20.5625rem]">
      <Image
        alt={desktopTitleLines.join(" ")}
        className="object-cover"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 387px"
        src={desktopImageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[9px] right-[9px] top-[11px]">
        <div className="liquid-glass-strong rounded-[15px] p-4 pb-5 md:min-h-[6rem] min-[1025px]:pb-4">
          <div className="relative z-10 flex items-start gap-4">
            <div className="relative left-[5px] h-[52px] w-[54px] shrink-0 min-[1025px]:h-[55.00013px] min-[1025px]:w-[57px]">
              <Image alt="" aria-hidden="true" fill src="/icons/square.svg" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-[43px] font-normal leading-[1] text-[#004B62] min-[1025px]:text-[45px]">
                {step}
              </span>
            </div>

            <h3 className="flex min-h-[3.75rem] min-w-0 max-w-[16rem] flex-1 flex-col justify-between gap-0 pl-[5px] text-[1.4375rem] font-medium leading-[1] text-[#004B62] min-[1025px]:h-[55px] min-[1025px]:text-[1.5rem]">
              {desktopTitleLines.map((line, index) => (
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
    <article className="landing-mobile-card relative mx-auto h-[151px] overflow-hidden rounded-[10px] bg-[#d9e5ea]">
      <Image
        alt={titleLines.join(" ")}
        className="object-cover"
        fill
        sizes="(max-width: 1024px) 100vw, 300px"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,75,98,0.12)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="absolute left-[7px] right-[7px] top-[7px] h-[51px]">
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
      className="bg-[rgba(250,254,255,1)] px-[var(--landing-mobile-shell-x)] pb-0 pt-[60px] md:mt-[120px] md:px-5 md:pt-0 min-[1025px]:px-8"
    >
      <div className="landing-mobile-shell mx-auto md:max-w-content">
        <h2
          id="work-process-title"
          className="text-center font-['Sansation'] text-[20px] font-normal leading-[1] tracking-[0] text-[#004B62] md:font-sans md:text-[2.4375rem] md:font-medium min-[1025px]:text-[2.5rem]"
        >
          {workProcessContent.title}
        </h2>
        <p className="mx-auto mt-[10px] max-w-full text-center font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[#242424] md:mt-4 md:max-w-[30.125rem] md:font-sans md:text-[0.9375rem] min-[1025px]:text-[1rem]">
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

        <div className="hidden md:mt-8 md:grid md:grid-cols-3 md:gap-4 min-[1025px]:mt-10 min-[1025px]:gap-[19px]">
          {workProcessContent.cards.map((card) => (
            <DesktopWorkProcessCard
              id={card.id}
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
