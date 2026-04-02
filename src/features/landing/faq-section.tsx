"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { faqContent } from "@/features/landing/faq-content";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionId = useId();

  return (
    <section
      aria-labelledby={`${sectionId}-title`}
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-16 pt-[46px] lg:mt-[120px] lg:px-8 lg:pb-20 lg:pt-0"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-content">
        <div className="mx-auto w-full max-w-[300px] lg:max-w-[954px]">
          <h2
            id={`${sectionId}-title`}
            className="text-center font-display text-[20px] font-normal leading-[1] text-[#004B62] lg:text-[44px]"
          >
            {faqContent.title}
          </h2>

          <div className="mt-[20px] grid gap-[10px] lg:mt-10 lg:gap-5">
            {faqContent.items.map((item, index) => {
              const isActive = index === activeIndex;
              const mobileHeadingId = `${sectionId}-question-mobile-${index}`;
              const mobilePanelId = `${sectionId}-answer-mobile-${index}`;
              const desktopHeadingId = `${sectionId}-question-desktop-${index}`;
              const desktopPanelId = `${sectionId}-answer-desktop-${index}`;

              return (
                <div className="min-w-0" key={item.question}>
                  <article
                    className={`grid w-full max-w-full overflow-hidden rounded-[10px] border border-[#d8e6eb] bg-white px-[15px] shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-[min-height] duration-300 ease-out lg:hidden ${
                      isActive ? "min-h-[104px]" : "min-h-[72px]"
                    }`}
                    style={{ gridTemplateRows: isActive ? "72px 1fr" : "72px 0fr" }}
                  >
                    <div className="flex h-[72px] items-center">
                      <button
                        aria-controls={mobilePanelId}
                        aria-expanded={isActive}
                        className="flex h-full min-w-0 w-full items-center gap-[8px] text-left"
                        id={mobileHeadingId}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          className={`h-[12px] w-[12px] shrink-0 transform transition-transform duration-300 ease-out ${
                            isActive ? "rotate-0" : "-rotate-90"
                          }`}
                          height={12}
                          src="/icons/arrow.svg"
                          width={12}
                        />
                        <span className="min-w-0 flex-1 overflow-hidden font-display text-[15px] font-normal leading-[1] text-[#004B62] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                          {item.question}
                        </span>
                      </button>
                    </div>

                    <div
                      aria-labelledby={mobileHeadingId}
                      className="grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out"
                      id={mobilePanelId}
                      role="region"
                      style={{
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        marginTop: isActive ? "-2px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0 overflow-hidden pb-[12px] pl-[20px] pr-0">
                        <p className="font-body text-[10px] font-normal leading-[1.15] text-[#242424]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`hidden rounded-[20px] border border-[#d8e6eb] bg-white px-5 shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-[min-height] duration-300 ease-out lg:grid ${
                      isActive ? "lg:min-h-[137px]" : "lg:min-h-[95px]"
                    }`}
                    style={{ gridTemplateRows: isActive ? "95px 1fr" : "95px 0fr" }}
                  >
                    <div className="flex h-[95px] items-center">
                      <button
                        aria-controls={desktopPanelId}
                        aria-expanded={isActive}
                        className="flex h-full w-full items-center gap-4 self-center text-left"
                        id={desktopHeadingId}
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
                      aria-labelledby={desktopHeadingId}
                      className="grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out"
                      id={desktopPanelId}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
