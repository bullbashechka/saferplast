const offerDetails = {
  companyName: "[Укажите наименование компании / ИП]",
  binOrIin: "860713350477",
  address: "г Темиртау горка дружбы 32 кв 45 тел 87004450595",
  phone: "+77478041022 (Telegram, WhatsApp)",
  website: "https://[ваш-домен].kz",
  effectiveDate: "[Укажите дату вступления в силу]",
};

export function PublicOfferPage() {
  return (
    <main className="min-h-screen bg-[rgba(250,254,255,1)] px-4 pb-12 pt-8 text-[#242424] md:px-8 md:pb-16 md:pt-10">
      <div className="mx-auto w-full max-w-[900px]">
        <a
          className="inline-flex items-center rounded-[10px] border border-[#004B62] px-4 py-2 text-[14px] font-medium text-[#004B62] transition-colors hover:bg-[#004B62] hover:text-white md:text-[15px]"
          href="/"
        >
          Вернуться на главную
        </a>

        <h1 className="mt-6 font-display text-[30px] leading-[1] text-[#004B62] md:mt-8 md:text-[42px]">Публичная оферта</h1>
        <p className="mt-4 text-[14px] leading-[1.45] md:text-[15px]">
          Настоящий документ является официальным предложением (публичной офертой) {offerDetails.companyName} на
          заключение договора оказания услуг/выполнения работ на условиях, изложенных ниже.
        </p>

        <section className="mt-8 space-y-6 text-[14px] leading-[1.5] md:text-[15px]">
          <div>
            <h2 className="font-semibold text-[#004B62]">1. Общие положения</h2>
            <p className="mt-2">
              1.1. Настоящая оферта размещена на сайте {offerDetails.website}. 1.2. Оферта адресована физическим и
              юридическим лицам. 1.3. Акцептом оферты считается направление заявки через сайт, мессенджеры или иные
              каналы связи оператора.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">2. Предмет оферты</h2>
            <p className="mt-2">
              Исполнитель обязуется оказать услуги/выполнить работы по изготовлению, поставке, монтажу и/или ремонту
              оконных, дверных и сопутствующих конструкций, а заказчик обязуется принять и оплатить оказанные услуги.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">3. Порядок оформления и подтверждения заказа</h2>
            <p className="mt-2">
              Условия конкретного заказа (состав работ, сроки, стоимость) согласовываются с заказчиком индивидуально и
              фиксируются в счете, договоре, спецификации либо ином подтверждении.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">4. Стоимость и порядок расчетов</h2>
            <p className="mt-2">
              4.1. Стоимость определяется по результатам согласования заказа. 4.2. Способ и сроки оплаты согласуются
              сторонами дополнительно. 4.3. Обязательства по оплате считаются исполненными с момента поступления денежных
              средств исполнителю.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">5. Права и обязанности сторон</h2>
            <p className="mt-2">
              Исполнитель обязуется оказать услуги надлежащего качества и в согласованные сроки. Заказчик обязуется
              предоставить корректные данные и обеспечить условия для выполнения работ.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">6. Ответственность сторон</h2>
            <p className="mt-2">
              Стороны несут ответственность в соответствии с законодательством � еспублики Казахстан и условиями
              согласованного заказа.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">7. Персональные данные</h2>
            <p className="mt-2">
              Передавая заявку, заказчик подтверждает согласие на обработку персональных данных в соответствии с
              действующей политикой конфиденциальности и политикой обработки персональных данных, размещенными на сайте.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">8. Заключительные положения</h2>
            <p className="mt-2">
              Исполнитель вправе вносить изменения в оферту. Новая редакция вступает в силу с момента публикации на
              сайте, если иное не предусмотрено текстом новой редакции.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">9. � еквизиты исполнителя</h2>
            <p className="mt-2">
              {offerDetails.companyName}, БИН/ИИН: {offerDetails.binOrIin}, адрес: {offerDetails.address}, телефон: {offerDetails.phone}.
            </p>
          </div>
        </section>

        <p className="mt-8 text-[13px] text-[#4a4a4a] md:text-[14px]">Дата вступления в силу: {offerDetails.effectiveDate}</p>
      </div>
    </main>
  );
}



