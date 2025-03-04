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
  title: "Al Ansari-Exchange",
  description:
    "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos &amp; Stock Market Indices with Al Ansari-Exchange&#039;s ✅ Award Winning Platforms",
  icons: {
    icon: "/favicon-32x32.png", // Path to your favicon
  },
  openGraph: {
    title: "Al Ansari-Exchange",
    description:
      "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos & Stock Market Indices with Al Ansari-Exchange's ✅ Award-Winning Platforms",
    url: "https://avatrdader.vercel.app", // Replace with your actual URL
    siteName: "Al Ansari-Exchange",
  },
};

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
