"use client";

import { useState } from "react";

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

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-content lg:max-w-[1201px]">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div>
            <h2
              id="testimonials-title"
              className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]"
            >
              {testimonialsContent.title}
            </h2>
          </div>

          <div className="relative mt-8 lg:mt-10">
            <CarouselContent className="lg:-ml-0 lg:gap-5">
              {testimonialsContent.items.map((item) => (
                <CarouselItem
                  key={`${item.name}-${item.service}`}
                  className="select-none md:basis-1/2 lg:basis-[387px] lg:pl-0"
                >
                  <div className="h-full">
                    <Card className="h-[240px] rounded-[20px] border-0 bg-[hsla(190,32%,93%,1)] shadow-none">
                      <div className="flex h-full select-none flex-col gap-[18px] px-[40px] pb-[32px] pl-[40px] pr-[30px] pt-[40px] text-left">
                        <h3 className="font-body text-[1.75rem] font-medium leading-[1] text-[#004B62] sm:text-[30px]">
                          {item.name}
                        </h3>
                        <p className="font-body text-[1rem] font-medium leading-[1] text-[#242424]">
                          {item.service}
                        </p>
                        <p className="min-h-0 flex-1 overflow-hidden text-[1rem] font-normal leading-[1.35] text-[#242424] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                          {item.review}
                        </p>
                        <button
                          className="inline-flex w-fit items-center text-[1rem] font-medium leading-[1] text-[#004B62] transition-colors hover:text-[#00384a]"
                          onClick={() => setSelectedTestimonial(item)}
                          type="button"
                        >
                          Читать полностью
                        </button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <TestimonialModal
          isOpen={selectedTestimonial !== null}
          onClose={() => setSelectedTestimonial(null)}
          testimonial={selectedTestimonial}
        />
      </div>
    </section>
  );
}
