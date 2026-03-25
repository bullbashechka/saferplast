import { HeroSection } from "@/features/landing/hero-section";
import { firstScreenContent } from "@/features/landing/first-screen-content";
import { SiteHeader } from "@/features/landing/site-header";

export function FirstScreen() {
  const {
    cityLabel,
    navigationLinks,
    phoneHref,
    phoneLabel,
    telegramHref,
    whatsappHref,
  } = firstScreenContent;

  return (
    <section className="min-h-screen bg-white" id="top">
      <div className="mx-auto flex min-h-screen max-w-[90rem] flex-col px-[2rem] pt-[0.9375rem] lg:px-[2.5rem]">
        <SiteHeader
          cityLabel={cityLabel}
          navigationLinks={navigationLinks}
          phoneHref={phoneHref}
          phoneLabel={phoneLabel}
          telegramHref={telegramHref}
          whatsappHref={whatsappHref}
        />
        <HeroSection />
      </div>
    </section>
  );
}
