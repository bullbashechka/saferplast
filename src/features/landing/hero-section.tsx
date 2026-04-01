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
  return (
    <article className="flex w-full flex-col rounded-[1.25rem] border border-[#004B62] bg-[#004B62] p-[0.625rem] text-white shadow-[0_16px_40px_rgba(0,75,98,0.18)] xl:min-h-[11.1875rem] xl:w-[17.8125rem]">
      <div className="flex flex-1 flex-col gap-4">
        <div className="w-fit rounded-t-[0.625rem] rounded-br-[0.625rem] bg-white/55 px-4 py-[0.625rem]">
          <p className="text-[0.875rem] leading-[1]">{availabilityLabel}</p>
        </div>

        <div className="flex items-center gap-3">
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

          <p className="text-[0.875rem] leading-[1] text-white">{namesLabel}</p>
        </div>

        <a
          className="mt-auto inline-flex min-h-[4.25rem] w-full items-center justify-center rounded-[0.625rem] bg-white px-6 py-4 text-center text-[1.25rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#eef6ff]"
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
    <article className="flex w-full flex-col gap-[1.625rem] rounded-[1.25rem] bg-white p-[0.625rem] text-[#242424] shadow-[0_16px_40px_rgba(0,0,0,0.08)] xl:min-h-[11.125rem] xl:w-[19.0625rem]">
      <p className="text-[1rem] leading-[1]">{description}</p>
      <a
        className="mt-auto inline-flex min-h-[4.25rem] w-full items-center justify-center rounded-[0.625rem] bg-[#004B62] px-6 py-4 text-center text-[1.25rem] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
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
  return (
    <section aria-label="Первый экран" className="mt-0 xl:mt-0">
      <div className="xl:hidden">
        <div className="relative z-10 min-h-[32.5rem] overflow-hidden rounded-b-[1.875rem] bg-[#d9e5ea]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontheroleftside.png')" }}
          />
          <div className="relative z-10 px-[0.6875rem] pb-6 pt-4 sm:px-6 sm:pb-8 lg:px-8">
            <SiteHeader
              cityLabel={cityLabel}
              navigationLinks={headerNavigationLinks}
              phoneHref={phoneHref}
              phoneLabel={phoneLabel}
            />

            <h1
              className="mx-auto mt-8 w-[18.625rem] max-w-full text-center font-display text-[1.3125rem] font-normal leading-[1] text-[#004B62] sm:mt-10 sm:w-full sm:max-w-[34rem] sm:text-[2.75rem]"
            >
              {headline}
            </h1>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
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

      <div className="hidden xl:grid xl:grid-cols-[811fr_588fr]">
        <div className="relative aspect-[811/759] overflow-hidden rounded-[1.875rem] bg-[#d9e5ea]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontheroleftside.png')" }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="px-[clamp(1.5rem,3.6vw,3.25rem)] pt-[clamp(1rem,1.8vw,1.625rem)]">
              <DesktopHeaderBrandNav navigationLinks={headerNavigationLinks} />
            </div>

            <div className="flex flex-1 flex-col px-[clamp(1.5rem,7vw,6.125rem)] pb-[clamp(1.25rem,2vw,1.8125rem)] pt-[clamp(2.5rem,9vw,7.5rem)]">
              <h1
                className="max-w-[34rem] font-display text-[clamp(2.5rem,3.5vw,3rem)] font-normal leading-[1] text-[#004B62]"
              >
                {headline}
              </h1>

              <div className="mt-auto flex flex-wrap items-end gap-x-[1.3125rem] gap-y-4">
                <SupportCard {...supportCard} />
                <ServiceCard {...serviceCard} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[588/759] overflow-hidden rounded-[1.875rem] bg-[#d9e5ea]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/original/fontherorightside.png')" }}
          />

          <div className="relative z-10 flex h-full flex-col px-[clamp(1rem,2vw,2rem)] pt-[clamp(1rem,1.8vw,1.625rem)]">
            <DesktopHeaderContactActions cityLabel={cityLabel} phoneHref={phoneHref} phoneLabel={phoneLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
