import { Button } from "@/components/ui/button";
import { ChevronRight, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              metatrader-4
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">metatrader-4</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-meta4.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[400px]">
        <div className="flex  items-center justify-start pt-[20px] md:pt-[30px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              Trading withMetaTrader 4
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[25px] lg:text-[20px]">
              A seriously good trader needs a seriously powerful platform – This
              is the MT4. There’s a reason why the MT4 is considered the most
              popular platform for online traders. It is rich with features for
              the more advanced trader, and simple enough for the newer trader
              to learn. Take advantage of thousands of indicators, 10 timeframes
              and multiple chart views.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Register New
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container py-10 px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[24px] sm:text-[30px] font-[600]">
            Meet MetaTrader 4
          </h1>
          <p className="text-[16px] sm:text-[18px]">
            MT4 has been around since 2002 and since become the industry
            benchmark in online trading. Easily customisable, it is both
            user-friendly for novices, and comprehensive, for seasoned market
            pros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                Deposit a minimum of $100
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                Fund your account to enter the markets
              </p>
            </div>
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                Download MetaTrader 4
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                and log in with your credentials
              </p>
            </div>
            <div className="flex flex-col gap-1 border-[1.5px] p-3 sm:p-1">
              <h4 className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                Open A Real Account
              </h4>
              <p className="text-[14px] sm:text-[16px]">
                and select MetaTrader 4 as your platform
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-l-0 md:border-l-[2px] border-main-primary md:pl-20">
          <div className="flex flex-col gap-3 pb-6">
            <h1 className="text-[24px] sm:text-[30px] font-[600]">
              MetaTrader 4 Features
            </h1>
            <ul className="text-[16px] sm:text-[20px] list-disc px-6">
              <li>Flexible and fast trading platform</li>
              <li>Trading signals from top providers</li>
              <li>Expert advisors for algorithmic trading</li>
              <li>Global accessibility from PC, web & mobile</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] sm:text-[30px] font-[600]">
              MetaTrader 4 Support
            </h1>
            <ul className="text-[14px] sm:text-[17px] flex flex-wrap gap-3 px-6">
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                Web
              </li>
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                APP
              </li>
              <li className="p-2 sm:p-3 bg-main-primary rounded-[20px] text-white">
                Windows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
