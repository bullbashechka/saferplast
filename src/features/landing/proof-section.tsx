import Image from "next/image";

const rightProofImageSrc = encodeURI("/images/glass-broken-from- house-by-accident- man-checking- repair.jpg");

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="bg-[rgba(250,254,255,1)] py-10 lg:py-14">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[7.5rem]">
        <h2 id="proof-title" className="sr-only">
          Опыт, аккуратность и контроль
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-[387px_793px]">
          <article className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#d9e5ea]">
            <Image
              alt="Сотрудник SaFerplast на производстве"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 387px"
              src="/images/male-worker-factory.jpg"
            />
          </article>

          <article className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#cfdbe0]">
            <Image
              alt="Проверка стекла на объекте"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 793px"
              src={rightProofImageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsla(0,0%,0%,0.37)_0%,hsla(0,0%,0%,0.37)_100%)]" />

            <div className="absolute left-[40px] top-[45px] h-[269px] w-[calc(100%-115px)] overflow-hidden rounded-[15px] border border-white/25 bg-[rgba(255,255,255,0.12)] p-[15px] shadow-[0_16px_45px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-[24px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.16)_18%,rgba(255,255,255,0.06)_34%,rgba(255,255,255,0)_62%)]" />
              <div className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0.05)_100%)]" />
              <div className="relative z-10 flex h-full flex-col">
                <div>
                  <p
                    className="max-w-[34rem] font-['Sansation'] text-[44px] font-normal leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: "Sansation" }}
                  >
                    Бесплатно подскажем, что вам выгоднее: ремонт, замена или новое изготовление
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}