import { Button } from "@/components/ui/button";
import {
 
  ChevronRight,
  
} from "lucide-react";
import Link from "next/link";
import React from "react";
import image01 from "@/assets/imag02-forex.jpg";
import Image from "next/image";

export default function Stocks() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[25px] font-[600] lg:text-[55px] ">
              Stock Trading
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Stock Trading</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-cfd.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[480px]">
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              <span className="text-main-bg">Trade Stocks </span>
              with A Regulated, Award-Winning Broker!
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              Trade Stocks CFDs of major corporations without the fees or
              restrictions associated with traditional equities trading.
              Interested in trading Stocks with AvaTrade?
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 items-center">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Invest in Leading Global Companies
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Trade the world’s leading Stocks with AvaTrade. Trade stock CFDs
              with AvaTrade and enjoy leveraged trading, going long and short,
              innovative order types, professional support, and a safe and
              secure trading environment.
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                Register Now
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={image01}
              alt="our vision"
              className="rounded-xl w-full max-w-[450px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] my-10 ">
        <div className="container mx-auto flex flex-col gap-6 py-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why Trade with AvaTrade
          </h1>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc pl-5 md:pl-0">
            <li>
              <strong>Years of Excellence -</strong> Since 2006, AvaTrade has
              been at the forefront of online stock trading, providing retail
              traders access to the best stocks from top global stock exchanges.
            </li>
            <li>
              <strong>Global Regulation -</strong> Our adherence to strict
              international regulations across 9 jurisdictions underlines our
              commitment to providing a trustworthy and secure trading
              environment.
            </li>
            <li>
              <strong>Unmatched Safety and Security - </strong> With client
              funds held in segregated accounts and all online interactions
              encrypted, we prioritise your safety and security above all.
            </li>
            <li>
              <strong>Innovative Trading Resources -</strong> AvaTrade sets you
              apart with unique resources like AvaProtect, Trading Central, and
              Actionable Trading Signals, to enhance your shares trading
              strategies.
            </li>
            <li>
              <strong>Award-Winning Broker -</strong> Our dedication to
              excellence has been recognised with multiple industry awards,
              affirming our status as a top stock CFD broker.
            </li>
          </ul>
        </div>
      </div>

      <div className="md:my-10 my-6 ">
        <div className="container mx-auto flex flex-col gap-6 py-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            CFD Trading Platforms by AvaTrade
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            AvaTrade caters to the diverse needs of traders by providing a range
            of user-friendly CFD trading platforms, ensuring an efficient and
            tailored trading experience.
          </p>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc pl-5 md:pl-0">
            <li>
              <strong>MT4/5:</strong> The MetaTrader family platforms, renowned
              for their advanced customization capabilities and comprehensive
              analytic tools, are favored among traders for their robustness and
              reliability, making them some of the best platforms for CFD
              trading.
            </li>
            <li>
              <strong>WebTrader:</strong> Offers a clean and straightforward
              interface directly from your browser (no download required).
              Integrated with Trading Signals, it simplifies trading by
              providing actionable insights directly on the platform.
            </li>
            <li>
              <strong>AvaTrade App:</strong> Our proprietary Mobile Trading App
              allows you to trade on the go, ensuring you never miss trading
              opportunities.
            </li>
            <li>
              <strong>AvaSocial:</strong> Our proprietary Social Trading app
              that allows you to engage with a community of traders and copy
              trade positions of the best performers on our platforms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
