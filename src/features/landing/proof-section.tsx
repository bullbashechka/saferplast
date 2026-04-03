import Image from "next/image";

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
      className="mt-[50px] bg-[rgba(250,254,255,1)] pb-10 lg:mt-[77px] lg:pb-10 lg:pb-14"
    >
      <div className="mx-auto max-w-[90rem] px-[10px] lg:px-5 lg:px-8 xl:w-[90rem] xl:max-w-none xl:px-[7.5rem]">
        <h2 id="proof-title" className="sr-only">
          Опыт, аккуратность и контроль
        </h2>

        <div className="mx-auto w-fit lg:hidden">
          <article className="relative h-[369px] w-[300px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
            <Image
              alt="Сотрудник Saferplast на производстве"
              className="object-cover"
              fill
              sizes="300px"
              src="/images/webp/male-worker-factory.webp"
            />
            <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.2)]" />

            <div className="liquid-glass-strong liquid-glass-soft absolute left-[10px] top-[200px] flex h-[159px] w-[280px] flex-col items-start rounded-[10px] p-[15px]">
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <p className="mx-auto h-20 w-[250px] max-w-full font-display text-[20px] font-normal leading-[1] tracking-[0] text-white">
                  {proofSectionCtaCopy}
                </p>

                <a
                  className="mx-auto inline-flex h-[38px] w-[258px] shrink-0 items-center justify-center gap-[14px] rounded-[10px] bg-[#004B62] px-[39px] py-3 text-center font-body text-[14px] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
                  href="#lead-form"
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-3 lg:grid-cols-[0.85fr_1.35fr] lg:gap-4 xl:grid-cols-[387px_793px] xl:gap-5">
          <article className="relative h-[260px] overflow-hidden rounded-[20px] bg-[#d9e5ea] lg:h-[340px] xl:h-[360px]">
            <Image
              alt="Сотрудник Saferplast на производстве"
              className="object-cover"
              fill
              sizes="(max-width: 1023px) 100vw, 387px"
              src="/images/webp/male-worker-factory.webp"
            />
          </article>

          <article className="relative h-[260px] overflow-hidden rounded-[20px] bg-[#cfdbe0] lg:h-[340px] xl:h-[360px]">
            <Image
              alt="Проверка стекла на объекте"
              className="object-cover"
              fill
              sizes="(max-width: 1023px) 100vw, 793px"
              src={rightProofImageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsla(0,0%,0%,0.37)_0%,hsla(0,0%,0%,0.37)_100%)]" />

            <div className="liquid-glass-strong liquid-glass-soft absolute left-4 right-4 top-4 flex min-h-[190px] flex-col rounded-[15px] p-3 lg:left-[24px] lg:right-[24px] lg:top-[24px] lg:min-h-[220px] lg:p-[15px] xl:left-[40px] xl:right-auto xl:top-[45px] xl:h-[269px] xl:w-[678px]">
              <div className="relative z-10 h-full w-full">
                <p className="max-w-[648px] font-display text-[1.625rem] font-normal leading-[1] tracking-[0] text-white lg:text-[36px] xl:text-[44px]">
                  {desktopProofSectionCtaLines.map((line, index) => (
                    <span
                      className={
                        index === 1 ? "block whitespace-nowrap" : "block"
                      }
                      key={line}
                    >
                      {line}
                    </span>
                  ))}
                </p>

                <a
                  className="mt-5 inline-flex h-[48px] w-full max-w-[280px] shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#004B62] px-4 py-3 text-center font-body text-[1rem] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:h-[68px] lg:max-w-[355px] lg:px-[49px] lg:py-[24px] lg:text-[20px]"
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
