import type { Metadata } from "next";
import { Arima } from "next/font/google";
import "./globals.css";

// Arima is a variable font: one file covers every weight.
const arima = Arima({
  subsets: ['latin'],
  variable: "--font-josefin-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Mostafa Mahmoud | Web Developer & QA / Technical Support",
    template: "%s | Mostafa Mahmoud"
  },
  description: "Web developer with production experience building, testing, and supporting live platforms. Open to development, QA testing, technical support, and IT roles. Arabic & English. Open to international relocation — available immediately.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Web Developer", "JavaScript", "Tailwind CSS", "Mostafa Mahmoud", "QA Tester", "Manual Testing", "Technical Support", "IT Support", "Web Developer UAE", "Web Developer Dubai", "Arabic English"],
  authors: [{ name: "Mostafa Mahmoud" }],
  creator: "Mostafa Mahmoud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-v2-7p0.pages.dev",
    title: "Mostafa Mahmoud | Web Developer & QA / Technical Support",
    description: "Web developer with production experience building, testing, and supporting live platforms. Open to development, QA testing, technical support, and IT roles. Arabic & English. Open to international relocation — available immediately.",
    siteName: "Mostafa Mahmoud Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Mahmoud | Web Developer & QA / Technical Support",
    description: "Web developer with production experience building, testing, and supporting live platforms. Open to development, QA testing, technical support, and IT roles. Arabic & English. Open to international relocation — available immediately.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arima.variable} bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 antialiased`}>
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
