(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-client] (ecmascript)");
'use client';
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const translations = {
    en: {
        nav: {
            home: "Home",
            howItWorks: "How It Works",
            services: "Services",
            about: "About",
            resources: "Resources",
            faq: "FAQ",
            contact: "Contact",
            getStarted: "Get Started"
        },
        hero: {
            kicker: "Personal • Business • Documentation • Case Assistance",
            titleLine1: "Have a Legal Problem?",
            titleLine2: "Bring It to Us.",
            titleLine3: "We'll Help You to",
            titleLine4: "Figure It Out.",
            desc: "CASE SUNO helps you understand your legal problem and find the right help.",
            ctaPrimary: "Start Your Enquiry",
            badgeConfidential: "Confidential",
            badgeConfidentialSub: "& Secure",
            badgeTransparent: "Transparent",
            badgeTransparentSub: "Process",
            badgeOnline: "Online &",
            badgeOnlineSub: "Appointment-Based",
            locationSub: "Online & Appointment-Based Assistance",
            mantra: [
                "People",
                "Problems",
                "Processes",
                "Progress"
            ]
        },
        services: {
            kicker: 'Our Services',
            title: 'Support Across Real-Life Situations',
            desc: 'From personal matters to business operations, CASE SUNO helps you understand your options and connect with the right professionals, where required.',
            viewAll: 'View All Services',
            learnMore: 'Learn More',
            items: [
                {
                    id: 'notice-summons-court-case',
                    title: 'Notice, Summons & Court / Case',
                    shortDesc: 'Guidance for legal notices, summons, court matters and ongoing cases.',
                    overview: 'If you have received a legal notice, summons, court communication, or are already involved in a case, CASE SUNO helps you understand the situation, organise the relevant information and identify the appropriate next step.',
                    whatWeDo: [
                        'Understand the notice, summons or case information',
                        'Organise relevant documents and timelines',
                        'Explain available procedural next steps',
                        'Coordinate with an appropriate professional where required'
                    ],
                    commonSituations: [
                        'Legal notices',
                        'Court summons',
                        'Pending court cases',
                        'Replies to notices'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                },
                {
                    id: 'police-cyber-online-fraud',
                    title: 'Police, Cyber & Online Fraud',
                    shortDesc: 'Support for police matters, cyber issues and online fraud situations.',
                    overview: 'Cyber incidents, online fraud and police-related situations can be stressful and time-sensitive. CASE SUNO helps you organise the facts, preserve relevant information and understand the appropriate next steps.',
                    whatWeDo: [
                        'Understand and organise incident details',
                        'Prepare a clear timeline of events',
                        'Organise relevant digital records and communications',
                        'Coordinate with the appropriate professional where required'
                    ],
                    commonSituations: [
                        'Online payment fraud',
                        'Cyber complaints',
                        'Online scams',
                        'Police-related matters'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                },
                {
                    id: 'property-land',
                    title: 'Property & Land',
                    shortDesc: 'Assistance with property, land, ownership and related documentation.',
                    overview: 'Property and land matters often involve multiple documents, parties and records. CASE SUNO helps organise the information and documents so you can understand what needs attention and what to do next.',
                    whatWeDo: [
                        'Organise property-related documents',
                        'Build a clear ownership and event timeline',
                        'Identify missing or relevant documentation',
                        'Coordinate with appropriate legal or technical professionals'
                    ],
                    commonSituations: [
                        'Property ownership matters',
                        'Land-related disputes',
                        'Property documentation',
                        'Sale or purchase-related concerns'
                    ],
                    deliveryMode: 'Secure document review with professional coordination where required'
                },
                {
                    id: 'bank-loan-money-recovery',
                    title: 'Bank, Loan, Money & Recovery',
                    shortDesc: 'Support for banking, loans, financial disputes and recovery matters.',
                    overview: 'Banking, loan and recovery matters can involve notices, agreements, payments and deadlines. CASE SUNO helps you organise the situation and understand the appropriate next steps.',
                    whatWeDo: [
                        'Organise loan and banking documents',
                        'Review the sequence of communications and notices',
                        'Prepare a clear summary of the matter',
                        'Coordinate with an appropriate professional where required'
                    ],
                    commonSituations: [
                        'Loan-related notices',
                        'Banking disputes',
                        'Payment and recovery issues',
                        'Financial documentation'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                },
                {
                    id: 'vehicle-rto',
                    title: 'Vehicle & RTO',
                    shortDesc: 'Assistance with vehicle, RTO and related documentation matters.',
                    overview: 'Vehicle and RTO matters may involve documentation, ownership, registration or disputes. CASE SUNO helps organise the relevant information and identify the appropriate way forward.',
                    whatWeDo: [
                        'Organise vehicle and RTO documents',
                        'Understand the matter and timeline',
                        'Identify missing information or documents',
                        'Coordinate with relevant professionals where required'
                    ],
                    commonSituations: [
                        'RTO documentation',
                        'Vehicle ownership matters',
                        'Registration-related issues',
                        'Vehicle disputes'
                    ],
                    deliveryMode: 'Online assistance with appointment-based support where required'
                },
                {
                    id: 'family-matters',
                    title: 'Family Matters',
                    shortDesc: 'Support for family, relationship, inheritance and personal matters.',
                    overview: 'Family matters can be sensitive and emotionally difficult. CASE SUNO provides a confidential space to organise the situation, understand the available options and identify appropriate next steps.',
                    whatWeDo: [
                        'Listen to and organise the situation',
                        'Build a clear timeline of events',
                        'Organise relevant family and legal documents',
                        'Coordinate with an appropriate professional where required'
                    ],
                    commonSituations: [
                        'Family disputes',
                        'Inheritance matters',
                        'Wills and related documents',
                        'Relationship-related concerns'
                    ],
                    deliveryMode: 'Confidential online assistance with professional coordination where required'
                },
                {
                    id: 'business-commercial',
                    title: 'Business & Commercial Matters',
                    shortDesc: 'Support for business operations, contracts and commercial matters.',
                    overview: 'Business and commercial matters often require clear documentation and structured communication. CASE SUNO helps businesses organise their requirements and connect with the appropriate professionals where needed.',
                    whatWeDo: [
                        'Organise commercial documents',
                        'Structure business requirements',
                        'Prepare clear summaries and timelines',
                        'Coordinate with legal or financial professionals where required'
                    ],
                    commonSituations: [
                        'Business agreements',
                        'Commercial disputes',
                        'Vendor or client matters',
                        'Business documentation'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                },
                {
                    id: 'consumer-insurance',
                    title: 'Consumer & Insurance',
                    shortDesc: 'Assistance with consumer complaints, claims and insurance matters.',
                    overview: 'Consumer and insurance matters can involve policies, bills, communications and claim documentation. CASE SUNO helps organise the information and understand the available next steps.',
                    whatWeDo: [
                        'Organise complaint and claim documents',
                        'Create a clear timeline of events',
                        'Structure communications and supporting information',
                        'Coordinate with an appropriate professional where required'
                    ],
                    commonSituations: [
                        'Consumer complaints',
                        'Insurance claims',
                        'Claim-related disputes',
                        'Service-related issues'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                },
                {
                    id: 'documents-government-services',
                    title: 'Documents & Government Services',
                    shortDesc: 'Help with documentation, applications and government-related processes.',
                    overview: 'Government processes can require multiple forms, documents and follow-ups. CASE SUNO helps you organise the requirements and understand the process involved.',
                    whatWeDo: [
                        'Organise required documents',
                        'Create document checklists',
                        'Help structure applications and representations',
                        'Coordinate with relevant professionals where required'
                    ],
                    commonSituations: [
                        'Government applications',
                        'Official documentation',
                        'Certificates and records',
                        'Application-related issues'
                    ],
                    deliveryMode: 'Online assistance with appointment-based support where required'
                },
                {
                    id: 'others',
                    title: 'OTHERS',
                    shortDesc: 'Have a matter that does not fit the categories above? Start here.',
                    overview: 'Not every situation fits neatly into a category. If you are unsure where your requirement belongs, share the details with CASE SUNO and we can help organise the matter and identify the appropriate next step.',
                    whatWeDo: [
                        'Understand your requirement',
                        'Organise the available information',
                        'Identify the relevant category or area',
                        'Coordinate with an appropriate professional where required'
                    ],
                    commonSituations: [
                        'Unique personal matters',
                        'Unusual documentation requirements',
                        'Mixed or complex situations',
                        'Other professional assistance'
                    ],
                    deliveryMode: 'Online assistance with professional coordination where required'
                }
            ]
        },
        process: {
            kicker: "How It Works",
            title: "A Simple Process.",
            titleSub: "A Clearer Tomorrow.",
            desc: "A structured and transparent process designed to make things easier for you.",
            knowMore: "Know More",
            clickToInspect: "Click to inspect",
            hideDetails: "Hide details",
            deepDive: "Deep Dive",
            howWeHandle: "How We",
            keyDeliverables: "Key Outcomes & Deliverables:",
            startStep1: "Start at Step 1",
            closeStep: "Close Step",
            steps: [
                {
                    step: "01",
                    title: "Listen",
                    desc: "Understand what problem or requirement you're facing.",
                    detail: "We start with an unhurried, patient conversation. No legal jargon or intimidating formalities. You explain your situation, who is involved, and what outcome you hope to achieve.",
                    deliverables: [
                        "Intake summary",
                        "Problem statement clarification",
                        "Immediate risk checklist"
                    ]
                },
                {
                    step: "02",
                    title: "Understand",
                    desc: "Collect basic information and relevant documents.",
                    detail: "We identify which papers, notices, communications, or contracts exist. We compile existing materials and identify missing pieces without making you run in circles.",
                    deliverables: [
                        "Document inventory",
                        "Chronological timeline of events",
                        "Key fact verification"
                    ]
                },
                {
                    step: "03",
                    title: "Organise",
                    desc: "Structure the information, documents and requirements.",
                    detail: "Raw confusion turns into clarity. We structure your case into an orderly dossier with an executive summary, clear references, and indexed attachments.",
                    deliverables: [
                        "Structured Case Dossier",
                        "Objective options breakdown",
                        "Decision roadmap"
                    ]
                },
                {
                    step: "04",
                    title: "Coordinate",
                    desc: "Connect with the right independent professionals where required.",
                    detail: "If legal counsel, CA audit, property surveyor, or mediator is required, we connect you with vetted practitioners suited to your matter, presenting them with your organized brief so you save time and consultation fees.",
                    deliverables: [
                        "Specialist recommendation",
                        "Standardized brief handover",
                        "Transparent fee alignment"
                    ]
                },
                {
                    step: "05",
                    title: "Follow Up",
                    desc: "Provide permitted administrative support and tracking.",
                    detail: "We do not disappear after the handoff. CASE SUNO coordinates administrative timelines, calendars key dates, and updates you regularly until resolution.",
                    deliverables: [
                        "Milestone status reports",
                        "Calendar alerts for critical deadlines",
                        "Post-resolution archive"
                    ]
                }
            ]
        },
        whyChoose: {
            kicker: "Why Choose CASE SUNO",
            title: "Clarity. Support. Progress.",
            desc: "We combine technology, experience and a people-first approach to help you move forward with confidence.",
            pillars: [
                {
                    title: "People-First Approach",
                    desc: "Your situation is heard and understood.",
                    additional: "Compassionate listening without judgment. We treat every case with human empathy."
                },
                {
                    title: "Transparent Process",
                    desc: "Clear information and fair pricing.",
                    additional: "No hidden surcharges, no arbitrary markups. Straightforward milestones and upfront fee estimates."
                },
                {
                    title: "Technology-Enabled",
                    desc: "Simple, secure and convenient online platform.",
                    additional: "Schedule calls, safely upload sensitive dossiers, and monitor progress from anywhere."
                },
                {
                    title: "Trusted Network",
                    desc: "Independent, qualified professionals where required.",
                    additional: "Strictly vetted advocates, chartered accountants, and company secretaries with proven track records."
                }
            ]
        },
        belief: {
            kicker: "Our Belief",
            title: "Know What to Do Next.",
            line1: "You may not always know the answers.",
            line2: "But you can always take the next step.",
            line3: "That's what CASE SUNO is here for.",
            cta: "Our Story"
        },
        cta: {
            kicker: "Have a Question?",
            title: "Let's Find a Way Forward.",
            desc: "Share your requirement and our team will guide you on the next steps and available assistance.",
            startEnquiry: "Start Your Enquiry",
            chatWhatsApp: "Chat on WhatsApp",
            quoteLine1: "Same Questions.",
            quoteLine2: "A Clearer Tomorrow."
        },
        footer: {
            rights: "© 2026 CASE SUNO. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            disclaimer: "Disclaimer",
            locationNotice: "Surat, Gujarat, India · Online & Appointment-Based Assistance"
        },
        auth: {
            getStarted: "Get Started",
            chooseAccount: "Choose how you want to continue with CASE SUNO.",
            howCanWeHelp: "How can we help?",
            selectAccount: "Select your account type to continue.",
            user: "User / Client",
            userDescription: "Get assistance, submit enquiries and track your requests.",
            professional: "Professional / Lawyer",
            professionalDescription: "Manage assigned cases, clients and consultations.",
            login: "Login",
            signup: "Sign Up",
            welcomeBack: "Welcome Back",
            createYourAccount: "Create Your Account",
            loginAsUser: "Log in as a user to continue.",
            loginAsProfessional: "Log in as a professional to continue.",
            createUserAccount: "Create your CASE SUNO user account.",
            createProfessionalAccount: "Create your professional account.",
            fullName: "Full Name",
            enterFullName: "Enter your full name",
            emailAddress: "Email Address",
            enterEmail: "Enter your email address",
            password: "Password",
            enterPassword: "Enter your password",
            professionalVerification: "Professional accounts may require verification before access is approved.",
            rememberMe: "Remember me",
            forgotPassword: "Forgot password?",
            createAccount: "Create Account",
            continueGoogle: "Continue with Google",
            noAccount: "Don't have an account?",
            alreadyAccount: "Already have an account?",
            signUp: "Sign up",
            trustedSupport: "Trusted support",
            legalJourney: "for your legal journey."
        }
    },
    gu: {
        nav: {
            home: "હોમ",
            howItWorks: "કેવી રીતે કામ કરે છે",
            services: "સેવાઓ",
            about: "અમારા વિશે",
            resources: "રિસોર્સિસ",
            faq: "પ્રશ્નોત્તરી",
            contact: "સંપર્ક",
            getStarted: "શરૂ કરો"
        },
        hero: {
            kicker: "વ્યક્તિગત • વ્યવસાય • દસ્તાવેજીકરણ • કેસ સહાય",
            titleLine1: "કાનૂની સમસ્યા છે?",
            titleLine2: "અમને જણાવો.",
            titleLine3: "અમે મદદ કરીશું",
            titleLine4: "સાચો રસ્તો સમજવામાં.",
            desc: "CASE SUNO તમારી કાનૂની સમસ્યા સમજવા અને યોગ્ય મદદ મેળવવામાં મદદ કરે છે.",
            ctaPrimary: "તમારી પૂછપરછ શરૂ કરો",
            badgeConfidential: "ગોપનીય",
            badgeConfidentialSub: "& સુરક્ષિત",
            badgeTransparent: "પારદર્શક",
            badgeTransparentSub: "પ્રક્રિયા",
            badgeOnline: "ઓનલાઇન &",
            badgeOnlineSub: "એપોઇન્ટમેન્ટ આધારિત",
            locationSub: "ઓનલાઇન અને એપોઇન્ટમેન્ટ આધારિત સહાય",
            mantra: [
                "લોકો (People)",
                "સમસ્યાઓ (Problems)",
                "પ્રક્રિયાઓ (Processes)",
                "પ્રગતિ (Progress)"
            ]
        },
        services: {
            kicker: 'અમારી સેવાઓ',
            title: 'વાસ્તવિક જીવનની પરિસ્થિતિઓમાં સહાય',
            desc: 'વ્યક્તિગત બાબતોથી લઈને વ્યવસાયિક મુદ્દાઓ સુધી, CASE SUNO તમને પરિસ્થિતિ સમજવામાં અને જરૂર જણાય ત્યાં યોગ્ય વ્યાવસાયિકો સાથે જોડાવામાં મદદ કરે છે.',
            viewAll: 'બધી સેવાઓ જુઓ',
            learnMore: 'વધુ જાણો',
            items: [
                {
                    id: 'notice-summons-court-case',
                    title: 'નોટિસ, સમન્સ અને કોર્ટ / કેસ',
                    shortDesc: 'કાનૂની નોટિસ, સમન્સ, કોર્ટ અને કેસ સંબંધિત સહાય.',
                    overview: 'જો તમને કાનૂની નોટિસ, સમન્સ અથવા કોર્ટ સંબંધિત સંચાર મળ્યો હોય, તો CASE SUNO પરિસ્થિતિ સમજવામાં, જરૂરી માહિતી ગોઠવવામાં અને આગળનું યોગ્ય પગલું ઓળખવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'નોટિસ અથવા કેસની માહિતી સમજવી',
                        'જરૂરી દસ્તાવેજો અને સમયરેખા ગોઠવવી',
                        'આગળની પ્રક્રિયાની સમજ આપવી',
                        'જરૂર પડે ત્યાં યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'કાનૂની નોટિસ',
                        'કોર્ટ સમન્સ',
                        'ચાલુ કોર્ટ કેસ',
                        'નોટિસના જવાબ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'police-cyber-online-fraud',
                    title: 'પોલીસ, સાયબર અને ઓનલાઈન ફ્રોડ',
                    shortDesc: 'પોલીસ, સાયબર સમસ્યાઓ અને ઓનલાઈન ફ્રોડ માટે સહાય.',
                    overview: 'સાયબર ઘટના, ઓનલાઈન ફ્રોડ અથવા પોલીસ સંબંધિત પરિસ્થિતિમાં CASE SUNO હકીકતો ગોઠવવામાં, જરૂરી માહિતી સાચવવામાં અને આગળનું યોગ્ય પગલું સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'ઘટનાની વિગતો સમજવી અને ગોઠવવી',
                        'ઘટનાક્રમની સ્પષ્ટ સમયરેખા બનાવવી',
                        'ડિજિટલ રેકોર્ડ અને સંચાર ગોઠવવા',
                        'જરૂર પડે ત્યાં યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'ઓનલાઈન પેમેન્ટ ફ્રોડ',
                        'સાયબર ફરિયાદ',
                        'ઓનલાઈન સ્કેમ',
                        'પોલીસ સંબંધિત બાબતો'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'property-land',
                    title: 'મિલકત અને જમીન',
                    shortDesc: 'મિલકત, જમીન, માલિકી અને સંબંધિત દસ્તાવેજો માટે સહાય.',
                    overview: 'મિલકત અને જમીન સંબંધિત બાબતોમાં ઘણા દસ્તાવેજો અને પક્ષો સામેલ હોઈ શકે છે. CASE SUNO માહિતી અને દસ્તાવેજો ગોઠવીને આગળ શું કરવું તે સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'મિલકત સંબંધિત દસ્તાવેજો ગોઠવવા',
                        'માલિકી અને ઘટનાક્રમની સમયરેખા તૈયાર કરવી',
                        'ખૂટતા અથવા જરૂરી દસ્તાવેજો ઓળખવા',
                        'જરૂર મુજબ કાનૂની અથવા ટેકનિકલ નિષ્ણાત સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'મિલકત માલિકી',
                        'જમીન સંબંધિત વિવાદ',
                        'મિલકત દસ્તાવેજીકરણ',
                        'મિલકત ખરીદી અથવા વેચાણ'
                    ],
                    deliveryMode: 'સુરક્ષિત દસ્તાવેજ સમીક્ષા અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'bank-loan-money-recovery',
                    title: 'બેંક, લોન, પૈસા અને રિકવરી',
                    shortDesc: 'બેંકિંગ, લોન, નાણાકીય વિવાદ અને રિકવરી બાબતો માટે સહાય.',
                    overview: 'બેંકિંગ અને લોન સંબંધિત બાબતોમાં નોટિસ, કરાર, પેમેન્ટ અને સમયમર્યાદા સામેલ હોઈ શકે છે. CASE SUNO પરિસ્થિતિ ગોઠવવામાં અને આગળનું પગલું સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'લોન અને બેંક સંબંધિત દસ્તાવેજો ગોઠવવા',
                        'નોટિસ અને સંચારની સમયરેખા સમજવી',
                        'બાબતનો સ્પષ્ટ સારાંશ તૈયાર કરવો',
                        'જરૂર મુજબ યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'લોન સંબંધિત નોટિસ',
                        'બેંકિંગ વિવાદ',
                        'પેમેન્ટ અને રિકવરી મુદ્દાઓ',
                        'નાણાકીય દસ્તાવેજીકરણ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'vehicle-rto',
                    title: 'વાહન અને RTO',
                    shortDesc: 'વાહન, RTO અને સંબંધિત દસ્તાવેજો માટે સહાય.',
                    overview: 'વાહન અને RTO સંબંધિત બાબતોમાં દસ્તાવેજો, માલિકી અને રજિસ્ટ્રેશનનો સમાવેશ થઈ શકે છે. CASE SUNO માહિતી ગોઠવવામાં અને યોગ્ય માર્ગ સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'વાહન અને RTO દસ્તાવેજો ગોઠવવા',
                        'બાબત અને સમયરેખા સમજવી',
                        'ખૂટતી માહિતી અથવા દસ્તાવેજો ઓળખવા',
                        'જરૂર મુજબ સંબંધિત વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'RTO દસ્તાવેજીકરણ',
                        'વાહન માલિકી',
                        'રજિસ્ટ્રેશન સંબંધિત સમસ્યાઓ',
                        'વાહન વિવાદ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ એપોઇન્ટમેન્ટ આધારિત સહાય'
                },
                {
                    id: 'family-matters',
                    title: 'પારિવારિક બાબતો',
                    shortDesc: 'પરિવાર, સંબંધો, વારસાઈ અને વ્યક્તિગત બાબતો માટે સહાય.',
                    overview: 'પારિવારિક બાબતો સંવેદનશીલ હોઈ શકે છે. CASE SUNO ગોપનીય રીતે પરિસ્થિતિ ગોઠવવામાં, ઉપલબ્ધ વિકલ્પો સમજવામાં અને યોગ્ય આગળનું પગલું ઓળખવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'પરિસ્થિતિ સાંભળવી અને ગોઠવવી',
                        'ઘટનાઓની સ્પષ્ટ સમયરેખા બનાવવી',
                        'જરૂરી પારિવારિક અને કાનૂની દસ્તાવેજો ગોઠવવા',
                        'જરૂર મુજબ યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'પારિવારિક વિવાદ',
                        'વારસાઈ સંબંધિત બાબતો',
                        'વસિયત અને સંબંધિત દસ્તાવેજો',
                        'સંબંધિત વ્યક્તિગત બાબતો'
                    ],
                    deliveryMode: 'ગોપનીય ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'business-commercial',
                    title: 'વ્યવસાય અને કોમર્શિયલ બાબતો',
                    shortDesc: 'વ્યવસાય, કરાર અને કોમર્શિયલ બાબતો માટે સહાય.',
                    overview: 'વ્યવસાયિક બાબતોમાં સ્પષ્ટ દસ્તાવેજીકરણ અને વ્યવસ્થિત સંચાર જરૂરી હોય છે. CASE SUNO તમારી જરૂરિયાત ગોઠવવામાં અને યોગ્ય વ્યાવસાયિક સાથે જોડવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'કોમર્શિયલ દસ્તાવેજો ગોઠવવા',
                        'વ્યવસાયિક જરૂરિયાતોને માળખું આપવું',
                        'સ્પષ્ટ સારાંશ અને સમયરેખા તૈયાર કરવી',
                        'જરૂર મુજબ કાનૂની અથવા નાણાકીય નિષ્ણાત સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'વ્યવસાયિક કરારો',
                        'કોમર્શિયલ વિવાદ',
                        'વેન્ડર અથવા ક્લાયન્ટ બાબતો',
                        'વ્યવસાયિક દસ્તાવેજીકરણ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'consumer-insurance',
                    title: 'ગ્રાહક અને વીમા',
                    shortDesc: 'ગ્રાહક ફરિયાદો, ક્લેમ અને વીમા સંબંધિત બાબતો માટે સહાય.',
                    overview: 'ગ્રાહક અને વીમા સંબંધિત બાબતોમાં પોલિસી, બિલ, સંચાર અને ક્લેમ દસ્તાવેજો સામેલ હોઈ શકે છે. CASE SUNO માહિતી ગોઠવીને આગળનું પગલું સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'ફરિયાદ અને ક્લેમ દસ્તાવેજો ગોઠવવા',
                        'ઘટનાની સમયરેખા તૈયાર કરવી',
                        'સંચાર અને આધારભૂત માહિતી ગોઠવવી',
                        'જરૂર મુજબ યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'ગ્રાહક ફરિયાદ',
                        'વીમા ક્લેમ',
                        'ક્લેમ સંબંધિત વિવાદ',
                        'સેવા સંબંધિત સમસ્યાઓ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                },
                {
                    id: 'documents-government-services',
                    title: 'દસ્તાવેજો અને સરકારી સેવાઓ',
                    shortDesc: 'દસ્તાવેજીકરણ, અરજીઓ અને સરકારી પ્રક્રિયાઓ માટે સહાય.',
                    overview: 'સરકારી પ્રક્રિયામાં ઘણા ફોર્મ, દસ્તાવેજો અને ફોલો-અપની જરૂર પડી શકે છે. CASE SUNO જરૂરી બાબતો ગોઠવવામાં અને પ્રક્રિયા સમજવામાં મદદ કરે છે.',
                    whatWeDo: [
                        'જરૂરી દસ્તાવેજો ગોઠવવા',
                        'દસ્તાવેજોની ચેકલિસ્ટ તૈયાર કરવી',
                        'અરજી અને રજૂઆતો ગોઠવવામાં મદદ',
                        'જરૂર મુજબ સંબંધિત વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'સરકારી અરજીઓ',
                        'સત્તાવાર દસ્તાવેજો',
                        'સર્ટિફિકેટ અને રેકોર્ડ',
                        'અરજી સંબંધિત સમસ્યાઓ'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ એપોઇન્ટમેન્ટ આધારિત સહાય'
                },
                {
                    id: 'others',
                    title: 'અન્ય',
                    shortDesc: 'ઉપરની કેટેગરીમાં ન આવતી બાબતો માટે અહીંથી શરૂઆત કરો.',
                    overview: 'દરેક બાબત કોઈ ચોક્કસ કેટેગરીમાં ફિટ થાય તે જરૂરી નથી. જો તમને ખબર ન હોય કે તમારી જરૂરિયાત કઈ કેટેગરીમાં આવે છે, તો CASE SUNO સાથે વિગતો શેર કરો.',
                    whatWeDo: [
                        'તમારી જરૂરિયાત સમજવી',
                        'ઉપલબ્ધ માહિતી ગોઠવવી',
                        'યોગ્ય કેટેગરી અથવા ક્ષેત્ર ઓળખવું',
                        'જરૂર મુજબ યોગ્ય વ્યાવસાયિક સાથે જોડાણ'
                    ],
                    commonSituations: [
                        'વિશિષ્ટ વ્યક્તિગત બાબતો',
                        'અલગ પ્રકારની દસ્તાવેજીકરણ જરૂરિયાત',
                        'મિશ્ર અથવા જટિલ બાબતો',
                        'અન્ય વ્યાવસાયિક સહાય'
                    ],
                    deliveryMode: 'ઓનલાઇન સહાય અને જરૂર મુજબ વ્યાવસાયિક સાથે સંકલન'
                }
            ]
        },
        process: {
            kicker: "કેવી રીતે કામ કરે છે",
            title: "એક સરળ પ્રક્રિયા.",
            titleSub: "સ્પષ્ટ આવતીકાલ.",
            desc: "તમારા માટે બાબતોને સરળ બનાવવા માટે રચાયેલી વ્યવસ્થિત અને પારદર્શક પ્રક્રિયા.",
            knowMore: "વધુ જાણો",
            clickToInspect: "વિગત જોવા ક્લિક કરો",
            hideDetails: "વિગત છુપાવો",
            deepDive: "વિસ્તૃત વિગતો",
            howWeHandle: "અમે કેવી રીતે કામ કરીએ છીએ:",
            keyDeliverables: "મુખ્ય પરિણામો અને આઉટપુટ:",
            startStep1: "તબક્કો ૧ થી શરૂ કરો",
            closeStep: "બંધ કરો",
            steps: [
                {
                    step: "01",
                    title: "સાંભળવું (Listen)",
                    desc: "તમે કઈ સમસ્યા કે જરૂરિયાતનો સામનો કરી રહ્યા છો તે સમજવું.",
                    detail: "અમે કોઈપણ ઉતાવળ વગર ધીરજપૂર્વક તમારી વાત સાંભળીને શરૂઆત કરીએ છીએ. કોઈ કાનૂની આડંબરો નહીં. તમે તમારી પરિસ્થિતિ અને અપેક્ષિત પરિણામ મુક્ત મને જણાવી શકો છો.",
                    deliverables: [
                        "પ્રારંભિક સારાંશ",
                        "સમસ્યાનું સ્પષ્ટ નિવેદન",
                        "તાત્કાલિક જોખમ ચેકલિસ્ટ"
                    ]
                },
                {
                    step: "02",
                    title: "સમજવું (Understand)",
                    desc: "મૂળભૂત માહિતી અને સંબંધિત દસ્તાવેજો એકત્રિત કરવા.",
                    detail: "તમારી પાસે કયા કાગળો, નોટિસ, સંચાર અથવા કરારો ઉપલબ્ધ છે તે ચકાસીએ છીએ. ખોટા ધક્કા ખાધા વગર કઈ બાબતો ખૂટે છે તે નક્કી કરીએ છીએ.",
                    deliverables: [
                        "દસ્તાવેજ યાદી",
                        "ઘટનાક્રમની સમયરેખા",
                        "મુખ્ય હકીકતોની ચકાસણી"
                    ]
                },
                {
                    step: "03",
                    title: "વ્યવસ્થિત કરવું (Organise)",
                    desc: "માહિતી, દસ્તાવેજો અને જરૂરિયાતોનું માળખું તૈયાર કરવું.",
                    detail: "મૂંઝવણનું સ્થાન સ્પષ્ટતા લે છે. અમે તમારા કેસને વ્યવસ્થિત ફાઇલમાં ગોઠવીએ છીએ જેમાં સારાંશ, સંદર્ભો અને અનુક્રમણિકા સામેલ હોય છે.",
                    deliverables: [
                        "સંગઠિત કેસ ફાઇલ",
                        "વિકલ્પોનું તાર્કિક વિશ્લેષણ",
                        "આગામી નિર્ણય રોડમેપ"
                    ]
                },
                {
                    step: "04",
                    title: "સંકલન (Coordinate)",
                    desc: "જ્યાં જરૂર હોય ત્યાં યોગ્ય સ્વતંત્ર વ્યાવસાયિકો સાથે જોડાણ કરવું.",
                    detail: "જો વકીલ, CA, સર્વેયર કે મધ્યસ્થીની જરૂર હોય, તો અમે ચકાસાયેલા નિષ્ણાતો સાથે જોડાણ કરીએ છીએ અને તૈયાર ફાઇલ સોંપીએ છીએ જેથી તમારો સમય અને ફી બચે.",
                    deliverables: [
                        "યોગ્ય નિષ્ણાતની ભલામણ",
                        "પ્રમાણિત બ્રીફિંગ સોંપણી",
                        "પારદર્શક ફી સુમેળ"
                    ]
                },
                {
                    step: "05",
                    title: "ફોલો અપ (Follow Up)",
                    desc: "મંજૂર વહીવટી સહાય અને નિયમિત ટ્રેકિંગ પ્રદાન કરવું.",
                    detail: "અમે કામ સોંપ્યા પછી અલગ નથી થઈ જતા. CASE SUNO સમયરેખાનું સંકલન કરે છે, તારીખો નોંધી રાખે છે અને ઉકેલ ન આવે ત્યાં સુધી સતત અપડેટ આપે છે.",
                    deliverables: [
                        "માઇલસ્ટોન સ્ટેટસ રિપોર્ટ્સ",
                        "મહત્વપૂર્ણ તારીખો માટે એલર્ટ્સ",
                        "ઉકેલ પછીનું આર્કાઇવિંગ"
                    ]
                }
            ]
        },
        whyChoose: {
            kicker: "શા માટે CASE SUNO પસંદ કરવું",
            title: "સ્પષ્ટતા. સહાય. પ્રગતિ.",
            desc: "તમને આત્મવિશ્વાસ સાથે આગળ વધવામાં મદદ કરવા માટે અમે ટેકનોલોજી, અનુભવ અને માનવીય અભિગમનો સુમેળ સાધીએ છીએ.",
            pillars: [
                {
                    title: "વ્યક્તિ-પ્રથમ અભિગમ",
                    desc: "તમારી પરિસ્થિતિ સાંભળવામાં અને સમજવામાં આવે છે.",
                    additional: "કોઈપણ ટીકા વગર સહાનુભૂતિપૂર્વક સાંભળવું. અમે દરેક કેસને માનવીય લાગણી સાથે સંભાળીએ છીએ."
                },
                {
                    title: "પારદર્શક પ્રક્રિયા",
                    desc: "સ્પષ્ટ માહિતી અને વાજબી કિંમત.",
                    additional: "કોઈ છુપા ચાર્જ નહીં. સીધા માઇલસ્ટોન અને અગાઉથી નક્કી કરેલા વાજબી અંદાજો."
                },
                {
                    title: "ટેકનોલોજી-સક્ષમ",
                    desc: "સરળ, સુરક્ષિત અને અનુકૂળ ઓનલાઇન પ્લેટફોર્મ.",
                    additional: "ઓનલાઇન કોલ શેડ્યૂલ કરો, સુરક્ષિત રીતે દસ્તાવેજ અપલોડ કરો અને ક્યાંયથી પણ સ્થિતિ ચકાસો."
                },
                {
                    title: "વિશ્વસનીય નેટવર્ક",
                    desc: "જરૂર જણાય ત્યાં સ્વતંત્ર, લાયકાત ધરાવતા વ્યાવસાયિકો.",
                    additional: "ચકાસાયેલા અને સિદ્ધ અનુભવ ધરાવતા એડવોકેટ્સ, ચાર્ટર્ડ એકાઉન્ટન્ટ્સ અને નિષ્ણાતો."
                }
            ]
        },
        belief: {
            kicker: "અમારો વિશ્વાસ",
            title: "આગળ શું કરવું તે જાણો.",
            line1: "તમારી પાસે કદાચ હંમેશા જવાબો ન હોય.",
            line2: "પરંતુ તમે હંમેશા આગલું પગલું ભરી શકો છો.",
            line3: "CASE SUNO એના માટે જ હાજર છે.",
            cta: "અમારી વાર્તા"
        },
        cta: {
            kicker: "કોઈ પ્રશ્ન છે?",
            title: "ચાલો આગળ વધવાનો માર્ગ શોધીએ.",
            desc: "તમારી જરૂરિયાત જણાવો અને અમારી ટીમ તમને આગળના પગલાં અને ઉપલબ્ધ સહાય અંગે માર્ગદર્શન આપશે.",
            startEnquiry: "તમારી પૂછપરછ શરૂ કરો",
            chatWhatsApp: "વોટ્સએપ પર વાત કરો",
            quoteLine1: "એ જ સવાલો.",
            quoteLine2: "વધુ સ્પષ્ટ આવતીકાલ."
        },
        footer: {
            rights: "© 2026 CASE SUNO. સર્વહક સ્વાધીન.",
            privacy: "ગોપનીયતા નીતિ",
            terms: "નિયમો અને શરતો",
            disclaimer: "ડિસ્ક્લેમર",
            locationNotice: "સુરત, ગુજરાત, ભારત · ઓનલાઇન અને એપોઇન્ટમેન્ટ આધારિત સહાય"
        },
        auth: {
            getStarted: "શરૂ કરો",
            chooseAccount: "CASE SUNO સાથે આગળ વધવા માટે તમે કેવી રીતે ચાલુ રાખવા માંગો છો તે પસંદ કરો.",
            howCanWeHelp: "અમે તમારી કેવી રીતે મદદ કરી શકીએ?",
            selectAccount: "ચાલુ રાખવા માટે તમારો એકાઉન્ટ પ્રકાર પસંદ કરો.",
            user: "યુઝર / ક્લાયન્ટ",
            userDescription: "સહાય મેળવો, પૂછપરછ મોકલો અને તમારી વિનંતીઓને ટ્રેક કરો.",
            professional: "પ્રોફેશનલ / વકીલ",
            professionalDescription: "સોંપાયેલા કેસ, ક્લાયન્ટ અને કન્સલ્ટેશન મેનેજ કરો.",
            login: "લૉગ ઇન",
            signup: "સાઇન અપ",
            welcomeBack: "ફરી સ્વાગત છે",
            createYourAccount: "તમારું એકાઉન્ટ બનાવો",
            loginAsUser: "ચાલુ રાખવા માટે યુઝર તરીકે લૉગ ઇન કરો.",
            loginAsProfessional: "ચાલુ રાખવા માટે પ્રોફેશનલ તરીકે લૉગ ઇન કરો.",
            createUserAccount: "તમારું CASE SUNO યુઝર એકાઉન્ટ બનાવો.",
            createProfessionalAccount: "તમારું પ્રોફેશનલ એકાઉન્ટ બનાવો.",
            fullName: "પૂરું નામ",
            enterFullName: "તમારું પૂરું નામ દાખલ કરો",
            emailAddress: "ઈમેલ સરનામું",
            enterEmail: "તમારું ઈમેલ સરનામું દાખલ કરો",
            password: "પાસવર્ડ",
            enterPassword: "તમારો પાસવર્ડ દાખલ કરો",
            professionalVerification: "પ્રોફેશનલ એકાઉન્ટને ઍક્સેસ મંજૂર કરતા પહેલાં વેરિફિકેશન જરૂરી હોઈ શકે છે.",
            rememberMe: "મને યાદ રાખો",
            forgotPassword: "પાસવર્ડ ભૂલી ગયા?",
            createAccount: "એકાઉન્ટ બનાવો",
            continueGoogle: "Google સાથે ચાલુ રાખો",
            noAccount: "એકાઉન્ટ નથી?",
            alreadyAccount: "પહેલેથી એકાઉન્ટ છે?",
            signUp: "સાઇન અપ",
            trustedSupport: "વિશ્વસનીય સહાય",
            legalJourney: "તમારી કાનૂની યાત્રા માટે."
        }
    },
    hi: {
        nav: {
            home: "होम",
            howItWorks: "कार्यप्रणाली",
            services: "सेवाएं",
            about: "हमारे बारे में",
            resources: "संसाधन",
            faq: "अक्सर पूछे जाने वाले प्रश्न",
            contact: "संपर्क",
            getStarted: "शुरुआत करें"
        },
        hero: {
            kicker: "व्यक्तिगत • व्यवसाय • दस्तावेज़ीकरण • केस सहायता",
            titleLine1: "कानूनी समस्या है?",
            titleLine2: "हमें बताएं।",
            titleLine3: "हम मदद करेंगे",
            titleLine4: "सही रास्ता जानने में।",
            desc: "CASE SUNO आपकी कानूनी समस्या समझने और सही मदद पाने में मदद करता है।",
            ctaPrimary: "अपनी पूछताछ शुरू करें",
            badgeConfidential: "गोपनीय",
            badgeConfidentialSub: "& सुरक्षित",
            badgeTransparent: "पारदर्शी",
            badgeTransparentSub: "प्रक्रिया",
            badgeOnline: "ऑनलाइन &",
            badgeOnlineSub: "अपॉइंटमेंट आधारित",
            locationSub: "ऑनलाइन और अपॉइंटमेंट आधारित सहायता",
            mantra: [
                "लोग (People)",
                "समस्याएं (Problems)",
                "प्रक्रियाएं (Processes)",
                "प्रगति (Progress)"
            ]
        },
        services: {
            kicker: 'हमारी सेवाएं',
            title: 'वास्तविक जीवन की स्थितियों में सहायता',
            desc: 'व्यक्तिगत मामलों से लेकर व्यावसायिक मुद्दों तक, CASE SUNO आपको स्थिति समझने और आवश्यकता पड़ने पर सही पेशेवरों से जुड़ने में मदद करता है।',
            viewAll: 'सभी सेवाएं देखें',
            learnMore: 'और जानें',
            items: [
                {
                    id: 'notice-summons-court-case',
                    title: 'नोटिस, समन और कोर्ट / केस',
                    shortDesc: 'कानूनी नोटिस, समन, कोर्ट और केस से जुड़े मामलों में सहायता।',
                    overview: 'यदि आपको कानूनी नोटिस, समन या कोर्ट से संबंधित सूचना मिली है, तो CASE SUNO स्थिति समझने, जरूरी जानकारी व्यवस्थित करने और अगले उचित कदम को पहचानने में मदद करता है।',
                    whatWeDo: [
                        'नोटिस या केस की जानकारी समझना',
                        'जरूरी दस्तावेज और समयरेखा व्यवस्थित करना',
                        'आगे की प्रक्रिया को समझना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'कानूनी नोटिस',
                        'कोर्ट समन',
                        'चल रहे कोर्ट केस',
                        'नोटिस के जवाब'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'police-cyber-online-fraud',
                    title: 'पुलिस, साइबर और ऑनलाइन फ्रॉड',
                    shortDesc: 'पुलिस, साइबर समस्याओं और ऑनलाइन फ्रॉड से जुड़े मामलों में सहायता।',
                    overview: 'साइबर घटना, ऑनलाइन फ्रॉड या पुलिस से जुड़े मामलों में CASE SUNO तथ्यों को व्यवस्थित करने, जरूरी जानकारी सुरक्षित रखने और अगले उचित कदम को समझने में मदद करता है।',
                    whatWeDo: [
                        'घटना की जानकारी समझना और व्यवस्थित करना',
                        'घटनाक्रम की स्पष्ट समयरेखा बनाना',
                        'डिजिटल रिकॉर्ड और संचार व्यवस्थित करना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'ऑनलाइन पेमेंट फ्रॉड',
                        'साइबर शिकायत',
                        'ऑनलाइन स्कैम',
                        'पुलिस से संबंधित मामले'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'property-land',
                    title: 'संपत्ति और भूमि',
                    shortDesc: 'संपत्ति, भूमि, स्वामित्व और संबंधित दस्तावेजों के लिए सहायता।',
                    overview: 'संपत्ति और भूमि से जुड़े मामलों में कई दस्तावेज और पक्ष शामिल हो सकते हैं। CASE SUNO जानकारी और दस्तावेज व्यवस्थित करके आगे क्या करना है यह समझने में मदद करता है।',
                    whatWeDo: [
                        'संपत्ति से जुड़े दस्तावेज व्यवस्थित करना',
                        'स्वामित्व और घटनाओं की समयरेखा बनाना',
                        'जरूरी या उपलब्ध न होने वाले दस्तावेज पहचानना',
                        'आवश्यकता पड़ने पर कानूनी या तकनीकी पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'संपत्ति स्वामित्व',
                        'भूमि संबंधी विवाद',
                        'संपत्ति दस्तावेज',
                        'संपत्ति खरीद या बिक्री'
                    ],
                    deliveryMode: 'सुरक्षित दस्तावेज समीक्षा और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'bank-loan-money-recovery',
                    title: 'बैंक, लोन, पैसा और रिकवरी',
                    shortDesc: 'बैंकिंग, लोन, वित्तीय विवाद और रिकवरी मामलों में सहायता।',
                    overview: 'बैंकिंग और लोन मामलों में नोटिस, अनुबंध, भुगतान और समयसीमा शामिल हो सकती है। CASE SUNO स्थिति व्यवस्थित करने और अगले कदम को समझने में मदद करता है।',
                    whatWeDo: [
                        'लोन और बैंक से जुड़े दस्तावेज व्यवस्थित करना',
                        'नोटिस और संचार की समयरेखा समझना',
                        'मामले का स्पष्ट सारांश तैयार करना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'लोन से जुड़े नोटिस',
                        'बैंकिंग विवाद',
                        'भुगतान और रिकवरी समस्याएं',
                        'वित्तीय दस्तावेजीकरण'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'vehicle-rto',
                    title: 'वाहन और RTO',
                    shortDesc: 'वाहन, RTO और संबंधित दस्तावेजों के मामलों में सहायता।',
                    overview: 'वाहन और RTO से जुड़े मामलों में दस्तावेज, स्वामित्व और पंजीकरण शामिल हो सकते हैं। CASE SUNO जानकारी व्यवस्थित करने और सही दिशा समझने में मदद करता है।',
                    whatWeDo: [
                        'वाहन और RTO दस्तावेज व्यवस्थित करना',
                        'मामले और समयरेखा को समझना',
                        'आवश्यक जानकारी या दस्तावेज पहचानना',
                        'आवश्यकता पड़ने पर संबंधित पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'RTO दस्तावेजीकरण',
                        'वाहन स्वामित्व',
                        'पंजीकरण संबंधी समस्याएं',
                        'वाहन विवाद'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर अपॉइंटमेंट आधारित सहायता'
                },
                {
                    id: 'family-matters',
                    title: 'पारिवारिक मामले',
                    shortDesc: 'परिवार, रिश्तों, विरासत और व्यक्तिगत मामलों में सहायता।',
                    overview: 'पारिवारिक मामले संवेदनशील हो सकते हैं। CASE SUNO गोपनीय तरीके से स्थिति व्यवस्थित करने, उपलब्ध विकल्पों को समझने और उचित अगले कदम की पहचान करने में मदद करता है।',
                    whatWeDo: [
                        'स्थिति को सुनना और व्यवस्थित करना',
                        'घटनाओं की स्पष्ट समयरेखा बनाना',
                        'जरूरी पारिवारिक और कानूनी दस्तावेज व्यवस्थित करना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'पारिवारिक विवाद',
                        'विरासत से जुड़े मामले',
                        'वसीयत और संबंधित दस्तावेज',
                        'व्यक्तिगत पारिवारिक मामले'
                    ],
                    deliveryMode: 'गोपनीय ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'business-commercial',
                    title: 'व्यवसाय और कमर्शियल मामले',
                    shortDesc: 'व्यवसाय, अनुबंध और कमर्शियल मामलों में सहायता।',
                    overview: 'व्यावसायिक मामलों में स्पष्ट दस्तावेजीकरण और व्यवस्थित संचार जरूरी होता है। CASE SUNO आपकी जरूरत को व्यवस्थित करने और सही पेशेवर से जोड़ने में मदद करता है।',
                    whatWeDo: [
                        'कमर्शियल दस्तावेज व्यवस्थित करना',
                        'व्यावसायिक आवश्यकताओं को संरचित करना',
                        'स्पष्ट सारांश और समयरेखा तैयार करना',
                        'आवश्यकता पड़ने पर कानूनी या वित्तीय पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'व्यावसायिक अनुबंध',
                        'कमर्शियल विवाद',
                        'वेंडर या क्लाइंट मामले',
                        'व्यावसायिक दस्तावेजीकरण'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'consumer-insurance',
                    title: 'उपभोक्ता और बीमा',
                    shortDesc: 'उपभोक्ता शिकायत, क्लेम और बीमा मामलों में सहायता।',
                    overview: 'उपभोक्ता और बीमा मामलों में पॉलिसी, बिल, संचार और क्लेम दस्तावेज शामिल हो सकते हैं। CASE SUNO जानकारी व्यवस्थित करके अगले कदम को समझने में मदद करता है।',
                    whatWeDo: [
                        'शिकायत और क्लेम दस्तावेज व्यवस्थित करना',
                        'घटना की समयरेखा तैयार करना',
                        'संचार और संबंधित जानकारी व्यवस्थित करना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'उपभोक्ता शिकायत',
                        'बीमा क्लेम',
                        'क्लेम संबंधी विवाद',
                        'सेवा संबंधी समस्याएं'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                },
                {
                    id: 'documents-government-services',
                    title: 'दस्तावेज और सरकारी सेवाएं',
                    shortDesc: 'दस्तावेज, आवेदन और सरकारी प्रक्रियाओं के लिए सहायता।',
                    overview: 'सरकारी प्रक्रियाओं में कई फॉर्म, दस्तावेज और फॉलो-अप की आवश्यकता हो सकती है। CASE SUNO जरूरी चीजों को व्यवस्थित करने और प्रक्रिया समझने में मदद करता है।',
                    whatWeDo: [
                        'जरूरी दस्तावेज व्यवस्थित करना',
                        'दस्तावेज चेकलिस्ट तैयार करना',
                        'आवेदन और प्रस्तुतियों को व्यवस्थित करने में मदद',
                        'आवश्यकता पड़ने पर संबंधित पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'सरकारी आवेदन',
                        'आधिकारिक दस्तावेज',
                        'प्रमाणपत्र और रिकॉर्ड',
                        'आवेदन से जुड़ी समस्याएं'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर अपॉइंटमेंट आधारित सहायता'
                },
                {
                    id: 'others',
                    title: 'अन्य',
                    shortDesc: 'ऊपर दी गई श्रेणियों में न आने वाले मामलों के लिए यहां से शुरुआत करें।',
                    overview: 'हर मामला किसी एक श्रेणी में फिट नहीं होता। यदि आपको पता नहीं है कि आपकी जरूरत किस श्रेणी में आती है, तो CASE SUNO के साथ अपनी जानकारी साझा करें।',
                    whatWeDo: [
                        'आपकी आवश्यकता को समझना',
                        'उपलब्ध जानकारी व्यवस्थित करना',
                        'सही श्रेणी या क्षेत्र पहचानना',
                        'आवश्यकता पड़ने पर सही पेशेवर से जोड़ना'
                    ],
                    commonSituations: [
                        'विशेष व्यक्तिगत मामले',
                        'अलग प्रकार की दस्तावेजी जरूरत',
                        'मिश्रित या जटिल मामले',
                        'अन्य पेशेवर सहायता'
                    ],
                    deliveryMode: 'ऑनलाइन सहायता और आवश्यकता पड़ने पर पेशेवर समन्वय'
                }
            ]
        },
        process: {
            kicker: "यह कैसे काम करता है",
            title: "एक सरल प्रक्रिया।",
            titleSub: "अधिक स्पष्ट कल।",
            desc: "चीजों को आपके लिए आसान और तनावमुक्त बनाने के लिए तैयार की गई पारदर्शी प्रक्रिया।",
            knowMore: "और जानें",
            clickToInspect: "विवरण देखने के लिए क्लिक करें",
            hideDetails: "विवरण छुपाएं",
            deepDive: "विस्तृत विश्लेषण",
            howWeHandle: "हम कैसे संभालते हैं:",
            keyDeliverables: "प्रमुख परिणाम और आउटपुट:",
            startStep1: "चरण १ से शुरू करें",
            closeStep: "बंद करें",
            steps: [
                {
                    step: "01",
                    title: "सुनना (Listen)",
                    desc: "समझना कि आप किस समस्या या आवश्यकता का सामना कर रहे हैं।",
                    detail: "हम बिना किसी जल्दबाजी के धैर्यपूर्वक आपकी बात सुनकर शुरुआत करते हैं। कोई कानूनी आडंबर नहीं। आप अपनी स्थिति और अपेक्षित परिणाम खुलकर बता सकते हैं।",
                    deliverables: [
                        "प्रारंभिक सारांश",
                        "समस्या का स्पष्ट विवरण",
                        "तात्कालिक जोखिम चेकलिस्ट"
                    ]
                },
                {
                    step: "02",
                    title: "समझना (Understand)",
                    desc: "बुनियादी जानकारी और संबंधित दस्तावेजों को एकत्र करना।",
                    detail: "हम जांचते हैं कि आपके पास कौन से कागजात, नोटिस, संचार या अनुबंध मौजूद हैं। बिना किसी भटकाव के हम पहचानते हैं कि क्या आवश्यक है।",
                    deliverables: [
                        "दस्तावेज सूची",
                        "घटनाक्रम की समयरेखा",
                        "मुख्य तथ्यों का सत्यापन"
                    ]
                },
                {
                    step: "03",
                    title: "व्यवस्थित करना (Organise)",
                    desc: "जानकारी, दस्तावेजों और आवश्यकताओं की सुव्यवस्थित रूपरेखा बनाना।",
                    detail: "भ्रम का स्थान स्पष्टता लेती है। हम आपके मामले को एक व्यवस्थित फाइल में संकलित करते हैं जिसमें सारांश, संदर्भ और इंडेक्स शामिल होते हैं।",
                    deliverables: [
                        "संगठित केस फाइल",
                        "विकल्पों का तार्किक विश्लेषण",
                        "निर्णय रोडमैप"
                    ]
                },
                {
                    step: "04",
                    title: "समन्वय (Coordinate)",
                    desc: "आवश्यकतानुसार सही स्वतंत्र पेशेवरों से संपर्क कराना।",
                    detail: "यदि वकील, सीए, सर्वेयर या मध्यस्थ की आवश्यकता है, तो हम जांचे-परखे विशेषज्ञों से संपर्क कराते हैं और तैयार फाइल सौंपते हैं जिससे आपका समय और शुल्क बचता है।",
                    deliverables: [
                        "विशेषज्ञ की सिफारिश",
                        "प्रमाणित ब्रीफिंग हैंडओवर",
                        "पारदर्शी शुल्क संरेखण"
                    ]
                },
                {
                    step: "05",
                    title: "फॉलो-अप (Follow Up)",
                    desc: "अनुमत प्रशासनिक सहायता और नियमित ट्रैकिंग प्रदान करना।",
                    detail: "हम मामला सौंपने के बाद अलग नहीं होते। CASE SUNO समयसीमा का समन्वय करता है, तारीखें याद रखता है और समाधान तक नियमित अपडेट प्रदान करता है।",
                    deliverables: [
                        "माइलस्टोन स्थिति रिपोर्ट",
                        "महत्वपूर्ण तारीखों के लिए अलर्ट",
                        "समाधान के बाद का अभिलेख"
                    ]
                }
            ]
        },
        whyChoose: {
            kicker: "CASE SUNO क्यों चुनें",
            title: "स्पष्टता। सहायता। प्रगति।",
            desc: "हम तकनीक, अनुभव और मानवीय दृष्टिकोण का समन्वय करते हैं ताकि आप आत्मविश्वास के साथ आगे बढ़ सकें।",
            pillars: [
                {
                    title: "मानव-केंद्रित दृष्टिकोण",
                    desc: "आपकी स्थिति को ध्यानपूर्वक सुना और समझा जाता है।",
                    additional: "सहानुभूतिपूर्ण सुनवाई। हम हर मामले को संवेदनशीलता और गरिमा के साथ संभालते हैं।"
                },
                {
                    title: "पारदर्शी प्रक्रिया",
                    desc: "स्पष्ट जानकारी और उचित शुल्क।",
                    additional: "कोई छिपे हुए शुल्क नहीं। सीधे माइलस्टोन और पहले से तय किए गए पारदर्शी अनुमान।"
                },
                {
                    title: "तकनीक-सक्षम",
                    desc: "सरल, सुरक्षित और सुविधाजनक ऑनलाइन मंच।",
                    additional: "ऑनलाइन कॉल शेड्यूल करें, सुरक्षित रूप से दस्तावेज अपलोड करें और स्थिति ट्रैक करें।"
                },
                {
                    title: "विश्वसनीय नेटवर्क",
                    desc: "आवश्यकतानुसार स्वतंत्र, योग्य और अनुभवी पेशेवर।",
                    additional: "जांचे-परखे अधिवक्ता, चार्टर्ड एकाउंटेंट और विशेषज्ञ।"
                }
            ]
        },
        belief: {
            kicker: "हमारा विश्वास",
            title: "आगे क्या करना है, यह जानें।",
            line1: "हो सकता है आपके पास हमेशा सभी उत्तर न हों।",
            line2: "लेकिन आप हमेशा अगला कदम उठा सकते हैं।",
            line3: "CASE SUNO इसी के लिए उपस्थित है।",
            cta: "हमारी कहानी"
        },
        cta: {
            kicker: "कोई प्रश्न है?",
            title: "आइए आगे का रास्ता खोजें।",
            desc: "अपनी आवश्यकता साझा करें और हमारी टीम आपको अगले कदमों और उपलब्ध सहायता पर मार्गदर्शन करेगी।",
            startEnquiry: "अपनी पूछताछ शुरू करें",
            chatWhatsApp: "व्हाट्सएप पर बात करें",
            quoteLine1: "वही सवाल।",
            quoteLine2: "अधिक स्पष्ट कल।"
        },
        footer: {
            rights: "© 2026 CASE SUNO. सर्वाधिकार सुरक्षित।",
            privacy: "गोपनीयता नीति",
            terms: "नियम और शर्तें",
            disclaimer: "अस्वीकरण (Disclaimer)",
            locationNotice: "सूरत, गुजरात, भारत · ऑनलाइन और अपॉइंटमेंट आधारित सहायता"
        },
        auth: {
            getStarted: "शुरुआत करें",
            chooseAccount: "CASE SUNO के साथ आगे बढ़ने के लिए चुनें कि आप कैसे जारी रखना चाहते हैं।",
            howCanWeHelp: "हम आपकी कैसे सहायता कर सकते हैं?",
            selectAccount: "जारी रखने के लिए अपना अकाउंट प्रकार चुनें।",
            user: "उपयोगकर्ता / क्लाइंट",
            userDescription: "सहायता प्राप्त करें, पूछताछ भेजें और अपने अनुरोधों को ट्रैक करें।",
            professional: "प्रोफेशनल / वकील",
            professionalDescription: "सौंपे गए मामलों, क्लाइंट और परामर्श को प्रबंधित करें।",
            login: "लॉग इन",
            signup: "साइन अप",
            welcomeBack: "वापसी पर स्वागत है",
            createYourAccount: "अपना अकाउंट बनाएं",
            loginAsUser: "जारी रखने के लिए उपयोगकर्ता के रूप में लॉग इन करें।",
            loginAsProfessional: "जारी रखने के लिए प्रोफेशनल के रूप में लॉग इन करें।",
            createUserAccount: "अपना CASE SUNO उपयोगकर्ता अकाउंट बनाएं।",
            createProfessionalAccount: "अपना प्रोफेशनल अकाउंट बनाएं।",
            fullName: "पूरा नाम",
            enterFullName: "अपना पूरा नाम दर्ज करें",
            emailAddress: "ईमेल पता",
            enterEmail: "अपना ईमेल पता दर्ज करें",
            password: "पासवर्ड",
            enterPassword: "अपना पासवर्ड दर्ज करें",
            professionalVerification: "प्रोफेशनल अकाउंट को एक्सेस देने से पहले सत्यापन की आवश्यकता हो सकती है।",
            rememberMe: "मुझे याद रखें",
            forgotPassword: "पासवर्ड भूल गए?",
            createAccount: "अकाउंट बनाएं",
            continueGoogle: "Google के साथ जारी रखें",
            noAccount: "अकाउंट नहीं है?",
            alreadyAccount: "पहले से अकाउंट है?",
            signUp: "साइन अप",
            trustedSupport: "विश्वसनीय सहायता",
            legalJourney: "आपकी कानूनी यात्रा के लिए।"
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    // FIX:
    // Do NOT read localStorage inside the useState initializer.
    // Server cannot access localStorage, while the browser can.
    // Starting with English guarantees identical SSR + client HTML.
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    /**
   * Load previously selected language after the component
   * has mounted in the browser.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("case_suno_lang");
                if (saved === "gu" || saved === "hi" || saved === "en") {
                    setLanguageState(saved);
                }
            } catch  {
            // Ignore localStorage errors.
            }
        }
    }["LanguageProvider.useEffect"], []);
    /**
   * Change language manually.
   */ const setLanguage = (lang)=>{
        setLanguageState(lang);
        try {
            localStorage.setItem("case_suno_lang", lang);
            document.documentElement.lang = lang;
        } catch  {
        // Ignore localStorage errors.
        }
    };
    /**
   * Cycle through:
   * English → Hindi → Gujarati → English
   */ const toggleLanguage = ()=>{
        setLanguageState((currentLanguage)=>{
            const nextLanguage = currentLanguage === "en" ? "hi" : currentLanguage === "hi" ? "gu" : "en";
            try {
                localStorage.setItem("case_suno_lang", nextLanguage);
                document.documentElement.lang = nextLanguage;
            } catch  {
            // Ignore localStorage errors.
            }
            return nextLanguage;
        });
    };
    /**
   * Keep the HTML lang attribute synchronized
   * with the currently selected language.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            document.documentElement.lang = language;
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const value = {
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/LanguageContext.tsx",
        lineNumber: 1602,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "YoaONVHJnN3SVBfBDtuG7D1aRRM=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", true);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
                if (domNode === null) {
                    // A missing hash target is still a handled scroll intent. Do not
                    // fall back to the route segment or leave the intent pending.
                    scrollRef.current = false;
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                    return;
                }
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                let scrollPaddingTop = null;
                const getScrollPaddingTop = ()=>{
                    if (scrollPaddingTop === null) {
                        // Reuse the style and layout update from the geometry read above.
                        scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                    }
                    return scrollPaddingTop;
                };
                // If the element's top edge is already in the viewport, exit early.
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) === 1) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) !== 1) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                focusAndScrollRef.onlyHashChange = false;
                focusAndScrollRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time truthy", 1) ? InnerScrollHandlerNew : "TURBOPACK unreachable";
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
]);

//# sourceMappingURL=_1g6d2az._.js.map