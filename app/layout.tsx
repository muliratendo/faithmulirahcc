import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faith Mulira Health Care Centre",
  description: "Faith Mulira Health Care Centre provides affordable, quality healthcare services in Masooli, Gayaza Road. Level III facility offering maternity, outpatient, reproductive health, and vaccination services.",
  keywords: "health centre Gayaza, Faith Mulira, healthcare Masooli, maternity services Uganda, vaccination Gayaza, affordable healthcare Kampala",
  authors: [{ name: "Faith Mulira Health Care Centre" }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://faithmulirahcc.com",
    title: "Faith Mulira Health Care Centre | Quality Healthcare in Gayaza, Uganda",
    description: "Providing quality, affordable healthcare to the Masooli and Gayaza community. 24/7 emergency services, maternity, and outpatient care.",
    siteName: "Faith Mulira Health Care Centre",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faith Mulira Health Care Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Mulira Health Care Centre",
    description: "Quality healthcare in Gayaza, Uganda",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#7BC043",
  robots: "index, follow",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        <main className="pt-[120px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
