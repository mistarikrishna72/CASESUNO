import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
export const metadata: Metadata = {
  title: 'CASE SUNO - Know What to Do Next',
  description:
    'CASE SUNO listens, organises and helps you move forward with trusted professionals, where required. Professional consultation and assistance in Surat, Gujarat.',
  
  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'CASE SUNO - Know What to Do Next',
    description:
      'CASE SUNO listens, organises and helps you move forward with trusted professionals, where required. Professional consultation and assistance in Surat, Gujarat.',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#222222] font-sans antialiased selection:bg-[#E2DDD5] selection:text-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
