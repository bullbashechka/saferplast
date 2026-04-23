"use client";

import { Image } from "@/components/ui/image";
import { useId, useState } from "react";

import { faqContent } from "@/features/landing/faq-content";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionId = useId();

  return (
    <section
      aria-labelledby={`${sectionId}-title`}
      className="bg-[rgba(250,254,255,1)] px-[var(--landing-mobile-shell-x)] pt-[46px] md:mt-[120px] md:px-5 md:pt-0 min-[1025px]:px-8"
    >
      <div className="landing-mobile-shell mx-auto md:max-w-content">
        <div className="landing-mobile-shell mx-auto md:max-w-[954px]">
          <h2
            id={`${sectionId}-title`}
            className="text-center font-display text-[20px] font-normal leading-[1] text-[#004B62] md:text-[43px] min-[1025px]:text-[44px]"
          >
            {faqContent.title}
          </h2>

          <div className="mt-[20px] grid gap-[10px] md:mt-8 md:gap-4 min-[1025px]:mt-10 min-[1025px]:gap-5">
            {faqContent.items.map((item, index) => {
              const isActive = index === activeIndex;
              const mobileHeadingId = `${sectionId}-question-mobile-${index}`;
              const mobilePanelId = `${sectionId}-answer-mobile-${index}`;
              const desktopHeadingId = `${sectionId}-question-desktop-${index}`;
              const desktopPanelId = `${sectionId}-answer-desktop-${index}`;

              return (
                <div className="min-w-0" key={item.question}>
                  <article
                    className={`grid w-full max-w-full overflow-hidden rounded-[10px] border border-[#d8e6eb] px-[15px] shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-[min-height,background-color] duration-300 ease-out md:hidden ${
                      isActive ? "min-h-[104px]" : "min-h-[72px]"
                    } ${isActive ? "bg-[hsla(190,32%,93%,1)]" : "bg-white"}`}
                    style={{ gridTemplateRows: isActive ? "72px 1fr" : "72px 0fr" }}
                  >
                    <div className="flex h-[72px] items-center">
                      <button
                        aria-controls={mobilePanelId}
                        aria-expanded={isActive}
                        className="flex h-full w-full min-w-0 items-center gap-[8px] text-left"
                        id={mobileHeadingId}
                        onClick={() => setActiveIndex(index)}
                        type="button"
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
                        <span className="min-w-0 flex-1 overflow-hidden font-['Sansation'] text-[18px] font-normal leading-[1] text-[#004B62] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
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
                        <p className="font-['Montserrat'] text-[13px] font-normal leading-[1] text-[#242424]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`hidden rounded-[18px] border border-[#d8e6eb] px-[18px] shadow-[0_2px_10px_rgba(0,75,98,0.04)] transition-[min-height,background-color] duration-300 ease-out md:grid min-[1025px]:rounded-[20px] min-[1025px]:px-5 ${
                      isActive ? "md:min-h-[132px] min-[1025px]:min-h-[137px]" : "md:min-h-[92px] min-[1025px]:min-h-[95px]"
                    } ${isActive ? "bg-[hsla(190,32%,93%,1)]" : "bg-white"}`}
                    style={{ gridTemplateRows: isActive ? "95px 1fr" : "95px 0fr" }}
                  >
                    <div className="flex h-[95px] items-center">
                      <button
                        aria-controls={desktopPanelId}
                        aria-expanded={isActive}
                        className="flex h-full w-full items-center gap-3 self-center text-left min-[1025px]:gap-4"
                        id={desktopHeadingId}
                        onClick={() => setActiveIndex(index)}
                        type="button"
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          className={`h-[18px] w-[18px] shrink-0 transform transition-transform duration-300 ease-out min-[1025px]:h-[19px] min-[1025px]:w-[19px] ${
                            isActive ? "rotate-0" : "-rotate-90"
                          }`}
                          height={19}
                          src="/icons/arrow.svg"
                          width={19}
                        />
                        <span className="flex items-center font-body text-[29px] font-medium leading-[1.05] text-[#004B62] min-[1025px]:text-[30px]">
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
                      <div className="min-h-0 overflow-hidden pb-[18px] pl-[30px] pr-1 min-[1025px]:pb-5 min-[1025px]:pl-[35px]">
                        <p className="font-body text-[0.9375rem] font-normal leading-[1.35] text-[#242424] min-[1025px]:text-[1rem]">
                          {item.answer}
                        </p>
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
