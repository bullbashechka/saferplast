import type { GeoPage } from "@/features/seo/geo-pages-content";

const PHONE = "+7 (747) 804-10-22";

export function GeoServicePage({ page }: { page: GeoPage }) {
  return (
    <section className="bg-[rgba(250,254,255,1)] px-4 pb-0 pt-8 text-[#242424] md:px-8 md:pt-10" id="geo-services">
      <div className="mx-auto w-full max-w-[1200px]">
        <a
          className="inline-flex items-center rounded-[10px] border border-[#004B62] px-4 py-2 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
          href="/"
        >
          Вернуться на главную
        </a>

        <div className="mt-6 rounded-[24px] border border-[#d8e6eb] bg-[linear-gradient(180deg,#edf5f7_0%,#ffffff_100%)] p-5 md:mt-8 md:p-8 min-[1025px]:p-10">
          <h1 className="font-display text-[30px] leading-[1] text-[#004B62] md:text-[42px]">{page.h1}</h1>
          <p className="mt-4 max-w-[780px] text-[15px] leading-[1.5] md:text-[17px]">{page.description}</p>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2">
            {page.introParagraphs.map((paragraph) => (
              <p className="rounded-[18px] bg-white px-4 py-4 text-[14px] leading-[1.6] shadow-[0_8px_24px_rgba(0,75,98,0.06)] md:px-5 md:py-5 md:text-[15px]" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[20px] border border-[#d8e6eb] bg-white p-5 shadow-[0_8px_28px_rgba(0,75,98,0.05)] md:p-6">
            <h2 className="font-display text-[24px] leading-[1] text-[#004B62] md:text-[30px]">Что делаем в {page.cityLabel}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-[1.6] md:text-[15px]">
              {page.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[20px] border border-[#d8e6eb] bg-[#004B62] p-5 text-white shadow-[0_8px_28px_rgba(0,75,98,0.14)] md:p-6">
            <h2 className="font-display text-[24px] leading-[1] md:text-[30px]">Зона обслуживания</h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-white/90 md:text-[15px]">{page.areaSummary}</p>
            <p className="mt-4 text-[14px] leading-[1.6] text-white/90 md:text-[15px]">
              Работаем по направлениям: {page.areaServed.join(", ")}.
            </p>
          </section>
        </div>

        <section className="mt-8 md:mt-10">
          <h2 className="font-display text-[26px] leading-[1] text-[#004B62] md:text-[32px]">Как организуем работу</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.highlights.map((item) => (
              <article className="rounded-[20px] border border-[#d8e6eb] bg-white p-5 shadow-[0_8px_28px_rgba(0,75,98,0.05)] md:p-6" key={item.title}>
                <h3 className="font-body text-[20px] font-medium leading-[1.1] text-[#004B62]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] md:text-[15px]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 md:mt-10">
          <h2 className="font-display text-[26px] leading-[1] text-[#004B62] md:text-[32px]">Частые вопросы по {page.cityLabel}</h2>
          <div className="mt-5 grid gap-4">
            {page.faqItems.map((item) => (
              <details className="rounded-[18px] border border-[#d8e6eb] bg-white px-5 py-4 shadow-[0_8px_28px_rgba(0,75,98,0.05)]" key={item.question}>
                <summary className="cursor-pointer list-none font-body text-[18px] font-medium leading-[1.25] text-[#004B62]">
                  {item.question}
                </summary>
                <p className="mt-3 text-[14px] leading-[1.6] md:text-[15px]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[20px] border border-[#d8e6eb] bg-white p-5 shadow-[0_8px_28px_rgba(0,75,98,0.05)] md:mt-10 md:p-6">
          <h2 className="font-display text-[24px] leading-[1] text-[#004B62] md:text-[30px]">Оставьте заявку на замер</h2>
          <p className="mt-3 max-w-[760px] text-[14px] leading-[1.6] md:text-[15px]">
            Если нужно быстро обсудить задачу по {page.cityLabel}, можно сразу перейти к форме ниже или написать в
            WhatsApp и Telegram. Для первичного расчёта достаточно адреса, краткого описания и фотографий проёма.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-[12px] bg-[#004B62] px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#00384a] md:text-[15px]"
              href="#lead-form"
            >
              Перейти к форме заявки
            </a>
            <a
              className="inline-flex items-center rounded-[12px] border border-[#004B62] px-5 py-3 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
              href="https://wa.me/77478041022"
              rel="noopener noreferrer"
              target="_blank"
            >
              Написать: {PHONE}
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
