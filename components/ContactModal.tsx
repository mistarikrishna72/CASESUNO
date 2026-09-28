import React, { useState } from 'react';
import { X, ArrowRight, MapPin, Phone, Mail, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEnquiry: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onStartEnquiry,
}) => {
  const [booked, setBooked] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const { language } = useLanguage();
  const isGu = language === 'gu';
  const isHi = language === 'hi';

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
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
              {isGu ? 'સીધી સહાય અને એપોઇન્ટમેન્ટ' : isHi ? 'सीधी सहायता और अपॉइंटमेंट' : 'Direct Assistance & Appointments'}
            </span>
            <h3
              className={`text-xl sm:text-2xl text-[#1E1D1A] ${
                isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
              }`}
            >
              {isGu ? 'CASE SUNO નો સંપર્ક કરો' : isHi ? 'CASE SUNO से संपर्क करें' : 'Contact CASE SUNO'}
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
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Office Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 bg-white border border-[#E8E4DB] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#7A6B52] font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{isGu ? 'સુરત ઓફિસ' : isHi ? 'सूरत कार्यालय' : 'Surat Office'}</span>
              </div>
              <p className="text-xs text-[#2A2824] font-medium leading-relaxed">
                {isGu
                  ? '૪૦૨, ટાઈટેનિયમ સ્ક્વેર, રીંગ રોડ પાસે, અઠવા લાઇન્સ, સુરત, ગુજરાત ૩૯૫૦૦૭'
                  : isHi
                  ? '४०२, टाइटेनियम स्क्वायर, रिंग रोड के पास, अठवा लाइन्स, सूरत, गुजरात ३९५००७'
                  : '402, Titanium Square, Near Ring Road, Athwa Lines, Surat, Gujarat 395007'}
              </p>
              <p className="text-[11px] text-[#787268]">
                {isGu
                  ? '* મુલાકાત સંપૂર્ણપણે એપોઇન્ટમેન્ટ આધારિત છે જેથી ક્લાયન્ટની ગોપનીયતા જળવાય.'
                  : isHi
                  ? '* क्लाइंट गोपनीयता बनाए रखने के लिए मुलाकातें पूर्णतः अपॉइंटमेंट आधारित हैं।'
                  : '* Visits are strictly appointment-based to ensure privacy.'}
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E8E4DB] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#7A6B52] font-semibold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{isGu ? 'પરામર્શ સમય' : isHi ? 'परामर्श समय' : 'Assistance Hours'}</span>
              </div>
              <p className="text-xs text-[#2A2824] leading-relaxed">
                {isGu
                  ? 'સોમવાર – શનિવાર: સવારે ૧૦:૦૦ થી સાંજે ૭:૦૦ IST'
                  : isHi
                  ? 'सोमवार – शनिवार: सुबह १०:०० से शाम ७:०० IST'
                  : 'Monday – Saturday: 10:00 AM – 7:00 PM IST'}
              </p>
              <p className="text-[11px] text-[#787268]">
                {isGu
                  ? 'રવિવાર: વિશેષ વિનંતી પર વર્ચ્યુઅલ સહાય'
                  : isHi
                  ? 'रविवार: विशेष अनुरोध पर वर्चुअल परामर्श'
                  : 'Sunday: Emergency virtual intake by request'}
              </p>
            </div>
          </div>

          {/* Quick Communication Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a
              href="tel:+919876543210"
              className="p-3 bg-white border border-[#E8E4DB] rounded-sm flex items-center gap-3 hover:border-[#1E1D1A] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#F5F1E8] flex items-center justify-center text-[#4A443B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-medium text-[#1E1D1A]">+91 98765 43210</span>
                <span className="block text-[11px] text-[#7A7468]">
                  {isGu ? 'સુરત હેલ્પડેસ્ક' : isHi ? 'सूरत सहायता केंद्र' : 'Surat Intake Desk'}
                </span>
              </div>
            </a>

            <a
              href="mailto:help@casesuno.com"
              className="p-3 bg-white border border-[#E8E4DB] rounded-sm flex items-center gap-3 hover:border-[#1E1D1A] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#F5F1E8] flex items-center justify-center text-[#4A443B]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-medium text-[#1E1D1A]">help@casesuno.com</span>
                <span className="block text-[11px] text-[#7A7468]">
                  {isGu ? 'ગોપનીય દસ્તાવેજ મેઇલ' : isHi ? 'गोपनीय दस्तावेज ईमेल' : 'Confidential Dossiers'}
                </span>
              </div>
            </a>
          </div>

          {/* Quick Appointment Schedule Box */}
          <div className="p-4 sm:p-5 bg-white border border-[#DDD6C8] rounded-sm space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8C8479]" />
              <h4
                className={`text-base sm:text-lg text-[#1E1D1A] ${
                  isGu || isHi ? 'font-sans font-semibold' : 'font-serif'
                }`}
              >
                {isGu
                  ? 'એપોઇન્ટમેન્ટ સ્લોટ માટે વિનંતી કરો'
                  : isHi
                  ? 'अपॉइंटमेंट स्लॉट के लिए अनुरोध करें'
                  : 'Request an Appointment Slot'}
              </h4>
            </div>

            {booked ? (
              <div className="p-4 bg-[#EEF5EC] border border-[#CDE3C9] rounded-sm text-xs text-[#2E682A] flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-sm">
                    {isGu ? 'વિનંતી પ્રાપ્ત થઈ છે!' : isHi ? 'अनुरोध प्राप्त हुआ!' : 'Slot Request Received!'}
                  </span>
                  <span>
                    {isGu
                      ? `અમારા કોઓર્ડિનેટર તમારા અનુકૂળ સમય (${preferredDate || 'આગામી સ્લોટ'}) ની પુષ્ટિ કરવા માટે ${contactName || 'તમને'} ${contactPhone} પર સંપર્ક કરશે.`
                      : isHi
                      ? `हमारे समन्वयक आपके पसंदीदा समय (${preferredDate || 'आगामी स्लॉट'}) की पुष्टि के लिए ${contactName || 'आपसे'} ${contactPhone} पर संपर्क करेंगे।`
                      : `Our case coordinator will confirm your preferred timing (${preferredDate || 'Upcoming opening'}) with ${contactName || 'you'} at ${contactPhone}.`}
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4A453C] mb-1">
                      {isGu ? 'તમારું નામ *' : isHi ? 'आपका नाम *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder={isGu ? 'દા.ત. અમિત દેસાઈ' : isHi ? 'उदा. अमित देसाई' : 'e.g. Amit Desai'}
                      className="w-full p-2 text-xs bg-[#FAF9F6] border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#4A453C] mb-1">
                      {isGu ? 'ફોન નંબર *' : isHi ? 'फ़ोन नंबर *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 9825..."
                      className="w-full p-2 text-xs bg-[#FAF9F6] border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#4A453C] mb-1">
                      {isGu ? 'પસંદગીની તારીખ' : isHi ? 'पसंदीदा तारीख' : 'Preferred Date'}
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full p-2 text-xs bg-[#FAF9F6] border border-[#D5CFBF] rounded-sm text-[#1E1D1A]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm transition-all cursor-pointer"
                  >
                    {isGu
                      ? 'એપોઇન્ટમેન્ટ વિનંતી કન્ફર્મ કરો'
                      : isHi
                      ? 'अपॉइंटमेंट अनुरोध की पुष्टि करें'
                      : 'Confirm Appointment Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-[#E8E4DB] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 border border-[#D9D3C7] text-xs text-[#5C564C] rounded-sm hover:text-black cursor-pointer"
          >
            {isGu ? 'બંધ કરો' : isHi ? 'बंद करें' : 'Close'}
          </button>
          <button
            onClick={() => {
              onClose();
              onStartEnquiry();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#1F1E1B] hover:bg-[#33312B] text-white text-xs font-medium rounded-sm cursor-pointer"
          >
            <span>{isGu ? 'વિસ્તૃત કેસ બ્રીફ ભરો' : isHi ? 'विस्तृत केस विवरण भरें' : 'Fill Detailed Case Brief'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
