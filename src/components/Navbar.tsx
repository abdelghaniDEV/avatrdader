import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslations, useLocale } from "next-intl";
import {Link} from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations("header");
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6">
      <Link href={"/"} className="hover:text-main-primary">
          {t("home")}
        </Link>
        <li>
          <HoverCard>
            <HoverCardTrigger className="cu cursor-pointer hover:text-main-primary">
              {t("products")}
            </HoverCardTrigger>
            <HoverCardContent className="mt-4 mx-4">
              <div className="flex flex-col gap-2 font-[700] uppercase">
                <Link href={"/products/forex"} className="hover:text-main-bg">
                  {t("forex")}
                </Link>
                <Link
                  href={"/products/cfd-trading"}
                  className="hover:text-main-bg"
                >
                  {t("cfd_trading")}
                </Link>
                <Link href={"/products/stocks"} className="hover:text-main-bg">
                  {t("stocks")}
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <HoverCard>
            <HoverCardTrigger className="cu cursor-pointer hover:text-main-primary">
              {t("trading_platforms")}
            </HoverCardTrigger>
            <HoverCardContent className="mt-4">
              <div className="flex flex-col gap-2 font-[700] uppercase">
                <Link
                  href={"/trading-platforms/metatrader-4"}
                  className="hover:text-main-bg"
                >
                  {t("mt4")}
                </Link>
                <Link
                  href={"/trading-platforms/metatrader-5"}
                  className="hover:text-main-bg"
                >
                  {t("mt5")}
                </Link>
                <Link
                  href={"/trading-platforms/web-trader"}
                  className="hover:text-main-bg"
                >
                  {t("web_trader")}
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
        <Link href={"/cryptocurrencies"} className="hover:text-main-primary">
          {t("cryptocurrencies")}
        </Link>
        <Link href={"/trading-info"} className="hover:text-main-primary">
          {t("trading_info")}
        </Link>

        <Link href={"/about"} className="hover:text-main-primary">
          {t("about_us")}
        </Link>
      </ul>
    </div>
  );
}
