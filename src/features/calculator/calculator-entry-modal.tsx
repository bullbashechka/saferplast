"use client";

import type { CalculatorContextDraft, CalculatorCategoryKey } from "@/features/calculator/calculator-types";

type CalculatorEntryModalProps = {
  category: CalculatorCategoryKey | null;
  isOpen: boolean;
  onClose: () => void;
};

function getContextDraft(category: CalculatorCategoryKey): CalculatorContextDraft {
  return {
    category,
    sourceSection: "calculator",
    ctaLabel: "Рассчитать",
  };
}

export function CalculatorEntryModal({ category, isOpen, onClose }: CalculatorEntryModalProps) {
  if (!isOpen || !category) {
    return null;
  }

  const context = getContextDraft(category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="presentation">
      <div
        aria-labelledby="calculator-modal-title"
        aria-modal="true"
        className="w-full max-w-[32rem] rounded-[1.25rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="calculator-modal-title" className="font-display text-[1.75rem] font-normal leading-[1] text-[#004B62]">
            Примерный расчет
          </h3>
          <button
            aria-label="Закрыть модальное окно расчета"
            className="rounded-md p-1 text-[#004B62] transition-colors hover:bg-[#e8f2f5]"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>

        <p className="mt-4 font-body text-[1rem] leading-[1.3] text-[#242424]">
          Категория выбрана: <span className="font-semibold text-[#004B62]">{context.category}</span>
        </p>
        <p className="mt-3 font-body text-[0.95rem] leading-[1.35] text-[#3b3b3b]">
          Результат будет ориентировочным и может измениться после замера на объекте.
        </p>

        <div className="mt-5 rounded-[0.875rem] bg-[#f4f9fb] p-4">
          <p className="font-body text-[0.875rem] leading-[1.35] text-[#1f3e49]">
            Следующий шаг: уточним 2-3 базовых параметра и сразу покажем предварительную стоимость.
          </p>
        </div>

        <button
          className="mt-6 inline-flex h-[3.125rem] w-full items-center justify-center rounded-[0.9375rem] bg-[#004B62] px-6 py-3 font-body text-[1rem] font-medium leading-[1] text-white transition-colors hover:bg-[#00384a]"
          onClick={onClose}
          type="button"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
