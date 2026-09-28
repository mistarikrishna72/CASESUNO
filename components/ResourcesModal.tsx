import React, { useState } from 'react';
import { X, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEnquiry: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({
  isOpen,
  onClose,
  onStartEnquiry,
}) => {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  if (!isOpen) return null;

  const checklists = [
    {
      id: 'property',
      title: isGu
        ? 'મિલકત અને જમીન ટાઇટલ ચકાસણી ચેકલિસ્ટ'
        : isHi
        ? 'संपत्ति एवं भूमि टाइटल सत्यापन चेकलिस्ट'
        : 'Property & Land Title Verification Checklist',
      category: isGu ? 'દસ્તાવેજીકરણ' : isHi ? 'दस्तावेज़ीकरण' : 'Documentation',
      pages: isGu ? '૪ પાના' : isHi ? '४ पृष्ठ' : '4 Pages',
      desc: isGu
        ? '૭/૧૨ ના ઉતારા, ઈન્ડેક્સ-૨, મ્યુનિસિપલ વેરા બિલ, બોજા મુક્તિ પ્રમાણપત્ર અને હક્કપત્રક નોંધોની સંપૂર્ણ યાદી.'
        : isHi
        ? '७/१२ उद्धरण, इंडेक्स-२, नगर निगम कर रसीदें, भारमुक्ति प्रमाणपत्र और दाखिल-खारिज प्रविष्टियों की संपूर्ण सूची।'
        : 'Complete index of 7/12 extracts, index-II, municipal taxes, non-encumbrance certificates, and mutation entries required before purchasing or settling property.',
    },
    {
      id: 'legal-notice',
      title: isGu
        ? 'કાનૂની નોટિસ મળવા પર શું કરવું અને શું ન કરવું'
        : isHi
        ? 'कानूनी नोटिस प्राप्त होने पर क्या करें और क्या न करें'
        : 'Guide to Receiving a Legal Notice: Do’s & Don’ts',
      category: isGu ? 'વ્યક્તિગત સહાય' : isHi ? 'व्यक्तिगत सहायता' : 'Individual Assistance',
      pages: isGu ? '૩ પાના' : isHi ? '३ पृष्ठ' : '3 Pages',
      desc: isGu
        ? 'સમયમર્યાદા, પોસ્ટ કવર સાચવવું, આવેશમાં જવાબ ન આપવો અને વકીલ માટે મુદ્દાસર હકીકતો તૈયાર કરવાની માર્ગદર્શિકા.'
        : isHi
        ? 'समयसीमा का ध्यान, डाक लिफाफा संभालना, जल्दबाजी में उत्तर न देना और वकील के लिए बिंदुवार तथ्य तैयार करना।'
        : 'Step-by-step checklist on timelines, preserved envelopes, avoiding emotional responses, and preparing structured factual points for legal reply.',
    },
    {
      id: 'msme-recovery',
      title: isGu
        ? 'MSME વેપારી પેમેન્ટ રિકવરી ફ્રેમવર્ક'
        : isHi
        ? 'MSME विक्रेता भुगतान वसूली रूपरेखा'
        : 'MSME Vendor Payment Recovery Framework',
      category: isGu ? 'વ્યવસાય સહાય' : isHi ? 'व्यापार सहायता' : 'Business Support',
      pages: isGu ? '૫ પાના' : isHi ? '५ पृष्ठ' : '5 Pages',
      desc: isGu
        ? 'વાણિજ્યિક ઇન્વોઇસ, ઇ-વે બિલ, MSME સમાધાન પોર્ટલ અરજી અને વ્યાજ ગણતરી માટેનું સંગઠિત માળખું.'
        : isHi
        ? 'वाणिज्यिक चालान (Invoice), ई-वे बिल, MSME समाधान पोर्टल पर आवेदन और वैधानिक ब्याज गणना की मार्गदर्शिका।'
        : 'Documentation structure for commercial invoices, e-way bills, MSME Samadhaan conciliation filing requirements, and statutory interest calculations.',
    },
    {
      id: 'family-settlement',
      title: isGu
        ? 'કૌટુંબિક મિલકત વહેંચણી અને ઈન્વેન્ટરી શીટ'
        : isHi
        ? 'पारिवारिक संपत्ति विभाजन एवं इन्वेंट्री प्रारूप'
        : 'Family Asset Division & Settlement Inventory Sheet',
      category: isGu ? 'વારસાઈ અને મિલકત' : isHi ? 'पारिवारिक एवं वसीयत' : 'Family & Estate',
      pages: isGu ? '૬ પાના' : isHi ? '६ पृष्ठ' : '6 Pages',
      desc: isGu
        ? 'જંગમ, સ્થાવર અને નાણાકીય અસ્કયામતોની વ્યવસ્થિત નોંધણી જેથી કૌટુંબિક વિવાદો ટાળી શકાય.'
        : isHi
        ? 'चल, अचल और वित्तीय संपत्तियों की पारदर्शी सूची जिससे पारिवारिक मतभेदों को शांतिपूर्ण ढंग से सुलझाया जा सके।'
        : 'A calm, structured template to catalog movable, immovable, and digital assets with clear documentation proof to avert contentious disputes.',
    },
  ];

  const handleSimulatedDownload = (title: string) => {
    setDownloadedItem(title);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#DDD6C8] rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E8E4DB] bg-white">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C8479] uppercase block">
              {isGu ? 'જ્ઞાન ભંડાર અને માર્ગદર્શિકા' : isHi ? 'ज्ञान भंडार और चेकलिस्ट्स' : 'Knowledge Repository'}
            </span>
            <h3
              className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {isGu ? 'રિસોર્સિસ અને ચેકલિસ્ટ્સ' : isHi ? 'संसाधन और चेकलिस्ट्स' : 'Resources & Checklists'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6B655B] hover:text-black hover:bg-[#F2EFE9] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-[#5C564C] leading-relaxed">
            {isGu
              ? 'વ્યાવસાયિકો પાસે જતાં પહેલાં તમારી હકીકતો વ્યવસ્થિત કરવા માટે CASE SUNO દ્વારા તૈયાર કરાયેલ મફત ચેકલિસ્ટ્સ.'
              : isHi
              ? 'विशेषज्ञों के पास जाने से पहले अपने तथ्यों और कागजातों को व्यवस्थित करने के लिए CASE SUNO द्वारा तैयार निःशुल्क चेकलिस्ट्स।'
              : 'Free, practical checklists and preparation toolkits prepared by CASE SUNO to help you organize facts before consulting professionals.'}
          </p>

          {downloadedItem && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isGu
                  ? `“${downloadedItem}” ડાઉનલોડ માટે તૈયાર છે.`
                  : isHi
                  ? `“${downloadedItem}” डाउनलोड के लिए तैयार है।`
                  : `“${downloadedItem}” prepared for viewing and download.`}
              </span>
            </div>
          )}

          <div className="space-y-3 pt-1">
            {checklists.map((res) => (
              <div
                key={res.id}
                className="p-4 bg-white border border-[#E8E4DB] rounded-sm hover:border-[#BFB6A6] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
              >
                <div className="space-y-1 max-w-md">
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-[#8C8479] uppercase tracking-wider">
                    <span>{res.category}</span>
                    <span>·</span>
                    <span>{res.pages}</span>
                  </div>
                  <h4
                    className={`text-sm sm:text-base text-[#1E1D1A] font-medium ${
                      isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                    }`}
                  >
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#6B655B] leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => handleSimulatedDownload(res.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 border border-[#D9D3C7] hover:border-[#1E1D1A] text-xs font-medium text-[#1E1D1A] rounded-sm transition-colors cursor-pointer bg-white"
                  >
                    <Download className="w-3.5 h-3.5 text-[#6B6459]" />
                    <span>{isGu ? 'PDF મેળવો' : isHi ? 'PDF प्राप्त करें' : 'Get PDF'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#E0D9CB] rounded-sm text-xs text-[#524C41] mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <span>
              {isGu
                ? 'કસ્ટમ દસ્તાવેજ સમીક્ષા અથવા વ્યક્તિગત કેસ ફાઇલની જરૂર છે?'
                : isHi
                ? 'कस्टम दस्तावेज समीक्षा या व्यक्तिगत केस फाइल की आवश्यकता है?'
                : 'Need a custom document review or personalized dossier?'}
            </span>
            <button
              onClick={() => {
                onClose();
                onStartEnquiry();
              }}
              className="text-[#1E1D1A] font-semibold hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>{isGu ? 'પૂછપરછ કરો' : isHi ? 'पूछताछ करें' : 'Request Intake'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-[#E8E4DB] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-[#1F1E1B] text-white text-xs font-medium rounded-sm cursor-pointer"
          >
            {isGu ? 'બંધ કરો' : isHi ? 'बंद करें' : 'Close Resources'}
          </button>
        </div>
      </div>
    </div>
  );
};
