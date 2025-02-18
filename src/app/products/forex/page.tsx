import { Button } from "@/components/ui/button";
import {
 
  ChevronRight,
 
} from "lucide-react";
import Link from "next/link";
import React from "react";
import image01 from "@/assets/imag02-forex.jpg";
import Image from "next/image";

export default function forex() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              Forex Trading
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Forex Trading</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-forex.jpg)] bg-cover w-full h-[400px] md:h-[400px] lg:h-[400px]">
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px] container px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              Forex Trading with AvaTrade
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              Dive into the vast, 24/5 world of FX trading, where opportunities
              arise at every moment in a market of unparalleled size. Choose
              AvaTrade as your broker and get access to some of the best Forex
              trading platforms!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Join Avatrader
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 px-4 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-[40px] font-bold">
              Forex Trading Made Easy
            </h1>
            <p className="text-base md:text-[20px]">
              Enter the Forex market anytime with AvaTrade, your 24/5 gateway to
              the global currency market. Go long or short, and use leverage to
              enhance your trades. Begin now and start taking advantage of every
              market shift.
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                Join Avatrader
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[450px]">
            <Image
              src={image01}
              alt="our vision"
              className="rounded-[15px] w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] my-10">
        <div className="flex flex-col items-center container mx-auto px-4 md:px-6 py-6">
          <h1 className="text-3xl md:text-[40px] font-bold text-center mb-6">
            Why Choose AvaTrade
          </h1>
          <ul className="text-base md:text-[18px] leading-relaxed md:leading-[30px] list-disc space-y-4 pl-5">
            <li>
              Trade with a globally regulated broker operating under strict
              regulatory standards across multiple jurisdictions. Client funds
              are held in segregated accounts for increased security.
            </li>
            <li>
              1250+ instruments available, including Forex, Cryptocurrencies,
              Stocks, Commodities, and Indices.
            </li>
            <li>
              Forex trading platforms for Desktop, tablet, mobile, and Web-based
              trading with MetaTrader 4, MetaTrader 5, our proprietary
              WebTrader, AvaOptions, and the award-winning AvaTrade App.
            </li>
            <li>
              Exclusive features like AvaProtect automated risk management
              solution and actionable in-platform trading signals by Trading
              Central.
            </li>
            <li>Free Demo Account to practice trading with zero risk.</li>
          </ul>
        </div>
      </div>
      <div className="py-2 container mx-auto flex flex-col gap-4">
        <h1 className="text-3xl md:text-[40px] font-bold">
          Forex Trading Benefits
        </h1>
        <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px]">
          The FX Market, a.k.a. the Foreign Exchange Market, is a decentralised
          exchange where all the world&apos;s currencies are actively traded. While
          other markets have a centralised location, FX trading takes place
          electronically, anywhere and everywhere. Did you know that trading
          takes place 24 hours a day? As the world&apos;s most liquid market, forex
          trading volumes have topped $6.6 trillion daily (2019 figures), with
          rising numbers of forex traders entering the scene. Such is the size
          and scope of the forex markets that it dwarfs all other major markets
          combined. We invite you to learn more about Forex Trading with our and
          guides. Global currency trading activity is off the charts, and FX
          trading confers many benefits to you. As you&apos;re about to find out,
          forex presents incredible trading opportunities, and AvaTrade is ready
          to reveal it all to you. Open today a forex trading account and start!
        </p>
        <div>
          <Button className="font-semibold h-11 w-full md:w-[200px] text-base bg-main-bg">
            Register New
          </Button>
        </div>
      </div>
    </div>
  );
}
