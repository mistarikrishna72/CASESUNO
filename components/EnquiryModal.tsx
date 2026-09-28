import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Shield, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Individual Assistance',
}) => {
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [category, setCategory] = useState(initialCategory);
  const [urgency, setUrgency] = useState<'Normal' | 'Priority' | 'Immediate'>('Normal');
  const [hasDocuments, setHasDocuments] = useState<'yes' | 'no' | 'partial'>('partial');
  const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Surat',
    mode: 'Online (Video/Audio)',
  });
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const categories = [
    {
      id: 'Individual Assistance',
      label: isGu ? 'વ્યક્તિગત સહાય' : isHi ? 'व्यक्तिगत सहायता' : 'Individual Assistance',
      desc: isGu
        ? 'પારિવારિક, વારસાઈ, મિલકત, ભાડુઆત તકરાર'
        : isHi
        ? 'पारिवारिक, संपत्ति, वसीयत, किराएदार विवाद'
        : 'Personal, family, inheritance, property, tenant',
    },
    {
      id: 'Business Support',
      label: isGu ? 'વ્યવસાય સહાય' : isHi ? 'व्यापार सहायता' : 'Business Support',
      desc: isGu
        ? 'સંચાલન, વેપારી કરાર, કંપની નિયમપાલન'
        : isHi
        ? 'परिचालन, विक्रेता अनुबंध, विनियामक अनुपालन'
        : 'Operations, vendor contracts, corporate compliance',
    },
    {
      id: 'Documentation Help',
      label: isGu ? 'દસ્તાવેજીકરણ સહાય' : isHi ? 'दस्तावेज़ीकरण सहायता' : 'Documentation Help',
      desc: isGu
        ? 'કાનૂની જવાબો ડ્રાફ્ટ કરવા, કાગળો વ્યવસ્થિત કરવા'
        : isHi
        ? 'ड्राफ्टिंग समर्थन, फाइलों का सुव्यवस्थित संगठन'
        : 'Drafting replies, sorting records, dossier building',
    },
    {
      id: 'Professional Coordination',
      label: isGu ? 'વ્યાવસાયિક સંકલન' : isHi ? 'विशेषज्ञ समन्वय' : 'Professional Coordination',
      desc: isGu
        ? 'એડવોકેટ્સ, સિનિયર CA, વેલ્યુઅર્સ, મધ્યસ્થી'
        : isHi
        ? 'अधिवक्ता, वरिष्ठ सीए, मध्यस्थ व मूल्यांकनकर्ता'
        : 'Advocates, Senior CAs, Valuers, Arbitrators',
    },
    {
      id: 'Ongoing Support',
      label: isGu ? 'સતત સહાય' : isHi ? 'निरंतर प्रशासनिक सहायता' : 'Ongoing Support',
      desc: isGu
        ? 'મુદ્દત ટ્રેકિંગ, વહીવટી ફોલો-અપ'
        : isHi
        ? 'सुनवाई ट्रैकिंग, नियमित अपडेट्स व फॉलो-अप'
        : 'Hearing tracking, administrative follow-through',
    },
    {
      id: 'Other Matters',
      label: isGu ? 'સામાન્ય / અન્ય બાબત' : isHi ? 'सामान्य / अन्य विषय' : 'General / Other Matter',
      desc: isGu
        ? 'જો તમને યોગ્ય શ્રેણી પસંદ કરવામાં મૂંઝવણ હોય'
        : isHi
        ? 'यदि आप उचित श्रेणी चुनने में असमंजस में हैं'
        : 'Unsure where to categorize your situation',
    },
  ];

  const handleNextStep1 = () => {
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (!description.trim()) {
      setErrorMsg(
        isGu
          ? 'કૃપા કરીને તમારી સમસ્યાનો ટૂંકો સારાંશ લખો.'
          : isHi
          ? 'कृपया अपनी समस्या का संक्षिप्त विवरण लिखें।'
          : 'Please write a brief summary of what you are dealing with.'
      );
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg(
        isGu
          ? 'કૃપા કરીને તમારું પૂરું નામ લખો.'
          : isHi
          ? 'कृपया अपना पूरा नाम लिखें।'
          : 'Please enter your full name.'
      );
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(
        isGu
          ? 'કૃપા કરીને માન્ય વોટ્સએપ/મોબાઇલ નંબર લખો.'
          : isHi
          ? 'कृपया मान्य व्हाट्सएप/मोबाइल नंबर दर्ज करें।'
          : 'Please enter a valid mobile / WhatsApp number.'
      );
      return;
    }

    setErrorMsg('');
    const randomRef = 'CS-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    setReferenceId(randomRef);
    setStep(4);
  };

  const openWhatsAppConfirmation = () => {
    const message = encodeURIComponent(
      `Hello CASE SUNO, I submitted an enquiry (${referenceId}) regarding ${category}.\nName: ${formData.fullName}\nCity: ${formData.city}\nBrief: ${description.slice(0, 100)}...`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#DDD6C8] rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#E8E4DB] bg-white">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C8479] uppercase block">
              {isGu ? 'CASE SUNO પૂછપરછ' : isHi ? 'CASE SUNO पूछताछ' : 'Case Suno Enquiry'}
            </span>
            <h3
              className={`text-lg sm:text-xl text-[#1E1D1A] ${
                isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {step === 4
                ? isGu
                  ? 'પૂછપરછ નોંધાઈ ગઈ છે'
                  : isHi
                  ? 'पूछताछ दर्ज कर ली गई है'
                  : 'Enquiry Registered'
                : isGu
                ? 'તમારી પૂછપરછ શરૂ કરો'
                : isHi
                ? 'अपनी पूछताछ शुरू करें'
                : 'Start Your Enquiry'}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {step < 4 && (
              <span className="text-xs text-[#787268] tabular-nums font-medium">
                {isGu
                  ? `તબક્કો ${step} / ૩`
                  : isHi
                  ? `चरण ${step} / ३`
                  : `Step ${step} of 3`}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#6B655B] hover:text-black hover:bg-[#F2EFE9] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`text-base sm:text-lg text-[#1E1D1A] ${
                    isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {isGu
                    ? 'તમારી પરિસ્થિતિ સાથે સુસંગત શ્રેણી પસંદ કરો:'
                    : isHi
                    ? 'अपनी स्थिति से संबंधित श्रेणी चुनें:'
                    : 'Select the category that best matches your situation:'}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? 'ચિંતા કરશો નહીં જો એકથી વધુ લાગુ પડતી હોય, અમારા કોઓર્ડિનેટર કોલ પર સ્પષ્ટતા કરી આપશે.'
                    : isHi
                    ? 'यदि एक से अधिक श्रेणियां लागू होती हैं तो चिंता न करें, हमारे समन्वयक कॉल पर स्पष्ट कर देंगे।'
                    : "Don't worry if multiple apply; our coordinator will clarify during intake."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className={`p-3 sm:p-3.5 text-left border rounded-sm transition-all duration-150 cursor-pointer ${
                      category === c.id
                        ? 'border-[#1E1D1A] bg-white shadow-xs ring-1 ring-[#1E1D1A]'
                        : 'border-[#E3DED4] bg-[#FAF9F6] hover:bg-white hover:border-[#B5AEA1]'
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#1E1D1A]">{c.label}</p>
                    <p className="text-xs text-[#6B655B] mt-0.5">{c.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep1}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <span>{isGu ? 'આગળ વધો' : isHi ? 'आगे बढ़ें' : 'Continue'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Description & Urgency */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`text-base sm:text-lg text-[#1E1D1A] ${
                    isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {isGu
                    ? 'તમે કઈ સમસ્યાનો સામનો કરી રહ્યા છો તે જણાવો'
                    : isHi
                    ? 'आप किस समस्या या आवश्यकता का सामना कर रहे हैं?'
                    : 'Describe what you are facing'}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? 'તમે જેટલું યોગ્ય સમજો એટલું જ જણાવો. તમામ માહિતી સંપૂર્ણપણે ગોપનીય રાખવામાં આવે છે.'
                    : isHi
                    ? 'जितनी जानकारी आप सहजता से देना चाहें उतनी ही साझा करें। सभी विवरण पूर्णतः गोपनीय रहेंगे।'
                    : 'Share only as much as you feel comfortable. All information is strictly confidential.'}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#302E2A] mb-1.5">
                  {isGu
                    ? 'પરિસ્થિતિ / જરૂરિયાતનો સંક્ષિપ્ત સારાંશ *'
                    : isHi
                    ? 'स्थिति / आवश्यकता का संक्षिप्त विवरण *'
                    : 'Brief Summary of the Situation / Requirement *'}
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={
                    isGu
                      ? 'દા.ત., વારસાઈ મિલકત અંગે નોટિસ મળી છે / ભાગીદારી કરાર ચકાસવો છે / વેપારી પેમેન્ટ અટક્યું છે...'
                      : isHi
                      ? 'उदा. संपत्ति या वसीयत पर नोटिस प्राप्त हुआ / साझेदारी अनुबंध की जांच करानी है / विक्रेता भुगतान लंबित है...'
                      : 'e.g., Received a notice regarding property inheritance / Need help reviewing a partnership deed / In a payment dispute with a supplier...'
                  }
                  className="w-full p-3 text-sm bg-white border border-[#D5CFBF] rounded-sm focus:outline-hidden focus:ring-1 focus:ring-[#1E1D1A] text-[#1E1D1A] placeholder:text-[#9C9588]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1.5">
                    {isGu
                      ? 'કેટલી ઉતાવળમાં પગલું ભરવું છે?'
                      : isHi
                      ? 'कितनी जल्दी कदम उठाने की आवश्यकता है?'
                      : 'How soon do you need to take action?'}
                  </label>
                  <div className="flex gap-2">
                    {(['Normal', 'Priority', 'Immediate'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setUrgency(lvl)}
                        className={`flex-1 py-2 text-xs font-medium border rounded-sm transition-colors cursor-pointer ${
                          urgency === lvl
                            ? 'bg-[#1E1D1A] text-white border-[#1E1D1A]'
                            : 'bg-white text-[#4A463E] border-[#D9D3C7] hover:border-[#9E9789]'
                        }`}
                      >
                        {isGu
                          ? lvl === 'Normal'
                            ? 'સામાન્ય'
                            : lvl === 'Priority'
                            ? 'અગ્રતા'
                            : 'તાત્કાલિક'
                          : isHi
                          ? lvl === 'Normal'
                            ? 'सामान्य'
                            : lvl === 'Priority'
                            ? 'प्राथमिकता'
                            : 'तत्काल'
                          : lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1.5">
                    {isGu
                      ? 'દસ્તાવેજો / નોટિસ ઉપલબ્ધ છે?'
                      : isHi
                      ? 'दस्तावेज / नोटिस उपलब्ध हैं?'
                      : 'Do you have documents/notices ready?'}
                  </label>
                  <select
                    value={hasDocuments}
                    onChange={(e) => setHasDocuments(e.target.value as 'yes' | 'no' | 'partial')}
                    className="w-full p-2.5 text-xs bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A] cursor-pointer"
                  >
                    <option value="yes">
                      {isGu ? 'હા, પૂરા દસ્તાવેજો છે' : isHi ? 'हाँ, पूर्ण दस्तावेज मौजूद हैं' : 'Yes, have complete documents'}
                    </option>
                    <option value="partial">
                      {isGu ? 'અમુક કાગળો છે / અધૂરા છે' : isHi ? 'कुछ कागजात हैं / अधूरे हैं' : 'Have some papers / incomplete'}
                    </option>
                    <option value="no">
                      {isGu ? 'હજી કોઈ કાગળો નથી / માત્ર સલાહ જોઈએ છે' : isHi ? 'अभी कोई दस्तावेज नहीं / केवल मार्गदर्शन चाहिए' : 'No documents yet / just seeking guidance'}
                    </option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#EAE6DD]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-[#5C564C] hover:text-black font-medium cursor-pointer"
                >
                  {isGu ? 'પાછા જાવ' : isHi ? 'पीछे जाएं' : 'Back'}
                </button>
                <button
                  type="button"
                  onClick={handleNextStep2}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <span>{isGu ? 'સંપર્ક વિગતો' : isHi ? 'संपर्क विवरण' : 'Next: Contact Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info & Preferences */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4
                  className={`text-base sm:text-lg text-[#1E1D1A] ${
                    isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {isGu
                    ? 'અમારા કોઓર્ડિનેટર તમારો સંપર્ક કેવી રીતે કરે?'
                    : isHi
                    ? 'हमारे समन्वयक आपसे किस प्रकार संपर्क करें?'
                    : 'How should our coordinator reach you?'}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? 'અમે શાંતિપૂર્વક વાતચીત માટે અનુકૂળ સમય નક્કી કરવા તમારો સંપર્ક કરીશું.'
                    : isHi
                    ? 'हम शांत और सुगम बातचीत के लिए उपयुक्त समय तय करने हेतु संपर्क करेंगे।'
                    : 'We will contact you to confirm a quiet appointment time.'}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu ? 'તમારું પૂરું નામ *' : isHi ? 'आपका पूरा नाम *' : 'Your Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={isGu ? 'દા.ત. રાજેશ પટેલ' : isHi ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Patel'}
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu ? 'વોટ્સએપ / મોબાઇલ નંબર *' : isHi ? 'व्हाट्सएप / मोबाइल नंबर *' : 'WhatsApp / Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98250 12345"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu ? 'ઇમેઇલ (વૈકલ્પિક)' : isHi ? 'ईमेल (वैकल्पिक)' : 'Email Address (Optional)'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu ? 'શહેર / સ્થળ' : isHi ? 'शहर / स्थान' : 'City / Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Surat, Gujarat"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                  {isGu ? 'પરામર્શ માટે અનુકૂળ માધ્યમ' : isHi ? 'परामर्श के लिए पसंदीदा माध्यम' : 'Preferred Consultation Mode'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    isGu ? 'ઓનલાઇન (વિડીયો/ઓડિયો)' : isHi ? 'ऑनलाइन (वीडियो/ऑडियो)' : 'Online (Video/Audio)',
                    isGu ? 'સુરત ઓફિસ (રૂબરૂ)' : isHi ? 'सूरत कार्यालय (व्यक्तिगत)' : 'Surat Office (In-Person)',
                  ].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: m })}
                      className={`p-2.5 text-xs text-left border rounded-sm font-medium transition-colors cursor-pointer ${
                        formData.mode === m
                          ? 'border-[#1E1D1A] bg-white text-[#1E1D1A] ring-1 ring-[#1E1D1A]'
                          : 'border-[#D9D3C7] bg-[#FAF9F6] text-[#59544B]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#F4F0E6] border border-[#E3DCCB] rounded-sm flex items-center gap-2.5 text-xs text-[#524C41]">
                <Shield className="w-4 h-4 text-[#756C5B] shrink-0" />
                <span>
                  {isGu
                    ? 'તમારી ગોપનીયતા સુરક્ષિત છે. અમે તમારી સંમતિ વિના વિગતો ક્યારેય શેર કરતા નથી.'
                    : isHi
                    ? 'आपकी गोपनीयता पूर्णतः सुरक्षित है। हम आपकी सहमति के बिना आपकी जानकारी कभी साझा नहीं करते।'
                    : 'Your privacy is protected. We will never share your contacts or circumstances without consent.'}
                </span>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#EAE6DD]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-[#5C564C] hover:text-black font-medium cursor-pointer"
                >
                  {isGu ? 'પાછા જાવ' : isHi ? 'पीछे जाएं' : 'Back'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <span>
                    {isGu
                      ? 'ગોપનીય પૂછપરછ સબમિટ કરો'
                      : isHi
                      ? 'गोपनीय पूछताछ सबमिट करें'
                      : 'Submit Confidential Enquiry'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Success / Confirmation */}
          {step === 4 && (
            <div className="text-center py-4 space-y-4 sm:space-y-5">
              <div className="w-14 h-14 bg-[#EEF5EC] text-[#3B7A38] rounded-full flex items-center justify-center mx-auto border border-[#CDE3C9]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-[#F2EDE2] text-[#5E5648] text-xs font-mono font-medium rounded-xs mb-2">
                  {isGu ? 'સંદર્ભ ક્રમાંક' : isHi ? 'संदर्भ संख्या' : 'Reference'}: {referenceId}
                </span>
                <h4
                  className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                    isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                  }`}
                >
                  {isGu
                    ? `આભાર, ${formData.fullName}`
                    : isHi
                    ? `धन्यवाद, ${formData.fullName}`
                    : `Thank You, ${formData.fullName}.`}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C564C] max-w-md mx-auto mt-2 leading-relaxed">
                  {isGu
                    ? 'અમને તમારી પૂછપરછ મળી ગઈ છે. અમારા કેસ કોઓર્ડિનેટર વિગતો ચકાસીને ૨ વ્યાવસાયિક કલાકમાં તમારો સંપર્ક કરશે.'
                    : isHi
                    ? 'हमें आपकी पूछताछ प्राप्त हो गई है। हमारे केस समन्वयक आपके विवरण की समीक्षा करेंगे और २ व्यावसायिक घंटों में संपर्क करेंगे।'
                    : `We have received your enquiry regarding ${category}. Our case coordinator will review your notes and reach out within 2 business hours.`}
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E6E1D6] rounded-sm max-w-md mx-auto text-left text-xs space-y-2 text-[#4A453C]">
                <div className="flex justify-between">
                  <span className="text-[#878072]">{isGu ? 'સ્થિતિ:' : isHi ? 'स्थिति:' : 'Status:'}</span>
                  <span className="font-medium text-[#2F662C]">
                    {isGu
                      ? 'પ્રારંભિક સમીક્ષા હેઠળ'
                      : isHi
                      ? 'प्रारंभिक समीक्षाधीन'
                      : 'Under Preliminary Review'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#878072]">{isGu ? 'માધ્યમ:' : isHi ? 'पसंदीदा माध्यम:' : 'Preferred Mode:'}</span>
                  <span className="font-medium text-[#1E1D1A]">{formData.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#878072]">{isGu ? 'સંપર્ક નંબર:' : isHi ? 'संपर्क नंबर:' : 'Contact Number:'}</span>
                  <span className="font-medium text-[#1E1D1A]">{formData.phone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-medium rounded-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {isGu
                      ? 'વોટ્સએપ પર તરત જોડાઓ'
                      : isHi
                      ? 'व्हाट्सएप पर तुरंत जुड़ें'
                      : 'Connect Instantly on WhatsApp'}
                  </span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#1F1E1B] text-white text-xs font-medium rounded-sm cursor-pointer"
                >
                  {isGu ? 'પૂર્ણ' : isHi ? 'संपन्न' : 'Done'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
