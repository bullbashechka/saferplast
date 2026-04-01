import { HeroSection } from "@/features/landing/hero-section";
import { firstScreenContent } from "@/features/landing/first-screen-content";

export function FirstScreen() {
  const { cityLabel, headerNavigationLinks, headline, phoneHref, phoneLabel, serviceCard, supportCard } = firstScreenContent;

  return (
    <section className="bg-[rgba(250,254,255,1)]" id="top">
      <div className="mx-auto w-full max-w-[1440px] pb-[0.625rem] xl:px-[20px] xl:pb-0 xl:pl-[21px] xl:pt-[10px]">
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
