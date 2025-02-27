"use client";
import { Button } from "@/components/ui/button";
import { Calculator, ChevronRight, Landmark, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tradingInfo from "@/assets/day-trading-de.jpg";
import { useTranslations, useLocale } from "next-intl";

export default function page() {
  const t = useTranslations("info");
  const locale = useLocale();
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              {t("info")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400"> {t("info")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center flex flex-col gap-3 items-center justify-center">
        <Image
          src={tradingInfo}
          alt="trading info"
          className="rounded-[5px] w-full max-w-[600px]"
        />
        <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg px-6">
          {t("register_new")}
        </Button>
      </div>

      <div className="py-3 container mx-auto ">
        <h1 className="text-[24px] sm:text-[30px] font-[600]">{t("title")}</h1>
        <p className="text-[16px] sm:text-[18px] px-3">{t("text")}</p>
        <div className="flex flex-col gap-3 pt-7">
          <div  className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Landmark className="w-[60px] sm:w-[80px] text-main-primary h-[60px] sm:h-[80px]" />
            </div>
            <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] font-[700] text-main-primary">
                {t("info_01.title")}
              </h3>
              <p className="text-[16px] sm:text-[18px]">
                {t("info_01.description")}
              </p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Network className="w-[60px] sm:w-[80px] text-main-primary h-[60px] sm:h-[80px]" />
            </div>
            <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] text-main-primary font-[700]">
                {t("info_02.title")}
              </h3>
              <p className="text-[16px] sm:text-[18px]">
                {t("info_02.description")}
              </p>
            </div>
          </div>
          <div  className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Calculator className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] text-main-primary" />
            </div>
            <div  style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] font-[700] text-main-primary">
              {t("info_03.title")}
              </h3>
              <p className="text-[16px] sm:text-[18px]">
              {t("info_02.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
