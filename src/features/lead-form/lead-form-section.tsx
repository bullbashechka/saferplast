"use client";

import Image from "next/image";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import type { DecorativeLabel } from "@/features/lead-form/lead-form-content";
import { leadFormContent } from "@/features/lead-form/lead-form-content";

const PHONE_PREFIX = "+7";

function formatPhoneValue(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "");
  const normalizedDigits = digits.startsWith("7") && digits.length > 1 ? digits.slice(1) : digits;
  const limitedDigits = normalizedDigits.slice(0, 10);

  if (!limitedDigits) {
    return "";
  }

  if (limitedDigits.length <= 3) {
    return `${PHONE_PREFIX}-${limitedDigits}`;
  }

  if (limitedDigits.length <= 6) {
    return `${PHONE_PREFIX}-${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3)}`;
  }

  if (limitedDigits.length <= 8) {
    return `${PHONE_PREFIX}-${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
  }

  return `${PHONE_PREFIX}-${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8)}`;
}

function DecorativeColumn({
  items,
  side,
}: Readonly<{
  items: readonly DecorativeLabel[];
  side: "left" | "right";
}>) {
  return (
    <div className="hidden w-full lg:grid lg:gap-[80px]">
      {items.map((item) => (
        <div
          key={item.label}
          className={`flex min-h-[44px] w-fit items-center whitespace-nowrap rounded-[11px] border border-[#004B62] px-[21px] py-3 text-[1rem] font-normal leading-[1] text-[#004B62] shadow-[0_0_19.9px_rgba(0,75,98,0.41)] ${
            side === "right" ? "bg-[hsla(190,32%,93%,1)]" : ""
          } ${
            side === "left"
              ? item.offset === "outer"
                ? "justify-self-start"
                : "justify-self-end"
              : item.offset === "outer"
                ? "justify-self-end"
                : "justify-self-start"
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export function LeadFormSection() {
  const { consents, decorativeLabels, fields, messengersLabel, submitLabel, subtitle, taskMaxLength, title } =
    leadFormContent;
  const [taskValue, setTaskValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const remainingTaskSymbols = taskMaxLength - taskValue.length;

  return (
    <section id="lead-form" className="bg-[rgba(250,254,255,1)] pb-16 pt-[60px] lg:px-0 lg:py-20">
      <div className="mx-auto w-full max-w-[320px] px-[10px] lg:w-[90rem] lg:max-w-none lg:px-0">
        <h2 className="mx-auto w-full max-w-[300px] text-center font-display text-[20px] font-normal leading-[1] text-[#004B62] lg:max-w-[61rem] lg:text-[44px]">
          {title}
        </h2>
        <p className="mx-auto mt-[10px] w-full max-w-[300px] text-center font-body text-[12px] font-normal leading-[1] text-[#242424] lg:mt-4 lg:max-w-[52rem] lg:text-[1rem]">
          {subtitle}
        </p>

        <div className="mt-[20px] grid items-start gap-[15px] lg:ml-[7.5rem] lg:mr-[1.25rem] lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,387px)_minmax(0,1fr)] lg:gap-[3rem]">
          <DecorativeColumn items={decorativeLabels.left} side="left" />

          <div className="mx-auto w-full max-w-[300px] lg:max-w-[387px]">
            <div className="min-h-[337px] rounded-[20px] bg-[#004B62] p-[15px] shadow-[0_0_16.3px_rgba(0,75,98,0.62)] lg:p-10">
              <form className="grid gap-[10px] lg:gap-[26px]">
                <input
                  className="h-[42px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a] lg:h-[52px] lg:px-[22px] lg:py-[18px] lg:text-[1rem]"
                  name="name"
                  placeholder={fields.name}
                  type="text"
                />
                <input
                  className="h-[42px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a] lg:h-[52px] lg:px-[22px] lg:py-[18px] lg:text-[1rem]"
                  name="phone"
                  inputMode="numeric"
                  onBlur={() => {
                    if (phoneValue === PHONE_PREFIX) {
                      setPhoneValue("");
                    }
                  }}
                  onChange={(event) => setPhoneValue(formatPhoneValue(event.target.value))}
                  onFocus={() => {
                    if (!phoneValue) {
                      setPhoneValue(PHONE_PREFIX);
                    }
                  }}
                  placeholder={fields.phone}
                  type="tel"
                  value={phoneValue}
                />
                <div className="grid gap-[4px] lg:gap-2">
                  <textarea
                    className="min-h-[58px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1.15] text-[#242424] outline-none placeholder:text-[#6a6a6a] lg:min-h-[52px] lg:px-[22px] lg:py-[18px] lg:text-[1rem] lg:leading-[1.2]"
                    maxLength={taskMaxLength}
                    name="task"
                    onChange={(event) => setTaskValue(event.target.value)}
                    placeholder={fields.task}
                    rows={2}
                    value={taskValue}
                  />
                  <p className="text-right font-body text-[10px] font-normal leading-[1] text-white/85 lg:text-[0.75rem] lg:leading-[1.2]">
                    {remainingTaskSymbols}
                  </p>
                </div>

                <FieldGroup className="gap-[8px] lg:gap-3">
                  {consents.map((consent, index) => (
                    <Field key={`${consent}-${index}`} orientation="horizontal">
                      <Checkbox id={`lead-consent-${index}`} name={`lead-consent-${index}`} />
                      <FieldLabel
                        className="text-[10px] leading-[1.15] text-white lg:text-[14px] lg:leading-[1.2]"
                        htmlFor={`lead-consent-${index}`}
                      >
                        {consent}
                      </FieldLabel>
                    </Field>
                  ))}
                </FieldGroup>

                <button
                  className="flex h-[42px] items-center justify-center gap-[10px] rounded-[10px] bg-[#1E1E1E] px-[20px] py-[12px] font-body text-[14px] font-medium leading-[1] text-white transition-colors hover:bg-[#111111] lg:h-[54px] lg:gap-5 lg:rounded-[15px] lg:px-[62px] lg:py-[17px] lg:text-[20px]"
                  type="submit"
                >
                  <span>{submitLabel}</span>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 lg:h-5 lg:w-5"
                    height={20}
                    src="/icons/send.svg"
                    width={20}
                  />
                </button>
              </form>
            </div>

            <p className="mt-[15px] text-center font-body text-[12px] font-normal leading-[1] text-black lg:mt-[19px] lg:text-[1rem]">
              {messengersLabel}
            </p>
            <div className="mt-[10px] flex items-center justify-center gap-[15px] lg:mt-4 lg:gap-5">
              <a
                aria-label="Telegram"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href="#"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px] lg:h-[47px] lg:w-[47px]"
                  height={47}
                  src="/icons/ic_baseline-telegram.svg"
                  width={47}
                />
              </a>
              <a
                aria-label="Instagram"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href="#"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px]"
                  height={38}
                  src="/icons/instagram.svg"
                  width={38}
                />
              </a>
              <a
                aria-label="WhatsApp"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href="#"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px]"
                  height={38}
                  src="/icons/ri_whatsapp-fill.svg"
                  width={38}
                />
              </a>
            </div>
          </div>

          <DecorativeColumn items={decorativeLabels.right} side="right" />
        </div>
      </div>
    </section>
  );
}
