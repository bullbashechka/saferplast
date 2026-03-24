export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-content flex-col justify-center gap-6 px-6 py-20 lg:px-8">
      <span className="inline-flex w-fit rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700">
        Лендинг пластиковых окон
      </span>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Продающий сайт с расчетом стоимости и быстрой заявкой.
        </h1>
        <p className="text-lg leading-8 text-slate-600 sm:text-xl">
          Здесь будет главный оффер, преимущества, доверительные блоки и переход к калькулятору.
        </p>
      </div>
    </section>
  );
}
