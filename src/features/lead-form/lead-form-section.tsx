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
    <section id="lead-form" className="bg-[rgba(250,254,255,1)] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:w-[90rem] lg:max-w-none lg:px-0">
        <h2 className="mx-auto max-w-[61rem] text-center font-display text-[2rem] font-normal leading-[1] text-[#004B62] sm:text-[2.25rem] lg:text-[44px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[52rem] text-center font-body text-[1rem] font-normal leading-[1] text-[#242424]">
          {subtitle}
        </p>

        <div className="mt-10 grid items-start gap-6 lg:ml-[7.5rem] lg:mr-[1.25rem] lg:grid-cols-[minmax(0,1fr)_minmax(320px,387px)_minmax(0,1fr)] lg:gap-[3rem]">
          <DecorativeColumn items={decorativeLabels.left} side="left" />

          <div className="mx-auto w-full max-w-[387px]">
            <div className="rounded-[20px] bg-[#004B62] p-6 shadow-[0_0_16.3px_rgba(0,75,98,0.62)] sm:p-8 lg:p-10">
              <form className="grid gap-[26px]">
                <input
                  className="h-[52px] rounded-[10px] bg-white px-[22px] py-[18px] font-body text-[1rem] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a]"
                  name="name"
                  placeholder={fields.name}
                  type="text"
                />
                <input
                  className="h-[52px] rounded-[10px] bg-white px-[22px] py-[18px] font-body text-[1rem] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a]"
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
                <div className="grid gap-2">
                  <textarea
                    className="min-h-[52px] rounded-[10px] bg-white px-[22px] py-[18px] font-body text-[1rem] font-normal leading-[1.2] text-[#242424] outline-none placeholder:text-[#6a6a6a]"
                    maxLength={taskMaxLength}
                    name="task"
                    onChange={(event) => setTaskValue(event.target.value)}
                    placeholder={fields.task}
                    rows={3}
                    value={taskValue}
                  />
                  <p className="text-right font-body text-[0.75rem] font-normal leading-[1.2] text-white/85">
                    {remainingTaskSymbols}
                  </p>
                </div>

                <FieldGroup className="gap-3">
                  {consents.map((consent, index) => (
                    <Field key={`${consent}-${index}`} orientation="horizontal">
                      <Checkbox id={`lead-consent-${index}`} name={`lead-consent-${index}`} />
                      <FieldLabel className="text-white" htmlFor={`lead-consent-${index}`}>
                        {consent}
                      </FieldLabel>
                    </Field>
                  ))}
                </FieldGroup>

                <button
                  className="flex h-[54px] items-center justify-center gap-5 rounded-[15px] bg-[#1E1E1E] px-[62px] py-[17px] font-body text-[20px] font-medium leading-[1] text-white transition-colors hover:bg-[#111111]"
                  type="submit"
                >
                  <span>{submitLabel}</span>
                  <Image alt="" aria-hidden="true" height={20} src="/icons/send.svg" width={20} />
                </button>
              </form>
            </div>

            <p className="mt-[19px] text-center font-body text-[1rem] font-normal leading-[1] text-black">{messengersLabel}</p>
            <div className="mt-4 flex items-center justify-center gap-5">
              <a
                aria-label="Telegram"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href="#"
              >
                <Image alt="" aria-hidden="true" height={47} src="/icons/ic_baseline-telegram.svg" width={47} />
              </a>
              <a
                aria-label="WhatsApp"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href="#"
              >
                <Image alt="" aria-hidden="true" height={38} src="/icons/ri_whatsapp-fill.svg" width={38} />
              </a>
            </div>
          </div>

          <DecorativeColumn items={decorativeLabels.right} side="right" />
        </div>
      </div>
    </section>
  );
}
