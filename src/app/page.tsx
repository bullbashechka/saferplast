import { CalculatorSection } from "@/features/calculator/calculator-section";
import { AdvantagesSection } from "@/features/landing/advantages-section";
import { FirstScreen } from "@/features/landing/first-screen";
import { ProofSection } from "@/features/landing/proof-section";
import { SolutionMatchingSection } from "@/features/landing/solution-matching-section";
import { LeadFormSection } from "@/features/lead-form/lead-form-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[rgba(250,254,255,1)] text-slate-900">
      <FirstScreen />
      <AdvantagesSection />
      <ProofSection />
      <CalculatorSection />
      <SolutionMatchingSection />
      <LeadFormSection />
    </main>
  );
}
