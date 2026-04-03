"use client";

import { useEffect } from "react";

import type { Testimonial } from "@/features/landing/testimonials-content";

type TestimonialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
};

export function TestimonialModal({ isOpen, onClose, testimonial }: TestimonialModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : originalPaddingRight;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !testimonial) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        aria-labelledby="testimonial-modal-title"
        aria-modal="true"
        className="w-full max-w-[42rem] rounded-[1.25rem] bg-[rgba(250,254,255,1)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              id="testimonial-modal-title"
              className="font-display text-[1.25rem] font-normal leading-[1] text-[#004B62]"
            >
              {testimonial.name}
            </h3>
            <p className="mt-2 font-body text-[0.8125rem] font-medium leading-[1.2] text-[#242424]">
              {testimonial.service}
            </p>
          </div>

          <button
            aria-label="Закрыть полный отзыв"
            className="rounded-md p-1 text-[1.75rem] leading-none text-[#004B62] transition-colors hover:bg-[#e8f2f5]"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>

        <p className="mt-4 max-h-[60vh] overflow-y-auto pr-2 text-[0.875rem] font-normal leading-[1.4] text-[#242424]">
          {testimonial.review}
        </p>
      </div>
    </div>
  );
}
