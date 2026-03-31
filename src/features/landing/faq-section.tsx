"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { faqContent } from "@/features/landing/faq-content";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionId = useId();

  return (
    <section aria-labelledby={`${sectionId}-title`} className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-content">
        <div className="mx-auto w-full max-w-[954px]">
          <h2
            id={`${sectionId}-title`}
            className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]"
          >
            {faqContent.title}
          </h2>

          <div className="mt-8 grid gap-5 lg:mt-10">
            {faqContent.items.map((item, index) => {
              const isActive = index === activeIndex;
              const headingId = `${sectionId}-question-${index}`;
              const panelId = `${sectionId}-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className={`grid rounded-[20px] border border-[#d8e6eb] bg-white px-5 shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-[min-height] duration-300 ease-out ${
                    isActive ? "min-h-[137px]" : "min-h-[95px]"
                  }`}
                  style={{ gridTemplateRows: isActive ? "95px 1fr" : "95px 0fr" }}
                >
                  <div className="flex h-[95px] items-center">
                    <button
                      aria-controls={panelId}
                      aria-expanded={isActive}
                      className="flex h-full w-full items-center gap-4 self-center text-left"
                      id={headingId}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        className={`h-[19px] w-[19px] shrink-0 transform transition-transform duration-300 ease-out ${
                          isActive ? "rotate-0" : "-rotate-90"
                        }`}
                        height={19}
                        src="/icons/arrow.svg"
                        width={19}
                      />
                      <span className="flex items-center font-body text-[1.375rem] font-medium leading-[1.05] text-[#004B62] sm:text-[1.625rem] lg:text-[30px]">
                        {item.question}
                      </span>
                    </button>
                  </div>

                  <div
                    aria-labelledby={headingId}
                    className="grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out"
                    id={panelId}
                    role="region"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                      marginTop: isActive ? "-4px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0 overflow-hidden pb-5 pl-[35px] pr-1">
                      <p className="font-body text-[1rem] font-normal leading-[1.35] text-[#242424]">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
