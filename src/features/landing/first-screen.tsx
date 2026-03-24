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
    <section className="min-h-screen bg-white" id="top">
      <div className="mx-auto flex min-h-screen max-w-[90rem] flex-col px-[2rem] pt-[0.9375rem] lg:px-[2.5rem]">
        <SiteHeader navigationLinks={navigationLinks} />
        <HeroSection />
      </div>
    </section>
  );
}
