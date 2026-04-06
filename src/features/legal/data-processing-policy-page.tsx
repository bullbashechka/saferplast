const companyDetails = {
  companyName: "[Укажите наименование компании / ИП]",
  binOrIin: "[Укажите БИН или ИИН]",
  address: "[Укажите юридический адрес]",
  email: "[Укажите контактный email]",
  phone: "[Укажите контактный телефон]",
  website: "https://[ваш-домен].kz",
  effectiveDate: "[Укажите дату вступления в силу]",
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
          Настоящая Политика обработки персональных данных регулирует порядок сбора, хранения, использования и защиты
          персональных данных при использовании сайта {companyDetails.website}.
        </p>

        <section className="mt-8 space-y-6 text-[14px] leading-[1.5] md:text-[15px]">
          <div>
            <h2 className="font-semibold text-[#004B62]">1. Оператор и контактные данные</h2>
            <p className="mt-2">
              Оператор персональных данных: {companyDetails.companyName}, БИН/ИИН: {companyDetails.binOrIin}, адрес:
              {` ${companyDetails.address}`}, email: {companyDetails.email}, телефон: {companyDetails.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">2. Категории обрабатываемых данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>фамилия, имя (если указывается пользователем);</li>
              <li>номер телефона;</li>
              <li>данные обращения (содержание заявки);</li>
              <li>технические сведения, связанные с отправкой заявки (URL источника, время обращения).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">3. Цели обработки данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>прием и обработка заявок пользователей;</li>
              <li>связь с пользователем для консультации, замера и расчета;</li>
              <li>выполнение обязательств по заключенным договоренностям;</li>
              <li>улучшение качества сервиса и ведение внутренней отчетности.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">4. Правовые основания</h2>
            <p className="mt-2">
              Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, а также в
              иных случаях, предусмотренных законодательством Республики Казахстан.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">5. Порядок и условия обработки</h2>
            <p className="mt-2">
              Обработка данных осуществляется с использованием средств автоматизации и/или без использования таких
              средств, с соблюдением принципов законности, ограниченности целей и минимизации объема данных.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">6. Передача и поручение обработки</h2>
            <p className="mt-2">
              Оператор вправе передавать данные третьим лицам, участвующим в обработке обращений (включая технические
              сервисы доставки сообщений), исключительно в целях, указанных в настоящей Политике.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">7. Сроки хранения и уничтожение данных</h2>
            <p className="mt-2">
              Персональные данные хранятся до достижения целей обработки либо до отзыва согласия субъектом данных, если
              иной срок хранения не установлен законодательством.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">8. Права субъекта персональных данных</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>получать информацию об обработке своих данных;</li>
              <li>требовать изменения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку персональных данных;</li>
              <li>обращаться с жалобами в уполномоченные органы в установленном порядке.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">9. Защита персональных данных</h2>
            <p className="mt-2">
              Оператор применяет правовые, организационные и технические меры для защиты персональных данных от
              неправомерного доступа, изменения, распространения, утраты и иных незаконных действий.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#004B62]">10. Контакты по вопросам обработки данных</h2>
            <p className="mt-2">
              По вопросам обработки персональных данных и для отзыва согласия вы можете обратиться:
              {` ${companyDetails.email}, ${companyDetails.phone}.`}
            </p>
          </div>
        </section>

        <p className="mt-8 text-[13px] text-[#4a4a4a] md:text-[14px]">Дата вступления в силу: {companyDetails.effectiveDate}</p>
      </div>
    </main>
  );
}
