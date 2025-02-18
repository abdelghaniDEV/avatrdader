import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              metatrader-5
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">metatrader-5</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-meta5.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[400px]">
        <div className="flex  items-center justify-start pt-[20px] md:pt-[30px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              Trading withMetaTrader 5
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[25px] lg:text-[20px]">
              MT5 is a state-of-the-art, multi-functional platform that boasts
              advanced auto trading systems, technical tools and copy trading.
              MetaTrader 5 is designed to accommodate advanced trading across a
              wider selection of asset classes than its predecessor, MetaTrader
              4. Feature-rich, it boasts advanced tools, and offers superior
              execution.
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
            Meet MetaTrader 5
          </h1>
          <p className="text-[16px] sm:text-[18px]">
            More indicators, more market orders, more instruments – MT5 provides
            the professional trader with everything they need to succeed in
            today’s dynamic markets. Yet, the similar layout ensures a smooth
            transition from the market benchmark, the MT4.
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
                Download MetaTrader 5
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
                and select MetaTrader 5 as your platform
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-l-0 md:border-l-[2px] border-main-primary md:pl-20">
          <div className="flex flex-col gap-3 pb-6">
            <h1 className="text-[24px] sm:text-[30px] font-[600]">
              MetaTrader 5 Supports:
            </h1>
            <ul className="text-[16px] sm:text-[20px] list-disc px-6">
              <li>Expert Advisors (EAs)</li>
              <li>Custom Indicators</li>
              <li>Scripts</li>
              <li>Libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
