"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, UserCircle } from "lucide-react";
import Logo from "../assets/Al-Ansari-Exchange-Logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const ResponsiveNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    open: { opacity: 1, x: 0 },
  };

  const changeLanguage = (locale: string) => {
    router.push("/", { locale }); // تغيير اللغة وإعادة التوجيه إلى الصفحة الرئيسية
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#e7e9ff] py-3 flex items-center justify-center text-[#565a8e] hidden md:block">
        <h5 className="text-center">{t("risk_warning")}</h5>
      </div>

      {/* Header */}
      <div className="bg-main-primary py-1 text-white">
        <div className="flex items-center justify-center md:justify-between container">
          {/* Logo */}
          <Link href={"/"} className="w-[130px] md:w-[200px]">
            <Image src={Logo} alt="LOGO" className="object-cover" />
          </Link>

          {/* Help and Language */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>|</li>
              <li>{t("help")}</li>
              <li>|</li>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  {t("language")}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => changeLanguage("en")}
                    className="curs cursor-pointer"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => changeLanguage("ar")}
                    className="curs cursor-pointer"
                  >
                    Arabic
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* <li
                onClick={() => changeLanguage("en")}
                className="curs- cursor-pointer"
              >
                english
              </li>
              <li
                onClick={() => changeLanguage("ar")}
                className="curs- cursor-pointer"
              >
                arabic
              </li> */}
              {/* <li>{t("language")}</li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation and Buttons */}
      <div className="container md:flex items-center justify-between py-2 relative">
        <Navbar />
        {/* Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="flex gap-4 flex-col items-center text-[16px] absolute md:static top-10 border-t-[1px] left-0 bg-white md:bg-transparent w-full md:w-auto z-10 p-4 md:p-0 shadow-lg md:shadow-none"
            >
              {/* Products Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    {t("products")}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        href="/products/forex"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("forex")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/products/cfd-trading"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("cfd_trading")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/products/stocks"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("stocks")}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* Trading Platforms Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    {t("trading_platforms")}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        href="/trading-platforms/metatrader-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("mt4")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/trading-platforms/metatrader-5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("mt5")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/trading-platform/web-trader"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("web_trader")}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li onClick={() => setIsMenuOpen(false)}>
                <Link href={"/cryptocurrencies"}>{t("cryptocurrencies")}</Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href={"/trading-info"}>{t("trading_info")}</Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href={"/about"}>{t("about_us")}</Link>
              </li>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  {t("language")}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => changeLanguage("en")}
                    className="curs cursor-pointer"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => changeLanguage("ar")}
                    className="curs cursor-pointer"
                  >
                    Arabic
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Login and Register Buttons */}
        <div className="hidden md:flex items-center gap-1">
          <Button className="bg-inherit text-main-primary font-[600]">
            {t("login")}
          </Button>
          <Button className="font-[500] h-8 bg-main-bg">
            <span>{t("register")}</span>
          </Button>
        </div>

        {/* Mobile Menu and User Icon */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <Menu
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={toggleMenu}
          />
         
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
            <UserCircle className="w-[30px] h-[30px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mx-4">
              <DropdownMenuItem
                className="font-[500] h-8 bg-main-bg cursor-pointer"
              >
                {t("register")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="bg-inherit text-main-primary font-[600] cursor-pointer"
              >
                 {t("login")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
