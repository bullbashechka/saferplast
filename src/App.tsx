import { SeoMeta } from "@/components/seo/seo-meta";
import { AdvantagesSection } from "@/features/landing/advantages-section";
import { FaqSection } from "@/features/landing/faq-section";
import { FirstScreen } from "@/features/landing/first-screen";
import { ProofSection } from "@/features/landing/proof-section";
import { ProjectsSection } from "@/features/landing/projects-section";
import { SiteFooter } from "@/features/landing/site-footer";
import { SolutionMatchingSection } from "@/features/landing/solution-matching-section";
import { TestimonialsSection } from "@/features/landing/testimonials-section";
import { WorkProcessSection } from "@/features/landing/work-process-section";
import { LeadFormSection } from "@/features/lead-form/lead-form-section";
import { homeSeo } from "@/lib/seo/route-seo";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[rgba(250,254,255,1)] text-slate-900">
      <SeoMeta
        canonicalPath={homeSeo.canonicalPath}
        description={homeSeo.description}
        jsonLd={homeSeo.jsonLd}
        title={homeSeo.title}
      />
      <FirstScreen />
      <AdvantagesSection />
      <ProofSection />
      <SolutionMatchingSection />
      <WorkProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadFormSection />
      <SiteFooter />
    </main>
  );
}
