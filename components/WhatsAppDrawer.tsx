import React, { useState } from 'react';
import { X, Send, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  const defaultTopic = isGu
    ? 'સામાન્ય પરામર્શ'
    : isHi
    ? 'सामान्य परामर्श'
    : 'General Consultation';

  const [topic, setTopic] = useState(defaultTopic);
  const [customText, setCustomText] = useState(
    isGu
      ? 'નમસ્તે CASE SUNO, મેં તમારી વેબસાઇટ જોઈ છે અને મારી પરિસ્થિતિમાં આગળ શું કરવું તે અંગે મારે માર્ગદર્શન જોઈએ છે.'
      : isHi
      ? 'नमस्ते CASE SUNO, मैंने आपकी वेबसाइट देखी है और मुझे अपनी स्थिति में अगले कदम के संबंध में मार्गदर्शन चाहिए।'
      : 'Hello CASE SUNO, I saw your website and would like guidance on what step to take next regarding my situation.'
  );

  if (!isOpen) return null;

  const topics = isGu
    ? ['વ્યક્તિગત સહાય', 'વ્યવસાય સહાય', 'દસ્તાવેજીકરણ સહાય', 'કાનૂની નોટિસ સમીક્ષા', 'સામાન્ય પરામર્શ']
    : isHi
    ? ['व्यक्तिगत सहायता', 'व्यापार सहायता', 'दस्तावेज़ीकरण सहायता', 'कानूनी नोटिस समीक्षा', 'सामान्य परामर्श']
    : ['Individual Assistance', 'Business Support', 'Documentation Help', 'Legal Notice Review', 'General Consultation'];

  const handleLaunchWhatsApp = () => {
    const fullMsg = `*CASE SUNO Inquiry*\n*Topic:* ${topic}\n\n${customText}`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(fullMsg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-white border border-[#DDD6C8] rounded-md shadow-2xl overflow-hidden flex flex-col">
        {/* WhatsApp Brand Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 bg-[#075E54] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm leading-tight">CASE SUNO Support Desk</h3>
              <p className="text-[11px] text-[#A7D8CC]">
                {isGu ? 'ઓનલાઇન · થોડીવારમાં પ્રત્યુત્તર' : isHi ? 'ऑनलाइन · कुछ ही मिनटों में उत्तर' : 'Online · Replies within minutes'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Simulation Box */}
        <div className="p-4 sm:p-5 bg-[#ECE5DD] space-y-3.5 sm:space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Simulated Received Chat Message */}
          <div className="flex flex-col items-start max-w-[90%] sm:max-w-[85%]">
            <div className="p-3 bg-white rounded-lg rounded-tl-none shadow-xs text-xs text-[#2A2927] space-y-1.5 leading-relaxed">
              <p className="font-medium text-[#1E1D1A]">
                {isGu ? 'નમસ્તે 🙏 CASE SUNO માં આપનું સ્વાગત છે.' : isHi ? 'नमस्ते 🙏 CASE SUNO में आपका स्वागत है।' : 'Namaste 🙏 Welcome to CASE SUNO.'}
              </p>
              <p>
                {isGu
                  ? 'અમારા કેસ કોઓર્ડિનેટર આજે તમને કેવી રીતે મદદ કરી શકે? વિષય પસંદ કરો અને સીધા સંપર્કમાં આવો.'
                  : isHi
                  ? 'हमारे केस समन्वयक आज आपकी किस प्रकार सहायता कर सकते हैं? विषय चुनें और सीधे संपर्क करें।'
                  : 'How can our case coordinators assist you today? Please choose your topic and we will connect you directly.'}
              </p>
              <span className="text-[9px] text-[#8C8479] text-right block">
                {isGu ? 'હમણાં જ' : isHi ? 'अभी' : 'Just now'}
              </span>
            </div>
          </div>

          {/* Quick Preset Topics */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[#5A554D] uppercase tracking-wider block">
              {isGu ? 'ઝડપી વિષય પસંદ કરો:' : isHi ? 'त्वरित विषय चुनें:' : 'Quick Topic:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTopic(t);
                    setCustomText(
                      isGu
                        ? `નમસ્તે CASE SUNO, મારે ${t} અંગે માર્ગદર્શન જોઈએ છે. કૃપા કરીને આગળની પ્રક્રિયા જણાવો.`
                        : isHi
                        ? `नमस्ते CASE SUNO, मुझे ${t} के संबंध में मार्गदर्शन चाहिए। कृपया आगे की प्रक्रिया बताएं।`
                        : `Hello CASE SUNO, I need guidance regarding ${t}. Please let me know how we can proceed.`
                    );
                  }}
                  className={`px-2.5 py-1 text-[11px] rounded-full border transition-colors cursor-pointer ${
                    topic === t
                      ? 'bg-[#128C7E] text-white border-[#128C7E]'
                      : 'bg-white text-[#38352F] border-[#D1CBC0] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Input text */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[11px] font-semibold text-[#5A554D] uppercase tracking-wider block">
              {isGu ? 'સંદેશ પૂર્વાવલોકન:' : isHi ? 'संदेश पूर्वावलोकन:' : 'Message Preview:'}
            </label>
            <textarea
              rows={3}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-2.5 text-xs bg-white border border-[#C5BFA3] rounded-md text-[#1E1D1A] focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#5C564C]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#128C7E] shrink-0" />
            <span>
              {isGu
                ? 'સુરક્ષિત વોટ્સએપ એન્ડ-ટુ-એન્ડ એન્ક્રિપ્ટેડ ચેટ'
                : isHi
                ? 'सुरक्षित व्हाट्सएप एंड-टू-एंड एन्क्रिप्टेड चैट'
                : 'Direct WhatsApp end-to-end encrypted chat'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E4DB] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-3.5 py-2 text-xs text-[#6B655B] hover:text-black font-medium cursor-pointer"
          >
            {isGu ? 'રદ કરો' : isHi ? 'रद्द करें' : 'Cancel'}
          </button>

          <button
            onClick={handleLaunchWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isGu ? 'વોટ્સએપ ખોલો' : isHi ? 'व्हाट्सएप खोलें' : 'Open in WhatsApp'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
