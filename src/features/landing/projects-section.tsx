"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { projectsContent } from "@/features/landing/projects-content";

function ProjectCard({
  alt,
  src,
  className,
  sizes,
  objectPositionClassName,
}: {
  alt: string;
  src: `/images/${string}`;
  className: string;
  sizes: string;
  objectPositionClassName: string;
}) {
  return (
    <article className={`relative overflow-hidden rounded-[20px] bg-[#d9e5ea] ${className}`}>
      <Image
        alt={alt}
        className={`object-cover ${objectPositionClassName}`}
        fill
        sizes={sizes}
        src={src}
      />
    </article>
  );
}

function MobileProjectSlide({
  alt,
  src,
  objectPositionClassName,
  className,
}: {
  alt: string;
  src: `/images/${string}`;
  objectPositionClassName: string;
  className: string;
}) {
  return (
    <article className={`relative overflow-hidden rounded-[20px] bg-[#d9e5ea] ${className}`}>
      <Image
        alt={alt}
        className={`object-cover ${objectPositionClassName}`}
        fill
        sizes="(max-width: 1023px) 100vw, 244px"
        src={src}
      />
    </article>
  );
}

type MobileProjectsImage = (typeof projectsContent.images)[keyof typeof projectsContent.images];
type MobileProjectsTransition = {
  fromIndex: number;
  toIndex: number;
  direction: "forward" | "backward";
  isActive: boolean;
};

function MobileProjectsSlider({
  images,
}: {
  images: readonly MobileProjectsImage[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState<MobileProjectsTransition | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const previewIndex = useMemo(() => {
    if (activeIndex === images.length - 1) {
      return Math.max(0, activeIndex - 1);
    }

    return activeIndex + 1;
  }, [activeIndex, images.length]);

  const clearAnimationTimers = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => clearAnimationTimers, [clearAnimationTimers]);

  const startTransition = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || nextIndex < 0 || nextIndex >= images.length || transition) {
        return;
      }

      clearAnimationTimers();

      const direction = nextIndex > activeIndex ? "forward" : "backward";

      setTransition({
        fromIndex: activeIndex,
        toIndex: nextIndex,
        direction,
        isActive: false,
      });

      frameRef.current = requestAnimationFrame(() => {
        setTransition((currentTransition) =>
          currentTransition
            ? {
                ...currentTransition,
                isActive: true,
              }
            : null,
        );
      });

      timeoutRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setTransition(null);
      }, 320);
    },
    [activeIndex, clearAnimationTimers, images.length, transition],
  );

  const handlePreviewClick = useCallback(() => {
    startTransition(previewIndex);
  }, [previewIndex, startTransition]);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const touchStartX = touchStartXRef.current;
      const touchEndX = event.changedTouches[0]?.clientX;

      touchStartXRef.current = null;

      if (touchStartX === null || touchEndX === undefined) {
        return;
      }

      const deltaX = touchEndX - touchStartX;

      if (Math.abs(deltaX) < 30) {
        return;
      }

      if (deltaX < 0 && activeIndex < images.length - 1) {
        startTransition(activeIndex + 1);
        return;
      }

      if (deltaX > 0 && activeIndex > 0) {
        startTransition(activeIndex - 1);
      }
    },
    [activeIndex, images.length, startTransition],
  );

  const mainImage = images[activeIndex];
  const previewImage = images[previewIndex];
  const isTransitioning = transition !== null;
  const outgoingImage = transition ? images[transition.fromIndex] : null;
  const incomingImage = transition ? images[transition.toIndex] : null;

  const outgoingCardClassName = transition
    ? transition.isActive
      ? transition.direction === "forward"
        ? "left-0 top-0 z-20 h-[275px] w-[244px] translate-x-[-28px] scale-[0.96] opacity-0"
        : "left-0 top-0 z-20 h-[275px] w-[244px] translate-x-[18px] scale-[0.96] opacity-0"
      : "left-0 top-0 z-20 h-[275px] w-[244px] translate-x-0 scale-100 opacity-100"
    : "";

  const incomingCardClassName = transition
    ? transition.isActive
      ? "left-0 top-0 z-30 h-[275px] w-[244px] translate-x-0 scale-100 opacity-100"
      : "left-[265px] top-[34px] z-10 h-[169px] w-[259px] translate-x-0 scale-100 opacity-100"
    : "";

  return (
    <div className="relative mt-[20px] h-[275px]">
      {transition && outgoingImage && incomingImage ? (
        <>
          <div className="pointer-events-none absolute inset-0">
            <MobileProjectSlide
              alt={outgoingImage.alt}
              className={`absolute transition-all duration-300 ease-out ${outgoingCardClassName}`}
              objectPositionClassName={outgoingImage.objectPositionClassName}
              src={outgoingImage.src}
            />
          </div>

          <div className="pointer-events-none absolute inset-0">
            <MobileProjectSlide
              alt={incomingImage.alt}
              className={`absolute transition-all duration-300 ease-out ${incomingCardClassName}`}
              objectPositionClassName={incomingImage.objectPositionClassName}
              src={incomingImage.src}
            />
          </div>
        </>
      ) : null}

      <div
        className={`absolute left-[265px] top-[34px] z-0 cursor-pointer transition-opacity duration-200 ${
          isTransitioning ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onClick={handlePreviewClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handlePreviewClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <MobileProjectSlide
          alt={previewImage.alt}
          className="h-[169px] w-[259px]"
          objectPositionClassName={previewImage.objectPositionClassName}
          src={previewImage.src}
        />
      </div>

      <div
        className={`relative z-10 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <MobileProjectSlide
          alt={mainImage.alt}
          className="h-[275px] w-[244px]"
          objectPositionClassName={mainImage.objectPositionClassName}
          src={mainImage.src}
        />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { title, subtitle, ctaHref, ctaLabel, images } = projectsContent;
  const mobileImages = [
    images.left,
    images.middleTop,
    images.middleBottom,
    images.right,
  ] as const;

  return (
    <section
      id="projects"
      aria-label="Наши работы"
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-16 pt-[60px] lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-[1201px]">
        <div className="lg:hidden">
          <h2 className="text-center font-['Sansation'] text-[20px] font-normal leading-[1] tracking-[0] text-[#004B62]">
            {title}
          </h2>
          <p className="mx-auto mt-[10px] max-w-[300px] text-center font-['Montserrat'] text-[12px] font-normal leading-[1] tracking-[0] text-[#000000]">
            {subtitle}
          </p>

          <MobileProjectsSlider images={mobileImages} />

          <a
            className="mx-auto mt-4 flex h-[38px] w-[244px] items-center justify-center gap-[14px] rounded-[10px] border border-[#004B62] px-[32px] py-[12px] text-center font-['Montserrat'] text-[14px] font-medium leading-[1] tracking-[0] text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white"
            href={ctaHref}
          >
            {ctaLabel}
          </a>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[387px_387px_387px] lg:gap-x-5 lg:gap-y-0">
          <div className="flex flex-col gap-8 lg:gap-9">
            <div className="lg:h-[87px]">
              <h2 className="font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]">
                {title}
              </h2>
              <p className="mt-4 max-w-[20rem] text-[1rem] font-normal leading-[1.2] text-[#000000] lg:w-[279px]">
                {subtitle}
              </p>
            </div>

            <ProjectCard
              alt={images.left.alt}
              className="h-[24rem] lg:h-[455px]"
              objectPositionClassName={images.left.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.left.src}
            />
          </div>

          <div className="flex flex-col gap-5">
            <ProjectCard
              alt={images.middleTop.alt}
              className="h-[18rem] lg:h-[283px]"
              objectPositionClassName={images.middleTop.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.middleTop.src}
            />
            <ProjectCard
              alt={images.middleBottom.alt}
              className="h-[18rem] lg:h-[275px]"
              objectPositionClassName={images.middleBottom.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.middleBottom.src}
            />
          </div>

          <div className="flex flex-col gap-5">
            <ProjectCard
              alt={images.right.alt}
              className="h-[24rem] lg:h-[484px]"
              objectPositionClassName={images.right.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.right.src}
            />

            <a
              className="inline-flex h-[74px] w-full items-center justify-center whitespace-nowrap rounded-[15px] border border-[#004B62] px-[2.75rem] text-center text-[1.125rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white lg:px-[66px] lg:text-[20px]"
              href={ctaHref}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
