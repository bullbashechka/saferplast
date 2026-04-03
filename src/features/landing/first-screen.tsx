import { HeroSection } from "@/features/landing/hero-section";
import { firstScreenContent } from "@/features/landing/first-screen-content";

export function FirstScreen() {
  const { cityLabel, headerNavigationLinks, headline, phoneHref, phoneLabel, serviceCard, supportCard } = firstScreenContent;

  return (
    <section className="bg-[rgba(250,254,255,1)]" id="top">
      <div className="mx-auto w-full max-w-[1440px] pb-[0.625rem] lg:px-4 lg:pb-0 lg:pt-[10px] xl:px-[20px] xl:pl-[21px]">
        <HeroSection
          cityLabel={cityLabel}
          headerNavigationLinks={headerNavigationLinks}
          headline={headline}
          phoneHref={phoneHref}
          phoneLabel={phoneLabel}
          serviceCard={serviceCard}
          supportCard={supportCard}
        />
      </div>
    </section>
  );
}
