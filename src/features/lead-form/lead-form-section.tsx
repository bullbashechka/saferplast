"use client";

import Image from "next/image";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { firstScreenContent } from "@/features/landing/first-screen-content";
import type { DecorativeLabel } from "@/features/lead-form/lead-form-content";
import { leadFormContent } from "@/features/lead-form/lead-form-content";
import type { LeadFormPayload } from "@/features/lead-form/lead-form-types";

const PHONE_PREFIX = "+7";
const EMPTY_CONSENTS = [false, false];
const SUCCESS_MESSAGE = "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
const ERROR_MESSAGE = "Не удалось отправить заявку. Попробуйте еще раз.";

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
    <div className="hidden w-full md:grid md:gap-[60px] min-[1025px]:gap-[80px]">
      {items.map((item) => (
        <div
          key={item.label}
          className={`flex min-h-[38px] w-fit items-center whitespace-nowrap rounded-[11px] border border-[#004B62] px-4 py-2 text-[0.8125rem] font-normal leading-[1] text-[#004B62] shadow-[0_0_19.9px_rgba(0,75,98,0.41)] md:min-h-[42px] md:px-[18px] md:py-3 md:text-[0.9375rem] min-[1025px]:min-h-[44px] min-[1025px]:px-[21px] min-[1025px]:text-[1rem] ${
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
  const { instagramHref, telegramHref, whatsappHref } = firstScreenContent;
  const [nameValue, setNameValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [consentValues, setConsentValues] = useState<boolean[]>(EMPTY_CONSENTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const remainingTaskSymbols = taskMaxLength - taskValue.length;
  const allConsentsAccepted = consentValues.every(Boolean);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitMessage(null);
    setSubmitError(null);

    const payload: LeadFormPayload = {
      name: nameValue.trim(),
      phone: phoneValue.trim(),
      task: taskValue.trim(),
      consentsAccepted: allConsentsAccepted,
      source: typeof window !== "undefined" ? window.location.href : undefined,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || ERROR_MESSAGE);
      }

      setNameValue("");
      setPhoneValue("");
      setTaskValue("");
      setConsentValues([...EMPTY_CONSENTS]);
      setSubmitMessage(SUCCESS_MESSAGE);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGE;
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleConsentChange(index: number, checked: boolean) {
    setConsentValues((current) => current.map((value, currentIndex) => (currentIndex === index ? checked : value)));
  }

  return (
    <section id="lead-form" className="bg-[rgba(250,254,255,1)] pb-16 pt-[60px] md:mt-[120px] md:pt-0">
      <div className="mx-auto w-full max-w-[1440px] px-[10px] md:px-4 min-[1025px]:px-[20px] min-[1025px]:pl-[21px]">
        <h2 className="mx-auto w-full max-w-[300px] text-center font-display text-[20px] font-normal leading-[1] text-[#004B62] md:max-w-[61rem] md:text-[43px] min-[1025px]:text-[44px]">
          {title}
        </h2>
        <p className="mx-auto mt-[10px] w-full max-w-[300px] text-center font-body text-[12px] font-normal leading-[1] text-[#242424] md:mt-4 md:max-w-[52rem] md:text-[0.9375rem] min-[1025px]:text-[1rem]">
          {subtitle}
        </p>

        <div className="mt-[20px] grid items-start gap-[15px] md:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,360px)_minmax(0,1fr)] md:gap-[2.5rem] min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(320px,387px)_minmax(0,1fr)] min-[1025px]:gap-[3rem]">
          <DecorativeColumn items={decorativeLabels.left} side="left" />

          <div className="mx-auto w-full max-w-[300px] md:max-w-[360px] min-[1025px]:max-w-[387px]">
            <div className="min-h-[337px] rounded-[20px] bg-[#004B62] p-[15px] shadow-[0_0_16.3px_rgba(0,75,98,0.62)] md:p-8 min-[1025px]:p-10">
              <form className="grid gap-[10px] md:gap-5 min-[1025px]:gap-[26px]" onSubmit={handleSubmit}>
                <input
                  className="h-[42px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a] md:h-[50px] md:px-[20px] md:py-[16px] md:text-[0.9375rem] min-[1025px]:h-[52px] min-[1025px]:px-[22px] min-[1025px]:py-[18px] min-[1025px]:text-[1rem]"
                  name="name"
                  onChange={(event) => setNameValue(event.target.value)}
                  placeholder={fields.name}
                  required
                  type="text"
                  value={nameValue}
                />
                <input
                  className="h-[42px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1] text-[#242424] outline-none placeholder:text-[#6a6a6a] md:h-[50px] md:px-[20px] md:py-[16px] md:text-[0.9375rem] min-[1025px]:h-[52px] min-[1025px]:px-[22px] min-[1025px]:py-[18px] min-[1025px]:text-[1rem]"
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
                  required
                  type="tel"
                  value={phoneValue}
                />
                <div className="grid gap-[4px] md:gap-2">
                  <textarea
                    className="min-h-[58px] rounded-[10px] bg-white px-[14px] py-[12px] font-body text-[12px] font-normal leading-[1.15] text-[#242424] outline-none placeholder:text-[#6a6a6a] md:min-h-[76px] md:px-[20px] md:py-[16px] md:text-[0.9375rem] md:leading-[1.2] min-[1025px]:min-h-[78px] min-[1025px]:px-[22px] min-[1025px]:py-[18px] min-[1025px]:text-[1rem]"
                    maxLength={taskMaxLength}
                    name="task"
                    onChange={(event) => setTaskValue(event.target.value)}
                    placeholder={fields.task}
                    rows={2}
                    value={taskValue}
                  />
                  <p className="text-right font-body text-[10px] font-normal leading-[1] text-white/85 md:text-[0.6875rem] md:leading-[1.2] min-[1025px]:text-[0.75rem]">
                    {remainingTaskSymbols}
                  </p>
                </div>

                <FieldGroup className="gap-[8px] md:gap-2.5 min-[1025px]:gap-3">
                  {consents.map((consent, index) => (
                    <Field key={`${consent}-${index}`} orientation="horizontal">
                      <Checkbox
                        checked={consentValues[index] ?? false}
                        id={`lead-consent-${index}`}
                        name={`lead-consent-${index}`}
                        onChange={(event) => handleConsentChange(index, event.target.checked)}
                        required
                      />
                      <FieldLabel
                        className="text-[10px] leading-[1.15] text-white md:text-[13px] md:leading-[1.2] min-[1025px]:text-[14px]"
                        htmlFor={`lead-consent-${index}`}
                      >
                        {consent}
                      </FieldLabel>
                    </Field>
                  ))}
                </FieldGroup>

                <button
                  className="flex h-[42px] items-center justify-center gap-[10px] rounded-[10px] bg-[#1E1E1E] px-[20px] py-[12px] font-body text-[14px] font-medium leading-[1] text-white transition-colors hover:bg-[#111111] disabled:cursor-not-allowed disabled:opacity-70 md:h-[52px] md:gap-4 md:rounded-[15px] md:px-[54px] md:py-[16px] md:text-[19px] min-[1025px]:h-[54px] min-[1025px]:gap-5 min-[1025px]:px-[62px] min-[1025px]:py-[17px] min-[1025px]:text-[20px]"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <span>{isSubmitting ? "Отправляем..." : submitLabel}</span>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 md:h-[19px] md:w-[19px] min-[1025px]:h-5 min-[1025px]:w-5"
                    height={20}
                    src="/icons/send.svg"
                    width={20}
                  />
                </button>

                {(submitMessage || submitError) && (
                  <p
                    className={`text-center font-body text-[11px] leading-[1.2] md:text-[12px] min-[1025px]:text-[13px] ${
                      submitError ? "text-[#ffd7d7]" : "text-[#d7ffe4]"
                    }`}
                    role={submitError ? "alert" : "status"}
                  >
                    {submitError || submitMessage}
                  </p>
                )}
              </form>
            </div>

            <p className="mt-[15px] text-center font-body text-[12px] font-normal leading-[1] text-black md:mt-[19px] md:text-[0.9375rem] min-[1025px]:text-[1rem]">
              {messengersLabel}
            </p>
            <div className="mt-[10px] flex items-center justify-center gap-[15px] md:mt-4 md:gap-5">
              <a
                aria-label="Telegram"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href={telegramHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] min-[1025px]:h-[47px] min-[1025px]:w-[47px]"
                  height={47}
                  src="/icons/teleg.svg"
                  width={47}
                />
              </a>
              <a
                aria-label="Instagram"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href={instagramHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] min-[1025px]:h-[47px] min-[1025px]:w-[47px]"
                  height={47}
                  src="/icons/instagram.svg"
                  width={47}
                />
              </a>
              <a
                aria-label="WhatsApp"
                className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                href={whatsappHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] min-[1025px]:h-[47px] min-[1025px]:w-[47px]"
                  height={47}
                  src="/icons/whats.svg"
                  width={47}
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
