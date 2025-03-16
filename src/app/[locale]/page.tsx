"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imgHome01 from "@/assets/home01.jpg";

import BoxFeta from "@/components/boxFeta";
import PlatformTrading from "@/assets/fx-at-hero-mt4.jpg";
import aword01 from "@/assets/Outstanding-Regulated-Broker-_-Cfi.co-1.png";
import { useTranslations, useLocale } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);



  return (
    <div
      className=""
      
    >
      {/* hero */}
      <div
        className={`${
          locale === "ar" ? "bg-custom-gradient" : "bg-[url(/Hero01.webp)]"
        } bg-cover w-full h-[480px]  md:h-[500px] lg:h-[500px]  `}
        // style={{
        //   backgroundPosition: locale === "ar" ? "right" : "left",
        // }}
      >
        <div className="flex  items-center  justify-start pt-[40px] md:pt-[60px]  md:px-0">
          {/* Text Content */}
          <div
            className="w-full md:w-[700px] flex flex-col gap-4 text-white text-center  px-4 sm:px-8 md:px-10 lg:px-20 md:text-left"
            style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}
          >
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px]  md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              {t("hero_title")}
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              {t("hero_text")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                {t("register_now")}
              </Button>
              <Button className="font-[500] h-12 w-full md:w-auto text-[16px] bg-inherit text-[#7e868e] border border-[#7e868e]">
                {t("free_demo")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div  className="bg-white py-6 md:py-10  my-10 px-4 sm:px-8 md:px-10 lg:px-20 ">
        {/* Heading */}
        <h1 className="text-center text-[24px] md:text-[30px] font-[600] pb-5">
          {t("markets_title")}
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          <BoxFeta title={t("forex")} text={t("forex_desc")} />
          <BoxFeta title={t("indices")} text={t("indices_desc")} />
          <BoxFeta title={t("commodities")} text={t("commodities_desc")} />
          <BoxFeta title={t("stocks")} text={t("stocks_desc")} />
          <BoxFeta title={t("cryptos")} text={t("cryptos_desc")} />
          <BoxFeta title={t("bullion")} text={t("bullion_desc")} />
        </div>
      </div>
      <div   style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}  className=" px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 my-10 md:mb-20 ">
        <div className="relative ">
          <Image
            src={imgHome01}
            alt="hero"
            className="rounded-[10px] w-full h-auto"
          />
         
        </div>
        <div>
          <h1 className="text-[30px] md:text-[40px] font-[700] pb-[10px]">
            {t("trading_title")}
          </h1>
          <p className="text-[16px] md:text-[20px]">{t("trading_text")}</p>
          <div className="flex gap-10 items-center">
            <Button className="font-[550] h-11 w-18 text-[16px] my-3 bg-main-bg">
              {t("contact_us")}
            </Button>
            <div className="w-[100px]">
              <Image src={aword01} alt="aword" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/baner.webp)] bg-cover w-full h-[400px]  px-4 sm:px-8 md:px-10 lg:px-20 sm:h-[400px] md:h-[450px]">
        <div className="flex flex-col md:flex-row items-start justify-between pt-[30px] md:pt-[60px] ">
          {/* Left Section */}
          <div className="w-full md:w-[600px] flex flex-col gap-4 text-white">
            <h1 className="text-[40px] leading-[40px] sm:text-[50px] sm:leading-[50px] md:text-[60px] md:leading-[50px] font-[600]">
              {t("pricing_title")}
            </h1>
            <span className="text-[14px] sm:text-[16px]">
              Next-Gen Pricing Model
            </span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              {t("pricing_text")}
            </p>
            <span className="text-[14px] sm:text-[16px]">
              Explore the advantages of our RAW Spread pricing.
            </span>
            <div>
              <Button className="font-[550] h-11 w-18 text-[14px] sm:text-[16px] bg-main-bg">
                {t("open_raw_account")}
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-white flex flex-col items-center mt-8 md:mt-0 hidden md:block">
            <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-[500]">
              Spreads As Low As
            </h2>
            <span className="text-[100px] sm:text-[150px] md:text-[200px] font-[700] leading-[100px] sm:leading-[150px] md:leading-[200px]">
              0.0
            </span>
          </div>
        </div>
      </div>
      <div className="py-10  px-4 sm:px-8 md:px-10 lg:px-20 px-4">
        <div className="flex items-center justify-center flex-col">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-[600] text-center">
            {t("funding_title")}
          </h1>

          {/* Paragraph */}
          <p className="px-0 sm:px-[50px] md:px-[100px] text-[16px] sm:text-[18px] md:text-[20px] text-center mt-4">
            {t("funding_text")}
          </p>

          {/* Image Grid */}
        </div>
      </div>
      <div className="bg w-full grid grid-cols-1 md:grid-cols-3 items-center bg-main-primary  px-4 sm:px-8 md:px-10 lg:px-20 text-white py-8 mb-10">
        <h1 className="text-center text-[24px] md:text-[30px] leading-[24px] md:leading-[35px] font-[600] pb-5">
          {t("platform_title")} <br />
          <span className="text-main-bg">{t("platform_subtitle")}</span>
        </h1>

        <div className="w-full">
          <Image
            src={PlatformTrading}
            alt="PlatformTrading"
            className="w-full h-auto object-cover"
            quality={100} // Increase quality (default is 75)
            priority
            sizes="(max-width: 768px) 100vw, 1200px" // Responsive sizes
          />
        </div>
        <div>
          <p className="text-center py-5 md:text-[20px]">
            {t("platform_text")}
          </p>
          <div className="flex items-center justify-center gap-6  px-4 sm:px-8 md:px-10 lg:px-20">
            <Button className="font-[550] h-11 w- md:w-auto text-[16px] bg-main-bg">
              {t("register_now")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
