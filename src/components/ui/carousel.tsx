"use client";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type EmblaApi = NonNullable<CarouselApi>;
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  opts?: CarouselOptions;
};

type CarouselContextValue = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("Carousel components must be used within <Carousel />");
  }

  return context;
}

function Carousel({ children, className, opts }: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: EmblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div className={cn("relative", className)} role="region" aria-roledescription="carousel">
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef } = useCarousel();

  return (
    <div className="cursor-grab overflow-hidden active:cursor-grabbing" ref={carouselRef}>
      <div className={cn("flex gap-5", className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  );
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<"button">) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      aria-label="Предыдущий отзыв"
      className={cn(
        "absolute -left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6E4E8] bg-white text-[#004B62] shadow-[0_10px_30px_rgba(0,75,98,0.12)] transition-colors hover:border-[#004B62] hover:text-[#004B62] disabled:pointer-events-none disabled:border-[#E4EAED] disabled:text-[#C5D6DC] sm:-left-5 lg:-left-6",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      type="button"
      {...props}
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M8.84182 3.13567C9.03605 3.3299 9.03605 3.64457 8.84182 3.8388L5.18099 7.49963L8.84182 11.1605C9.03605 11.3547 9.03605 11.6694 8.84182 11.8636C8.64759 12.0578 8.33292 12.0578 8.13869 11.8636L4.12469 7.84959C3.93046 7.65536 3.93046 7.34069 4.12469 7.14646L8.13869 3.13246C8.33292 2.93823 8.64759 2.93823 8.84182 3.13246V3.13567Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      aria-label="Следующий отзыв"
      className={cn(
        "absolute -right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6E4E8] bg-white text-[#004B62] shadow-[0_10px_30px_rgba(0,75,98,0.12)] transition-colors hover:border-[#004B62] hover:text-[#004B62] disabled:pointer-events-none disabled:border-[#E4EAED] disabled:text-[#C5D6DC] sm:-right-5 lg:-right-6",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      type="button"
      {...props}
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M6.1584 3.13567C5.96417 3.3299 5.96417 3.64457 6.1584 3.8388L9.81923 7.49963L6.1584 11.1605C5.96417 11.3547 5.96417 11.6694 6.1584 11.8636C6.35263 12.0578 6.6673 12.0578 6.86153 11.8636L10.8755 7.84959C11.0698 7.65536 11.0698 7.34069 10.8755 7.14646L6.86153 3.13246C6.6673 2.93823 6.35263 2.93823 6.1584 3.13246V3.13567Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };
