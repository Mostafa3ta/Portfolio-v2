import type { Metadata, Viewport } from "next";
import { Arima } from "next/font/google";
import { SITE } from "@/constant/site";
import "./globals.css";

// Arima is a variable font: one file covers every weight.
const arima = Arima({
  subsets: ['latin'],
  variable: "--font-josefin-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Mostafa Mahmoud"
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${arima.variable} bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 antialiased`}>
        {/* Without JavaScript, scroll reveals never fire, so show their content straight away. */}
        <noscript dangerouslySetInnerHTML={{ __html: "<style>.reveal{opacity:1;transform:none}</style>" }} />
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900">
          Skip to content
        </a>
        <div className="font-Josefin layoutDiv">
          {children}
        </div>
      </body>
    </html>
  );
}
