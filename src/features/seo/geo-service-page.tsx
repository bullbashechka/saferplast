import { SeoMeta } from "@/components/seo/seo-meta";
import { geoPagesByKey } from "@/features/seo/geo-pages-content";
import { getGeoPageSeo } from "@/lib/seo/route-seo";

type GeoServicePageProps = {
  cityKey: keyof typeof geoPagesByKey;
};

const PHONE = "+77478041022";

export function GeoServicePage({ cityKey }: GeoServicePageProps) {
  const page = geoPagesByKey[cityKey];
  const seo = getGeoPageSeo(page);

  return (
    <main className="min-h-screen bg-[rgba(250,254,255,1)] px-4 pb-12 pt-8 text-[#242424] md:px-8 md:pb-16 md:pt-10">
      <SeoMeta canonicalPath={seo.canonicalPath} description={seo.description} jsonLd={seo.jsonLd} title={seo.title} />

      <div className="mx-auto w-full max-w-[900px]">
        <a
          className="inline-flex items-center rounded-[10px] border border-[#004B62] px-4 py-2 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
          href="/"
        >
          Вернуться на главную
        </a>

        <h1 className="mt-6 font-display text-[30px] leading-[1] text-[#004B62] md:mt-8 md:text-[42px]">{page.h1}</h1>
        <p className="mt-4 text-[14px] leading-[1.45] md:text-[16px]">{page.description}</p>

        <section className="mt-8">
          <h2 className="font-semibold text-[#004B62]">Что мы делаем в {page.cityLabel}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[14px] leading-[1.5] md:text-[15px]">
            {page.serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold text-[#004B62]">Зона обслуживания</h2>
          <p className="mt-2 text-[14px] leading-[1.5] md:text-[15px]">{page.areaServed.join(", ")}.</p>
        </section>

        <section className="mt-8 rounded-[14px] border border-[#d8e6eb] bg-white p-4 md:p-6">
          <h2 className="font-semibold text-[#004B62]">Оставьте заявку на замер</h2>
          <p className="mt-2 text-[14px] leading-[1.5] md:text-[15px]">
            Напишите в WhatsApp или Telegram:{" "}
            <a className="underline" href="https://wa.me/77478041022" rel="noopener noreferrer" target="_blank">
              {PHONE}
            </a>
            . Также можно перейти к форме на главной странице.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-[10px] bg-[#004B62] px-4 py-2 text-[14px] font-medium text-white hover:bg-[#00384a] md:text-[15px]"
            href="/#lead-form"
          >
            Перейти к форме заявки
          </a>
        </section>
      </div>
    </main>
  );
}
