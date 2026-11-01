import type { Metadata, Viewport } from "next";
import { Geist, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Text face for the whole site. */
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

/* Wide geometric display face used only for the ALISTRON wordmark. */
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-michroma",
});

export const viewport: Viewport = {
  themeColor: "#070C15",
};

export const metadata: Metadata = {
  title: "ALISTRON | Advancing Bionics Research & STEM Education",
  description: "Alistron is a technology venture bridging pioneering Bionics research and practical, high-impact STEM education infrastructure for schools.",
  keywords: ["Alistron", "Alistron Bionics", "Bionics", "Prosthetics", "NeuroTech", "STEM Education", "Arduino Workshops", "BCI Research", "School Science Labs", "Electromyography", "EEG Signal Processing"],
  authors: [{ name: "Alistron Engineering Team", url: "https://alistron.in" }],
  metadataBase: new URL("https://alistron.in"),
  openGraph: {
    title: "ALISTRON | Engineering Human Potential",
    description: "Bringing together emerging neuro-technology research and practical STEM education lab infrastructure.",
    url: "https://alistron.in",
    siteName: "Alistron",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALISTRON | Bionics & STEM Infrastructure",
    description: "Advancing frontier technology through pioneering research and practical school STEM labs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${michroma.variable}`}>
      <body>
        <Navbar />
        <main id="main-content" style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
