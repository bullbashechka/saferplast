import { CalculatorSection } from "@/features/calculator/calculator-section";
import { LeadFormSection } from "@/features/lead-form/lead-form-section";
import { HeroSection } from "@/features/landing/hero-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeroSection />
      <CalculatorSection />
      <LeadFormSection />
    </main>
  );
}
