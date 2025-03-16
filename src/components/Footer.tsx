import React from "react";
import logo from "../assets/Al-Ansari-Exchange-Logo.png";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import aword01 from "../assets/award-footer-2.png";
import aword02 from "../assets/award-footer-1.png";
import aword03 from "../assets/award-footer-3.png";
import aword04 from "../assets/award-footer-4.png";
import aword05 from "../assets/award-footer-5.png";
import aword06 from "../assets/award-footer-6.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const th = useTranslations("header");
  return (
    <div className="">
      <div className="py-8">
        <h2 className="text-center text-[30px] md:text-[40px] pb-3 font-[600]">
          Our Awards
        </h2>
        <div className=" grid grid-cols-4  md:grid-cols-7 gap-5  px-4 sm:px-8 md:px-10 lg:px-20 ">
          <Image src={aword01} alt="aword1" />
          <Image src={aword02} alt="aword1" />
          <Image src={aword03} alt="aword1" />
          <Image src={aword04} alt="aword1" />
          <Image src={aword05} alt="aword1" />
          <Image src={aword06} alt="aword1" />
          <Image src={aword06} alt="aword1" />
        </div>
      </div>
      <div className="bg-main-primary w-full  text-neutral-400   px-4 sm:px-8 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between  gap-[20px] md:gap-[70px] pb-10">
          <div>
            <Image src={logo} alt="logo" className="w-[200px]" />
            <p className="md:w-[500px] pt-5">{t("text")}</p>
          </div>
          <div>
            <h4 className="pb-4 text-[20px] text-white">{t("need")}</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/products/forex"}>{th("forex")}</Link>
              </li>
              <li>
                <Link href={"/products/cfd-trading"}>{th("cfd_trading")}</Link>
              </li>
              <li>
                <Link href={"/products/stocks"}>{th("stocks")}</Link>
              </li>
              <li>
                <Link href={"/about"}>{th("about_us")}</Link>
              </li>

              <li>
                <Link href={"/cryptocurrencies"}>{th("cryptocurrencies")}</Link>
              </li>
              <li>
                <Link href={"/trading-info"}>{th("trading_info")}</Link>
              </li>
              <li>
                <Link href={"/trading-platforms/metatrader-4"}>
                  {th("mt4")}
                </Link>
              </li>
              <li>
                <Link href={"/trading-platforms/metatrader-5"}>
                  {th("mt5")}
                </Link>
              </li>
              <li>
                <Link href={"/trading-platforms/web-trader"}>
                  {th("web_trader")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="pb-4 text-[20px] text-white">{t("contact")}</h4>
            <div className="flex gap-2 mb-2 items-center">
              <Mail className="w-4 h-4" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@al-ansari.com"
                className="cursor-pointer"
              >
                info@al-ansari.com
              </a>
            </div>
            <div className="flex gap-2 mb-2 items-center">
  <Phone className="w-4 h-4" />
  <a
    href="tel:+442045871782"
    className=" cursor-pointer"
  >
    +442045871782
  </a>
</div>
            <ul className="flex  gap-2 text-white items-center">
              <a
                href="https://www.instagram.com/alansariexchange"
                className="bg-neutral-600 p-[5px] rounded-[10px] hover:bg-neutral-700 transition-colors"
                target="_blank" // لفتح الرابط في نافذة جديدة
                rel="noopener noreferrer" // لتعزيز الأمان
              >
                <Instagram className="h-[20px] w-[20px] text-white" />
              </a>
              <a
                href="https://www.facebook.com/AlAnsariExchangeOfficialPage"
                className="bg-neutral-600 p-[5px] rounded-[10px] hover:bg-neutral-700 transition-colors"
                target="_blank" // لفتح الرابط في نافذة جديدة
                rel="noopener noreferrer" // لتعزيز الأمان
              >
                <Facebook className="h-[20px] w-[20px] text-white" />
              </a>
              <a
                href="https://x.com/alansariex?s=11"
                className="bg-neutral-600 p-[5px] rounded-[10px] hover:bg-neutral-700 transition-colors"
                target="_blank" // لفتح الرابط في نافذة جديدة
                rel="noopener noreferrer" // لتعزيز الأمان
              >
                <Twitter className="h-[20px] w-[20px] text-white" />
              </a>
            </ul>
          </div>
        </div>
        <hr />
        <div className="md:flex text-center justify-between pt-10">
          <div>
            <p>{t("reserved")}</p>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>{t("Terms_Conditions")}</li>
              <li>{t("Privacy_Policy")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
