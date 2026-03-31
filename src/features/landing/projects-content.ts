export type ProjectsImage = {
  alt: string;
  src: `/images/${string}`;
  objectPositionClassName: string;
};

export type ProjectsContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: "#lead-form";
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
  ctaLabel: "Получить консультацию",
  ctaHref: "#lead-form",
  images: {
    left: {
      alt: "Установленное белое окно с широким подоконником",
      src: "/images/windowwork.jpg",
      objectPositionClassName: "object-center",
    },
    middleTop: {
      alt: "Балконный блок с окном и дверью после монтажа",
      src: "/images/balconywork.jpg",
      objectPositionClassName: "object-center",
    },
    middleBottom: {
      alt: "Фурнитура и ручка пластикового окна крупным планом",
      src: "/images/ruchwork.jpg",
      objectPositionClassName: "object-center",
    },
    right: {
      alt: "Темная стеклянная дверь в облицованном помещении",
      src: "/images/doorwork.jpg",
      objectPositionClassName: "object-top",
    },
  },
};
