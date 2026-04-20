import { HeroSection } from "@/features/landing/hero-section";
import { firstScreenContent } from "@/features/landing/first-screen-content";
import { PageEnter } from "@/components/ui/reveal";

export function FirstScreen() {
  const { cityLabel, headerNavigationLinks, headline, phoneHref, phoneLabel, serviceCard, supportCard } = firstScreenContent;

  return (
    <section className="bg-[rgba(250,254,255,1)]" id="top">
      <div className="mx-auto w-full max-w-[1440px] pb-[0.625rem] md:px-4 md:pb-0 md:pt-[10px] min-[1025px]:px-[20px] min-[1025px]:pl-[21px]">
        <PageEnter>
          <HeroSection
            cityLabel={cityLabel}
            headerNavigationLinks={headerNavigationLinks}
            headline={headline}
            phoneHref={phoneHref}
            phoneLabel={phoneLabel}
            serviceCard={serviceCard}
            supportCard={supportCard}
          />
        </PageEnter>
      </div>
    </section>
  );
}
