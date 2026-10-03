import React, { useEffect, useState } from 'react';
import {
  X,
  Send,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type Language = 'en' | 'gu' | 'hi';

interface Topic {
  id: string;
  label: string;
  message: string;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();

  const getTopics = (): Topic[] => {
    if (language === 'gu') {
      return [
        {
          id: 'notice-summons-court-case',
          label: 'નોટિસ, સમન્સ અને કોર્ટ / કેસ',
          message:
            'નમસ્તે CASE SUNO, મને નોટિસ, સમન્સ અથવા કોર્ટ / કેસ સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'police-cyber-online-fraud',
          label: 'પોલીસ, સાયબર અને ઓનલાઈન ફ્રોડ',
          message:
            'નમસ્તે CASE SUNO, મને પોલીસ, સાયબર અથવા ઓનલાઈન ફ્રોડ સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'property-land',
          label: 'મિલકત અને જમીન',
          message:
            'નમસ્તે CASE SUNO, મને મિલકત અથવા જમીન સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'bank-loan-money-recovery',
          label: 'બેંક, લોન, પૈસા અને રિકવરી',
          message:
            'નમસ્તે CASE SUNO, મને બેંક, લોન, પૈસા અથવા રિકવરી સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'vehicle-rto',
          label: 'વાહન અને RTO',
          message:
            'નમસ્તે CASE SUNO, મને વાહન અથવા RTO સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'family-matters',
          label: 'પારિવારિક બાબતો',
          message:
            'નમસ્તે CASE SUNO, મને પારિવારિક બાબતમાં મદદ અથવા માર્ગદર્શન જોઈએ છે.',
        },
        {
          id: 'business-commercial',
          label: 'વ્યવસાય અને કોમર્શિયલ બાબતો',
          message:
            'નમસ્તે CASE SUNO, મને વ્યવસાય અથવા કોમર્શિયલ બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'consumer-insurance',
          label: 'ગ્રાહક અને વીમા',
          message:
            'નમસ્તે CASE SUNO, મને ગ્રાહક અથવા વીમા સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'documents-government-services',
          label: 'દસ્તાવેજો અને સરકારી સેવાઓ',
          message:
            'નમસ્તે CASE SUNO, મને દસ્તાવેજ અથવા સરકારી સેવા સંબંધિત બાબતમાં મદદ જોઈએ છે.',
        },
        {
          id: 'others',
          label: 'અન્ય',
          message: "Hello CASE SUNO, મારે એક બાબતે મદદ જોઈએ છે."
        },
      ];
    }

    if (language === 'hi') {
      return [
        {
          id: 'notice-summons-court-case',
          label: 'नोटिस, समन और कोर्ट / केस',
          message:
            'नमस्ते CASE SUNO, मुझे नोटिस, समन या कोर्ट / केस से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'police-cyber-online-fraud',
          label: 'पुलिस, साइबर और ऑनलाइन फ्रॉड',
          message:
            'नमस्ते CASE SUNO, मुझे पुलिस, साइबर या ऑनलाइन फ्रॉड से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'property-land',
          label: 'संपत्ति और भूमि',
          message:
            'नमस्ते CASE SUNO, मुझे संपत्ति या जमीन से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'bank-loan-money-recovery',
          label: 'बैंक, लोन, पैसा और रिकवरी',
          message:
            'नमस्ते CASE SUNO, मुझे बैंक, लोन, पैसे या रिकवरी से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'vehicle-rto',
          label: 'वाहन और RTO',
          message:
            'नमस्ते CASE SUNO, मुझे वाहन या RTO से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'family-matters',
          label: 'पारिवारिक मामले',
          message:
            'नमस्ते CASE SUNO, मुझे पारिवारिक मामले में मदद या मार्गदर्शन चाहिए।',
        },
        {
          id: 'business-commercial',
          label: 'व्यवसाय और कमर्शियल मामले',
          message:
            'नमस्ते CASE SUNO, मुझे व्यवसाय या कमर्शियल मामले में मदद चाहिए।',
        },
        {
          id: 'consumer-insurance',
          label: 'उपभोक्ता और बीमा',
          message:
            'नमस्ते CASE SUNO, मुझे उपभोक्ता या बीमा से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'documents-government-services',
          label: 'दस्तावेज और सरकारी सेवाएं',
          message:
            'नमस्ते CASE SUNO, मुझे दस्तावेज या सरकारी सेवा से जुड़े मामले में मदद चाहिए।',
        },
        {
          id: 'others',
          label: 'अन्य',
          message:
            'नमस्ते CASE SUNO, मुझे एक मामले में मदद चाहिए।',
        },
      ];
    }

    return [
      {
        id: 'notice-summons-court-case',
        label: 'Notice, Summons & Court / Case',
        message:
          'Hello CASE SUNO, I need help with a notice, summons, or court / case matter.',
      },
      {
        id: 'police-cyber-online-fraud',
        label: 'Police, Cyber & Online Fraud',
        message:
          'Hello CASE SUNO, I need help with a police, cyber, or online fraud matter.',
      },
      {
        id: 'property-land',
        label: 'Property & Land',
        message:
          'Hello CASE SUNO, I need help with a property or land matter.',
      },
      {
        id: 'bank-loan-money-recovery',
        label: 'Bank, Loan, Money & Recovery',
        message:
          'Hello CASE SUNO, I need help with a bank, loan, money, or recovery matter.',
      },
      {
        id: 'vehicle-rto',
        label: 'Vehicle & RTO',
        message:
          'Hello CASE SUNO, I need help with a vehicle or RTO matter.',
      },
      {
        id: 'family-matters',
        label: 'Family Matters',
        message:
          'Hello CASE SUNO, I need help or guidance with a family matter.',
      },
      {
        id: 'business-commercial',
        label: 'Business & Commercial Matters',
        message:
          'Hello CASE SUNO, I need help with a business or commercial matter.',
      },
      {
        id: 'consumer-insurance',
        label: 'Consumer & Insurance',
        message:
          'Hello CASE SUNO, I need help with a consumer or insurance matter.',
      },
      {
        id: 'documents-government-services',
        label: 'Documents & Government Services',
        message:
          'Hello CASE SUNO, I need help with a document or government service matter.',
      },
      {
        id: 'others',
        label: 'Others',
        message:
          'Hello CASE SUNO, I have a query and would like some help.',
      },
    ];
  };

  const topics = getTopics();

  const defaultTopic = topics[0];

  const [selectedTopicId, setSelectedTopicId] = useState(defaultTopic.id);
  const [customText, setCustomText] = useState(defaultTopic.message);

  /*
   * Reset the default topic/message whenever the language changes.
   * This prevents an English message from remaining after switching
   * the website to Gujarati or Hindi.
   */
  useEffect(() => {
    const firstTopic = getTopics()[0];

    setSelectedTopicId(firstTopic.id);
    setCustomText(firstTopic.message);
  }, [language]);

  if (!isOpen) return null;

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopicId(topic.id);
    setCustomText(topic.message);
  };

  const handleLaunchWhatsApp = () => {
    const selectedTopic = topics.find(
      (topic) => topic.id === selectedTopicId
    );

    const topicLabel = selectedTopic?.label || defaultTopic.label;

    const fullMsg = `*CASE SUNO Inquiry*\n*Topic:* ${topicLabel}\n\n${customText}`;

    const url = `https://wa.me/919876543210?text=${encodeURIComponent(
      fullMsg
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const text = {
    headerTitle:
      language === 'gu'
        ? 'CASE SUNO સપોર્ટ'
        : language === 'hi'
        ? 'CASE SUNO सहायता'
        : 'CASE SUNO Support',

    online:
      language === 'gu'
        ? 'ઓનલાઇન · ટૂંક સમયમાં જવાબ'
        : language === 'hi'
        ? 'ऑनलाइन · जल्द जवाब मिलेगा'
        : 'Online · Quick response',

    welcome:
      language === 'gu'
        ? 'નમસ્તે 🙏 CASE SUNO માં આપનું સ્વાગત છે.'
        : language === 'hi'
        ? 'नमस्ते 🙏 CASE SUNO में आपका स्वागत है।'
        : 'Namaste 🙏 Welcome to CASE SUNO.',

    intro:
      language === 'gu'
        ? 'તમારી સમસ્યા અથવા જરૂરિયાત જણાવો. નીચેનો વિષય પસંદ કરો અને અમને મેસેજ મોકલો.'
        : language === 'hi'
        ? 'अपनी समस्या या जरूरत बताएं। नीचे एक विषय चुनें और हमें मैसेज भेजें।'
        : 'Tell us about your situation. Choose a topic below and send us a message.',

    now:
      language === 'gu'
        ? 'હમણાં જ'
        : language === 'hi'
        ? 'अभी'
        : 'Just now',

    quickTopic:
      language === 'gu'
        ? 'વિષય પસંદ કરો'
        : language === 'hi'
        ? 'विषय चुनें'
        : 'Choose a topic',

    messagePreview:
      language === 'gu'
        ? 'તમારો મેસેજ'
        : language === 'hi'
        ? 'आपका संदेश'
        : 'Your message',

    secure:
      language === 'gu'
        ? 'WhatsApp પર સુરક્ષિત ચેટ'
        : language === 'hi'
        ? 'WhatsApp पर सुरक्षित चैट'
        : 'Secure chat on WhatsApp',

    cancel:
      language === 'gu'
        ? 'રદ કરો'
        : language === 'hi'
        ? 'रद्द करें'
        : 'Cancel',

    open:
      language === 'gu'
        ? 'વોટ્સએપ ખોલો'
        : language === 'hi'
        ? 'व्हाट्सएप खोलें'
        : 'Open WhatsApp',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-white border border-[#DDD6C8] rounded-md shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 bg-[#075E54] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-sm leading-tight">
                {text.headerTitle}
              </h3>

              <p className="text-[11px] text-[#A7D8CC]">
                {text.online}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Content */}
        <div className="p-4 sm:p-5 bg-[#ECE5DD] space-y-3.5 sm:space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Welcome Message */}
          <div className="flex flex-col items-start max-w-[90%] sm:max-w-[85%]">
            <div className="p-3 bg-white rounded-lg rounded-tl-none shadow-xs text-xs text-[#2A2927] space-y-1.5 leading-relaxed">
              <p className="font-medium text-[#1E1D1A]">
                {text.welcome}
              </p>

              <p>{text.intro}</p>

              <span className="text-[9px] text-[#8C8479] text-right block">
                {text.now}
              </span>
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[#5A554D] uppercase tracking-wider block">
              {text.quickTopic}
            </span>

            <div className="flex flex-wrap gap-1.5">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleTopicSelect(topic)}
                  className={`px-2.5 py-1 text-[11px] rounded-full border transition-colors cursor-pointer ${
                    selectedTopicId === topic.id
                      ? 'bg-[#128C7E] text-white border-[#128C7E]'
                      : 'bg-white text-[#38352F] border-[#D1CBC0] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[11px] font-semibold text-[#5A554D] uppercase tracking-wider block">
              {text.messagePreview}
            </label>

            <textarea
              rows={3}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-2.5 text-xs bg-white border border-[#C5BFA3] rounded-md text-[#1E1D1A] focus:outline-hidden resize-none"
            />
          </div>

          {/* Security */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#5C564C]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#128C7E] shrink-0" />

            <span>{text.secure}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E4DB] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            type="button"
            className="px-3.5 py-2 text-xs text-[#6B655B] hover:text-black font-medium cursor-pointer"
          >
            {text.cancel}
          </button>

          <button
            onClick={handleLaunchWhatsApp}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />

            <span>{text.open}</span>

            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};