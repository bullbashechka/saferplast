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
      className="mt-[50px] bg-[rgba(250,254,255,1)] pb-10 md:mt-[77px] md:pb-14"
    >
      <div className="mx-auto max-w-[90rem] px-[10px] sm:px-6 md:px-5 lg:px-8 xl:w-[90rem] xl:max-w-none xl:px-[7.5rem]">
        <h2 id="proof-title" className="sr-only">
          Опыт, аккуратность и контроль
        </h2>

        <div className="mx-auto w-fit md:hidden">
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

        <div className="hidden md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-[minmax(280px,387px)_minmax(0,1fr)] xl:grid-cols-[387px_793px]">
          <article className="relative h-[300px] overflow-hidden rounded-[20px] bg-[#d9e5ea] lg:h-[360px]">
            <Image
              alt="Сотрудник Saferplast на производстве"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 387px"
              src="/images/webp/male-worker-factory.webp"
            />
          </article>

          <article className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#cfdbe0]">
            <Image
              alt="Проверка стекла на объекте"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 793px"
              src={rightProofImageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsla(0,0%,0%,0.37)_0%,hsla(0,0%,0%,0.37)_100%)]" />

            <div className="liquid-glass-strong liquid-glass-soft absolute inset-x-5 top-5 flex min-h-[220px] flex-col rounded-[15px] p-[15px] lg:left-[30px] lg:right-[30px] lg:top-[30px] xl:left-[40px] xl:right-auto xl:top-[45px] xl:h-[269px] xl:w-[678px]">
              <div className="relative z-10 h-full w-full">
                <p className="max-w-[648px] font-display text-[30px] font-normal leading-[1] tracking-[0] text-white lg:text-[36px] xl:text-[44px]">
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
                  className="mt-6 inline-flex h-[56px] w-full max-w-[355px] shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#004B62] px-6 py-4 text-center font-body text-[18px] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:h-[68px] lg:px-[49px] lg:py-[24px] lg:text-[20px]"
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
