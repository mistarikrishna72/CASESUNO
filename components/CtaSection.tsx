import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CtaSectionProps {
  onStartEnquiry: () => void;
  onOpenWhatsApp: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onStartEnquiry,
  onOpenWhatsApp,
}) => {
  const { t, language } = useLanguage();

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E8E4DB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, description, and dual CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Kicker */}
            <div className="text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
              {t.cta.kicker}
            </div>

            {/* Headline */}
            <h2
              className={`text-2xl sm:text-4xl lg:text-[3.25rem] font-medium text-[#1E1D1A] leading-[1.14] tracking-tight ${
                language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {t.cta.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-base text-[#57534D] leading-relaxed max-w-lg">
              {t.cta.desc}
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onStartEnquiry}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-[13.5px] font-medium tracking-wide rounded-sm transition-all duration-200 active:scale-[0.98] shadow-xs group cursor-pointer"
              >
                <span>{t.cta.startEnquiry}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#1F5C50] hover:text-[#fff] text-[#1E1D1A] border border-[#D9D3C7] text-[13.5px] font-medium tracking-wide rounded-sm transition-all duration-200 active:scale-[0.98] shadow-2xs group cursor-pointer"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.49 0 .16 5.33.16 11.88c0 2.09.55 4.13 1.6 5.92L.05 24l6.35-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.41-8.41Zm-8.47 18.32h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.9 9.9 0 1 1 8.39 4.65Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                    />
                  </svg>
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
            </div>
          </div>

          {/* Right Column: Architectural Image Asset with Inset Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[280px] sm:h-[380px] rounded-lg overflow-hidden border border-[#E3DED4] shadow-xs bg-[#e7e6ef]">
              <img
                src="/images/footer-bg.webp"
                alt="CASE SUNO Architectural Sanctuary and Consultation Guidance"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Gentle scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
