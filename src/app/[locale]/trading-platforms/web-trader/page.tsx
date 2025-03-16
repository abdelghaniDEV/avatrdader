import { Button } from "@/components/ui/button";
import { ChevronRight, LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tradingview01 from "@/assets/tradingview01.png";
import tradingview02 from "@/assets/tradingview02.webp";
import tradingview03 from "@/assets/tradingview03.png";
import { useTranslations, useLocale } from "next-intl";

export default function WebTrader() {
  const t = useTranslations("web_trader");
  const locale = useLocale();
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              {t("web_trader")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("web_trader")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-cfd.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[480px]">
        <div className="flex  items-center justify-center pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col items-center gap-4 text-white text-center  px-4 sm:px-8 md:px-10 lg:px-20 md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] text-center md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              <span className="text-main-bg">{t("web_trader")} </span> <br />
              {t("title")}
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] text-center lg:text-[20px]">
              {t("text")}
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
      <div className="">
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 items-center">
          <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("section_one.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              {t("section_one.description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                {t("section_one.button")}
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview01}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] my-8">
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 items-center">
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview02}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
          <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("section_two.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              {t("section_two.description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                {t("section_two.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 items-center">
          <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("section_three.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              {t("section_three.description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                {t("section_three.button")}
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview03}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] py-10">
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            {t("features.title")}
          </h1>
          <div className="flex flex-col  md:flex-row gap-5 items-center gap- md:justify-evenly py-8">
            <div className="flex-col flex items-center justify-center gap-2 bg-white w-[220px] border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">{t("features.data01")}</h2>
            </div>
            <div className="flex-col flex items-center justify-center gap-2 w-[220px] bg-white border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">{t("features.data02")}</h2>
            </div>
            <div className="flex-col flex items-center justify-center gap-2 w-[220px] bg-white border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">{t("features.data03")}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
