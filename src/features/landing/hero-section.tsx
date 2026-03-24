import Image from "next/image";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative h-[697px] w-full">
      <h1
        id="hero-title"
        className="absolute left-[122px] top-[181px] z-20 w-[830px] font-display text-[55px] font-normal leading-[100%] text-brand-700"
      >
        Окна, двери и балконы из ПВХ и алюминия напрямую от производителя
      </h1>

      <p className="absolute left-[122px] top-[368px] z-20 w-[623px] text-[16px] leading-none text-ink">
        Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде.
        Бесплатный замер и предварительный расчет.
      </p>

      <div className="absolute left-[120px] top-[467px] z-20 flex items-center gap-6">
        <button
          className="min-w-[214px] rounded-[15px] bg-brand-700 px-[49px] py-[24px] text-[20px] font-medium leading-none text-white transition-colors hover:bg-brand-900"
          type="button"
        >
          Бесплатный замер
        </button>

        <button
          className="min-w-[198px] rounded-[15px] border border-brand-500 bg-transparent px-[49px] py-[24px] text-[20px] font-medium leading-none text-brand-700 transition-colors hover:bg-brand-50"
          type="button"
        >
          Получить расчет
        </button>
      </div>

      <div className="absolute left-[832px] top-[15px] z-0 h-[682px] w-[588px] rounded-[30px] bg-[#d9d9d9]">
        <Image
          alt="Девушка сидит у большого окна"
          className="block h-[682px] w-[588px] rounded-[30px] object-cover"
          height={682}
          priority
          src="/images/herophotogirl.png"
          width={588}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[648px] top-[157px] z-10 h-[100px] w-[315px] rounded-[31px] bg-white"
      />
    </section>
  );
}
