import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { TranslationProvider } from "./i18n/TranslationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "C2E - Centre d'Expertise et d'Evaluation",
  description:
    "C2E accompagne les institutions dans la planification, le suivi et l'évaluation des politiques et programmes de développement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <TranslationProvider>
          <Navbar />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
