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
              CFD Trading
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">CFD Trading</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/bg-cfd.jpg)] bg-cover w-full h-[480px] md:h-[400px] lg:h-[400px]">
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[800px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              Make A Difference{" "}
              <span className="text-main-bg">withCFDs Trading!</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              When you trade CFDs with AvaTrade, you get to trade with a
              well-regulated broker that provides some of the world’s best
              trading platforms, and you can profit on markets whether they rise
              or fall!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Start Trading Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-[40px] font-bold">
              Trade the World with CFDs
            </h1>
            <p className="text-base md:text-[20px]">
              Explore the thrilling world of CFDs or Contracts for Difference, a
              dynamic way to participate in the financial markets without owning
              the actual assets. CFD trading is about making bold predictions on
              price changes, offering a unique adventure into the world of
              finance that&apos;s accessible to everyone. Dive in and experience the
              thrill of the market at your fingertips!
            </p>
            <div>
              <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-primary">
                Register Now
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

      <div className="bg-[#F3F3F3] my-10 px-4">
        <div className="container mx-auto py-6 flex flex-col items-center text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why Trade CFDs with AvaTrade?
          </h1>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc list-inside lg:list-outside">
            <li className="mb-2">
              AvaTrade operates under strict international regulations, ensuring
              a secure and reliable trading environment. Your safety is our top
              priority.
            </li>
            <li className="mb-2">
              Our commitment to excellence is recognized industry-wide, earning
              us multiple awards. With AvaTrade, you will always receive
              top-quality service.
            </li>
            <li className="mb-2">
              Serving clients since 2006, AvaTrade has established itself as a
              trusted leader in the CFD trading industry. You can trade with
              confidence.
            </li>
            <li className="mb-2">
              Access unique trading resources like AvaProtect, Trading Central,
              and AvaSocial. AvaTrade equips you with powerful tools to help you
              trade effectively.
            </li>
            <li className="mb-2">
              Your security is our priority. All client funds are held in
              segregated bank accounts, and all interactions on our website are
              encrypted using top security protocols. Trade with peace of mind,
              knowing your funds and personal details are protected.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-10 px-4">
        <div className="container mx-auto py-6 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            CFD Trading Platforms by AvaTrade
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            AvaTrade caters to the diverse needs of traders by providing a range
            of user-friendly CFD trading platforms, ensuring an efficient and
            tailored trading experience.
          </p>
          <ul className="text-base sm:text-lg md:text-xl leading-relaxed list-disc list-inside lg:list-outside">
            <li className="mb-2">
              <strong>MT4/5:</strong> The MetaTrader family platforms, renowned
              for their advanced customization capabilities and comprehensive
              analytic tools, are favored among traders for their robustness and
              reliability, making them some of the best platforms for CFD
              trading.
            </li>
            <li className="mb-2">
              <strong>WebTrader:</strong> Offers a clean and straightforward
              interface directly from your browser (no download required).
              Integrated with Trading Signals, it simplifies trading by
              providing actionable insights directly on the platform.
            </li>
            <li className="mb-2">
              <strong>AvaTrade App:</strong> Our proprietary Mobile Trading App
              allows you to trade on the go, ensuring you never miss trading
              opportunities.
            </li>
            <li className="mb-2">
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
