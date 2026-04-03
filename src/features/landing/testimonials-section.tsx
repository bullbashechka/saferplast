"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialModal } from "@/features/landing/testimonial-modal";
import type { Testimonial } from "@/features/landing/testimonials-content";
import { testimonialsContent } from "@/features/landing/testimonials-content";

function createMobileTestimonialSlides(items: readonly Testimonial[], size: number) {
  const slides: Testimonial[][] = [];

  for (let index = 0; index < items.length; index += size) {
    slides.push(items.slice(index, index + size));
  }

  return slides;
}

const mobileTestimonialSlides = createMobileTestimonialSlides(
  testimonialsContent.items,
  2,
);

function MobileTestimonialCard({
  testimonial,
  onOpen,
}: {
  testimonial: Testimonial;
  onOpen: (testimonial: Testimonial) => void;
}) {
  return (
    <Card className="h-[150px] rounded-[15px] border border-[#FAFEFF] bg-[#E6F0F2] shadow-none">
      <div className="flex h-full select-none flex-col gap-[5px] px-[10px] pb-[10px] pt-[10px] text-left">
        <h3 className="truncate font-body text-[14px] font-medium leading-[1] text-[#004B62]">
          {testimonial.name}
        </h3>
        <p className="truncate font-body text-[11px] font-medium leading-[1] text-[#242424]">
          {testimonial.service}
        </p>
        <p className="min-h-0 flex-1 overflow-hidden font-body text-[10px] font-normal leading-[1.2] text-[#242424] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
          {testimonial.review}
        </p>
        <button
          className="inline-flex w-fit items-center text-[10px] font-medium leading-[1] text-[#004B62] transition-colors hover:text-[#00384a]"
          onClick={() => onOpen(testimonial)}
          type="button"
        >
          Читать полностью
        </button>
      </div>
    </Card>
  );
}

function DesktopTestimonialCard({
  testimonial,
  onOpen,
}: {
  testimonial: Testimonial;
  onOpen: (testimonial: Testimonial) => void;
}) {
  return (
    <Card className="h-[228px] rounded-[20px] border-0 bg-[#E6F0F2] shadow-none min-[1025px]:h-[240px]">
      <div className="flex h-full select-none flex-col gap-4 px-8 pb-7 pr-6 pt-8 text-left min-[1025px]:gap-[18px] min-[1025px]:px-[40px] min-[1025px]:pb-[32px] min-[1025px]:pr-[30px] min-[1025px]:pt-[40px]">
        <h3 className="font-body text-[29px] font-medium leading-[1] text-[#004B62] min-[1025px]:text-[30px]">
          {testimonial.name}
        </h3>
        <p className="font-body text-[0.9375rem] font-medium leading-[1] text-[#242424] min-[1025px]:text-[1rem]">
          {testimonial.service}
        </p>
        <p className="min-h-0 flex-1 overflow-hidden text-[0.9375rem] font-normal leading-[1.35] text-[#242424] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] min-[1025px]:text-[1rem]">
          {testimonial.review}
        </p>
        <button
          className="inline-flex w-fit items-center text-[0.9375rem] font-medium leading-[1] text-[#004B62] transition-colors hover:text-[#00384a] min-[1025px]:text-[1rem]"
          onClick={() => onOpen(testimonial)}
          type="button"
        >
          Читать полностью
        </button>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedMobileSlideIndex, setSelectedMobileSlideIndex] = useState(0);

  useEffect(() => {
    if (!mobileEmblaApi) {
      return;
    }

    const syncMobileCarouselState = () => {
      setSelectedMobileSlideIndex(mobileEmblaApi.selectedScrollSnap());
    };

    syncMobileCarouselState();
    mobileEmblaApi.on("reInit", syncMobileCarouselState);
    mobileEmblaApi.on("select", syncMobileCarouselState);

    return () => {
      mobileEmblaApi.off("reInit", syncMobileCarouselState);
      mobileEmblaApi.off("select", syncMobileCarouselState);
    };
  }, [mobileEmblaApi]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-0 pt-[60px] md:mt-[120px] md:px-5 md:pt-0 min-[1025px]:px-8"
    >
      <div className="mx-auto w-full max-w-[300px] md:max-w-[1201px]">
        <h2
          id="testimonials-title"
          className="text-center font-['Sansation'] text-[20px] font-normal leading-[1] tracking-[0] text-[#004B62] md:font-display md:text-[43px] min-[1025px]:text-[44px]"
        >
          {testimonialsContent.title}
        </h2>

        <div className="mt-[20px] md:hidden">
          <div className="overflow-hidden" ref={mobileEmblaRef}>
            <div className="flex gap-[10px]">
              {mobileTestimonialSlides.map((slide, slideIndex) => (
                <div
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full"
                  key={`mobile-testimonials-slide-${slideIndex}`}
                >
                  <div className="grid grid-cols-2 gap-[10px]">
                    {slide.map((testimonial) => (
                      <MobileTestimonialCard
                        key={`${testimonial.name}-${testimonial.service}`}
                        onOpen={setSelectedTestimonial}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[14px] flex items-center justify-center gap-2">
            {mobileTestimonialSlides.map((_, index) => {
              const isActive = index === selectedMobileSlideIndex;

              return (
                <button
                  aria-label={`Показать группу отзывов ${index + 1}`}
                  className={`h-[6px] rounded-full transition-all duration-300 ${
                    isActive ? "w-6 bg-[#004B62]" : "w-[6px] bg-[#B7CCD4]"
                  }`}
                  key={`mobile-testimonials-dot-${index}`}
                  onClick={() => mobileEmblaApi?.scrollTo(index)}
                  type="button"
                />
              );
            })}
          </div>
        </div>

        <div className="hidden md:block">
          <Carousel
            className="mt-8 w-full min-[1025px]:mt-10"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <div className="relative">
              <CarouselContent className="md:-ml-0 md:gap-4 min-[1025px]:gap-5">
                {testimonialsContent.items.map((testimonial) => (
                  <CarouselItem
                    key={`${testimonial.name}-${testimonial.service}`}
                    className="select-none md:basis-[340px] md:pl-0 min-[1025px]:basis-[387px]"
                  >
                    <div className="h-full">
                      <DesktopTestimonialCard
                        onOpen={setSelectedTestimonial}
                        testimonial={testimonial}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <TestimonialModal
          isOpen={selectedTestimonial !== null}
          onClose={() => setSelectedTestimonial(null)}
          testimonial={selectedTestimonial}
        />
      </div>
    </section>
  );
}
