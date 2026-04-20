import { Image } from "@/components/ui/image";

const rightProofImageSrc = encodeURI(
  "/images/webp/glass-broken-from- house-by-accident- man-checking- repair.webp",
);
const proofSectionCtaCopy =
  "Бесплатно подскажем, что вам выгоднее: ремонт, замена или новое изготовление";
const desktopProofSectionCtaLines = [
  "Бесплатно подскажем, что,",
  "вам выгоднее: ремонт, замена",
  "или новое изготовление",
] as const;

export function ProofSection() {
  return (
    <section
      aria-labelledby="proof-title"
      className="mt-[50px] bg-[rgba(250,254,255,1)] pb-10 md:mt-[77px] md:pb-14"
    >
      <div className="mx-auto max-w-[90rem] px-[var(--landing-mobile-shell-x)] md:px-5 min-[1025px]:px-8 xl:w-[90rem] xl:max-w-none xl:px-[7.5rem]">
        <h2 id="proof-title" className="sr-only">
          Опыт, аккуратность и контроль
        </h2>

        <div className="mx-auto md:hidden">
          <article className="landing-mobile-card relative h-[369px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
            <Image
              alt="Сотрудник Saferplast на производстве"
              className="rounded-[20px] object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 300px"
              src="/images/webp/male-worker-factory.webp"
            />
            <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.2)]" />

            <div
              className="liquid-glass-strong liquid-glass-soft absolute left-1/2 top-[200px] flex h-[159px] -translate-x-1/2 flex-col items-start rounded-[10px] p-[15px]"
              style={{ width: "clamp(280px, calc(100vw - 40px), 420px)" }}
            >
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <p className="landing-mobile-tight mx-auto h-20 max-w-full font-display text-[20px] font-normal leading-[1] tracking-[0] text-white">
                  {proofSectionCtaCopy}
                </p>

                <a
                  className="landing-mobile-cta mx-auto inline-flex h-[38px] shrink-0 items-center justify-center gap-[14px] rounded-[10px] bg-[#004B62] px-[39px] py-3 text-center font-body text-[14px] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
                  href="#lead-form"
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="hidden md:grid md:grid-cols-[0.85fr_1.35fr] md:gap-4 min-[1025px]:grid-cols-[387px_793px] min-[1025px]:gap-5">
          <article className="relative h-[340px] overflow-hidden rounded-[20px] bg-[#d9e5ea] min-[1025px]:h-[360px]">
            <Image
              alt="Сотрудник Saferplast на производстве"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 32vw, 387px"
              src="/images/webp/male-worker-factory.webp"
            />
          </article>

          <article className="relative h-[340px] overflow-hidden rounded-[20px] bg-[#cfdbe0] min-[1025px]:h-[360px]">
            <Image
              alt="Проверка стекла на объекте"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 68vw, 793px"
              src={rightProofImageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsla(0,0%,0%,0.37)_0%,hsla(0,0%,0%,0.37)_100%)]" />

            <div className="liquid-glass-strong liquid-glass-soft absolute left-[24px] right-[24px] top-[24px] flex min-h-[236px] flex-col rounded-[15px] p-[15px] min-[1025px]:left-[40px] min-[1025px]:right-auto min-[1025px]:top-[45px] min-[1025px]:h-[269px] min-[1025px]:w-[678px]">
              <div className="relative z-10 h-full w-full">
                <p className="max-w-[648px] font-display text-[43px] font-normal leading-[1] tracking-[0] text-white min-[1025px]:text-[44px]">
                  {desktopProofSectionCtaLines.map((line, index) => (
                    <span
                      className={index === 1 ? "block whitespace-nowrap" : "block"}
                      key={line}
                    >
                      {line}
                    </span>
                  ))}
                </p>

                <a
                  className="mt-5 inline-flex h-[48px] w-full max-w-[280px] shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#004B62] px-4 py-3 text-center font-body text-[1rem] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a] md:absolute md:bottom-0 md:left-0 md:mt-0 md:h-[66px] md:max-w-[340px] md:px-[44px] md:py-[24px] md:text-[19px] min-[1025px]:h-[68px] min-[1025px]:max-w-[355px] min-[1025px]:px-[49px] min-[1025px]:text-[20px]"
                  href="#lead-form"
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
