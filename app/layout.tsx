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
    default: "Mostafa Mahmoud | Front-End Engineer",
    template: "%s | Mostafa Mahmoud"
  },
  description: "Experienced Front-End Engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications with modern frontend technologies. Available for frontend development opportunities.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Web Developer", "JavaScript", "Tailwind CSS", "Mostafa Mahmoud"],
  authors: [{ name: "Mostafa Mahmoud" }],
  creator: "Mostafa Mahmoud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafa-mahmoud.vercel.app",
    title: "Mostafa Mahmoud | Front-End Engineer",
    description: "Experienced Front-End Engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications.",
    siteName: "Mostafa Mahmoud Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Mahmoud | Front-End Engineer",
    description: "Experienced Front-End Engineer specializing in React, Next.js, and TypeScript.",
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
