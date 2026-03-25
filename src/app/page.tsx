import { CalculatorSection } from "@/features/calculator/calculator-section";
import { AdvantagesSection } from "@/features/landing/advantages-section";
import { FirstScreen } from "@/features/landing/first-screen";
import { LeadFormSection } from "@/features/lead-form/lead-form-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <FirstScreen />
      <AdvantagesSection />
      <CalculatorSection />
      <LeadFormSection />
    </main>
  );
}
