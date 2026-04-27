const companyDetails = {
  companyName: "ИП АБДИКАРИМОВ К.К.",
  binOrIin: "860713350477",
  legalAddress: "г. Темиртау, мкр. Горка Дружбы, д. 32, кв 45",
  actualAddress: "г. Караганда, мкр. Голубые пруды, 21",
  phone: "+77478041022 (Telegram, WhatsApp)",
  website: "https://saferplast-main.pages.dev/",
  effectiveDate: "7 апреля 2026",
};

export function DataProcessingPolicyPage() {
  return (
    <main className="min-h-screen bg-[rgba(250,254,255,1)] px-4 pb-12 pt-8 text-[#242424] md:px-8 md:pb-16 md:pt-10">
      <div className="mx-auto w-full max-w-[900px]">
        <a
          className="inline-flex items-center rounded-[10px] border border-[#004B62] px-4 py-2 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
          href="/"
        >
          Вернуться на главную
        </a>

        <h1 className="mt-6 font-display text-[30px] leading-[1] text-[#004B62] md:mt-8 md:text-[42px]">
          Политика обработки персональных данных
        </h1>
        <p className="mt-4 text-[14px] leading-[1.45] md:text-[15px]">
          Настоящая Политика описывает порядок обработки персональных данных, полученных через форму на сайте{" "}
          {companyDetails.website}.
        </p>

        <section className="mt-8 space-y-6 text-[14px] leading-[1.5] md:text-[15px]">
          <div>
            <h2 className="font-semibold text-[#004B62]">1. Оператор и контакты</h2>
            <p className="mt-2">
              Оператор: {companyDetails.companyName}, БИН/ИИН: {companyDetails.binOrIin}, юр. адрес:{" "}
              {companyDetails.legalAddress}, фактический адрес: {companyDetails.actualAddress}, телефон:{" "}
              {companyDetails.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">2. Состав обрабатываемых данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>текст заявки;</li>
              <li>URL страницы-источника обращения;</li>
              <li>технические данные, связанные с защитой формы от спама.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">3. Цель обработки</h2>
            <p className="mt-2">Цель обработки - принять заявку и связаться с пользователем по его запросу.</p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">4. Правовое основание</h2>
            <p className="mt-2">
              Обработка осуществляется на основании согласия субъекта персональных данных, выраженного при отправке
              формы.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">5. Порядок обработки и передача</h2>
            <p className="mt-2">
              Заявки обрабатываются оператором и передаются только в Telegram-бот оператора, который используется для
              обратной связи с клиентом.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">6. Срок хранения</h2>
            <p className="mt-2">
              При отсутствии заключенного договора данные заявки хранятся не более 90 дней с даты обращения.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">7. Удаление данных</h2>
            <p className="mt-2">
              Удаление заявок старше 90 дней выполняется вручную уполномоченным сотрудником не реже одного раза в
              неделю.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">8. Права субъекта данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>получать информацию об обработке персональных данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку персональных данных.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">9. Обращения по данным</h2>
            <p className="mt-2">
              По вопросам обработки персональных данных и для отзыва согласия можно обратиться по телефону:{" "}
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
