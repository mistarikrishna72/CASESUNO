"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  X,
  User,
  Scale,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type Role = "user" | "professional";
type Mode = "login" | "signup";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({
  isOpen,
  onClose,
}: GetStartedModalProps) {
  const [role, setRole] = useState<Role | null>(null);
  const [mode, setMode] = useState<Mode>("login");
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useLanguage();

  /**
   * Lock background page scrolling while modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[3px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 my-auto flex w-full max-w-[900px] max-h-[calc(100dvh-32px)] overflow-y-auto overflow-x-hidden rounded-[24px] bg-[#FAF9F6] shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full text-[#1F1F1F]/60 transition hover:bg-black/5 hover:text-[#1F1F1F]"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* LEFT SIDE */}
        <div className="flex w-[44%] flex-col justify-between border-r border-[#DEDCD4] px-8 py-10 max-md:hidden">
          <div>
            {/* Logo */}
            <img
              src="../logo.png"
              alt="CASE SUNO"
              className="mb-8 h-18 w-auto"
            />

            <h2 className="font-serif text-[38px] leading-[1.08] text-[#1F1F1F] font-extrabold">
              {t.auth.getStarted}
            </h2>

            <p className="mt-5 max-w-[280px] text-[14px] leading-6 text-[#6B6B6B]">
              {t.auth.chooseAccount}
            </p>
          </div>

          <div className="mt-10">
            <div className="mb-3 h-px w-10 bg-[#1F5C50]" />

            <p className="font-serif text-[17px] italic text-[#1F5C50]">
              {t.auth.trustedSupport}
              <br />
              {t.auth.legalJourney}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 px-10 py-10 max-md:px-6 max-md:py-8">
          {!role ? (
            /* ROLE SELECTION */
            <div>
              <h1 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                {t.auth.howCanWeHelp}
              </h1>

              <p className="mt-2 text-[14px] text-[#6B6B6B]">
                {t.auth.selectAccount}
              </p>

              <div className="mt-8 space-y-4">
                {/* USER */}
                <button
                  onClick={() => setRole("user")}
                  className="group flex w-full items-center gap-5 rounded-[16px] border border-[#D8D6CD] bg-white p-5 text-left transition-all duration-200 hover:border-[#1F5C50] hover:bg-[#F4F7F3]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F0EB] text-[#1F5C50]">
                    <User size={21} strokeWidth={1.7} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[16px] font-medium text-[#1F1F1F]">
                      {t.auth.user}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-[#77756E]">
                      {t.auth.userDescription}
                    </p>
                  </div>

                  <ArrowRight
                    size={19}
                    className="text-[#77756E] transition-transform group-hover:translate-x-1 group-hover:text-[#1F5C50]"
                  />
                </button>

                {/* PROFESSIONAL */}
                <button
                  onClick={() => setRole("professional")}
                  className="group flex w-full items-center gap-5 rounded-[16px] border border-[#D8D6CD] bg-white p-5 text-left transition-all duration-200 hover:border-[#1F5C50] hover:bg-[#F4F7F3]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3EEDC] text-[#806C29]">
                    <Scale size={21} strokeWidth={1.7} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[16px] font-medium text-[#1F1F1F]">
                      {t.auth.professional}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-[#77756E]">
                      {t.auth.professionalDescription}
                    </p>
                  </div>

                  <ArrowRight
                    size={19}
                    className="text-[#77756E] transition-transform group-hover:translate-x-1 group-hover:text-[#1F5C50]"
                  />
                </button>
              </div>
            </div>
          ) : (
            /* AUTH FORM */
            <div>
              {/* Tabs */}
              <div className="mb-8 flex border-b border-[#DDDAD1]">
                <button
                  onClick={() => setMode("login")}
                  className={`relative w-1/2 pb-3 text-[14px] font-medium transition ${
                    mode === "login"
                      ? "text-[#1F5C50]"
                      : "text-[#77756E]"
                  }`}
                >
                  {t.auth.login}

                  {mode === "login" && (
                    <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#1F5C50]" />
                  )}
                </button>

                <button
                  onClick={() => setMode("signup")}
                  className={`relative w-1/2 pb-3 text-[14px] font-medium transition ${
                    mode === "signup"
                      ? "text-[#1F5C50]"
                      : "text-[#77756E]"
                  }`}
                >
                  {t.auth.signup}

                  {mode === "signup" && (
                    <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#1F5C50]" />
                  )}
                </button>
              </div>

              {/* TITLE */}
              <h1 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                {mode === "login"
                  ? t.auth.welcomeBack
                  : t.auth.createYourAccount}
              </h1>

              {/* SUBTITLE */}
              <p className="mt-2 text-[14px] text-[#6B6B6B]">
                {mode === "login"
                  ? role === "user"
                    ? t.auth.loginAsUser
                    : t.auth.loginAsProfessional
                  : role === "user"
                    ? t.auth.createUserAccount
                    : t.auth.createProfessionalAccount}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="mt-7 space-y-4"
              >
                {/* SIGNUP NAME */}
                {mode === "signup" && (
                  <div>
                    <label className="mb-2 block text-[12px] font-medium text-[#333]">
                      {t.auth.fullName}
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8982]"
                      />

                      <input
                        type="text"
                        placeholder={t.auth.enterFullName}
                        className="h-[48px] w-full rounded-[10px] border border-[#D8D6CD] bg-white pl-11 pr-4 text-[13px] outline-none transition focus:border-[#1F5C50] focus:ring-2 focus:ring-[#1F5C50]/10"
                      />
                    </div>
                  </div>
                )}

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-[12px] font-medium text-[#333]">
                    {t.auth.emailAddress}
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8982]"
                    />

                    <input
                      type="email"
                      placeholder={t.auth.enterEmail}
                      className="h-[48px] w-full rounded-[10px] border border-[#D8D6CD] bg-white pl-11 pr-4 text-[13px] outline-none transition focus:border-[#1F5C50] focus:ring-2 focus:ring-[#1F5C50]/10"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-[12px] font-medium text-[#333]">
                    {t.auth.password}
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8982]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={t.auth.enterPassword}
                      className="h-[48px] w-full rounded-[10px] border border-[#D8D6CD] bg-white pl-11 pr-12 text-[13px] outline-none transition focus:border-[#1F5C50] focus:ring-2 focus:ring-[#1F5C50]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#88867F] hover:text-[#1F1F1F]"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* PROFESSIONAL NOTE */}
                {mode === "signup" && role === "professional" && (
                  <div className="rounded-[10px] border border-[#E4DDC4] bg-[#F7F3E6] p-3 text-[12px] leading-5 text-[#6D633F]">
                    {t.auth.professionalVerification}
                  </div>
                )}

                {/* REMEMBER / FORGOT */}
                {mode === "login" && (
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-[12px] text-[#6B6B6B]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#CCC9BF] accent-[#1F5C50]"
                      />

                      {t.auth.rememberMe}
                    </label>

                    <button
                      type="button"
                      className="text-[12px] font-medium text-[#1F5C50] hover:underline"
                    >
                      {t.auth.forgotPassword}
                    </button>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="flex h-[50px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#1F1F1F] text-[14px] font-medium text-white transition hover:bg-[#1F5C50]"
                >
                  {mode === "login"
                    ? t.auth.login
                    : t.auth.createAccount}

                  <ArrowRight size={17} />
                </button>

                {/* DIVIDER */}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-[#DDDAD1]" />

                  <span className="text-[11px] text-[#99968D]">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-[#DDDAD1]" />
                </div>

                {/* GOOGLE */}
                <button
                  type="button"
                  className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[10px] border border-[#D8D6CD] bg-white text-[13px] font-medium text-[#333] transition hover:bg-[#F7F6F1]"
                >
                  <span className="h-5">
                    <img
                      src="../google.svg"
                      className="h-full w-full"
                      alt="Google"
                    />
                  </span>

                  {t.auth.continueGoogle}
                </button>

                {/* SWITCH */}
                <p className="pt-2 text-center text-[12px] text-[#77756E]">
                  {mode === "login"
                    ? t.auth.noAccount
                    : t.auth.alreadyAccount}{" "}

                  <button
                    type="button"
                    onClick={() =>
                      setMode(
                        mode === "login"
                          ? "signup"
                          : "login",
                      )
                    }
                    className="font-medium text-[#1F5C50] hover:underline"
                  >
                    {mode === "login"
                      ? t.auth.signUp
                      : t.auth.login}
                  </button>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}