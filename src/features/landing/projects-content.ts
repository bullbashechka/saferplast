import { firstScreenContent } from "@/features/landing/first-screen-content";

export type ProjectsImage = {
  alt: string;
  src: `/images/${string}`;
  objectPositionClassName: string;
};

export type ProjectsContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  images: {
    left: ProjectsImage;
    middleTop: ProjectsImage;
    middleBottom: ProjectsImage;
    right: ProjectsImage;
  };
};

export const projectsContent: ProjectsContent = {
  title: "Наши работы",
  subtitle: "Показываем реальные объекты, а не шаблонные картинки",
  ctaLabel: "Смотреть работы в Instagram",
  ctaHref: firstScreenContent.instagramHref,
  images: {
    left: {
      alt: "Установленное белое окно с широким подоконником",
      src: "/images/webp/windowwork.webp",
      objectPositionClassName: "object-center",
    },
    middleTop: {
      alt: "Балконный блок с окном и дверью после монтажа",
      src: "/images/webp/balconywork.webp",
      objectPositionClassName: "object-center",
    },
    middleBottom: {
      alt: "Фурнитура и ручка пластикового окна крупным планом",
      src: "/images/webp/ruchwork.webp",
      objectPositionClassName: "object-center",
    },
    right: {
      alt: "Темная стеклянная дверь в облицованном помещении",
      src: "/images/webp/doorwork.webp",
      objectPositionClassName: "object-top",
    },
  },
};
