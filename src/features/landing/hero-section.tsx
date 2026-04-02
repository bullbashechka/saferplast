import Image from "next/image";

import type { FirstScreenContent } from "@/features/landing/first-screen-content";
import { DesktopHeaderBrandNav, DesktopHeaderContactActions, SiteHeader } from "@/features/landing/site-header";

type HeroSectionProps = Pick<
  FirstScreenContent,
  "cityLabel" | "headerNavigationLinks" | "headline" | "phoneHref" | "phoneLabel" | "serviceCard" | "supportCard"
>;

type SupportCardProps = FirstScreenContent["supportCard"];
type ServiceCardProps = FirstScreenContent["serviceCard"];

function SupportCard({ availabilityLabel, cta, namesLabel }: SupportCardProps) {
  const mobileAvailabilityLabel = availabilityLabel.replace(" ежедневно", "");

  return (
    <article className="mx-auto flex h-[8.75rem] w-full max-w-[18.8125rem] flex-col rounded-[1.25rem] border border-[#004B62] bg-[#004B62] p-[0.625rem] text-white shadow-[0_16px_40px_rgba(0,75,98,0.18)] md:mx-0 md:h-auto md:max-w-none md:min-h-[8.5rem] md:w-[13rem] md:p-3 lg:min-h-[10rem] lg:w-[16rem] xl:min-h-[11.1875rem] xl:w-[17.8125rem]">
      <div className="flex flex-1 flex-col justify-between gap-2 md:gap-3 xl:gap-4">
        <div className="w-fit rounded-t-[0.625rem] rounded-br-[0.625rem] bg-white px-3 py-2 md:px-3 md:py-2 lg:px-4 lg:py-[0.625rem]">
          <p className="text-[0.75rem] leading-[1] text-[#242424] md:text-[0.8125rem] lg:text-[0.875rem]">
            <span className="md:hidden">{mobileAvailabilityLabel}</span>
            <span className="hidden md:inline">{availabilityLabel}</span>
            <br className="md:hidden" />
            ежедневно
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative h-[1.6875rem] w-[2.6875rem] shrink-0">
            <Image
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-0 z-10 h-[1.6875rem] w-[1.6875rem]"
              height={27}
              src="/icons/gray.svg"
              width={27}
            />
            <Image
              alt=""
              aria-hidden="true"
              className="absolute left-4 top-0 h-[1.6875rem] w-[1.6875rem]"
              height={27}
              src="/icons/moregray.svg"
              width={27}
            />
          </div>

          <p className="text-[0.75rem] leading-[1] text-white md:text-[0.8125rem] lg:text-[0.875rem]">{namesLabel}</p>
        </div>

        <a
          className="inline-flex h-[2.375rem] w-full items-center justify-center rounded-[0.625rem] bg-white px-[3.3125rem] py-3 text-center text-[0.875rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#eef6ff] md:mt-auto md:min-h-[3rem] md:px-4 md:py-3 md:text-[0.9375rem] lg:min-h-[3.5rem] lg:px-6 lg:py-4 lg:text-[1rem] xl:min-h-[4.25rem] xl:text-[1.25rem]"
          href={cta.href}
        >
          {cta.label}
        </a>
      </div>
    </article>
  );
}

function ServiceCard({ cta, description }: ServiceCardProps) {
  return (
    <article className="mx-auto flex h-[6.3125rem] w-full max-w-[19.0625rem] flex-col gap-[0.4375rem] rounded-[1.25rem] bg-white p-[0.625rem] text-[#242424] shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:mx-0 md:h-auto md:max-w-none md:min-h-[8.5rem] md:w-[13rem] md:justify-between md:gap-3 md:p-3 lg:min-h-[10rem] lg:w-[16rem] lg:gap-4 lg:p-4 xl:min-h-[11.1875rem] xl:w-[17.8125rem] xl:gap-[1.625rem]">
      <p className="w-full font-body text-[0.75rem] font-normal leading-[1] tracking-[0] md:text-[0.8125rem] lg:text-[0.875rem] xl:text-[1rem]">{description}</p>
      <a
        className="inline-flex h-[2.375rem] w-full items-center justify-center rounded-[0.625rem] bg-[#004B62] px-[4.4375rem] py-3 text-center font-body text-[0.875rem] font-medium leading-[1] text-white whitespace-nowrap transition-colors hover:bg-[#00384a] md:mt-auto md:min-h-[3rem] md:px-4 md:py-3 md:text-[0.9375rem] lg:min-h-[3.5rem] lg:px-6 lg:py-4 lg:text-[1rem] xl:min-h-[4.25rem] xl:text-[1.25rem]"
        href={cta.href}
      >
        {cta.label}
      </a>
    </article>
  );
}

export function HeroSection({
  cityLabel,
  headerNavigationLinks,
  headline,
  phoneHref,
  phoneLabel,
  serviceCard,
  supportCard,
}: HeroSectionProps) {
  const mobileHeadlineLines = ["Окна, двери и балконы", "из ПВХ и алюминия", "напрямую от производителя"];

  return (
    <section aria-label="Первый экран" className="mt-0">
      <div className="md:hidden">
        <div className="relative z-10 min-h-[32.5rem] overflow-hidden rounded-b-[1.875rem] bg-[#d9e5ea]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontheroleftside.png')" }}
          />
          <div className="relative z-10 px-[0.6875rem] pb-6 pt-4 sm:px-6 sm:pb-8">
            <SiteHeader
              cityLabel={cityLabel}
              navigationLinks={headerNavigationLinks}
              phoneHref={phoneHref}
              phoneLabel={phoneLabel}
            />

            <h1 className="mx-auto mt-8 w-[18.625rem] max-w-full text-center font-display text-[1.3125rem] font-normal leading-[1] text-[#004B62] sm:mt-10 sm:w-full sm:max-w-[34rem] sm:text-[2.75rem]">
              <span className="sm:hidden">
                {mobileHeadlineLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">{headline}</span>
            </h1>

            <div className="mt-8 grid justify-items-center gap-4 sm:mt-10 sm:gap-5">
              <SupportCard {...supportCard} />
              <ServiceCard {...serviceCard} />
            </div>
          </div>
        </div>

        <div className="relative z-0 -mt-[5.3125rem] aspect-[588/759] overflow-hidden rounded-[1.875rem] bg-[#d9e5ea]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontherorightside.png')" }}
          />
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[811fr_588fr]">
        <div className="relative min-h-[37rem] overflow-hidden rounded-[1.875rem] bg-[#d9e5ea] xl:aspect-[811/759] xl:min-h-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontheroleftside.png')" }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="px-5 pt-5 lg:px-6 lg:pt-6 xl:px-[clamp(1.5rem,3.6vw,3.25rem)] xl:pt-[clamp(1rem,1.8vw,1.625rem)]">
              <DesktopHeaderBrandNav navigationLinks={headerNavigationLinks} />
            </div>

            <div className="flex flex-1 flex-col px-5 pb-5 pt-9 lg:px-8 lg:pb-8 lg:pt-16 xl:px-[clamp(1.5rem,7vw,6.125rem)] xl:pb-[clamp(1.25rem,2vw,1.8125rem)] xl:pt-[clamp(2.5rem,9vw,7.5rem)]">
              <h1 className="max-w-[28rem] font-display text-[2rem] font-normal leading-[1] text-[#004B62] lg:max-w-[34rem] lg:text-[3rem] xl:text-[clamp(2.5rem,3.5vw,3rem)]">
                {headline}
              </h1>

              <div className="mt-auto flex flex-wrap items-end gap-3 lg:gap-4 xl:gap-x-[1.3125rem] xl:gap-y-4">
                <SupportCard {...supportCard} />
                <ServiceCard {...serviceCard} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[37rem] overflow-hidden rounded-[1.875rem] bg-[#d9e5ea] xl:aspect-[588/759] xl:min-h-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontherorightside.png')" }}
          />

          <div className="relative z-10 flex h-full flex-col px-4 pt-5 lg:px-6 lg:pt-6 xl:px-[clamp(1rem,2vw,2rem)] xl:pt-[clamp(1rem,1.8vw,1.625rem)]">
            <DesktopHeaderContactActions cityLabel={cityLabel} phoneHref={phoneHref} phoneLabel={phoneLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
