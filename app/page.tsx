'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ServicesSection, ServiceItem } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { BeliefBanner } from '../components/BeliefBanner';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';

import { EnquiryModal } from '../components/EnquiryModal';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { WhatsAppDrawer } from '../components/WhatsAppDrawer';
import { AboutModal } from '../components/AboutModal';
import { ResourcesModal } from '../components/ResourcesModal';
import { FaqModal } from '../components/FaqModal';
import { ContactModal } from '../components/ContactModal';
import { LegalModal } from '../components/LegalModal';

export default function Home() {
  // Modal state management
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedEnquiryCategory, setSelectedEnquiryCategory] = useState<string>('Individual Assistance');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [whatsAppDrawerOpen, setWhatsAppDrawerOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [resourcesModalOpen, setResourcesModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleOpenEnquiry = (category?: string) => {
    if (category) {
      setSelectedEnquiryCategory(category);
    }
    setEnquiryModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleViewAllServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#222222] font-sans antialiased selection:bg-[#E2DDD5] selection:text-black">
      {/* 1. Header Navigation with Language Switcher and Smooth Underline */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenResources={() => setResourcesModalOpen(true)}
        onOpenFaq={() => setFaqModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenHowItWorks={() => {
          const el = document.getElementById('how-it-works');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections exactly reflecting DESIGN.jpeg */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry('Individual Assistance')}
          onOpenLocationInfo={() => setContactModalOpen(true)}
        />

        {/* 3. Our Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onViewAllServices={handleViewAllServices}
        />

        {/* 4. How It Works Section */}
        <ProcessSection
          onKnowMore={() => setFaqModalOpen(true)}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 5. Why Choose CASE SUNO Section */}
        <WhyChooseSection />

        {/* 6. Dark Statement Banner / Our Belief */}
        <BeliefBanner onOurStory={() => setAboutModalOpen(true)} />

        {/* 7. CTA / Have a Question? Section */}
        <CtaSection
          onStartEnquiry={() => handleOpenEnquiry()}
          onOpenWhatsApp={() => setWhatsAppDrawerOpen(true)}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenResources={() => setResourcesModalOpen(true)}
        onOpenFaq={() => setFaqModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Working Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialCategory={selectedEnquiryCategory}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartEnquiry={(serviceTitle) => {
          setSelectedService(null);
          handleOpenEnquiry(serviceTitle);
        }}
      />

      <WhatsAppDrawer
        isOpen={whatsAppDrawerOpen}
        onClose={() => setWhatsAppDrawerOpen(false)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onStartEnquiry={() => {
          setAboutModalOpen(false);
          handleOpenEnquiry();
        }}
      />

      <ResourcesModal
        isOpen={resourcesModalOpen}
        onClose={() => setResourcesModalOpen(false)}
        onStartEnquiry={() => {
          setResourcesModalOpen(false);
          handleOpenEnquiry('Documentation Help');
        }}
      />

      <FaqModal
        isOpen={faqModalOpen}
        onClose={() => setFaqModalOpen(false)}
        onStartEnquiry={() => {
          setFaqModalOpen(false);
          handleOpenEnquiry();
        }}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onStartEnquiry={() => {
          setContactModalOpen(false);
          handleOpenEnquiry();
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
