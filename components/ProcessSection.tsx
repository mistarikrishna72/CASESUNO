import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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

  return (
    <section id="how-it-works" className="w-full py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-t border-[#E8E4DB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div className="max-w-xl space-y-3">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
              <span className="w-6 h-[1.5px] bg-[#8C8479]" aria-hidden="true" />
              <span>{t.process.kicker}</span>
            </div>
            {/* Heading */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.65rem] font-medium text-[#1E1D1A] leading-tight tracking-tight ${
                language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {t.process.title} <br className="hidden sm:inline" />
              {t.process.titleSub}
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-[13.5px] text-[#635E56] leading-relaxed">
              {t.process.desc}
            </p>
            <div>
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1E1B] hover:text-[#57534D] transition-colors group cursor-pointer"
              >
                <span>{t.process.knowMore}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Process Steps Bar with Horizontal Connector */}
        <div className="relative">
          {/* Connector Line behind circles (desktop) */}
          <div
            className="hidden lg:block absolute top-5 left-[5%] right-[5%] h-[1.5px] bg-[#DED8CC] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  className={`flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer group transition-all duration-200 p-4 rounded-md ${
                    isSelected
                      ? 'bg-white shadow-xs border border-[#DFD9CE]'
                      : 'hover:bg-black/[0.02] border border-transparent'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium mb-4 sm:mb-5 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#1F1E1B] text-white ring-4 ring-[#E5DFC4]'
                        : 'bg-[#988C78] text-[#FDFCFB] group-hover:bg-[#1F1E1B] group-hover:text-white'
                    }`}
                  >
                    <span>{item.step}</span>
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`text-base sm:text-lg font-medium text-[#1E1D1A] mb-2 group-hover:text-black ${
                      language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[12.5px] text-[#6B655B] leading-relaxed max-w-[260px] lg:max-w-[220px]">
                    {item.desc}
                  </p>

                  <span className="mt-3 text-[11px] font-medium text-[#8F8778] group-hover:text-[#1E1D1A] transition-colors">
                    {isSelected ? t.process.hideDetails : t.process.clickToInspect}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Detail Drawer if clicked */}
        {activeStep !== null && (
          <div className="mt-8 sm:mt-10 p-5 sm:p-8 bg-white border border-[#DFD9CE] rounded-sm shadow-xs animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#806B49] uppercase tracking-wider">
                  <span>
                    Step {steps[activeStep].step} {t.process.deepDive}
                  </span>
                  <span>·</span>
                  <span>{steps[activeStep].title}</span>
                </div>
                <h4
                  className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                    language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {t.process.howWeHandle} {steps[activeStep].title}
                </h4>
                <p className="text-sm text-[#5C564C] leading-relaxed">
                  {steps[activeStep].detail}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#1F1E1B] uppercase tracking-wider block mb-2">
                    {t.process.keyDeliverables}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {steps[activeStep].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-[#FAF9F6] border border-[#EBE7DF] rounded-xs text-xs text-[#3A3834]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#6D8A68] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col gap-2.5 shrink-0 pt-2 md:pt-0">
                <button
                  onClick={onOpenEnquiry}
                  className="flex-1 md:flex-none px-5 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm text-center"
                >
                  {t.process.startStep1}
                </button>
                <button
                  onClick={() => setActiveStep(null)}
                  className="flex-1 md:flex-none px-4 py-2 text-xs text-[#706B62] hover:text-black border border-[#D9D3C7] rounded-sm text-center"
                >
                  {t.process.closeStep}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
