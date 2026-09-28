import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Instagram, Youtube, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenResources: () => void;
  onOpenFaq: () => void;
  onOpenContact: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onOpenResources,
  onOpenFaq,
  onOpenContact,
  onOpenLegal,
}) => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#FAF9F6] text-[#3E3A33] pt-12 sm:pt-14 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#E8E4DB]">
          {/* Brand Wordmark */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <img src="/logo.svg" alt="CASE SUNO Logo" className="h-15  w-auto" />
          </div>

          {/* Navigation Links Mirror */}
          <nav
            className="flex flex-wrap items-center gap-5 sm:gap-7 text-[13px] font-medium text-[#524D45]"
            aria-label="Footer Navigation"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.services}
            </button>
            <button
              onClick={onOpenAbout}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.about}
            </button>
            <button
              onClick={onOpenResources}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.resources}
            </button>
            <button
              onClick={onOpenFaq}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={onOpenContact}
              className="nav-link-underline hover:text-[#1A1917] transition-colors py-1 cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#EFECE5] hover:bg-[#1E1D1A] hover:text-white text-[#4A463E] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#EFECE5] hover:bg-[#1E1D1A] hover:text-white text-[#4A463E] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#EFECE5] hover:bg-[#1E1D1A] hover:text-white text-[#4A463E] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11.5px] text-[#787268] tabular-nums">
              {t.footer.rights}
            </p>
          </div>
        </div>

        {/* Bottom Sub-Row: Legal Notices & Regional Marker */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#787268]">
          {/* Legal Links */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#1A1917] transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#1A1917] transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-[#1A1917] transition-colors cursor-pointer"
            >
              {t.footer.disclaimer}
            </button>
          </div>

          {/* Regional Trust Marker */}
          <div className="flex items-center gap-2 text-left sm:text-right">
            Online & Appointment-Based Assistance
          </div>
        </div>
      </div>
    </footer>
  );
};
