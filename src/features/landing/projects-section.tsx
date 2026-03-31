import Image from "next/image";

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

export function ProjectsSection() {
  const { title, subtitle, ctaHref, ctaLabel, images } = projectsContent;

  return (
    <section
      id="projects"
      aria-label="Наши работы"
      className="bg-[rgba(250,254,255,1)] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-content">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[387px_387px_387px] lg:gap-x-5 lg:gap-y-0">
          <div className="flex flex-col gap-8 lg:gap-9">
            <div className="lg:h-[87px]">
              <h2
                className="font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]"
                style={{ fontFamily: "Sansation" }}
              >
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
              className="inline-flex min-h-[74px] w-full items-center justify-center rounded-[15px] border border-[#004B62] px-[2.75rem] py-[1.35rem] text-center text-[1.125rem] font-medium leading-[1] text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white lg:min-h-[74px] lg:px-[66px] lg:py-[27px] lg:text-[20px]"
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
