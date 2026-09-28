import React from 'react';
import { Shield, Scale, Laptop, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseSection: React.FC = () => {
  const { t, language } = useLanguage();

  const icons = [
    <Shield key="shield" className="w-6 h-6 text-[#3A362E]" />,
    <Scale key="scale" className="w-6 h-6 text-[#3A362E]" />,
    <Laptop key="laptop" className="w-6 h-6 text-[#3A362E]" />,
    <Users key="users" className="w-6 h-6 text-[#3A362E]" />,
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-t border-[#E8E4DB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-xl space-y-3">
            {/* Kicker */}
            <div className="text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
              {t.whyChoose.kicker}
            </div>
            {/* Heading */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.65rem] font-medium text-[#1E1D1A] leading-tight tracking-tight ${
                language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {t.whyChoose.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[13.5px] text-[#635E56] leading-relaxed">
              {t.whyChoose.desc}
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.whyChoose.pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col justify-start p-6 sm:p-6 lg:p-7 bg-white border border-[#E8E4DB] rounded-sm hover:border-[#BFB6A6] hover:shadow-xs transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#F5F2EA] flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                {icons[index % icons.length]}
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-medium text-[#1E1D1A] mb-2.5 ${
                  language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
                }`}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#635E56] leading-relaxed mb-3">
                {pillar.desc}
              </p>

              {/* Additional detail */}
              <p className="text-[12px] text-[#8C8479] leading-relaxed pt-2 border-t border-[#F5F2EB] mt-auto">
                {pillar.additional}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
