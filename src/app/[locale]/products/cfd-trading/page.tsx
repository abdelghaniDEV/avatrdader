import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import image01 from "@/assets/imag02-forex.jpg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function CfdTrading() {
  const t = useTranslations("cfd_trading");
  const locale = useLocale();

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] text-center lg:text-[55px] ">
              {t("cfd_trading")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("cfd_trading")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          locale === "ar" ? "bg-custom-gradient" : " bg-[url(/bg-cfd.jpg)]"
        } bg-cover w-full h-[480px] md:h-[400px] lg:h-[400px]`}
      >
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div
            style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}
            className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center  px-4 sm:px-8 md:px-10 lg:px-20 md:text-left"
          >
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              {t("cfd_trading_with")}{" "}
              <span className="text-main-bg">{t("cfd_subtitle")}</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              {t("cfd_trading_description")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                {t("start_trading")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-[40px] font-bold">
              {t("cfd_trading_made_easy")}
            </h1>
            <p className="text-base md:text-[20px]">
              {t("cfd_trading_made_easy_description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                {t("start_trading")}
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

      <div className="bg-[#F3F3F3] my-10 ">
        <div
          style={{
            textAlign: locale === "ar" ? "right" : "left",
          }}
          className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto py-6 flex flex-col items-center text-center lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("why_choose_Al Ansari-Exchange")}
          </h1>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc list-inside lg:list-outside">
            <li className="mb-2">{t("choose01")}</li>
            <li className="mb-2">{t("choose02")}</li>
            <li className="mb-2">{t("choose03")}</li>
            <li className="mb-2">{t("choose04")}</li>
            <li className="mb-2">{t("choose05")}</li>
          </ul>
        </div>
      </div>

      <div className="my-10 ">
        <div
          style={{
            textAlign: locale === "ar" ? "right" : "left",
          }}
          className=" px-4 sm:px-8 md:px-10 lg:px-20 py-6 flex flex-col gap-4 text-center "
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {t("benefits")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            {t("benefits_description")}
          </p>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc ">
            <li className="mb-2">
              <strong>{t("benefits01.title")}:</strong>{" "}
              {t("benefits01.description")}
            </li>
            <li className="mb-2">
              <strong>{t("benefits02.title")}:</strong>{" "}
              {t("benefits02.description")}
            </li>
            <li className="mb-2">
              <strong>{t("benefits03.title")}:</strong>{" "}
              {t("benefits03.description")}
            </li>
            <li className="mb-2">
              <strong>{t("benefits04.title")}:</strong>{" "}
              {t("benefits04.description")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
