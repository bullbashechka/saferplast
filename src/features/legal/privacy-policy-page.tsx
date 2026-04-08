import { SeoMeta } from "@/components/seo/seo-meta";
import { legalSeoByPath } from "@/lib/seo/route-seo";

const companyDetails = {
  companyName: "ИП АБДИКАРИМОВ К.К.",
  binOrIin: "860713350477",
  legalAddress: "г. Темиртау, мкр. Горка Дружбы, д. 32, кв 45",
  actualAddress: "г. Караганда, мкр. Голубые пруды, 21",
  phone: "+77478041022 (Telegram, WhatsApp)",
  website: "https://saferplast-main.pages.dev/",
  effectiveDate: "7 апреля 2026",
};

export function PrivacyPolicyPage() {
  const seo = legalSeoByPath["/privacy"];

  return (
    <main className="min-h-screen bg-[rgba(250,254,255,1)] px-4 pb-12 pt-8 text-[#242424] md:px-8 md:pb-16 md:pt-10">
      <SeoMeta canonicalPath={seo.canonicalPath} description={seo.description} jsonLd={seo.jsonLd} title={seo.title} />

      <div className="mx-auto w-full max-w-[900px]">
        <a
          className="inline-flex items-center rounded-[10px] border border-[#004B62] px-4 py-2 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
          href="/"
        >
          Вернуться на главную
        </a>

        <h1 className="mt-6 font-display text-[30px] leading-[1] text-[#004B62] md:mt-8 md:text-[42px]">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-[14px] leading-[1.45] md:text-[15px]">
          Эта Политика объясняет, какие персональные данные мы получаем через форму на сайте {companyDetails.website},
          как используем их и как защищаем.
        </p>

        <section className="mt-8 space-y-6 text-[14px] leading-[1.5] md:text-[15px]">
          <div>
            <h2 className="font-semibold text-[#004B62]">1. Оператор персональных данных</h2>
            <p className="mt-2">
              Оператор: {companyDetails.companyName}, БИН/ИИН: {companyDetails.binOrIin}, юр. адрес:{" "}
              {companyDetails.legalAddress}, фактический адрес: {companyDetails.actualAddress}, телефон:{" "}
              {companyDetails.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">2. Какие данные мы получаем</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>текст заявки;</li>
              <li>URL страницы, с которой отправлена форма;</li>
              <li>технические данные для защиты от спама и злоупотреблений.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">3. Цель обработки</h2>
            <p className="mt-2">
              Мы обрабатываем данные только для одной цели: принять вашу заявку и связаться с вами по вашему запросу.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">4. Правовое основание</h2>
            <p className="mt-2">
              Основание обработки - ваше согласие, которое вы даете при отправке формы и установке обязательных отметок
              согласия.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">5. Куда передаются данные из формы</h2>
            <p className="mt-2">
              Заявка с сайта передается только в Telegram-бота оператора, который используется как рабочий канал для
              оперативной связи с клиентом.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">6. Срок хранения</h2>
            <p className="mt-2">
              Если договор не заключен, данные заявки хранятся не дольше 90 дней с даты отправки. После истечения
              срока данные подлежат удалению.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">7. Порядок удаления</h2>
            <p className="mt-2">
              Уполномоченный сотрудник проводит ручную очистку рабочих сообщений и заявок старше 90 дней не реже
              одного раза в неделю.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">8. Права пользователя</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>получать информацию об обработке своих данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку персональных данных.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">9. Контакты и отзыв согласия</h2>
            <p className="mt-2">
              По вопросам обработки данных и для отзыва согласия вы можете обратиться по телефону:{" "}
              {companyDetails.phone}.
            </p>
          </div>
        </section>

        <p className="mt-8 text-[13px] text-[#4a4a4a] md:text-[14px]">
          Дата вступления в силу: {companyDetails.effectiveDate}
        </p>
      </div>
    </main>
  );
}
