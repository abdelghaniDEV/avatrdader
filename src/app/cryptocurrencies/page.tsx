import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoImg from "@/assets/trading-cryptomonnaie.jpg";
import { Button } from "@/components/ui/button";
import cryptoImg01 from "@/assets/cryptoimage.jpg";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">
              cryptocurrencies
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">cryptocurrencies</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 container py-6">
        <div className="">
          <Image
            src={cryptoImg}
            className="w-full h-auto bg-cover"
            alt="crypto"
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Trade Cryptocurrencies with AvaTrade
          </h1>
          <p className="text-base md:text-lg text-center max-w-[600px]">
            Dive into the future of finance with AvaTrade – your trusted
            cryptocurrency broker. Open an account today and start trading the
            world’s top cryptocurrencies!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            What are Cryptocurrencies?
          </h1>
          <p className="text-base">
            Cryptocurrencies are digital currencies secured by cryptography and
            powered by revolutionary blockchain technology. Bitcoin, launched in
            2008, was the first-ever cryptocurrency. Cryptocurrencies are the
            future of money, but while they possess monetary qualities, they
            have also evolved to become digital stores of value. The success of
            Bitcoin has led to the emergence of thousands of other
            cryptocurrencies, with the market now very popular among traders due
            to their volatility, which often results in huge returns in short
            periods compared to other assets. However, this volatility has also
            caused cryptocurrency prices to plummet sometimes, highlighting the
            concept of high risk and high reward.
          </p>
          <p className="font-semibold text-base">
            Ready to trade Cryptocurrencies CFDs? Open an account today and
            start trading!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-bg">
              Start Trading
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={cryptoImg01} alt="crypto" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-[#F3F3F3] my-10 container ">
        <div className="flex flex-col items-center mx-auto pt-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Why Trade Cryptocurrencies with AvaTrade
          </h1>
          <ul className="text-base md:text-lg leading-relaxed list-disc space-y-4 pl-5">
            <li>
              <strong>A Legacy of Innovation and Trust</strong> Operating since
              2006 and pioneering cryptocurrency CFDs since 2017, AvaTrade has
              consistently led the way in offering cutting-edge trading
              solutions, establishing itself as a trusted and reliable broker
              within the competitive online trading industry.
            </li>
            <li>
              <strong>Strict International Regulation</strong> Our adherence to
              regulations in 9 jurisdictions worldwide ensures a secure and
              compliant trading environment for all clients.
            </li>
            <li>
              <strong>Safety and Security</strong> AvaTrade prioritises
              protecting your investments, with client funds held in segregated
              accounts and all online interactions secured using encryption and
              many other security best practices and technologies.
            </li>
            <li>
              <strong>Unique Trading Resources</strong> Leverage AvaProtect,
              Trading Central, and actionable Trading Signals to navigate the
              cryptocurrency markets with confidence and precision.
            </li>
            <li>
              <strong>Award-Winning Broker</strong> Multiple industry awards
              recognise our commitment to excellence, affirming our position as
              a leading broker in the trading community.
            </li>
            <li>
              <strong>Comprehensive Education</strong> We provide extensive
              educational resources through our Education Centre, AvaAcademy.
              Access webinars, eBooks, as well as expert analysis and insights
              to enhance your trading knowledge and skills.
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-3 pb-5 px-4 md:justify-start">
          <Button className="font-semibold h-11 w-full md:w-auto text-base bg-main-bg">
            Start Trading
          </Button>
        </div>
      </div>
    </div>
  );
}
