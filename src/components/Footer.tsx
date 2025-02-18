import React from "react";
import logo from "../assets/Al-Ansari-Exchange-Logo.png";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import aword01 from "../assets/award-footer-2.png";
import aword02 from "../assets/award-footer-1.png";
import aword03 from "../assets/award-footer-3.png";
import aword04 from "../assets/award-footer-4.png";
import aword05 from "../assets/award-footer-5.png";
import aword06 from "../assets/award-footer-6.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      <div className="py-8">
        <h2 className="text-center text-[30px] md:text-[40px] pb-3 font-[600]">
          Our Awards
        </h2>
        <div className=" grid grid-cols-4  md:grid-cols-7 gap-5 container ">
          <Image src={aword01} alt="aword1" />
          <Image src={aword02} alt="aword1" />
          <Image src={aword03} alt="aword1" />
          <Image src={aword04} alt="aword1" />
          <Image src={aword05} alt="aword1" />
          <Image src={aword06} alt="aword1" />
          <Image src={aword06} alt="aword1" />
        </div>
      </div>
      <div className="bg-main-primary w-full  text-neutral-400  container py-10">
        <div className="flex flex-col md:flex-wrap justify-between  gap-[20px] md:gap-[70px] pb-10">
          <div>
            <Image src={logo} alt="logo" className="w-[200px]" />
            <p className="md:w-[500px] pt-5">
              VA Trade EU Ltd is regulated by the Central Bank of Ireland.
              (No.C53877) Ava Trade Markets Ltd. is regulated by the B.V.I
              Financial Services Commission Ava Capital Markets Australia Pty
              Ltd is regulated by the ASIC No.406684. Ava Capital Markets Pty is
              regulated by the South African Financial Sector Conduct Authority
              (FSCA No.45984). Ava Trade Japan K.K. is licensed and regulated in
              Japan by the Financial Services Agency (License No.: 1662), the
              Financial Futures Association of Japan (License No.: 1574). Ava
              Trade Middle East Ltd is regulated by the Abu Dhabi Global Markets
              (ADGM) Financial Regulatory Services Authority (FRSA) (No.190018).
              DT Direct Investment Hub Ltd. is regulated by the Cyprus
              Securities and Exchange Commission (No. 347/17). Read AvaTrade
              risk disclosure before trading Forex, CFD’s, and/or FX Options.
              Forex, CFD and FX Options trading involves substantial risk of
              loss and is not suitable for all investors.
            </p>
          </div>
          <div>
            <h4 className="pb-4 text-[20px] text-white">Everything you need</h4>
            <ul className="flex flex-col gap-2">
              <li>
                 <Link href={'/products/forex'}>Forex</Link>
              </li>
              <li><Link href={'/products/cfd-trading'}>Ctf Trading</Link></li>
              <li>
                <Link href={'/products/stocks'}>Stocks</Link>
              </li>
              <li>
                <Link href={'/about'}>About Us</Link>
              </li>
              
              <li><Link href={'/cryptocurrencies'}>Cryptocurrencies</Link></li>
              <li>
                <Link href={'/trading-info'}>Trading Info</Link>
              </li>
              <li>
                <Link href={'/trading-platforms/metatrader-4'}>MetaTrader 4</Link>
              </li>
              <li>
                <Link href={'/trading-platforms/metatrader-5'}>MetaTrader 5</Link>
              </li>
              <li>
                <Link href={'/trading-platforms/web-trader'}>Web Trader</Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h4 className="pb-4 text-[20px] text-white">Get In Touch</h4>
            <div className="flex gap-2 mb-2 items-center">
              <Mail className="w-4 h-4" />
              <p className="">denioMenu@gmail.com</p>
            </div>
            <div className="flex gap-2 mb-2 items-center">
              <Phone className="w-4 h-4" />
              <p className="">+212636998077</p>
            </div>
            <ul className="flex  gap-2 text-white items-center">
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Linkedin className="h-[20px] w-[20px]" />
              </li>
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Instagram className="h-[20px] w-[20px]" />
              </li>
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Facebook className="h-[20px] w-[20px]" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="md:flex text-center justify-between pt-10">
          <div>
            <p>@2025 Dineo, All rights Reserved </p>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
