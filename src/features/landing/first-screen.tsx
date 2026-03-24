import { HeroSection } from "@/features/landing/hero-section";
import { SiteHeader } from "@/features/landing/site-header";

const navigationLinks = [
  { href: "#top", label: "главная" },
  { href: "#calculator", label: "рассчитать стоимость" },
  { href: "#projects", label: "наши работы" },
  { href: "#contacts", label: "контакты" },
];

export function FirstScreen() {
  return (
    <section className="min-h-screen w-full bg-white" id="top">
      <div className="relative mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden">
        <div className="absolute left-0 right-0 top-[15px] z-20">
          <SiteHeader navigationLinks={navigationLinks} />
        </div>
        <HeroSection />
      </div>
    </section>
  );
}
