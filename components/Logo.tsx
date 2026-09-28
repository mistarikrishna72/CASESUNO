import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', theme = 'light', size = 'md' }) => {
  const isDark = theme === 'dark';
  const { language } = useLanguage();

  const textSize = size === 'sm' ? 'text-base sm:text-lg' : size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl';
  const subSize = size === 'sm' ? 'text-[7.5px] sm:text-[8px] tracking-[0.2em]' : size === 'lg' ? 'text-[10px] sm:text-[11px] tracking-[0.22em]' : 'text-[8.5px] sm:text-[9.5px] tracking-[0.2em]';
  const circleSize = size === 'sm' ? 'w-3 h-3 sm:w-3.5 sm:h-3.5' : size === 'lg' ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4';

  const subText =
    language === 'gu'
      ? 'આગળ શું કરવું તે જાણો'
      : language === 'hi'
      ? 'आगे क्या करना है जानें'
      : 'KNOW WHAT TO DO NEXT.';

  return (
    <div className={`flex flex-col select-none group cursor-pointer ${className}`}>
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-serif font-bold tracking-tight ${textSize} ${
            isDark ? 'text-white' : 'text-[#1E1D1A]'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          CASE
        </span>
        {/* Emblem circle matching original design logo mark */}
        <div
          className={`relative flex items-center justify-center rounded-full border ${circleSize} ${
            isDark ? 'border-[#C8B89E] bg-[#C8B89E]/20' : 'border-[#9E8B6E] bg-[#F1ECE1]'
          }`}
        >
          <div
            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
              isDark ? 'bg-[#DFCDB4]' : 'bg-[#7A684C]'
            }`}
          />
        </div>
        <span
          className={`font-serif font-bold tracking-tight ${textSize} ${
            isDark ? 'text-white' : 'text-[#1E1D1A]'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          SUNO
        </span>
      </div>
      <span
        className={`font-sans font-medium uppercase mt-0.5 ${subSize} ${
          isDark ? 'text-neutral-400' : 'text-[#635E56]'
        }`}
      >
        {subText}
      </span>
    </div>
  );
};
