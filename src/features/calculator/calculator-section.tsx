import { calculatorSectionContent } from "@/features/calculator/calculator-content";

export function CalculatorSection() {
  return (
    <section id="calculator" className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-content">
        <h2 className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] lg:text-[2.75rem]">
          {calculatorSectionContent.copy.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[46rem] text-center font-body text-[1rem] font-normal leading-[1] text-[#242424]">
          {calculatorSectionContent.copy.subtitle}
        </p>
      </div>
    </section>
  );
}
