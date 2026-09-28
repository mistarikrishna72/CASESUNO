import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: isGu ? 'ગોપનીયતા નીતિ' : isHi ? 'गोपनीयता नीति' : 'Privacy Policy',
      kicker: isGu ? 'ડેટા સુરક્ષા અને ગુપ્તતા' : isHi ? 'डेटा सुरक्षा एवं गोपनीयता' : 'Data Protection & Confidentiality',
      date: isGu ? 'અપડેટ: જાન્યુઆરી ૨૦૨૬' : isHi ? 'अद्यतित: जनवरी २०२६' : 'Updated: January 2026',
      sections: [
        {
          h: isGu
            ? '૧. સંપૂર્ણ વિવેકબુદ્ધિ અને ગોપનીયતા'
            : isHi
            ? '१. पूर्ण गोपनीयता और सुरक्षा की प्रतिबद्धता'
            : '1. Commitment to Absolute Discretion',
          p: isGu
            ? 'CASE SUNO માત્ર તમારી બાબત સમજવા અને તમારા દસ્તાવેજો વ્યવસ્થિત કરવા માટે જરૂરી વિગતો જ એકત્રિત કરે છે. અમારા સુરત કાર્યાલયમાં અથવા ડિજિટલ માધ્યમથી શેર કરેલા તમામ દસ્તાવેજો પર કડક ગોપનીયતા ધોરણો લાગુ પડે છે.'
            : isHi
            ? 'CASE SUNO केवल आपकी स्थिति को समझने और दस्तावेजों को व्यवस्थित करने के लिए आवश्यक जानकारी ही एकत्र करता है। हमारे सूरत कार्यालय या डिजिटल माध्यम से साझा किए गए सभी विवरण सख्त गैर-प्रकटीकरण मानकों के तहत सुरक्षित रहते हैं।'
            : 'CASE SUNO collects only the necessary details required to understand your matter and organize your documentation. We maintain non-disclosure standards across all digital communication, telephone conferences, and physical documents shared with our team in Surat or virtually.',
        },
        {
          h: isGu
            ? '૨. દસ્તાવેજ સંભાળ અને સંગ્રહ'
            : isHi
            ? '२. दस्तावेज रखरखाव और सुरक्षित भंडारण'
            : '2. Document Handling and Storage',
          p: isGu
            ? 'ક્લાયન્ટ્સ દ્વારા શેર કરવામાં આવેલી ફાઇલો એન્ક્રિપ્ટેડ ડિજિટલ વોલ્ટમાં સુરક્ષિત રહે છે. અમે માર્કેટર્સ અથવા બિન-સંમત ત્રીજા પક્ષોને ક્યારેય ડેટા વેચતા કે શેર કરતા નથી.'
            : isHi
            ? 'ग्राहकों द्वारा साझा की गई फाइलें एन्क्रिप्टेड डिजिटल वॉल्ट में सुरक्षित रखी जाती हैं। हम कभी भी विपणक या अनधिकृत तीसरे पक्ष को डेटा नहीं बेचते और न ही साझा करते हैं।'
            : 'Documents and case files shared by users are encrypted and stored in secure digital vaults. Access is strictly limited to authorized intake coordinators handling your specific matter. We never sell or share data with marketers or non-consented third parties.',
        },
        {
          h: isGu
            ? '૩. ડેટા જાળવણી અને રદબાતલ'
            : isHi
            ? '३. डेटा प्रतिधारण और निष्कासन'
            : '3. Data Retention and Erasure',
          p: isGu
            ? 'સંકલન પૂર્ણ થયા પછી અથવા તમારી લેખિત વિનંતી પર, ભારતીય ડિજિટલ ડેટા સુરક્ષા નિયમો અનુસાર કેસ ફાઇલો અમારા રેકોર્ડમાંથી કાયમ માટે દૂર કરી શકાય છે.'
            : isHi
            ? 'समन्वय पूर्ण होने के उपरांत या आपके लिखित अनुरोध पर, भारतीय डिजिटल डेटा गोपनीयता नियमों के अनुसार केस फाइलें हमारे सक्रिय रिकॉर्ड से स्थायी रूप से हटाई जा सकती हैं।'
            : 'Upon completion of coordination or at your written request, case dossiers and personal records can be permanently expunged from our active records in compliance with applicable Indian digital data privacy regulations.',
        },
      ],
    },
    terms: {
      title: isGu ? 'નિયમો અને શરતો' : isHi ? 'नियम और शर्तें' : 'Terms & Conditions',
      kicker: isGu ? 'કાર્યકારી કરાર' : isHi ? 'परिचालन समझौता' : 'Operational Agreement',
      date: isGu ? 'અપડેટ: જાન્યુઆરી ૨૦૨૬' : isHi ? 'अद्यतित: जनवरी २०२६' : 'Updated: January 2026',
      sections: [
        {
          h: isGu
            ? '૧. પ્લેટફોર્મનું સ્વરૂપ અને કાર્યક્ષેત્ર'
            : isHi
            ? '१. मंच का स्वरूप एवं कार्यक्षेत्र'
            : '1. Nature of Platform & Scope',
          p: isGu
            ? 'CASE SUNO એક સલાહકાર સંકલન, દસ્તાવેજ માળખું અને પ્રક્રિયા સેતુ સેવા તરીકે કાર્ય કરે છે. જ્યાં સુધી તમે કોઈ સ્વતંત્ર વકીલ કે સીએ સાથે ઔપચારિક રીતે કરાર ન કરો ત્યાં સુધી CASE SUNO સાથેનું જોડાણ વકીલ-ક્લાયન્ટ સંબંધ સ્થાપિત કરતું નથી.'
            : isHi
            ? 'CASE SUNO एक सलाहकार समन्वय, दस्तावेज संरचना और प्रक्रिया सेतु सेवा के रूप में कार्य करता है। जब तक आप किसी स्वतंत्र अधिवक्ता या सीए से औपचारिक अनुबंध नहीं करते, तब तक CASE SUNO से संपर्क अधिवक्ता-क्लाइंट संबंध स्थापित नहीं करता।'
            : 'CASE SUNO operates as an advisory coordination, documentation structuring, and process liaison service. Engaging CASE SUNO does not constitute an attorney-client or statutory auditor relationship until and unless an independent advocate or chartered accountant is formally retained by you.',
        },
        {
          h: isGu
            ? '૨. એપોઇન્ટમેન્ટ અને રદ્દીકરણ નીતિ'
            : isHi
            ? '२. अपॉइंटमेंट एवं रद्दीकरण नीति'
            : '2. Appointment & Cancellation Policy',
          p: isGu
            ? 'સમય અન્ય ક્લાયન્ટ્સ માટે પણ ઉપલબ્ધ રહે તે માટે પુનઃનિર્ધારણ અથવા રદ્દીકરણ નિર્ધારિત સમયના ઓછામાં ઓછા ૪ કલાક પહેલાં જણાવવું જરૂરી છે.'
            : isHi
            ? 'अन्य ग्राहकों के समय की उपलब्धता सुनिश्चित करने के लिए, पुनर्निर्धारण या रद्दीकरण की सूचना निर्धारित समय से कम से कम ४ घंटे पूर्व दी जानी चाहिए।'
            : 'Appointments are reserved strictly for registered parties. Rescheduling or cancellations must be communicated at least 4 hours prior to the scheduled time to ensure available slots for other clients.',
        },
        {
          h: isGu
            ? '૩. જવાબદારીની મર્યાદા'
            : isHi
            ? '३. दायित्व की सीमा'
            : '3. Limitation of Liability',
          p: isGu
            ? 'CASE SUNO વ્યાવસાયિકોની પસંદગી અને ફાઇલ તૈયાર કરવામાં ઉચ્ચતમ કાળજી રાખે છે, પરંતુ કોઈપણ ન્યાયિક કે લવાદ મંચમાં પરિણામ કેસની કાયદાકીય યોગ્યતા અને ન્યાયાધીશના વિવેક પર નિર્ભર રહે છે.'
            : isHi
            ? 'यद्यपि CASE SUNO स्वतंत्र विशेषज्ञों की समीक्षा और फाइल तैयार करने में उच्चतम पेशेवर सावधानी बरतता है, न्यायिक या मध्यस्थता मंचों में परिणाम केस के कानूनी गुण-दोष और पीठासीन अधिकारी के विवेक पर निर्भर करते हैं।'
            : 'While CASE SUNO exercises highest professional care in vetting independent professionals and organizing dossiers, outcomes in judicial, quasi-judicial, or arbitral forums depend on statutory merits and judicial discretion.',
        },
      ],
    },
    disclaimer: {
      title: isGu ? 'નિયમનકારી ડિસ્ક્લેમર' : isHi ? 'नियामकीय अस्वीकरण (Disclaimer)' : 'Regulatory Disclaimer',
      kicker: isGu ? 'બાર કાઉન્સિલ અને કાનૂની પાલન' : isHi ? 'बार काउंसिल एवं विधिक अनुपालन' : 'Bar Council & Regulatory Compliance',
      date: isGu ? 'અપડેટ: જાન્યુઆરી ૨૦૨૬' : isHi ? 'अद्यतित: जनवरी २०२६' : 'Updated: January 2026',
      sections: [
        {
          h: isGu
            ? '૧. બાર કાઉન્સિલ ઓફ ઈન્ડિયા નિયમોનું પાલન'
            : isHi
            ? '१. बार काउंसिल ऑफ इंडिया के नियमों का अनुपालन'
            : '1. Compliance with Bar Council of India Rules',
          p: isGu
            ? 'બાર કાઉન્સિલ ઓફ ઈન્ડિયાના નિયમો મુજબ વકીલો માટે જાહેરાત કે પ્રચાર કરવો સખત પ્રતિબંધિત છે. CASE SUNO એ સ્વતંત્ર કેસ મેનેજમેન્ટ અને વહીવટી સંકલન સંસ્થા છે.'
            : isHi
            ? 'बार काउंसिल ऑफ इंडिया के नियमों के अनुसार अधिवक्ताओं द्वारा किसी भी रूप में कार्य या विज्ञापन का प्रचार करना पूर्णतः प्रतिबंधित है। CASE SUNO एक स्वतंत्र केस प्रबंधन एवं प्रशासनिक समन्वय संस्था है।'
            : 'As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising in any form or manner. CASE SUNO is an independent case management and administrative coordination organization.',
        },
        {
          h: isGu
            ? '૨. અદાલતમાં સીધું પ્રતિનિધિત્વ નહીં'
            : isHi
            ? '२. न्यायालय में सीधा प्रतिनिधित्व नहीं'
            : '2. No Direct Legal Representation',
          p: isGu
            ? 'આ વેબસાઇટ કાનૂની જાહેરાત અથવા ક્લાયન્ટ શોધવાનો સ્ત્રોત નથી. અહીં પૂરી પાડવામાં આવેલ માહિતી ફક્ત જાણકારી માટે છે અને તેને કાયદાકીય સલાહ તરીકે ગણવી નહીં.'
            : isHi
            ? 'यह वेबसाइट कानूनी विज्ञापन या वकालत प्रचार का स्रोत नहीं है। यहां दी गई जानकारी केवल सूचनात्मक और मार्गदर्शक उद्देश्यों के लिए है और इसे अंतिम विधिक सलाह न समझा जाए।'
            : 'This website is not intended to be a source of legal advertising or solicitation. The information provided herein is for informational and educational purposes only and should not be construed as legal advice.',
        },
        {
          h: isGu
            ? '૩. સ્વતંત્ર વ્યાવસાયિક સંબંધ'
            : isHi
            ? '३. स्वतंत्र पेशेवर संबंध'
            : '3. Independent Professional Relationship',
          p: isGu
            ? 'ક્લાયન્ટ જે કોઈપણ સ્વતંત્ર વકીલ કે સીએ સાથે જોડાય છે, તેઓ પોતાની સ્વતંત્ર ક્ષમતામાં કામ કરે છે અને સંબંધિત સંસ્થાના નિયમો મુજબ સીધો સંબંધ સ્થાપિત કરે છે.'
            : isHi
            ? 'कोई भी स्वतंत्र अधिवक्ता, सीए या सर्वेक्षक जिनसे क्लाइंट का परिचय कराया जाता है, वे अपनी स्वतंत्र पेशेवर क्षमता में कार्य करते हैं और संबंधित सांविधिक संस्था के नियमों के तहत सीधा संबंध स्थापित करते हैं।'
            : 'Any independent advocate, CA, or surveyor to whom a client is introduced operates in their independent professional capacity and enters into a direct, privileged client relationship under their respective statutory bar or institute rules.',
        },
      ],
    },
  };

  const activeContent = contentMap[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#DDD6C8] rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E8E4DB] bg-white">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C8479] uppercase block">
              {activeContent.kicker}
            </span>
            <h3
              className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {activeContent.title}
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

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-xs text-[#524E46] leading-relaxed">
          <p className="text-[11px] text-[#8C8479] font-mono">{activeContent.date}</p>
          {activeContent.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4
                className={`text-sm sm:text-base font-semibold text-[#1E1D1A] ${
                  isGu || isHi ? 'font-sans' : 'font-serif'
                }`}
              >
                {sec.h}
              </h4>
              <p>{sec.p}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-[#E8E4DB] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-[#1F1E1B] text-white text-xs font-medium rounded-sm cursor-pointer"
          >
            {isGu ? 'હું સમજું છું' : isHi ? 'मैं समझता/समझती हूँ' : 'I Understand'}
          </button>
        </div>
      </div>
    </div>
  );
};
