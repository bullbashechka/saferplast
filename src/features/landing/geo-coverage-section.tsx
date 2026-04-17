import { geoPages } from "@/features/seo/geo-pages-content";

export function GeoCoverageSection() {
  return (
    <section className="bg-[rgba(250,254,255,1)] px-[var(--landing-mobile-shell-x)] pt-[46px] md:mt-[120px] md:px-5 md:pt-0 min-[1025px]:px-8">
      <div className="landing-mobile-shell mx-auto md:max-w-content">
        <div className="mx-auto w-full max-w-[900px]">
          <h2 className="text-center font-display text-[20px] font-normal leading-[1] text-[#004B62] md:text-[43px] min-[1025px]:text-[44px]">
            География работ
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-center text-[13px] leading-[1.45] text-[#242424] md:text-[15px]">
            Работаем по Карагандинской области. Выберите ваш город или район и
            посмотрите условия по замеру, установке и ремонту окон.
          </p>

          <ul className="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-4">
            {geoPages.map((page) => (
              <li key={page.cityKey}>
                <a
                  className="block rounded-[12px] border border-[#d8e6eb] bg-white px-4 py-3 text-[14px] font-medium text-[#004B62] shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-colors hover:bg-[#f4fbff] md:text-[16px]"
                  href={page.path}
                >
                  Окна и ремонт: {page.cityLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
