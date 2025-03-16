import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import image01 from "@/assets/imag02-forex.jpg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Forex() {

  const t = useTranslations("forex");
  const locale = useLocale();

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              {t("forex_trading")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("forex_trading")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${
          locale === "ar" ? "bg-custom-gradient" : "bg-[url(/bg-forex.jpg)]"} bg-cover w-full h-[400px] md:h-[400px] lg:h-[400px]`}>
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px]  px-4 sm:px-8 md:px-10 lg:px-20 ">
          {/* Text Content */}
          <div
            style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}
            className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center  px-4 sm:px-8 md:px-10 lg:px-20 md:text-left"
          >
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              {t("forex_trading_with")}
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              {t("forex_trading_description")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                {t("join_Al Ansari-Exchanger")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 sm:px-8 md:px-10 lg:px-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 px-4 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-[40px] font-bold">
              {t("forex_trading_made_easy")}
            </h1>
            <p className="text-base md:text-[20px]">
              {t("forex_trading_made_easy_description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                {t("register_new")}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[450px]">
            <Image
              src={image01}
              alt="our vision"
              className="rounded-[15px] w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] my-10">
        <div className="flex flex-col items-center  px-4 sm:px-8 md:px-10 lg:px-20  py-6">
          <h1 className="text-3xl md:text-[40px] font-bold text-center mb-6">
            {t("why_choose_Al Ansari-Exchange")}
          </h1>
          <ul className="text-base md:text-[18px] leading-relaxed md:leading-[30px] list-disc space-y-4 px-3 ">
            <li>{t("choose01")}</li>
            <li>{t("choose02")}</li>
            <li>{t("choose03")}</li>
            <li>{t("choose04")}</li>
            <li>{t("choose05")}</li>
          </ul>
        </div>
      </div>
      <div className="py-2  px-4 sm:px-8 md:px-10 lg:px-20 mx-auto flex flex-col gap-4">
        <h1 className="text-3xl md:text-[40px] font-bold">{t("benefits")}</h1>
        <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px]">
          {t("benefits_text")}
        </p>
        <div>
          <Button className="font-semibold h-11 w-full md:w-[200px] text-base bg-main-bg">
            {t("register_new")}
          </Button>
        </div>
      </div>
    </div>
  );
}
