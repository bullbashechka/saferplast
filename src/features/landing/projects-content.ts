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
  subtitle: "Показываем реальные объекты в Караганде и области",
  ctaLabel: "Смотреть работы в Instagram",
  ctaHref: firstScreenContent.instagramHref,
  images: {
    left: {
      alt: "Установленное белое окно ПВХ с широким подоконником",
      src: "/images/webp/windowwork.webp",
      objectPositionClassName: "object-center",
    },
    middleTop: {
      alt: "Балконный блок с окном и дверью после монтажа",
      src: "/images/webp/balconywork.webp",
      objectPositionClassName: "object-center",
    },
    middleBottom: {
      alt: "Остекление частного дома в Карагандинской области",
      src: "/images/original/karaganda-golubye-prudy-21.png",
      objectPositionClassName: "object-center",
    },
    right: {
      alt: "Стеклянная входная дверь после установки",
      src: "/images/webp/doorwork.webp",
      objectPositionClassName: "object-top",
    },
  },
};
