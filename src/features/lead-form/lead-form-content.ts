export type DecorativeLabelOffset = "outer" | "inner";

export type DecorativeLabel = {
  label: string;
  offset: DecorativeLabelOffset;
};

export const leadFormContent = {
  title: "Получите бесплатный замер, консультацию и предварительный расчет",
  subtitle: "Подберем решение под квартиру, дом, балкон, ремонт или коммерческий объект.",
  decorativeLabels: {
    left: [
      { label: "Дует, шумно, холодно", offset: "outer" },
      { label: "Окно плохо закрывается", offset: "inner" },
      { label: "Треснул стеклопакет", offset: "outer" },
      { label: "Старые окна пора менять", offset: "inner" },
      { label: "Нужен срочный замер", offset: "outer" },
    ],
    right: [
      { label: "Замена окон под ключ", offset: "outer" },
      { label: "Балкон под ключ", offset: "inner" },
      { label: "Ремонт фурнитуры", offset: "outer" },
      { label: "Подоконники и откосы", offset: "inner" },
      { label: "Двери для коммерции", offset: "outer" },
    ],
  },
  fields: {
    name: "Имя",
    phone: "Номер телефона",
    task: "Кратко опишите вашу задачу",
  },
  taskMaxLength: 300,
  consents: [
    "Я даю согласие на обработку персональных данных",
    "Я ознакомлен(а) с Политикой конфиденциальности",
  ],
  submitLabel: "Отправить",
  messengersLabel: "Или напишите нам в мессенджеры",
} as const;
