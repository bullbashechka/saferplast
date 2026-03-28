import { HeroSection } from "@/features/landing/hero-section";
import { firstScreenContent } from "@/features/landing/first-screen-content";
import { SiteHeader } from "@/features/landing/site-header";

export function FirstScreen() {
  const {
    cityLabel,
    navigationLinks,
    phoneHref,
    phoneLabel,
  } = firstScreenContent;

  return (
    <section className="min-h-screen bg-[rgba(250,254,255,1)]" id="top">
      <div className="mx-auto flex min-h-screen w-full max-w-[90rem] flex-col px-4 pt-[0.9375rem] sm:px-6 lg:w-[90rem] lg:max-w-none lg:px-0">
        <SiteHeader
          cityLabel={cityLabel}
          navigationLinks={navigationLinks}
          phoneHref={phoneHref}
          phoneLabel={phoneLabel}
        />
        <HeroSection />
      </div>
    </section>
  );
}
