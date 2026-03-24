import Image from "next/image";

import { firstScreenContent } from "@/features/landing/first-screen-content";

export function HeroSection() {
  const { headline, description, primaryCta, secondaryCta } = firstScreenContent;

  return (
    <section className="flex flex-1 items-center py-[2.5rem] lg:py-[3.5rem]" aria-labelledby="hero-title">
      <div className="grid w-full items-center gap-[2.5rem] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,36.75rem)] lg:gap-[3rem]">
        <div className="max-w-[51.875rem]">
          <h1
            id="hero-title"
            className="max-w-[51.875rem] font-display text-[2.75rem] font-normal leading-[1] text-brand-700 sm:text-[3.125rem] lg:text-[3.4375rem]"
          >
            {headline}
          </h1>

          <p className="mt-[1.75rem] max-w-[39rem] text-[1rem] leading-[1.45] text-ink lg:mt-[2.25rem]">
            {description}
          </p>

          <div className="mt-[2rem] flex flex-col items-start gap-[0.875rem] sm:flex-row sm:flex-wrap sm:items-center lg:mt-[2.5rem]">
            <a
              className="inline-flex min-h-[4.25rem] items-center justify-center rounded-[0.9375rem] bg-brand-700 px-[2rem] py-[1.25rem] text-center text-[1.125rem] font-medium leading-[1.1] text-white transition-colors hover:bg-brand-900 sm:px-[2.5rem] lg:px-[3.0625rem] lg:text-[1.25rem]"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </a>

            <a
              className="inline-flex min-h-[4.25rem] items-center justify-center rounded-[0.9375rem] border border-brand-500 bg-transparent px-[2rem] py-[1.25rem] text-center text-[1.125rem] font-medium leading-[1.1] text-brand-700 transition-colors hover:bg-brand-50 sm:px-[2.5rem] lg:px-[3.0625rem] lg:text-[1.25rem]"
              href={secondaryCta.href}
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="flex justify-end lg:justify-start">
          <div className="w-full max-w-[36.75rem] overflow-hidden rounded-[1.875rem] bg-accent">
            <Image
              alt="Девушка сидит у большого окна"
              className="h-auto w-full object-cover"
              height={682}
              priority
              src="/images/herophotogirl.png"
              width={588}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
