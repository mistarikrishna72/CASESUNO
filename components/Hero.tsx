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
  hi: "/images/heroH.webp",
  gu: "/images/heroG.webp",
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

                <span className="leading-none text-[10px] font-extrabold">{t.hero.kicker}</span>
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
              <div className="pt-1 sm:pt-2">
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
