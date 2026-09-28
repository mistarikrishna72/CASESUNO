import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BeliefBannerProps {
  onOurStory: () => void;
}

export const BeliefBanner: React.FC<BeliefBannerProps> = ({ onOurStory }) => {
  const { t, language } = useLanguage();

  return (
    <section className="w-full bg-[#161513] text-[#FAF8F5] py-12 sm:py-16 lg:py-20 border-y border-[#262421] relative overflow-hidden">
      {/* Subtle organic texture glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(212, 196, 172, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
          {/* Left Title Area */}
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9E978C] uppercase block">
              {t.belief.kicker}
            </span>
            <h2
              className={`text-2xl sm:text-4xl lg:text-[3.25rem] font-medium text-white leading-tight tracking-tight ${
                language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {t.belief.title}
            </h2>
          </div>

          {/* Right Text & CTA */}
          <div className="max-w-lg space-y-5 sm:space-y-6">
            <p className="text-[14px] sm:text-base text-[#C2BCB2] leading-relaxed font-light">
              {t.belief.line1} <br />
              {t.belief.line2} <br />
              {t.belief.line3}
            </p>

            <div>
              <button
                onClick={onOurStory}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 border border-[#8C8476] hover:border-white text-white text-[13px] font-medium tracking-wide rounded-sm transition-all duration-200 hover:bg-white/5 active:scale-[0.98] group cursor-pointer"
              >
                <span>{t.belief.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
