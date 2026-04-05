import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Nikhil Yadav — Full Stack Developer",
  description:
    "Full Stack Developer with hands-on experience in MERN Stack, React Native, RESTful APIs, and cloud deployment.",
  keywords: ["Full Stack Developer", "MERN Stack", "React Native", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jetbrains.variable} bg-bg text-[#e8f0f8] font-mono antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
