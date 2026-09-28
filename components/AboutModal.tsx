import React from 'react';
import { X, ArrowRight, ShieldCheck, HeartHandshake, Eye, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEnquiry: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onStartEnquiry,
}) => {
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  if (!isOpen) return null;

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
              {isGu ? 'અમારી વાર્તા અને વિચારધારા' : isHi ? 'हमारी कहानी और विचार' : 'Our Story & Philosophy'}
            </span>
            <h3
              className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {isGu ? 'CASE SUNO વિશે' : isHi ? 'CASE SUNO के बारे में' : 'About CASE SUNO'}
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

        {/* Story Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6 text-[#3D3A33]">
          {/* Opening Statement */}
          <div className="p-4 sm:p-5 bg-[#F4EFE6] border-l-2 border-[#1E1D1A] rounded-r-xs">
            <p
              className={`text-lg sm:text-2xl text-[#1E1D1A] italic leading-snug ${
                isGu || isHi ? 'font-sans not-italic font-medium' : 'font-serif'
              }`}
            >
              {isGu
                ? '“તમારી પાસે કદાચ હંમેશા જવાબો ન હોય. પરંતુ તમે હંમેશા આગલું પગલું ભરી શકો છો. CASE SUNO એના માટે જ હાજર છે.”'
                : isHi
                ? '“हो सकता है आपके पास हमेशा सभी उत्तर न हों। लेकिन आप हमेशा अगला कदम उठा सकते हैं। CASE SUNO इसी के लिए उपस्थित है।”'
                : '“You may not always know the answers. But you can always take the next step. That\'s what CASE SUNO is here for.”'}
            </p>
          </div>

          {/* Narrative */}
<div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#524E46] leading-relaxed">
  <h4
    className={`text-lg sm:text-xl text-[#1E1D1A] ${
      isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
    }`}
  >
    {isGu
      ? 'અમે શા માટે શરૂઆત કરી'
      : isHi
      ? 'हमने शुरुआत क्यों की'
      : 'Why We Started'}
  </h4>

  <p>
    {isGu
      ? 'વ્યક્તિઓ, પરિવારો અને વ્યવસાયિકો ઘણીવાર અણધારી કાનૂની નોટિસ, મિલકતની અસ્પષ્ટતા, વારસાઈ વહેંચણી અને વેપારી મતભેદોનો સામનો કરતા હોય છે.'
      : isHi
      ? 'व्यक्ति, परिवार और व्यवसायी अक्सर अप्रत्याशित कानूनी नोटिस, संपत्ति की अस्पष्टता, पारिवारिक समझौते और व्यावसायिक मतभेदों का सामना करते हैं।'
      : 'Individuals, families, and business owners often face unexpected legal notices, property ambiguities, family settlements, and commercial disagreements.'}
  </p>

  <p>
    {isGu
      ? 'મોટેભાગે, સૌથી મોટો અવરોધ વિવાદ નથી હોતો—પરંતુ શરૂઆતની મૂંઝવણ હોય છે: મારે ક્યાં જવું? કોના પર વિશ્વાસ કરવો? કયા કાગળોની જરૂર પડશે? શું વધારે ફી વસૂલવામાં આવશે?'
      : isHi
      ? 'अक्सर सबसे बड़ी बाधा विवाद नहीं होता—बल्कि प्रारंभिक भ्रम और असमंजस होता है: मुझे कहाँ जाना चाहिए? किस पर भरोसा करें? किन दस्तावेजों की आवश्यकता होगी? क्या अत्यधिक शुल्क लिया जाएगा?'
      : "Often, the hardest hurdle isn't the legal dispute itself—it's the initial paralysis. Where do I go? Who can I trust? Will I get overcharged? What documents do I actually need?"}
  </p>

  <p>
    {isGu ? (
      <>
        <strong>CASE SUNO</strong> ની સ્થાપના એક જ સ્પષ્ટ હેતુ સાથે થઈ છે:
        મૂંઝવણ અને પ્રગતિ વચ્ચેનો શાંત, વ્યવસ્થિત સેતુ બનવું. અમે કાયદાકીય
        તકરારોને પ્રોત્સાહન આપતા નથી. અમે તમારી વાત સાંભળીએ છીએ, કાગળો
        વ્યવસ્થિત કરીએ છીએ, વાસ્તવિક વિકલ્પો સ્પષ્ટ કરીએ છીએ અને જરૂર જણાય
        ત્યારે જ સ્વતંત્ર વ્યાવસાયિકો સાથે જોડીએ છીએ.
      </>
    ) : isHi ? (
      <>
        <strong>CASE SUNO</strong> की स्थापना एक स्पष्ट उद्देश्य के साथ हुई है:
        असमंजस और समाधान के बीच एक शांत, व्यवस्थित सेतु बनना। हम अनावश्यक
        विवादों को बढ़ावा नहीं देते। हम आपकी बात सुनते हैं, कागजात व्यवस्थित
        करते हैं, व्यावहारिक विकल्प स्पष्ट करते हैं और जरूरत पड़ने पर ही
        स्वतंत्र विशेषज्ञों से संपर्क कराते हैं।
      </>
    ) : (
      <>
        <strong>CASE SUNO</strong> was founded with a singular, quiet purpose:
        to be the calm, structured bridge between confusion and progress. We do
        not solicit litigation. Instead, we listen deeply, organize your
        paperwork, clarify realistic options, and introduce you to verified,
        independent professionals only when necessary.
      </>
    )}
  </p>
</div>

          {/* Core Operating Principles */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8479]">
              {isGu ? 'અમારી મુખ્ય પ્રતિબદ્ધતાઓ' : isHi ? 'हमारी मुख्य प्रतिबद्धताएं' : 'Our Guiding Commitments'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-white border border-[#E8E4DB] rounded-sm text-xs">
                <ShieldCheck className="w-4 h-4 text-[#73634B] mb-2" />
                <span className="font-semibold block text-[#1E1D1A]">
                  {isGu ? 'સંપૂર્ણ ગોપનીયતા' : isHi ? 'पूर्ण गोपनीयता' : 'Absolute Privacy'}
                </span>
                <span className="text-[#6E685D] mt-1 block">
                  {isGu
                    ? 'તમારી પરિસ્થિતિ સંપૂર્ણ ખાનગી અને સુરક્ષિત રહે છે.'
                    : isHi
                    ? 'आपकी स्थिति पूर्णतः निजी और सुरक्षित रहती है।'
                    : 'Your situation stays strictly confidential and unshared.'}
                </span>
              </div>

              <div className="p-3.5 bg-white border border-[#E8E4DB] rounded-sm text-xs">
                <Eye className="w-4 h-4 text-[#73634B] mb-2" />
                <span className="font-semibold block text-[#1E1D1A]">
                  {isGu ? 'શૂન્ય છુપી ફી' : isHi ? 'कोई छिपा शुल्क नहीं' : 'Zero Hidden Fees'}
                </span>
                <span className="text-[#6E685D] mt-1 block">
                  {isGu
                    ? 'પારદર્શક કિંમતો, કોઈ અણધાર્યા ખર્ચ નહીં.'
                    : isHi
                    ? 'पारदर्शी शुल्क, कोई अप्रत्याशित खर्च नहीं।'
                    : 'Clear upfront costs with no misleading retainers.'}
                </span>
              </div>

              <div className="p-3.5 bg-white border border-[#E8E4DB] rounded-sm text-xs">
                <HeartHandshake className="w-4 h-4 text-[#73634B] mb-2" />
                <span className="font-semibold block text-[#1E1D1A]">
                  {isGu ? 'સ્વતંત્ર ચકાસણી' : isHi ? 'सत्यापित विशेषज्ञ' : 'Independent Vetting'}
                </span>
                <span className="text-[#6E685D] mt-1 block">
                  {isGu
                    ? 'લાયકાત અને યોગ્યતાના આધારે જ નિષ્ણાતો સાથે જોડાણ.'
                    : isHi
                    ? 'योग्यता और अनुभव के आधार पर ही विशेषज्ञों से परिचय।'
                    : 'Referrals based on merit, competence, and your exact case fit.'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-[#E8E4DB] bg-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#D9D3C7] text-xs text-[#5C564C] rounded-sm hover:text-black cursor-pointer"
          >
            {isGu ? 'બંધ કરો' : isHi ? 'बंद करें' : 'Close'}
          </button>
          <button
            onClick={() => {
              onClose();
              onStartEnquiry();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm transition-all cursor-pointer"
          >
            <span>{isGu ? 'પૂછપરછ શરૂ કરો' : isHi ? 'अपनी पूछताछ शुरू करें' : 'Start Your Enquiry'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
