import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-ansariTradinge",
  description:
    "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos &amp; Stock Market Indices with Al-ansariTrading ✅ Award Winning Platforms",
  icons: {
    icon: "/favicon-32x32.png", // Path to your favicon
  },
  openGraph: {
    title: "Al-ansariTrading",
    description:
      "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos & Stock Market Indices with Al-ansariTrading ✅ Award-Winning Platforms",
    url: "https://avatrdader.vercel.app", // Replace with your actual URL
    siteName: "Al-ansariTrading",
  },
  other : {
    'google-site-verification' : "kDvZD41VHTDTtKgAz-dUpkZ324EPC9ZwIonb7Ul6aF4"
  }
};

{/* <meta name="google-site-verification" content="kDvZD41VHTDTtKgAz-dUpkZ324EPC9ZwIonb7Ul6aF4" /> */}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }


  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          fontFamily: locale === 'ar' ? '"Tajawal", serif' : '', 
         }}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
