"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsContent } from "@/features/landing/testimonials-content";

export function TestimonialsSection() {
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
            <CarouselContent>
              {testimonialsContent.items.map((item) => (
                <CarouselItem key={`${item.name}-${item.service}`} className="select-none md:basis-1/2 lg:basis-[387px]">
                  <div className="h-full">
                    <Card className="h-[240px] rounded-[20px] border-0 bg-white shadow-none">
                      <div className="flex h-full select-none flex-col gap-[26px] px-[40px] pb-[40px] pl-[40px] pr-[30px] pt-[40px] text-left">
                        <h3 className="font-body text-[1.75rem] font-medium leading-[1] text-[#004B62] sm:text-[30px]">
                          {item.name}
                        </h3>
                        <p className="font-body text-[1rem] font-medium leading-[1] text-[#242424]">
                          {item.service}
                        </p>
                        <p className="text-[1rem] font-normal leading-[1.35] text-[#242424]">
                          {item.review}
                        </p>
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
      </div>
    </section>
  );
}
