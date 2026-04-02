"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

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
}: {
  alt: string;
  src: `/images/${string}`;
  objectPositionClassName: string;
}) {
  return (
    <article className="relative h-[275px] w-[244px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
      <Image
        alt={alt}
        className={`object-cover ${objectPositionClassName}`}
        fill
        sizes="244px"
        src={src}
      />
    </article>
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    updateSelectedIndex();
    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  const previewIndex = useMemo(() => {
    if (selectedIndex === mobileImages.length - 1) {
      return Math.max(0, selectedIndex - 1);
    }

    return selectedIndex + 1;
  }, [mobileImages.length, selectedIndex]);

  const handlePreviewClick = useCallback(() => {
    emblaApi?.scrollTo(previewIndex);
  }, [emblaApi, previewIndex]);

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

          <div className="relative mt-[20px] h-[275px]">
            <div
              className="absolute left-[265px] top-[34px] z-0 cursor-pointer"
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
              <article className="relative h-[169px] w-[259px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
                <Image
                  alt={mobileImages[previewIndex].alt}
                  className={`object-cover ${mobileImages[previewIndex].objectPositionClassName}`}
                  fill
                  sizes="259px"
                  src={mobileImages[previewIndex].src}
                />
              </article>
            </div>

            <div className="relative z-10 w-[244px] overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {mobileImages.map((image) => (
                  <div
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-[244px]"
                    key={image.alt}
                  >
                    <MobileProjectSlide
                      alt={image.alt}
                      objectPositionClassName={image.objectPositionClassName}
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

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
