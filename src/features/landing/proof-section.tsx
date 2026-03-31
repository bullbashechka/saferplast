import Image from "next/image";

const rightProofImageSrc = encodeURI("/images/webp/glass-broken-from- house-by-accident- man-checking- repair.webp");

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="bg-[rgba(250,254,255,1)] py-10 lg:py-14">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[7.5rem]">
        <h2 id="proof-title" className="sr-only">
          Опыт, аккуратность и контроль
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-[387px_793px]">
          <article className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
            <Image
              alt="Сотрудник SaFerplast на производстве"
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

            <div className="liquid-glass-strong liquid-glass-soft absolute left-[40px] top-[45px] flex h-[269px] w-[678px] flex-col items-start gap-[39px] rounded-[15px] p-[15px]">
              <div className="relative z-10 flex h-full w-full flex-col items-start gap-[39px]">
                <p
                  className="max-w-[648px] font-['Sansation'] text-[44px] font-normal leading-[1] tracking-[0] text-white"
                  style={{ fontFamily: "Sansation" }}
                >
                  Бесплатно подскажем, что вам выгоднее: ремонт, замена или новое изготовление
                </p>

                <a
                  className="inline-flex h-[68px] w-[355px] items-center justify-center rounded-[10px] bg-[#004B62] px-[49px] py-[24px] text-[20px] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
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
