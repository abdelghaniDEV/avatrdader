import { Button } from "@/components/ui/button";
import {
  ChartCandlestick,
  ChevronRight,
  CircleCheckBig,
  RotateCcw,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import aboutImg from "@/assets/about.jpg";
import Image from "next/image";
import visionImg from "@/assets/vision.jpg";
import { useTranslations, useLocale } from "next-intl";

export default function About() {
    const t = useTranslations("about");
    const locale = useLocale();
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh]    mb-[30px] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">{t("about")}</h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>{t("home")}</Link>
              <ChevronRight />
              <h2 className="text-gray-400">{t("about")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-4xl font-bold">{t("section_one.title")}</h1>
            <p className="text-lg leading-relaxed">
              {t("section_one.text")}
            </p>
            <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-bg">
              {t("register_new")}
            </Button>
          </div>
          <div>
            <Image
              src={aboutImg}
              alt="about"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: <User />,
              title: t("section_two.data02.title"),
              subtitle: t("section_two.data02.subtitle"),
            },
            {
              icon: <CircleCheckBig />,
              title: t("section_two.data01.title"),
              subtitle: t("section_two.data01.subtitle"),
            },
            {
              icon: <ChartCandlestick />,
              title: t("section_two.data04.title"),
              subtitle: t("section_two.data04.subtitle"),
            },
            {
              icon: <RotateCcw />,
              title: t("section_two.data03.title"),
              subtitle: t("section_two.data03.subtitle"),
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-14 h-14 bg-main-bg text-main-primary p-2 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="font-bold">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="text-center md:text-left">
          <h1 className="text-4xl font-bold">{t("section_two.title")}</h1>
          <p className="text-lg leading-relaxed">
             {t("section_two.text")}
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 items-center">
        <div style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">{t("section_three.title")}</h1>
          <p className="text-lg leading-relaxed">
            {t("section_three.text")}
          </p>
          <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-primary">
          {t("register_new")}
          </Button>
        </div>
        <div className="w-full md:w-[450px] mx-auto">
          <Image
            src={visionImg}
            alt="our vision"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 my-10 py-6">
        <div style={{
              textAlign: locale === "ar" ? "right" : "left",
            }} className="container text-center md:text-left">
          <h1 className="text-4xl font-bold">{t("section_four.title")}</h1>
          <p className="text-lg leading-relaxed">
             {t("section_four.text")}
          </p>
          <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-bg mt-4">
          {t("register_new")}
          </Button>
        </div>
      </div>
    </div>
  );
}
