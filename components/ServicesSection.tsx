import React from 'react';
import { ArrowRight, Users, Briefcase, FileText, Network, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  overview: string;
  whatWeDo: string[];
  commonSituations: string[];
  deliveryMode: string;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'individual-assistance': <Users className="w-5 h-5 text-[#38352F]" />,
  'business-support': <Briefcase className="w-5 h-5 text-[#38352F]" />,
  'documentation-help': <FileText className="w-5 h-5 text-[#38352F]" />,
  'professional-coordination': <Network className="w-5 h-5 text-[#38352F]" />,
  'ongoing-support': <Headphones className="w-5 h-5 text-[#38352F]" />,
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const { t, language } = useLanguage();

  const services: ServiceItem[] = t.services.items.map((item) => ({
    ...item,
    icon: serviceIcons[item.id] || <Users className="w-5 h-5 text-[#38352F]" />,
  }));

  return (
    <section id="services" className="w-full py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-t border-[#E8E4DB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-16">
          <div className="max-w-xl space-y-3">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#8C8479] uppercase">
              <span className="w-6 h-[1.5px] bg-[#8C8479]" aria-hidden="true" />
              <span>{t.services.kicker}</span>
            </div>
            {/* Heading */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.65rem] font-medium text-[#1E1D1A] leading-tight tracking-tight ${
                language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {t.services.title}
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-[13.5px] text-[#635E56] leading-relaxed">
              {t.services.desc}
            </p>
            <div>
              <button
                onClick={onViewAllServices}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1E1B] hover:text-[#57534D] transition-colors group cursor-pointer"
              >
                <span>{t.services.viewAll}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Column Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4.5">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group flex flex-col justify-between p-5 sm:p-5 lg:p-6 bg-white border border-[#E8E4DB] rounded-sm hover:border-[#BFB6A6] hover:shadow-md transition-all duration-200 cursor-pointer min-h-[250px] sm:min-h-[270px]"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-sm bg-[#F5F2EA] flex items-center justify-center mb-5 group-hover:bg-[#EBE5D8] transition-colors">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3
                  className={`text-base sm:text-lg lg:text-[18.5px] font-medium text-[#1E1D1A] leading-snug mb-2.5 ${
                    language === 'gu' || language === 'hi' ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[12.5px] text-[#6B655B] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-2 border-t border-[#F2EFE9] flex items-center justify-between text-xs font-medium text-[#1E1D1A] group-hover:text-[#806B49] transition-colors">
                <span>{t.services.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
