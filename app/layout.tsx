import type { Metadata } from "next";
import { Arima } from "next/font/google";
import "./globals.css";

const JosefinSans = Arima({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-josefin-sans",
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
    <html lang="en" style={{ scrollBehavior: 'smooth' }} className="scroll-smooth">
      <body className={`${JosefinSans.variable} bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 antialiased`}>
        <div className="font-Josefin layoutDiv">
          {children}
        </div>
      </body>
    </html>
  );
}
