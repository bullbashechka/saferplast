"use client";

import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

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
        sizes="(max-width: 1023px) 100vw, 244px"
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

  return (
    <section
      id="projects"
      aria-label="Наши работы"
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-0 pt-[60px] md:mt-[120px] md:px-5 md:pt-0 lg:px-8"
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
          >
            {ctaLabel}
          </a>
        </div>

        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-3 lg:gap-4 xl:grid-cols-[387px_387px_387px] xl:gap-x-5 xl:gap-y-0">
          <div className="flex flex-col gap-4 lg:gap-6 xl:gap-9">
            <div className="xl:h-[87px]">
              <h2 className="font-display text-[1.75rem] font-normal leading-[1] text-[#004B62] lg:text-[2.25rem] xl:text-[44px]">
                {title}
              </h2>
              <p className="mt-3 max-w-[16rem] text-[0.875rem] font-normal leading-[1.2] text-[#000000] lg:mt-4 lg:max-w-[20rem] lg:text-[1rem] xl:w-[279px]">
                {subtitle}
              </p>
            </div>

            <ProjectCard
              alt={images.left.alt}
              className="h-[20rem] lg:h-[24rem] xl:h-[455px]"
              objectPositionClassName={images.left.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.left.src}
            />
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
            <ProjectCard
              alt={images.middleTop.alt}
              className="h-[15rem] lg:h-[18rem] xl:h-[283px]"
              objectPositionClassName={images.middleTop.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.middleTop.src}
            />
            <ProjectCard
              alt={images.middleBottom.alt}
              className="h-[15rem] lg:h-[18rem] xl:h-[275px]"
              objectPositionClassName={images.middleBottom.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.middleBottom.src}
            />
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
            <ProjectCard
              alt={images.right.alt}
              className="h-[20rem] lg:h-[24rem] xl:h-[484px]"
              imageClassName="md:scale-[0.94] lg:scale-100"
              objectPositionClassName={images.right.objectPositionClassName}
              sizes="(max-width: 1023px) 100vw, 387px"
              src={images.right.src}
            />

            <a
              className="inline-flex h-[58px] w-full items-center justify-center whitespace-nowrap rounded-[15px] border border-[#004B62] px-4 text-center text-[1rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white lg:h-[74px] lg:px-[2.75rem] lg:text-[1.125rem] xl:px-[66px] xl:text-[20px]"
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
