import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoImg from "@/assets/trading-cryptomonnaie.jpg";
import { Button } from "@/components/ui/button";
import cryptoImg01 from "@/assets/cryptoimage.jpg";
import { useTranslations } from "next-intl";

export default function Crypto() {
  const t = useTranslations("crypto");
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">
              {t("crypto")}
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("crypto")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 container py-6">
        <div className="">
          <Image
            src={cryptoImg}
            className="w-full h-auto bg-cover"
            alt="crypto"
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">{t("title")}</h1>
          <p className="text-base md:text-lg text-center max-w-[600px]">
             {t("text")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {t("section_one.title")}
          </h1>
          <p className="text-base">
          {t("section_one.description")}
          </p>
          <p className="font-semibold text-base">
          {t("section_one.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-bg">
            {t("section_one.button")}
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={cryptoImg01} alt="crypto" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-[#F3F3F3] my-10 container ">
        <div className="flex flex-col items-center mx-auto pt-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          {t("section_two.title")}
          </h1>
          <ul className="text-base md:text-lg leading-relaxed list-disc space-y-4 pl-5">
            <li>
              <strong>{t("section_two.data01.title")} : </strong> 
              {t("section_two.data01.description")}
            </li>
            <li>
              <strong>{t("section_two.data02.title")} : </strong> 
              {t("section_two.data02.description")}
            </li>
            <li>
              <strong>{t("section_two.data03.title")} : </strong> 
              {t("section_two.data03.description")}
            </li>
            <li>
              <strong>{t("section_two.data04.title")} : </strong> 
              {t("section_two.data04.description")}
            </li>
            <li>
              <strong>{t("section_two.data05.title")} : </strong> 
              {t("section_two.data05.description")}
            </li>
            <li>
              <strong>{t("section_two.data06.title")} : </strong> 
              {t("section_two.data06.description")}
            </li>
            
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-3 pb-5 px-4 md:justify-start">
          <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-bg">
          {t("section_two.button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
