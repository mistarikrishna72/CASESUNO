import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenEnquiry: (serviceCategory?: string) => void;
  onOpenAbout: () => void;
  onOpenResources: () => void;
  onOpenFaq: () => void;
  onOpenContact: () => void;
  onOpenHowItWorks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEnquiry,
  onOpenAbout,
  onOpenResources,
  onOpenFaq,
  onOpenContact,
  onOpenHowItWorks,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getMobileLangLabel = () => {
    if (language === 'en') return 'EN';
    if (language === 'hi') return 'हिं';
    return 'ગુજ';
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#E8E4DB]'
          : 'bg-[#FAF9F6] border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black/50 rounded-sm shrink-0"
          aria-label="CASE SUNO Home"
        >
          <img src="/logo.png" alt="CASE SUNO Logo" className="h-20  w-auto" />
        </a>

        {/* Zone 2: Desktop Navigation Links with Smooth Animated Underlines */}
        <nav
          className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[13.5px] font-medium text-[#4A4742]"
          aria-label="Primary Navigation"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="nav-link-underline text-[#1A1917] font-semibold transition-colors py-1 cursor-pointer"
          >
            {t.nav.home}
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}
            className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
          >
            {t.nav.services}
          </a>
          <button
            onClick={onOpenAbout}
            className="nav-link-underline hover:text-[#1A1917] transition-colors text-left py-1 cursor-pointer"
          >
            {t.nav.about}
          </button>
          <button
            onClick={onOpenResources}
            className="nav-link-underline hover:text-[#1A1917] transition-colors text-left py-1 cursor-pointer"
          >
            {t.nav.resources}
          </button>
          <button
            onClick={onOpenFaq}
            className="nav-link-underline hover:text-[#1A1917] transition-colors text-left py-1 cursor-pointer"
          >
            {t.nav.faq}
          </button>
          <button
            onClick={onOpenContact}
            className="nav-link-underline hover:text-[#1A1917] transition-colors text-left py-1 cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Zone 3: 3-Way Language Switcher & Primary Action */}
        <div className="hidden xl:flex items-center gap-2.5 md:gap-3.5 shrink-0">
          {/* Segmented Control for English, Hindi, Gujarati */}
          <div
            className="inline-flex items-center p-0.5 rounded-full border border-[#DCD6C9] bg-[#F1ECE1] shadow-2xs select-none"
            role="group"
            aria-label="Language selection"
          >
            <div className="pl-2 pr-1 text-[#7A7468]">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#1F1E1B] text-white shadow-xs'
                  : 'text-[#635E56] hover:text-[#1E1D1A]'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'hi'
                  ? 'bg-[#1F1E1B] text-white shadow-xs'
                  : 'text-[#635E56] hover:text-[#1E1D1A]'
              }`}
              aria-pressed={language === 'hi'}
            >
              हिंदी
            </button>
            <button
              type="button"
              onClick={() => setLanguage('gu')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'gu'
                  ? 'bg-[#1F1E1B] text-white shadow-xs'
                  : 'text-[#635E56] hover:text-[#1E1D1A]'
              }`}
              aria-pressed={language === 'gu'}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-[13px] font-medium tracking-wide rounded-sm transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer group"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">

          {/* Quick cycle button */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-[11px] font-semibold border border-[#D9D3C7] bg-[#F4EFE6] text-[#222] rounded-full active:scale-95 transition-transform flex items-center gap-1"
            aria-label="Switch language"
          >
            <Globe className="w-3 h-3 text-[#777]" />
            <span>{getMobileLangLabel()}</span>
          </button>

          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center px-3 py-1.5 bg-[#1F1E1B] text-white text-xs font-medium rounded-sm"
          >
            {t.nav.getStarted}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#2C2A26] hover:text-black focus:outline-hidden rounded-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#E8E4DB] bg-[#FAF9F6] px-5 sm:px-6 py-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200 shadow-md">
          {/* Mobile 3-Way Language Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-[#F1EDE4] rounded-md border border-[#DDD6C8] gap-2.5">
            <span className="text-xs font-medium text-[#575249] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#7A7468]" />
              <span>Language / भाषा / ભાષા</span>
            </span>
            <div className="flex items-center gap-1 bg-[#E4DDD0] p-1 rounded-full justify-between sm:justify-start">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex-1 sm:flex-none px-3 py-1 text-xs font-semibold rounded-full transition-colors text-center ${
                  language === 'en' ? 'bg-[#1E1D1A] text-white shadow-2xs' : 'text-[#5C564C]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`flex-1 sm:flex-none px-3 py-1 text-xs font-semibold rounded-full transition-colors text-center ${
                  language === 'hi' ? 'bg-[#1E1D1A] text-white shadow-2xs' : 'text-[#5C564C]'
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setLanguage('gu')}
                className={`flex-1 sm:flex-none px-3 py-1 text-xs font-semibold rounded-full transition-colors text-center ${
                  language === 'gu' ? 'bg-[#1E1D1A] text-white shadow-2xs' : 'text-[#5C564C]'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium text-[#4A4742]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-1.5 text-[#1A1917] font-semibold border-b border-[#F0EBE0]"
            >
              {t.nav.home}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="py-1.5 hover:text-[#1A1917] border-b border-[#F0EBE0]"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="py-1.5 hover:text-[#1A1917] border-b border-[#F0EBE0]"
            >
              {t.nav.services}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="py-1.5 text-left hover:text-[#1A1917] border-b border-[#F0EBE0]"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResources();
              }}
              className="py-1.5 text-left hover:text-[#1A1917] border-b border-[#F0EBE0]"
            >
              {t.nav.resources}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFaq();
              }}
              className="py-1.5 text-left hover:text-[#1A1917] border-b border-[#F0EBE0]"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="py-1.5 text-left hover:text-[#1A1917]"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E4DB]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1F1E1B] text-white text-sm font-medium rounded-sm"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
