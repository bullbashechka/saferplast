export type Testimonial = {
  id: string;
  name: string;
  service: string;
  review: string;
};

const testimonialItems = [
  {
    id: "zurab",
    name: "Зураб",
    service: "Окна, откосы, подоконники",
    review:
      "Обращался по установке пластиковых окон и остался доволен. Мастер приехал вовремя, всё замерил и объяснил детали. Установка прошла аккуратно, без спешки, видно опыт. Помимо окон установили откосы и подоконники. Окна открываются и закрываются легко, нигде не продувает. После работы всё убрали. Спасибо за профессионализм!",
  },
  {
    id: "anuarbek",
    name: "Ануарбек",
    service: "Окна",
    review:
      "Өте жақсы компания, Алла разы болсын. Керемет, күшті жасап берді, маған қатты ұнады. Бағасы да өте жақсы. Алла күш-қуат берсін. Сапалы, жақсы терезе болды, ешқашан өкінбейсіздер. Качественно. Тек сәттілік тілеймін. Тағы 2 терезе бар, тоже жасатамын. Өте күшті болды, суық мүлдем соқпайды.",
  },
  {
    id: "svetlana",
    name: "Светлана",
    service: "Балкон, окно и регулировка окон",
    review:
      "Недавно эта компания установила мне пластиковый балкон и окно, а также провела работу по починке старого пластикового окна, установленного другими специалистами. Я осталась очень довольна результатом. Работы были выполнены аккуратно и в оговорённые сроки. Специалисты приехали вовремя, всё подробно объяснили и ответили на мои вопросы. Качество установки на высоком уровне: окна и балкон герметичные, нигде не продувает, стало заметно теплее и тише в квартире. Отдельно хочу отметить чистоту после работы — за собой всё убрали. Впечатление положительное. Рекомендую компанию тем, кто ищет надёжную установку пластиковых окон и балконов.",
  },
  {
    id: "alibek",
    name: "Алибек",
    service: "Балконный блок",
    review: "Ас саляму алейкум, балконный блок сделали чётко, брат. Зимой было тепло, Аллах разы болсын.",
  },
  {
    id: "anastasiya",
    name: "Анастасия",
    service: "Регулировка, замена резины и фурнитуры",
    review:
      'Хочу поблагодарить ребят за отличную работу. Самые выгодные цены в сравнении с другими фирмами. Остановилась на "SaFerplast" и не прогадала, делают на совесть. Всем советую.',
  },
  {
    id: "marina",
    name: "Марина",
    service: "Окно, откосы и москитная сетка",
    review:
      "Заказывала окно на кухню с откосами и москитной сеткой. Всё сделали аккуратно и без задержек, после монтажа оставили чистоту. Окно закрывается плотно, в квартире стало заметно тише и теплее. Работой осталась довольна.",
  },
] satisfies readonly Testimonial[];

function groupTestimonials(ids: readonly Testimonial["id"][]) {
  return ids.map((id) => testimonialItems.find((item) => item.id === id)).filter(Boolean) as readonly Testimonial[];
}

export const testimonialsContent = {
  title: "Что говорят клиенты",
  items: groupTestimonials(["zurab", "anuarbek", "svetlana", "alibek", "anastasiya", "marina"]),
};

export const testimonialsByCity = {
  home: testimonialsContent.items,
  karaganda: groupTestimonials(["zurab", "svetlana", "anastasiya"]),
  temirtau: groupTestimonials(["anuarbek", "svetlana"]),
  shakhtinsk: groupTestimonials(["alibek", "anastasiya"]),
  saran: groupTestimonials(["marina", "zurab"]),
  abay: groupTestimonials(["anuarbek", "marina"]),
  "karaganda-districts": groupTestimonials(["zurab", "alibek"]),
} satisfies Record<string, readonly Testimonial[]>;
