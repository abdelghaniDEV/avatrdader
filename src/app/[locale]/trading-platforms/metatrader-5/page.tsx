import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

export default function page() {
  const t = useTranslations("mt5");
  const locale = useLocale();
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              {t("mt5")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("mt5")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${locale === "ar" ? "bg-custom-gradient" : "bg-[url(/bg-meta5.jpg)]"}  bg-cover w-full h-[480px] md:h-[400px] lg:h-[400px]`}>
        <div className="flex  items-center justify-start pt-[20px] md:pt-[30px]  px-4 md:px-0">
          {/* Text Content */}
          <div
            style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}
            className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left"
          >
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              {t("mt5_trading_with")}
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[25px] lg:text-[20px]">
              {t("mt5_text")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                {t("register_new")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container py-10 px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[24px] sm:text-[30px] font-[600]">
            {t("benefits.title")}
          </h1>
          <p className="text-[16px] sm:text-[18px]">
            {t("benefits.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                {t("benefits.01.title")}
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                {t("benefits.01.description")}
              </p>
            </div>
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                {t("benefits.02.title")}
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                {t("benefits.02.description")}
              </p>
            </div>
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                {t("benefits.03.title")}
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                {t("benefits.03.title")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-l-0 md:border-l-[2px] border-main-primary md:pl-20">
          <div className="flex flex-col gap-3 pb-6">
            <h1 className="text-[24px] sm:text-[30px] font-[600]">
              {t("features.title")}
            </h1>
            <ul className="text-[16px] sm:text-[20px] list-disc px-6">
              {}
              <li>{t("features.data01")}</li>
              <li>{t("features.data02")}</li>
              <li>{t("features.data03")}</li>
              <li>{t("features.data04")}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] sm:text-[30px] font-[600]">
              MetaTrader 4 Support
            </h1>
            <ul className="text-[14px] sm:text-[17px] flex flex-wrap gap-3 px-6">
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                Web
              </li>
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                APP
              </li>
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                Windows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
