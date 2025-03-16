import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import image01 from "@/assets/imag02-forex.jpg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Stocks() {
  const t = useTranslations("stocks");
  const locale = useLocale();

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              {t("stocks")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("stocks")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          locale === "ar" ? "bg-custom-gradient" : "bg-[url(/bg-cfd.jpg)]"
        } bg-cover w-full h-[480px] md:h-[400px] lg:h-[480px]`}
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
              <span className="text-main-bg">{t("stocks")} </span>
              {t("stocks_trading_description")}
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              {t("stocks_text")}
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
          <div
            style={{
              textAlign: locale === "ar" ? "right" : "left",
            }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("invest")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              {t("invest_description")}
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                {t("register_new")}
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={image01}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] my-10 " >
        <div style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto flex flex-col gap-6 py-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {t("benefits")}
          </h1>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc pl-5 md:pl-0">
            <li>
              <strong>{t("benefits01.title")} -</strong>{" "}
              {t("benefits01.description")}
            </li>
            <li>
              <strong>{t("benefits02.title")} -</strong>{" "}
              {t("benefits02.description")}
            </li>
            <li>
              <strong>{t("benefits03.title")} - </strong>{" "}
              {t("benefits03.description")}
            </li>
            <li>
              <strong>{t("benefits04.title")} -</strong>{" "}
              {t("benefits04.description")}
            </li>
            <li>
              <strong>{t("benefits05.title")} -</strong>{" "}
              {t("benefits05.description")}
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="md:my-10 my-6 ">
        <div className=" px-4 sm:px-8 md:px-10 lg:px-20 mx-auto flex flex-col gap-6 py-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            CFD Trading Platforms by AvaTrade
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            AvaTrade caters to the diverse needs of traders by providing a range
            of user-friendly CFD trading platforms, ensuring an efficient and
            tailored trading experience.
          </p>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc pl-5 md:pl-0">
            <li>
              <strong>MT4/5:</strong> The MetaTrader family platforms, renowned
              for their advanced customization capabilities and comprehensive
              analytic tools, are favored among traders for their robustness and
              reliability, making them some of the best platforms for CFD
              trading.
            </li>
            <li>
              <strong>WebTrader:</strong> Offers a clean and straightforward
              interface directly from your browser (no download required).
              Integrated with Trading Signals, it simplifies trading by
              providing actionable insights directly on the platform.
            </li>
            <li>
              <strong>AvaTrade App:</strong> Our proprietary Mobile Trading App
              allows you to trade on the go, ensuring you never miss trading
              opportunities.
            </li>
            <li>
              <strong>AvaSocial:</strong> Our proprietary Social Trading app
              that allows you to engage with a community of traders and copy
              trade positions of the best performers on our platforms.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
