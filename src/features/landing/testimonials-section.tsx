"use client";

import { Card, CardContent } from "@/components/ui/card";
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
      aria-labelledby="testimonials-title"
      className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-content">
        <Carousel
          className="w-full px-8 sm:px-10 lg:px-12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div>
            <h2
              id="testimonials-title"
              className="text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]"
              style={{ fontFamily: "Sansation" }}
            >
              {testimonialsContent.title}
            </h2>
          </div>

          <div className="relative mt-8 lg:mt-10">
            <CarouselContent>
              {testimonialsContent.items.map((item) => (
                <CarouselItem key={`${item.name}-${item.service}`} className="select-none md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full min-h-[18.5rem] bg-transparent shadow-none">
                      <CardContent className="flex h-full select-none flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-10">
                        <h3 className="font-body text-[1.75rem] font-medium leading-[1] text-[#004B62] sm:text-[30px]">
                          {item.name}
                        </h3>
                        <p className="mt-4 font-body text-[1rem] font-medium leading-[1] text-[#242424]">
                          {item.service}
                        </p>
                        <p className="mt-6 max-w-[18.5rem] text-[1rem] font-normal leading-[1.35] text-[#242424]">
                          {item.review}
                        </p>
                      </CardContent>
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
