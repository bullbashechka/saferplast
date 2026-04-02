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
      className="mt-[50px] bg-[rgba(250,254,255,1)] pb-10 lg:mt-[77px] lg:pb-14"
    >
      <div className="mx-auto max-w-[90rem] px-[10px] sm:px-6 lg:w-[90rem] lg:max-w-none lg:px-[7.5rem]">
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

        <div className="hidden lg:grid lg:grid-cols-[387px_793px] lg:gap-5">
          <article className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
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

            <div className="liquid-glass-strong liquid-glass-soft absolute left-[40px] top-[45px] flex h-[269px] w-[678px] flex-col rounded-[15px] p-[15px]">
              <div className="relative z-10 h-full w-full">
                <p className="w-[648px] font-display text-[44px] font-normal leading-[1] tracking-[0] text-white">
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
                  className="absolute bottom-0 left-0 inline-flex h-[68px] w-[355px] shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#004B62] px-[49px] py-[24px] text-center font-body text-[20px] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
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
