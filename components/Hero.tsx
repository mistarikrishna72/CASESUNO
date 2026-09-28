import React from 'react';
import { ArrowRight, ShieldCheck, CheckSquare, Calendar, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenEnquiry: () => void;
  onOpenLocationInfo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onOpenLocationInfo }) => {
  const { t, language } = useLanguage();

  return (
   <section
  id="home"
  className="relative w-full pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-red-300"
  style={{
    backgroundImage: 'url("/images/hero-bg.webp")',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between pt-1 lg:pt-4">
            <div className="space-y-5 sm:space-y-6">
              {/* Kicker Tag */}
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
                <span className="w-6 h-[1.5px] bg-[#8C8479]" aria-hidden="true" />
                <span>{t.hero.kicker}</span>
              </div>

              {/* Dominant Headline (Refined Serif, optimized for English & Gujarati) */}
              <h1
                className={`text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-medium leading-[1.12] text-[#1E1D1A] tracking-tight text-balance ${
                  language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
                }`}
              >
                {t.hero.titleLine1} <br />
                {t.hero.titleLine2} <br />
                {t.hero.titleLine3} <br />
                {t.hero.titleLine4}
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[14.5px] sm:text-base text-[#57534D] leading-relaxed max-w-lg">
                {t.hero.desc}
              </p>

              {/* Primary Action Button */}
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-[14px] font-medium tracking-wide rounded-sm transition-all duration-200 active:scale-[0.98] shadow-sm group cursor-pointer"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom Left Trust Badges Row */}
            <div className="pt-8 sm:pt-12 lg:pt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-2 pt-6 border-t border-[#E8E4DB]">
                {/* Badge 1 */}
                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-[#F4F1EA] flex items-center justify-center shrink-0 text-[#6B6459]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeConfidential}
                    </span>
                    <span className="block text-xs text-[#787268] leading-tight">
                      {t.hero.badgeConfidentialSub}
                    </span>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-[#F4F1EA] flex items-center justify-center shrink-0 text-[#6B6459]">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeTransparent}
                    </span>
                    <span className="block text-xs text-[#787268] leading-tight">
                      {t.hero.badgeTransparentSub}
                    </span>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-[#F4F1EA] flex items-center justify-center shrink-0 text-[#6B6459]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeOnline}
                    </span>
                    <span className="block text-xs text-[#787268] leading-tight">
                      {t.hero.badgeOnlineSub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Atmosphere */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex flex-col">
          

            {/* Bottom Right Regional Trust Marker */}
            <div className="mt-3.5 flex justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
