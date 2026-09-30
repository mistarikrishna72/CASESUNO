import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  detail: string;
  deliverables: string[];
}

interface ProcessSectionProps {
  onKnowMore: () => void;
  onOpenEnquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onKnowMore,
  onOpenEnquiry,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const steps = t.process.steps;

  const isIndianLanguage = language === "gu" || language === "hi";

  /*
   * Reusable Step Card
   * Keeps the actual card design the same across all breakpoints.
   */
  const renderStepCard = (item: ProcessStep, idx: number) => {
    const isSelected = activeStep === idx;

    return (
      <div
        key={`${item.step}-${idx}`}
        onClick={() => setActiveStep(isSelected ? null : idx)}
        className={`flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer group transition-all duration-200 p-4 rounded-md ${
          isSelected
            ? "bg-white shadow-xs border border-[#DFD9CE]"
            : "hover:bg-black/[0.02] border border-transparent"
        }`}
      >
        {/* Step Number */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium mb-4 sm:mb-5 transition-all duration-200 ${
            isSelected
              ? "bg-[#1F1E1B] text-white ring-4 ring-[#E5DFC4]"
              : "bg-[#988C78] text-[#FDFCFB] group-hover:bg-[#1F1E1B] group-hover:text-white"
          }`}
        >
          <span>{item.step}</span>
        </div>

        {/* Step Title */}
        <h3
          className={`text-base sm:text-lg font-medium text-[#1E1D1A] mb-2 group-hover:text-black ${
            isIndianLanguage
              ? "font-sans font-semibold"
              : "font-serif"
          }`}
        >
          {item.title}
        </h3>

        {/* Step Description */}
        <p className="text-[12.5px] text-[#6B655B] leading-relaxed max-w-[260px] lg:max-w-[220px]">
          {item.desc}
        </p>

        {/* Inspect Text */}
        <span className="mt-3 text-[11px] font-medium text-[#8F8778] group-hover:text-[#1E1D1A] transition-colors">
          {isSelected
            ? t.process.hideDetails
            : t.process.clickToInspect}
        </span>
      </div>
    );
  };

  /*
   * Mobile Detail
   * Used below an individual step on screens smaller than sm.
   */
  const renderMobileDetail = (item: ProcessStep) => {
    return (
      <div className="w-full p-5 bg-white border border-[#DFD9CE] rounded-sm shadow-xs">
        <div className="space-y-4">
          {/* Step Label */}
          <div className="text-xs font-semibold text-[#806B49] uppercase tracking-wider">
            Step {item.step} {t.process.deepDive} · {item.title}
          </div>

          {/* Heading */}
          <h4
            className={`text-xl text-[#1E1D1A] ${
              isIndianLanguage
                ? "font-sans font-semibold"
                : "font-serif"
            }`}
          >
            {t.process.howWeHandle} {item.title}
          </h4>

          {/* Description */}
          <p className="text-sm text-[#5C564C] leading-relaxed">
            {item.detail}
          </p>

          {/* Deliverables */}
          <div>
            <span className="text-xs font-semibold text-[#1F1E1B] uppercase tracking-wider block mb-2">
              {t.process.keyDeliverables}
            </span>

            <div className="grid grid-cols-1 gap-2">
              {item.deliverables.map((deliverable, i) => (
                <div
                  key={`${item.step}-mobile-deliverable-${i}`}
                  className="flex items-center gap-2 p-2 bg-[#FAF9F6] border border-[#EBE7DF] rounded-xs text-xs text-[#3A3834]"
                >
                  <Check className="w-3.5 h-3.5 text-[#6D8A68] shrink-0" />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="flex-1 px-4 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm"
            >
              {t.process.startStep1}
            </button>

            <button
              type="button"
              onClick={() => setActiveStep(null)}
              className="px-4 py-2.5 text-xs text-[#706B62] hover:text-black border border-[#D9D3C7] rounded-sm"
            >
              {t.process.closeStep}
            </button>
          </div>
        </div>
      </div>
    );
  };

  /*
   * Desktop Detail Drawer
   * Used only on lg+ screens.
   */
  const renderDesktopDetail = () => {
    if (activeStep === null) return null;

    const item = steps[activeStep];

    return (
      <div
        className={`hidden lg:block overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${
          activeStep !== null
            ? "max-h-[1000px] opacity-100 mt-8"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="p-5 sm:p-8 bg-white border border-[#DFD9CE] rounded-sm shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            {/* Detail Content */}
            <div className="max-w-2xl space-y-3">
              {/* Step Label */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#806B49] uppercase tracking-wider">
                <span>
                  Step {item.step} {t.process.deepDive}
                </span>

                <span>·</span>

                <span>{item.title}</span>
              </div>

              {/* Heading */}
              <h4
                className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                  isIndianLanguage
                    ? "font-sans font-semibold"
                    : "font-serif"
                }`}
              >
                {t.process.howWeHandle} {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-[#5C564C] leading-relaxed">
                {item.detail}
              </p>

              {/* Deliverables */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#1F1E1B] uppercase tracking-wider block mb-2">
                  {t.process.keyDeliverables}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.deliverables.map((deliverable, i) => (
                    <div
                      key={`${item.step}-desktop-deliverable-${i}`}
                      className="flex items-center gap-2 p-2 bg-[#FAF9F6] border border-[#EBE7DF] rounded-xs text-xs text-[#3A3834]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#6D8A68] shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row md:flex-col gap-2.5 shrink-0 pt-2 md:pt-0">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="flex-1 md:flex-none px-5 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm text-center"
              >
                {t.process.startStep1}
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(null)}
                className="flex-1 md:flex-none px-4 py-2 text-xs text-[#706B62] hover:text-black border border-[#D9D3C7] rounded-sm text-center"
              >
                {t.process.closeStep}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /*
   * Split steps into groups of 2.
   *
   * This is specifically for the sm -> lg layout.
   *
   * Example:
   *
   * [1, 2]
   * [3, 4]
   * [5]
   *
   * This lets the detail panel span the entire row.
   */
  const tabletRows: ProcessStep[][] = [];

  for (let i = 0; i < steps.length; i += 2) {
    tabletRows.push(steps.slice(i, i + 2));
  }

  return (
    <section
      id="how-it-works"
      className="w-full py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-t border-[#E8E4DB]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div className="max-w-xl space-y-3">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
              <span
                className="w-6 h-[1.5px] bg-[#8C8479]"
                aria-hidden="true"
              />

              <span>{t.process.kicker}</span>
            </div>

            {/* Heading */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.65rem] font-medium text-[#1E1D1A] leading-tight tracking-tight ${
                isIndianLanguage
                  ? "font-sans font-semibold"
                  : "font-serif"
              }`}
            >
              {t.process.title}{" "}
              <br className="hidden sm:inline" />
              {t.process.titleSub}
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-[13.5px] text-[#635E56] leading-relaxed">
              {t.process.desc}
            </p>

            <div>
              <button
                type="button"
                onClick={onKnowMore}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1E1B] hover:text-[#57534D] transition-colors group cursor-pointer"
              >
                <span>{t.process.knowMore}</span>

                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* PROCESS STEPS */}
        {/* ================================================== */}
        <div className="relative">
          {/* Desktop Connector */}
          <div
            className="hidden lg:block absolute top-5 left-[5%] right-[5%] h-[1.5px] bg-[#DED8CC] -z-0"
            aria-hidden="true"
          />

          {/* ================================================== */}
          {/* MOBILE - 1 COLUMN */}
          {/* < 640px */}
          {/* ================================================== */}
          <div className="sm:hidden flex flex-col gap-6 relative z-10">
            {steps.map((item, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div key={`${item.step}-mobile`} className="w-full">
                  {renderStepCard(item, idx)}

                  {/* Inline detail directly under clicked step */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${
                      isSelected
                        ? "max-h-[2000px] opacity-100 mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    {renderMobileDetail(item)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================================================== */}
          {/* TABLET - 2 COLUMNS */}
          {/* 640px -> 1023px */}
          {/* ================================================== */}
          <div className="hidden sm:block lg:hidden relative z-10">
            <div className="flex flex-col gap-6">
              {tabletRows.map((row, rowIndex) => {
                const rowStartIndex = rowIndex * 2;

                return (
                  <div
                    key={`tablet-row-${rowIndex}`}
                    className="grid grid-cols-2 gap-6"
                  >
                    {/* Step cards */}
                    {row.map((item, columnIndex) => {
                      const actualIndex =
                        rowStartIndex + columnIndex;

                      return (
                        <div
                          key={`${item.step}-tablet`}
                          className="min-w-0"
                        >
                          {renderStepCard(item, actualIndex)}
                        </div>
                      );
                    })}

                    {/* Full-width detail for the active step in THIS row */}
                    {activeStep !== null &&
                      activeStep >= rowStartIndex &&
                      activeStep < rowStartIndex + row.length && (
                        <div
                          className={`col-span-2 overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${
                            activeStep !== null
                              ? "max-h-[2000px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {renderMobileDetail(
                            steps[activeStep]
                          )}
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* DESKTOP - 5 COLUMNS */}
          {/* 1024px+ */}
          {/* ================================================== */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
            {steps.map((item, idx) =>
              renderStepCard(item, idx)
            )}
          </div>

          {/* ================================================== */}
          {/* DESKTOP DETAIL DRAWER */}
          {/* ================================================== */}
          {renderDesktopDetail()}
        </div>
      </div>
    </section>
  );
};
