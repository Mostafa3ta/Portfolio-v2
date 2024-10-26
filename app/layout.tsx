import type { Metadata } from "next";
import { Arima } from "next/font/google";
import "./globals.css";

const JosefinSans = Arima({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Mostafa Mahmoud",
  description: "Skilled Front-End Developer with a passion for creating stunning and user-friendly web applications. I am proficient in HTML, CSS, and JavaScript, and have experience with popular frameworks like React and Next.js. I am always eager to learn new technologies and improve my skills.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${JosefinSans.variable} bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900`}>
        <div className="font-Josefin layoutDiv">
          {children}
        </div>
      </body>
    </html>
  );
}
