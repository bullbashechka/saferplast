import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-1 items-center py-[3rem] lg:py-[4rem]" aria-labelledby="hero-title">
      <div className="grid w-full items-center gap-[2.5rem] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,36.75rem)] lg:gap-[3rem]">
        <div className="max-w-[51.875rem]">
          <h1
            id="hero-title"
            className="max-w-[51.875rem] font-display text-[3.4375rem] font-normal leading-[1] text-brand-700"
          >
            Окна, двери и балконы из ПВХ и алюминия напрямую от производителя
          </h1>

          <p className="mt-[2.75rem] max-w-[38.9375rem] text-[1rem] leading-[1] text-ink">
            Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде.
            Бесплатный замер и предварительный расчет.
          </p>

          <div className="mt-[6rem] flex flex-wrap items-center gap-[1.5rem]">
            <button
              className="rounded-[0.9375rem] bg-brand-700 px-[3.0625rem] py-[1.5rem] text-[1.25rem] font-medium leading-[1] text-white transition-colors hover:bg-brand-900"
              type="button"
            >
              Бесплатный замер
            </button>

            <button
              className="rounded-[0.9375rem] border border-brand-500 bg-transparent px-[3.0625rem] py-[1.5rem] text-[1.25rem] font-medium leading-[1] text-brand-700 transition-colors hover:bg-brand-50"
              type="button"
            >
              Получить расчет
            </button>
          </div>
        </div>

        <div className="flex justify-end lg:justify-start">
          <div className="w-full max-w-[36.75rem] overflow-hidden rounded-[1.875rem] bg-[#d9d9d9]">
            <Image
              alt="Девушка сидит у большого окна"
              className="h-auto w-full object-cover"
              height={682}
              priority
              src="/images/herophotogirl.png"
              width={588}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
