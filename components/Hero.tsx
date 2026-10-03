import React from "react";
import { ArrowRight, ShieldCheck, CheckSquare, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onOpenEnquiry: () => void;
  onOpenLocationInfo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenLocationInfo,
}) => {
  const { t, language } = useLanguage();

  const isIndic = language === "gu" || language === "hi";

  const heroImages = {
    en: "/images/hero2.webp",
    hi: "/images/hindiHero.png",
    gu: "/images/gujHero.png",
  };

  const heroImage = heroImages[language] ?? heroImages.en;

  return (
    <section
      id="home"
      className="
        relative isolate w-full overflow-hidden
        bg-[#FAF9F6]
        min-h-[calc(100dvh-72px)]
        sm:min-h-[calc(100dvh-80px)]
        lg:min-h-[calc(100dvh-88px)]
      "
    >
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-no-repeat
          bg-cover
          bg-center
          sm:bg-center
        "
        style={{
          backgroundImage: 'url("/images/hero-bg.webp")',
        }}
        // style={{
        //   backgroundImage: `url("${heroImage}")`,
        // }}
      />

      {/* Optional subtle overlay for text readability */}
      <div
        aria-hidden="true"
        className="
    absolute inset-0 -z-[5]
    pointer-events-none
  "
      />

      <div
        className="
          relative
          w-full max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          min-h-[calc(100dvh-72px)]
          sm:min-h-[calc(100dvh-80px)]
          lg:min-h-[calc(100dvh-88px)]
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            lg:gap-10
            xl:gap-16
            py-10
            sm:py-12
            md:py-16
            lg:py-14
            xl:py-16
          "
        >
          {/* =========================
              LEFT / MAIN CONTENT
          ========================== */}
          <div
            className="
              w-[100%]
              lg:col-span-6
              xl:col-span-5
              flex
              flex-col
              justify-center
              min-w-0
            "
          >
            <div
              className="
               sm
               sm:w-full
                space-y-5
                sm:space-y-6
                md:space-y-7
              "
            >
              {/* Kicker */}
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[10px]
                  sm:text-xs
                  font-extrabold
                  tracking-[0.18em]
                  sm:tracking-[0.2em]
                  text-[#5F5E58]
                  uppercase
                "
              >
                <span
                  className="w-5 sm:w-6 h-px bg-[#7A746A] shrink-0"
                  aria-hidden="true"
                />

                <span className="leading-none text-[10px] font-extrabold">
                  {t.hero.kicker}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`
                  w-full
                  max-w-[720px]
                  text-[2.25rem]
                  leading-[1.08]
                  sm:text-5xl
                  sm:leading-[1.08]
                  md:text-[3.4rem]
                  lg:text-[3.35rem]
                  xl:text-[3.55rem]
                  font-medium
                  tracking-tight
                  text-[#171613]
                  text-balance
                  ${isIndic ? "font-sans font-semibold" : "font-serif"}
                `}
              >
                <span>{t.hero.titleLine1}</span>
                <br />
                <span>{t.hero.titleLine2}</span>
                <br />
                <span>{t.hero.titleLine3}</span>
                <br />
                <span>{t.hero.titleLine4}</span>
              </h1>

              {/* Description */}
              <p
                className="
                  max-w-[620px]
                  text-[14px]
                  sm:text-[15px]
                  md:text-base
                  leading-[1.7]
                  font-extrabold
                  text-[#3F3F3B]
                "
              >
                {t.hero.desc}
              </p>

              {/* CTA */}
              <div className="pt-1 sm:pt-2 flex gap-5 sm:flex-row flex-col items-start sm:items-start">
                {/* Enquiry CTA */}
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="
                    group
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-6
                    sm:px-7
                    py-3.5
                    sm:py-4
                    bg-[#1F1E1B]
                    hover:bg-[#33312B]
                    text-white
                    text-[13px]
                    sm:text-[14px]
                    font-medium
                    tracking-wide
                    rounded-sm
                    transition-all
                    duration-200
                    active:scale-[0.98]
                    shadow-sm
                    cursor-pointer
                  "
                >
                  <span>{t.hero.ctaPrimary}</span>

                  <ArrowRight
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </button>
                {/* WhatsApp CTA */}
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/918000784778?text=Hello%20CASE%20SUNO%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
                      "_blank",
                    )
                  }
                  className="group
                  bg-[#1F5C50] 
                  hover:bg-[#174A41]
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-6
                    sm:px-7
                    py-3.5
                    sm:py-4
                    text-white
                    text-[13px]
                    sm:text-[14px]
                    font-medium
                    tracking-wide
                    rounded-sm
                    transition-all
                    duration-200
                    active:scale-[0.98]
                    shadow-sm
                    cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.49 0 .16 5.33.16 11.88c0 2.09.55 4.13 1.6 5.92L.05 24l6.35-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.41-8.41Zm-8.47 18.32h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.9 9.9 0 1 1 8.39 4.65Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* =========================
                TRUST BADGES
            ========================== */}
            <div
              className="
                mt-10
                sm:mt-12
                lg:mt-16
                pt-5
                sm:pt-6
                border-t
                border-[#D9D3C7]/70
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                  sm:gap-3
                  lg:gap-4
                "
              >
                {/* Badge 1 */}
                <div className="flex items-center sm:items-start gap-2.5 min-w-0">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[#D9D3C7]
                      bg-[#F4F1EA]/90
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-[#6B6459]
                    "
                  >
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeConfidential}
                    </span>

                    <span className="block mt-0.5 text-[11px] sm:text-xs text-[#787268] leading-tight">
                      {t.hero.badgeConfidentialSub}
                    </span>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center sm:items-start gap-2.5 min-w-0">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[#D9D3C7]
                      bg-[#F4F1EA]/90
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-[#6B6459]
                    "
                  >
                    <CheckSquare className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeTransparent}
                    </span>

                    <span className="block mt-0.5 text-[11px] sm:text-xs text-[#787268] leading-tight">
                      {t.hero.badgeTransparentSub}
                    </span>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-center sm:items-start gap-2.5 min-w-0">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[#D9D3C7]
                      bg-[#F4F1EA]/90
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-[#6B6459]
                    "
                  >
                    <Calendar className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-[#2C2A26] leading-tight">
                      {t.hero.badgeOnline}
                    </span>

                    <span className="block mt-0.5 text-[11px] sm:text-xs text-[#787268] leading-tight">
                      {t.hero.badgeOnlineSub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL SPACE
          ========================== */}
          <div
            className="
              hidden
              lg:flex
              lg:col-span-6
              xl:col-span-7
              relative
              min-h-[520px]
              items-center
              justify-center
            "
          >
            {/* Reserved for hero visual / image / cards */}
          </div>
        </div>
      </div>
    </section>
  );
};
