import Image from "next/image";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid flex-1 grid-cols-[1fr_588px] items-center pl-[67px]"
    >
      <div className="max-w-[710px] pb-[56px]">
        <h1
          id="hero-title"
          className="max-w-[830px] font-display text-[58px] font-normal leading-[0.97] tracking-[-0.04em] text-brand-700"
        >
          Окна, двери и балконы из ПВХ и алюминия напрямую от производителя
        </h1>

        <p className="mt-[44px] max-w-[623px] text-[16px] leading-none text-ink">
          Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде.
          Бесплатный замер и предварительный расчет.
        </p>

        <div className="mt-[84px] flex items-center gap-6">
          <button
            className="min-w-[214px] rounded-[15px] bg-brand-700 px-[36px] py-[23px] text-[20px] font-medium leading-none text-white transition-colors hover:bg-brand-900"
            type="button"
          >
            Бесплатный замер
          </button>

          <button
            className="min-w-[198px] rounded-[15px] border border-brand-500 bg-transparent px-[34px] py-[23px] text-[20px] font-medium leading-none text-brand-700 transition-colors hover:bg-brand-50"
            type="button"
          >
            Получить расчет
          </button>
        </div>
      </div>

      <div className="flex items-start justify-end pb-[15px]">
        <div className="relative h-[682px] w-[588px]">
          <div
            aria-hidden="true"
            className="absolute left-[-184px] top-[142px] z-10 h-[100px] w-[315px] rounded-[31px] bg-white"
          />

          <Image
            alt="Девушка сидит у большого окна"
            className="block h-[682px] w-[588px] rounded-[30px] object-cover"
            height={682}
            priority
            src="/images/herophotogirl.png"
            width={588}
          />
        </div>
      </div>
    </section>
  );
}
