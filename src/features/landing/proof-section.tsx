import Image from "next/image";

const rightProofImageSrc = encodeURI("/images/glass-broken-from- house-by-accident- man-checking- repair.jpg");

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
              src="/images/male-worker-factory.jpg"
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

            <div className="absolute left-[40px] top-[45px] h-[269px] w-[calc(100%-115px)] rounded-[15px] bg-[rgba(250,254,255,0.94)] p-[15px] shadow-[0_12px_30px_rgba(0,75,98,0.12)] backdrop-blur-[2px]">
              <div className="flex h-full flex-col justify-between gap-[39px]">
                <div>
                  <p
                    className="max-w-[34rem] font-['Sansation'] text-[44px] font-normal leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: "Sansation" }}
                  >
                    Бесплатно подскажем, что вам выгоднее: ремонт, замена или новое изготовление
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[12px] border border-[#D9E5EA] bg-white px-4 py-3">
                    <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[#004B62]">Замер</p>
                    <p className="mt-2 text-[0.9375rem] leading-[1.25] text-[#242424]">Точный выезд на объект</p>
                  </div>
                  <div className="rounded-[12px] border border-[#D9E5EA] bg-white px-4 py-3">
                    <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[#004B62]">Монтаж</p>
                    <p className="mt-2 text-[0.9375rem] leading-[1.25] text-[#242424]">Аккуратная установка</p>
                  </div>
                  <div className="rounded-[12px] border border-[#D9E5EA] bg-white px-4 py-3">
                    <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[#004B62]">Контроль</p>
                    <p className="mt-2 text-[0.9375rem] leading-[1.25] text-[#242424]">Финальная проверка</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
