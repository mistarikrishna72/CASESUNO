import React, { useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Shield,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = "",
}) => {
  const { language } = useLanguage();
  const isGu = language === "gu";
  const isHi = language === "hi";

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [category, setCategory] = useState(initialCategory);
  const [urgency, setUrgency] = useState<"Normal" | "Priority" | "Immediate">(
    "Normal",
  );
  const [hasDocuments, setHasDocuments] = useState<"yes" | "no" | "partial">(
    "partial",
  );
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
  });
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
const resetEnquiry = () => {
  setStep(1);
  setCategory(initialCategory);
  setUrgency("Normal");
  setHasDocuments("partial");
  setDescription("");

  setFormData({
    fullName: "",
    phone: "",
    email: "",
    city: "",
  });

  setReferenceId("");
  setErrorMsg("");
};
const handleClose = () => {
  resetEnquiry();
  onClose();
};
  if (!isOpen) return null;
  

  const categories = [
    {
      id: "Notice, Summons & Court / Case",
      label: isGu
        ? "નોટિસ, સમન્સ અને કોર્ટ / કેસ"
        : isHi
          ? "नोटिस, समन और कोर्ट / केस"
          : "Notice, Summons & Court / Case",
      desc: isGu
        ? "કોર્ટ, સમન્સ, સરકારી અને ડિમાન્ડ નોટિસ, કેસ સહાય, દસ્તાવેજો, સુનાવણી અને કેસ ટ્રેકિંગ"
        : isHi
          ? "कोर्ट, समन, सरकारी और डिमांड नोटिस, केस सहायता, दस्तावेज़, सुनवाई और केस ट्रैकिंग"
          : "Court, summons, government & demand notices, case assistance, documents, hearings & tracking",
    },

    {
      id: "Police, Cyber & Online Fraud",
      label: isGu
        ? "પોલીસ, સાયબર અને ઓનલાઈન છેતરપિંડી"
        : isHi
          ? "पुलिस, साइबर और ऑनलाइन धोखाधड़ी"
          : "Police, Cyber & Online Fraud",
      desc: isGu
        ? "ફરિયાદ, FIR, પોલીસ નોટિસ, જપ્તી, UPI, બેંકિંગ છેતરપિંડી, હેકિંગ અને સ્કેમ"
        : isHi
          ? "शिकायत, FIR, पुलिस नोटिस, जब्ती, UPI, बैंकिंग धोखाधड़ी, हैकिंग और स्कैम"
          : "Complaints, FIR, police notices, seizure, UPI, banking fraud, hacking & scams",
    },

    {
      id: "Property & Land",
      label: isGu
        ? "મિલકત અને જમીન"
        : isHi
          ? "संपत्ति और भूमि"
          : "Property & Land",
      desc: isGu
        ? "કબજો, મિલકત અને જમીન વિવાદ, બેંક દ્વારા સીલ કરેલી મિલકત અને સોસાયટી બાબતો"
        : isHi
          ? "कब्जा, संपत्ति और भूमि विवाद, बैंक द्वारा सील संपत्ति और सोसायटी मामले"
          : "Possession, property & land disputes, bank-sealed property & society matters",
    },

    {
      id: "Bank, Loan, Money & Recovery",
      label: isGu
        ? "બેંક, લોન, પૈસા અને વસૂલાત"
        : isHi
          ? "बैंक, लोन, पैसे और रिकवरी"
          : "Bank, Loan, Money & Recovery",
      desc: isGu
        ? "EMI, લોન, મોર્ટગેજ, બેંક એકાઉન્ટ, બેંક રિકવરી, ચુકવણી, ઇનવોઇસ, રિફંડ અને પૈસાની વસૂલાત"
        : isHi
          ? "EMI, लोन, मॉर्गेज, बैंक अकाउंट, बैंक रिकवरी, भुगतान, इनवॉइस, रिफंड और पैसे की रिकवरी"
          : "EMI, loans, mortgage, bank accounts, bank recovery, payments, invoices, refunds & money recovery",
    },

    {
      id: "Vehicle & RTO",
      label: isGu ? "વાહન અને RTO" : isHi ? "वाहन और RTO" : "Vehicle & RTO",
      desc: isGu
        ? "ચલણ, વાહન જપ્તી, RC, લાઇસન્સ, RTO બાબતો અને અકસ્માત"
        : isHi
          ? "चालान, वाहन जब्ती, RC, लाइसेंस, RTO मामले और दुर्घटनाएं"
          : "Challans, vehicle seizure, RC, licence, RTO matters & accidents",
    },

    {
      id: "Family Matters",
      label: isGu
        ? "કૌટુંબિક બાબતો"
        : isHi
          ? "पारिवारिक मामले"
          : "Family Matters",
      desc: isGu
        ? "લગ્ન સંબંધિત બાબતો, ભરણપોષણ અને કૌટુંબિક વિવાદ"
        : isHi
          ? "विवाह संबंधी मामले, भरण-पोषण और पारिवारिक विवाद"
          : "Matrimonial matters, maintenance & family disputes",
    },

    {
      id: "Business & Commercial Matters",
      label: isGu
        ? "વ્યવસાય અને કોમર્શિયલ બાબતો"
        : isHi
          ? "व्यवसाय और व्यावसायिक मामले"
          : "Business & Commercial Matters",
      desc: isGu
        ? "વ્યવસાયિક વિવાદ, બિઝનેસ દસ્તાવેજો, કરાર, ચુકવણી અને કોમર્શિયલ બાબતો"
        : isHi
          ? "व्यावसायिक विवाद, बिजनेस दस्तावेज़, अनुबंध, भुगतान और व्यावसायिक मामले"
          : "Business disputes, business documents, contracts, payments & commercial matters",
    },

    {
      id: "Consumer & Insurance",
      label: isGu
        ? "ગ્રાહક અને વીમો"
        : isHi
          ? "उपभोक्ता और बीमा"
          : "Consumer & Insurance",
      desc: isGu
        ? "પ્રોડક્ટ અને સેવા સંબંધિત સમસ્યાઓ, ગ્રાહક બાબતો અને વીમા દાવા"
        : isHi
          ? "उत्पाद और सेवा संबंधी समस्याएं, उपभोक्ता मामले और बीमा दावे"
          : "Product & service issues, consumer matters & insurance claims",
    },

    {
      id: "Documents & Government Services",
      label: isGu
        ? "દસ્તાવેજો અને સરકારી સેવાઓ"
        : isHi
          ? "दस्तावेज़ और सरकारी सेवाएं"
          : "Documents & Government Services",
      desc: isGu
        ? "દસ્તાવેજીકરણ, અરજીઓ, પ્રમાણપત્રો અને સત્તાવાર સરકારી પ્રક્રિયાઓ"
        : isHi
          ? "दस्तावेज़ीकरण, आवेदन, प्रमाणपत्र और आधिकारिक सरकारी प्रक्रियाएं"
          : "Documentation, applications, certificates & official government processes",
    },

    {
      id: "Others",
      label: isGu ? "અન્ય બાબતો" : isHi ? "अन्य मामले" : "OTHERS..",
      desc: isGu
        ? "ઉપરની કોઈ શ્રેણીમાં ન આવતી અન્ય બાબતો — અમારા કોઓર્ડિનેટર યોગ્ય શ્રેણી નક્કી કરવામાં મદદ કરશે"
        : isHi
          ? "ऊपर दी गई श्रेणियों में शामिल न होने वाले अन्य मामले — हमारे समन्वयक सही श्रेणी तय करने में मदद करेंगे"
          : "Any matter not covered above — our coordinator will help identify the appropriate category",
    },
  ];


  const handleNextStep2 = () => {
    if (!description.trim()) {
      setErrorMsg(
        isGu
          ? "કૃપા કરીને તમારી સમસ્યાનો ટૂંકો સારાંશ લખો."
          : isHi
            ? "कृपया अपनी समस्या का संक्षिप्त विवरण लिखें।"
            : "Please write a brief summary of what you are dealing with.",
      );
      return;
    }
    setErrorMsg("");
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg(
        isGu
          ? "કૃપા કરીને તમારું પૂરું નામ લખો."
          : isHi
            ? "कृपया अपना पूरा नाम लिखें।"
            : "Please enter your full name.",
      );
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(
        isGu
          ? "કૃપા કરીને માન્ય વોટ્સએપ/મોબાઇલ નંબર લખો."
          : isHi
            ? "कृपया मान्य व्हाट्सएप/मोबाइल नंबर दर्ज करें।"
            : "Please enter a valid mobile / WhatsApp number.",
      );
      return;
    }

    setErrorMsg("");
    const randomRef =
      "CS-" +
      new Date().getFullYear() +
      "-" +
      Math.floor(1000 + Math.random() * 9000);
    setReferenceId(randomRef);
    setStep(4);
  };

  const openWhatsAppConfirmation = () => {
    const message = encodeURIComponent(
      `Hello CASE SUNO, I submitted an enquiry (${referenceId}) regarding ${category}.\nName: ${formData.fullName}\nCity: ${formData.city}\nBrief: ${description.slice(0, 100)}...`,
    );
    window.open(`https://wa.me/918000784778?text=${message}`, "_blank");
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
              {isGu
                ? "CASE SUNO પૂછપરછ"
                : isHi
                  ? "CASE SUNO पूछताछ"
                  : "Case Suno Enquiry"}
            </span>
            <h3
              className={`text-lg sm:text-xl text-[#1E1D1A] ${
                isGu || isHi ? "font-sans font-semibold" : "font-serif"
              }`}
            >
              {step === 4
                ? isGu
                  ? "પૂછપરછ નોંધાઈ ગઈ છે"
                  : isHi
                    ? "पूछताछ दर्ज कर ली गई है"
                    : "Enquiry Registered"
                : isGu
                  ? "તમારી પૂછપરછ શરૂ કરો"
                  : isHi
                    ? "अपनी पूछताछ शुरू करें"
                    : "Start Your Enquiry"}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {step < 4 && (
              <span className="text-xs text-[#787268] tabular-nums font-medium">
                {isGu
                  ? `તબક્કો ${step} / 3`
                  : isHi
                    ? `चरण ${step} / 3`
                    : `Step ${step} of 3`}
              </span>
            )}
            <button
              onClick={handleClose}
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
                    isGu || isHi ? "font-sans font-semibold" : "font-serif"
                  }`}
                >
                  {isGu
                    ? "તમારી પરિસ્થિતિ સાથે સુસંગત શ્રેણી પસંદ કરો:"
                    : isHi
                      ? "अपनी स्थिति से संबंधित श्रेणी चुनें:"
                      : "Select the category that best matches your situation:"}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? "ચિંતા કરશો નહીં જો એકથી વધુ લાગુ પડતી હોય, અમારા કોઓર્ડિનેટર કોલ પર સ્પષ્ટતા કરી આપશે."
                    : isHi
                      ? "यदि एक से अधिक श्रेणियां लागू होती हैं तो चिंता न करें, हमारे समन्वयक कॉल पर स्पष्ट कर देंगे।"
                      : "Don't worry if multiple apply; our coordinator will clarify during intake."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setCategory(c.id);
                      setStep(2);
                    }}
                    className={`p-3 sm:p-3.5 text-left border rounded-sm transition-all duration-150 cursor-pointer ${
                      category === c.id
                        ? "border-[#1E1D1A] bg-white shadow-xs ring-1 ring-[#1E1D1A]"
                        : "border-[#E3DED4] bg-[#FAF9F6] hover:bg-white hover:border-[#B5AEA1]"
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#1E1D1A]">
                      {c.label}
                    </p>
                    <p className="text-xs text-[#6B655B] mt-0.5">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Description & Urgency */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`text-base sm:text-lg text-[#1E1D1A] ${
                    isGu || isHi ? "font-sans font-semibold" : "font-serif"
                  }`}
                >
                  {isGu
                    ? "તમે કઈ સમસ્યાનો સામનો કરી રહ્યા છો તે જણાવો"
                    : isHi
                      ? "आप किस समस्या या आवश्यकता का सामना कर रहे हैं?"
                      : "Describe what you are facing"}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? "તમે જેટલું યોગ્ય સમજો એટલું જ જણાવો. તમામ માહિતી સંપૂર્ણપણે ગોપનીય રાખવામાં આવે છે."
                    : isHi
                      ? "जितनी जानकारी आप सहजता से देना चाहें उतनी ही साझा करें। सभी विवरण पूर्णतः गोपनीय रहेंगे।"
                      : "Share only as much as you feel comfortable. All information is strictly confidential."}
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
                    ? "પરિસ્થિતિ / જરૂરિયાતનો સંક્ષિપ્ત સારાંશ *"
                    : isHi
                      ? "स्थिति / आवश्यकता का संक्षिप्त विवरण *"
                      : "Brief Summary of the Situation / Requirement *"}
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={
                    isGu
                      ? "દા.ત., વારસાઈ મિલકત અંગે નોટિસ મળી છે / ભાગીદારી કરાર ચકાસવો છે / વેપારી પેમેન્ટ અટક્યું છે..."
                      : isHi
                        ? "उदा. संपत्ति या वसीयत पर नोटिस प्राप्त हुआ / साझेदारी अनुबंध की जांच करानी है / विक्रेता भुगतान लंबित है..."
                        : "e.g., Received a notice regarding property inheritance / Need help reviewing a partnership deed / In a payment dispute with a supplier..."
                  }
                  className="w-full p-3 text-sm bg-white border border-[#D5CFBF] rounded-sm focus:outline-hidden focus:ring-1 focus:ring-[#1E1D1A] text-[#1E1D1A] placeholder:text-[#9C9588]"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#EAE6DD]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-[#5C564C] hover:text-black font-medium cursor-pointer bg-[#dcd7d7] rounded-lg"
                >
                  {isGu ? "પાછા જાવ" : isHi ? "पीछे जाएं" : "Back"}
                </button>
                <button
                  type="button"
                  onClick={handleNextStep2}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <span>
                    {isGu
                      ? "સંપર્ક વિગતો"
                      : isHi
                        ? "संपर्क विवरण"
                        : "Next: Contact Details"}
                  </span>
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
                    isGu || isHi ? "font-sans font-semibold" : "font-serif"
                  }`}
                >
                  {isGu
                    ? "અમારા કોઓર્ડિનેટર તમારો સંપર્ક કેવી રીતે કરે?"
                    : isHi
                      ? "हमारे समन्वयक आपसे किस प्रकार संपर्क करें?"
                      : "How should our coordinator reach you?"}
                </h4>
                <p className="text-xs text-[#6B655B] mt-1">
                  {isGu
                    ? "અમે શાંતિપૂર્વક વાતચીત માટે અનુકૂળ સમય નક્કી કરવા તમારો સંપર્ક કરીશું."
                    : isHi
                      ? "हम शांत और सुगम बातचीत के लिए उपयुक्त समय तय करने हेतु संपर्क करेंगे।"
                      : "We will contact you to confirm a quiet appointment time."}
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
                    {isGu
                      ? "તમારું પૂરું નામ *"
                      : isHi
                        ? "आपका पूरा नाम *"
                        : "Your Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder={
                      isGu
                        ? "દા.ત. રાજેશ પટેલ"
                        : isHi
                          ? "उदा. राजेश शर्मा"
                          : "e.g. Rajesh Patel"
                    }
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu
                      ? "વોટ્સએપ / મોબાઇલ નંબર *"
                      : isHi
                        ? "व्हाट्सएप / मोबाइल नंबर *"
                        : "WhatsApp / Mobile Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98250 12345"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu
                      ? "ઇમેઇલ (વૈકલ્પિક)"
                      : isHi
                        ? "ईमेल (वैकल्पिक)"
                        : "Email Address (Optional)"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@example.com"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#302E2A] mb-1">
                    {isGu
                      ? "શહેર / સ્થળ"
                      : isHi
                        ? "शहर / स्थान"
                        : "City / Location"}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="city, state"
                    className="w-full p-2.5 text-sm bg-white border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                  />
                </div>
              </div>
              <div className="p-3 bg-[#F4F0E6] border border-[#E3DCCB] rounded-sm flex items-center gap-2.5 text-xs text-[#524C41]">
                <Shield className="w-4 h-4 text-[#756C5B] shrink-0" />
                <span>
                  {isGu
                    ? "તમારી ગોપનીયતા સુરક્ષિત છે. અમે તમારી સંમતિ વિના વિગતો ક્યારેય શેર કરતા નથી."
                    : isHi
                      ? "आपकी गोपनीयता पूर्णतः सुरक्षित है। हम आपकी सहमति के बिना आपकी जानकारी कभी साझा नहीं करते।"
                      : "Your privacy is protected. We will never share your contacts or circumstances without consent."}
                </span>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#EAE6DD]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-[#5C564C] hover:text-black font-medium cursor-pointer bg-[#dcd7d7] rounded-lg"
                >
                  {isGu ? "પાછા જાવ" : isHi ? "पीछे जाएं" : "Back"}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <span>
                    {isGu
                      ? "ગોપનીય પૂછપરછ સબમિટ કરો"
                      : isHi
                        ? "गोपनीय पूछताछ सबमिट करें"
                        : "Submit Confidential Enquiry"}
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
                  {isGu
                    ? "સંદર્ભ ક્રમાંક"
                    : isHi
                      ? "संदर्भ संख्या"
                      : "Reference"}
                  : {referenceId}
                </span>
                <h4
                  className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                    isGu || isHi ? "font-sans font-semibold" : "font-serif"
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
                    ? "અમને તમારી પૂછપરછ મળી ગઈ છે. અમારા કેસ કોઓર્ડિનેટર વિગતો ચકાસીને ૨ વ્યાવસાયિક કલાકમાં તમારો સંપર્ક કરશે."
                    : isHi
                      ? "हमें आपकी पूछताछ प्राप्त हो गई है। हमारे केस समन्वयक आपके विवरण की समीक्षा करेंगे और २ व्यावसायिक घंटों में संपर्क करेंगे।"
                      : `We have received your enquiry regarding ${category}. Our case coordinator will review your notes and reach out within 2 business hours.`}
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E6E1D6] rounded-sm max-w-md mx-auto text-left text-xs space-y-2 text-[#4A453C]">
                <div className="flex justify-between">
                  <span className="text-[#878072]">
                    {isGu ? "સ્થિતિ:" : isHi ? "स्थिति:" : "Status:"}
                  </span>
                  <span className="font-medium text-[#2F662C]">
                    {isGu
                      ? "પ્રારંભિક સમીક્ષા હેઠળ"
                      : isHi
                        ? "प्रारंभिक समीक्षाधीन"
                        : "Under Preliminary Review"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#878072]">
                    {isGu
                      ? "સંપર્ક નંબર:"
                      : isHi
                        ? "संपर्क नंबर:"
                        : "Contact Number:"}
                  </span>
                  <span className="font-medium text-[#1E1D1A]">
                    {formData.phone}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-medium rounded-sm transition-all cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.49 0 .16 5.33.16 11.88c0 2.09.55 4.13 1.6 5.92L.05 24l6.35-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.41-8.41Zm-8.47 18.32h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.9 9.9 0 1 1 8.39 4.65Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  <span>
                    {isGu
                      ? "વોટ્સએપ પર તરત જોડાઓ"
                      : isHi
                        ? "व्हाट्सएप पर तुरंत जुड़ें"
                        : "Connect Instantly on WhatsApp"}
                  </span>
                </button>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#1F1E1B] text-white text-xs font-medium rounded-sm cursor-pointer"
                >
                  {isGu ? "પૂર્ણ" : isHi ? "संपन्न" : "Done"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
