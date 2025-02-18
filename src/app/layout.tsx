import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  description: "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos &amp; Stock Market Indices with Al Ansari-Exchange&#039;s ✅ Award Winning Platforms",
  icons: {
    icon: "/favicon-32x32.png", // Path to your favicon
  },
  openGraph: {
    title: "Al Ansari-Exchange",
    description:
      "The Best Online Forex Trading Experience! ⭐ Trade Forex, Stocks, Commodities, Cryptos & Stock Market Indices with Al Ansari-Exchange's ✅ Award-Winning Platforms",
    url: "https://avatrdader.vercel.app", // Replace with your actual URL
    siteName: "Al Ansari-Exchange",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Replace with an actual image path
    //     width: 1200,
    //     height: 630,
    //     alt: "Al Ansari-Exchange",
    //   },
    // ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
