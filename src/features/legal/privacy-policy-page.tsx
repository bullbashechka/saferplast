const companyDetails = {
  companyName: "[Укажите наименование компании / ИП]",
  binOrIin: "[Укажите БИН или ИИН]",
  address: "[Укажите юридический адрес]",
  email: "[Укажите контактный email]",
  phone: "[Укажите контактный телефон]",
  website: "https://[ваш-домен].kz",
  effectiveDate: "[Укажите дату вступления в силу]",
};

export function PrivacyPolicyPage() {
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
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-[14px] leading-[1.45] md:text-[15px]">
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей
          сайта {companyDetails.website}.
        </p>

        <section className="mt-8 space-y-6 text-[14px] leading-[1.5] md:text-[15px]">
          <div>
            <h2 className="font-semibold text-[#004B62]">1. Оператор персональных данных</h2>
            <p className="mt-2">
              Оператор: {companyDetails.companyName}, БИН/ИИН: {companyDetails.binOrIin}, адрес: {companyDetails.address}
              , email: {companyDetails.email}, телефон: {companyDetails.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">2. Какие данные мы собираем</h2>
            <p className="mt-2">Через форму заявки на сайте мы можем обрабатывать следующие данные:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>текст обращения/задачи;</li>
              <li>технические данные источника обращения (URL страницы, с которой отправлена заявка).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">3. Цели обработки персональных данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>обработка входящей заявки и обратная связь с пользователем;</li>
              <li>подготовка консультации, расчета стоимости и коммерческого предложения;</li>
              <li>ведение истории обращений для контроля качества обслуживания.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">4. Правовые основания обработки</h2>
            <p className="mt-2">
              Основанием обработки является согласие пользователя, выраженное путем проставления соответствующих отметок
              в форме сайта и отправки заявки.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">5. Передача данных третьим лицам</h2>
            <p className="mt-2">
              Данные могут передаваться сервисам, используемым для доставки обращений оператору (в том числе мессенджеру
              Telegram), только в объеме, необходимом для обработки заявки.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">6. Срок хранения данных</h2>
            <p className="mt-2">
              Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки, либо в течение
              срока, установленного законодательством Республики Казахстан.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">7. Права пользователя</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>получать информацию об обработке своих персональных данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку персональных данных.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">8. Отзыв согласия и обращения</h2>
            <p className="mt-2">
              Для отзыва согласия или по вопросам обработки данных пользователь может обратиться по контактам:
              {` ${companyDetails.email}, ${companyDetails.phone}.`}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">9. Изменения политики</h2>
            <p className="mt-2">
              Оператор вправе обновлять настоящую Политику. Актуальная версия публикуется на этой странице.
            </p>
          </div>
        </section>

        <p className="mt-8 text-[13px] text-[#4a4a4a] md:text-[14px]">Дата вступления в силу: {companyDetails.effectiveDate}</p>
      </div>
    </main>
  );
}
