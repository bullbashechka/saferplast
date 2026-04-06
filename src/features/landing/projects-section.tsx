"use client";

import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { CSSProperties } from "react";

import { projectsContent } from "@/features/landing/projects-content";

function ProjectCard({
  alt,
  src,
  className,
  sizes,
  imageClassName,
  objectPositionClassName,
}: {
  alt: string;
  src: `/images/${string}`;
  className: string;
  sizes: string;
  imageClassName?: string;
  objectPositionClassName: string;
}) {
  return (
    <article className={`relative overflow-hidden rounded-[20px] bg-[#d9e5ea] ${className}`}>
      <Image
        alt={alt}
        className={`object-cover ${objectPositionClassName} ${imageClassName ?? ""}`}
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
        sizes="(max-width: 767px) 100vw, 244px"
        src={src}
      />
    </article>
  );
}

type MobileProjectsImage = (typeof projectsContent.images)[keyof typeof projectsContent.images];

function MobileProjectsSlider({
  images,
}: {
  images: readonly MobileProjectsImage[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: false,
      containScroll: "trimSnaps",
    },
    [ClassNames()],
  );

  return (
    <div className="projects-mobile-carousel mt-[20px]">
      <div className="projects-mobile-carousel__viewport" ref={emblaRef}>
        <div className="projects-mobile-carousel__container">
          {images.map((image, index) => (
            <button
              aria-label={`Открыть проект ${index + 1}`}
              className="embla__slide projects-mobile-carousel__slide"
              key={image.alt}
              onClick={() => emblaApi?.scrollTo(index)}
              type="button"
            >
              <MobileProjectSlide
                alt={image.alt}
                className="projects-mobile-carousel__card"
                objectPositionClassName={image.objectPositionClassName}
                src={image.src}
              />
            </button>
          ))}
        </div>
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
  const desktopGridStyle: CSSProperties & Record<string, string> = {
    "--projects-column-height": "clamp(31rem, 15.86rem + 31.54vw, 36.125rem)",
    "--projects-stack-gap": "clamp(1rem, 0.26rem + 1.54vw, 1.25rem)",
    "--projects-title-height": "clamp(5rem, 3.71rem + 2.69vw, 5.4375rem)",
    "--projects-middle-top-height": "clamp(16rem, 11.02rem + 10.38vw, 17.6875rem)",
    "--projects-cta-height": "clamp(4.25rem, 3.15rem + 2.31vw, 4.625rem)",
  };

  return (
    <section
      id="projects"
      aria-label="Наши работы"
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-0 pt-[60px] md:mt-[120px] md:px-5 md:pt-0 min-[1025px]:px-8"
    >
      <div className="mx-auto w-full max-w-[300px] md:max-w-[1201px]">
        <div className="md:hidden">
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
            rel="noopener noreferrer"
            target="_blank"
          >
            {ctaLabel}
          </a>
        </div>

        <div
          className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-[var(--projects-stack-gap)] min-[1025px]:gap-x-5 min-[1025px]:gap-y-0 xl:grid-cols-[387px_387px_387px]"
          style={desktopGridStyle}
        >
          <div className="flex flex-col gap-[var(--projects-stack-gap)]">
            <div className="flex h-[var(--projects-title-height)] flex-col justify-between">
              <h2 className="font-display text-[2.6875rem] font-normal leading-[1] text-[#004B62] min-[1025px]:text-[2.75rem]">
                {title}
              </h2>
              <p className="max-w-[17.4375rem] text-[0.9375rem] font-normal leading-[1.2] text-[#000000] min-[1025px]:text-[1rem]">
                {subtitle}
              </p>
            </div>

            <ProjectCard
              alt={images.left.alt}
              className="h-[calc(var(--projects-column-height)-var(--projects-title-height)-var(--projects-stack-gap))]"
              objectPositionClassName={images.left.objectPositionClassName}
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 387px"
              src={images.left.src}
            />
          </div>

          <div className="flex flex-col gap-[var(--projects-stack-gap)]">
            <ProjectCard
              alt={images.middleTop.alt}
              className="h-[var(--projects-middle-top-height)]"
              objectPositionClassName={images.middleTop.objectPositionClassName}
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 387px"
              src={images.middleTop.src}
            />
            <ProjectCard
              alt={images.middleBottom.alt}
              className="h-[calc(var(--projects-column-height)-var(--projects-middle-top-height)-var(--projects-stack-gap))]"
              objectPositionClassName={images.middleBottom.objectPositionClassName}
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 387px"
              src={images.middleBottom.src}
            />
          </div>

          <div className="flex flex-col gap-[var(--projects-stack-gap)]">
            <ProjectCard
              alt={images.right.alt}
              className="h-[calc(var(--projects-column-height)-var(--projects-cta-height)-var(--projects-stack-gap))]"
              imageClassName="md:scale-[0.94] min-[1025px]:scale-100"
              objectPositionClassName={images.right.objectPositionClassName}
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 387px"
              src={images.right.src}
            />

            <a
              className="inline-flex h-[var(--projects-cta-height)] w-full items-center justify-center whitespace-nowrap rounded-[15px] border border-[#004B62] px-[4.125rem] text-center text-[1.1875rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white min-[1025px]:text-[1.25rem]"
              href={ctaHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
