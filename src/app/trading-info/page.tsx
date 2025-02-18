"use client";
import { Button } from "@/components/ui/button";
import { Calculator, ChevronRight, Landmark, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tradingInfo from "@/assets/day-trading-de.jpg";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              Trading Info
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Trading Info</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center flex flex-col gap-3 items-center justify-center">
        <Image
          src={tradingInfo}
          alt="trading info"
          className="rounded-[5px] w-full max-w-[600px]"
        />
        <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg px-6">
          Register Now
        </Button>
      </div>

      <div className="py-3 container mx-auto ">
        <h1 className="text-[24px] sm:text-[30px] font-[600]">
          Trading information
        </h1>
        <p className="text-[16px] sm:text-[18px] px-3">
          Continuing our promise towards clients in assuring their is conducted
          with confidence, AvaTrade promotes a fully transparent trading policy
          to its traders. Find all the required trading information you need,
          including rates, spreads, leverage and other trading terms here – all
          provided to ensure a safe and comfortable trading experience.
        </p>
        <div className="flex flex-col gap-3 pt-7">
          <div className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Landmark className="w-[60px] sm:w-[80px] text-main-primary h-[60px] sm:h-[80px]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] font-[700] text-main-primary">
                Ava Social
              </h3>
              <p className="text-[16px] sm:text-[18px]">
                AvaSocial is an innovative social trading app that enables you
                to copy the world’s best traders, chat with them and benefit
                from their success!
              </p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Network className="w-[60px] sm:w-[80px] text-main-primary h-[60px] sm:h-[80px]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] text-main-primary font-[700]">
                What Type Of Broker Are They
              </h3>
              <p className="text-[16px] sm:text-[18px]">
                Not all forex brokers are created the same. There are
                differences in the structure and function of each forex broker,
                especially when it has to do with the individual traders.
              </p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5">
            <div className="p-3 sm:p-5">
              <Calculator className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] text-main-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[25px] font-[700] text-main-primary">
                Profit Calculator
              </h3>
              <p className="text-[16px] sm:text-[18px]">
                AvaTrade Calculator will allow you decide if or when to open and
                or your position, the margin requirement, the spread, swaps and
                other essential info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
