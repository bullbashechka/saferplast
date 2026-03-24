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
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden">
        <SiteHeader navigationLinks={navigationLinks} />
        <HeroSection />
      </div>
    </section>
  );
}
