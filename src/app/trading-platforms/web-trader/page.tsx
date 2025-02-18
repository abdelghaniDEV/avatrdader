import { Button } from "@/components/ui/button";
import { ChevronRight, LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tradingview01 from "@/assets/tradingview01.png";
import tradingview02 from "@/assets/tradingview02.webp";
import tradingview03 from "@/assets/tradingview03.png";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              Web Trader
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Web Trader</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-cfd.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[480px]">
        <div className="flex  items-center justify-center pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col items-center gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] text-center md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              <span className="text-main-bg">WebTrader </span> <br />
              No Download, No Limit Trading
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] text-center lg:text-[20px]">
              From its easy-to-use interface and modern design, this platform is
              simple to use and is suitable for both beginners and advanced
              traders. No need to download or install anything! web trading
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Start Trading
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 items-center">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why WebTrader?
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              This platform is perfect for people who want a simple user
              experience, with all the critical functionality directly from a
              web browser. You can access a wide selection of studies and
              indicators and get timeframes up to a month. Be sure to use
              Trading Central, which comes fully integrated into the platform,
              for technical insight and instant pattern recognition. No
              installation required and it’s available on any computer on any
              browser.
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                Trade Now
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview01}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] my-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 items-center">
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview02}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Use the Wisdom of the Crowd
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Buy and sell assets in seconds, and make educated decisions based
              on live market sentiment. Get accurate data on what AvaTrade’s
              community are buying or selling in real time and stay on top of
              the market without having to spend time on conducting your own
              technical or fundamental analysis.
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                Trade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 items-center">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Take Control of the Markets
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              WebTrader gives you amazing features like AvaProtect™, a risk
              reduction tool which allows you to protect your trades from
              losing. Also set market and pending orders, take profit and stop
              loss, the option to partially close your positions, view trading
              history and charts. Open, close and edit individual and aggregate
              positions at the click of a mouse.
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base border-[2px] border-main-primary bg-white text-main-primary  ">
                Trade Now
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={tradingview03}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] py-10">
        <div className="container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            AvaTrade: Trade with Confidence
          </h1>
          <div className="flex items-center gap- justify-evenly py-8">
            <div className="flex-col flex items-center justify-center gap-2 bg-white w-[220px] border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">
                Secured deposits with a regulate broker
              </h2>
            </div>
            <div className="flex-col flex items-center justify-center gap-2 w-[220px] bg-white border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">
                Secured deposits with a regulate broker
              </h2>
            </div>
            <div className="flex-col flex items-center justify-center gap-2 w-[220px] bg-white border-main-primary border-[1.5px] rounded-[10px] p-2">
              <div className="bg-main-primary p-2 rounded-full ">
                <LockKeyhole className="w-[40px] h-[40px]  text-white " />
              </div>
              <h2 className="text-center font-[600]">
                Secured deposits with a regulate broker
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
