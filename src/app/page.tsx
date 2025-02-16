import { Button } from "@/components/ui/button";
import Image from "next/image";
import EurUsd from "../assets/Eur_Usd.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BoxTrad from "@/components/BoxTrad";
import imgHome01 from "../assets/home01.jpg";
import visa from "../assets/visa-logo.svg";
import masterCard from "../assets/mastercard-logo (1).svg";
import wize from "../assets/wiretransfer-logo.svg";
import paypal from "../assets/paypal-logo.svg";
import scril from "../assets/scrill-logo.svg";
import BoxFeta from "@/components/boxFeta";
import PlatformTrading from "../assets/fx-at-hero-mt4.avif";
export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <div className="bg-[url(/Hero01.webp)] bg-cover w-full h-[480px] md:h-[600px] lg:h-[700px]">
        <div className="flex  items-center justify-start pt-[40px] md:pt-[60px]  px-4 md:px-0">
          {/* Text Content */}
          <div className="w-full md:w-[700px] flex flex-col gap-4 text-white text-center container md:text-left">
            {/* Heading */}
            <h1 className="text-[36px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-[600]">
              Welcome to Al Ansari Exchange – Trade Smarter, Trade Faster
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              Be empowered to trade CFDs on FX, Stocks, Commodities, Crypto,
              Indices, & Options. Get advanced tools, personalised support,
              uncompromising security.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="font-[550] h-11 w-full md:w-auto text-[16px] bg-main-bg">
                Register New
              </Button>
              <Button className="font-[500] h-12 w-full md:w-auto text-[16px] bg-inherit text-[#7e868e] border border-[#7e868e]">
                Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 md:py-10 my-10   md:px-0">
        {/* Heading */}
        <h1 className="text-center text-[24px] md:text-[30px] font-[600] pb-5">
          Trade a Wide Range of Global Markets with Competitive Spreads
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
          <BoxFeta
            title="Forex"
            text="Trade major currency pairs with tight spreads starting from 0.0 pips and ultra-low commissions."
          />
          <BoxFeta
            title="Indices"
            text="Access global indices like UK 100 and Germany 40, with spreads as low as 1 point."
          />
          <BoxFeta
            title="Commodities"
            text="Trade gold, oil, and more with competitive spreads starting from just 0.04 points."
          />
          <BoxFeta
            title="Stocks"
            text="Trade over 5,500 international stocks, including extended hours on top US shares."
          />
          <BoxFeta
            title="Cryptocurrencies"
            text="Buy and sell leading cryptos directly—no need for third-party wallets or exchanges."
          />
          <BoxFeta
            title="Bullion"
            text="Invest in physical gold, silver, and platinum, securing your wealth in precious metals."
          />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 my-10 md:mb-20 ">
        <div className="relative ">
          <Image
            src={imgHome01}
            alt="hero"
            className="rounded-[10px] w-full h-auto"
          />
          <div
            className="hidden md:block w-[80px] h-[400px] absolute top-[-18px] rounded-[20px] left-[-50px] z-[-1]"
            style={{
              background: "linear-gradient(to right, #12225c, #0e89c8)",
            }}
          ></div>
        </div>
        <div>
          <h1 className="text-[30px] md:text-[40px] font-[700] pb-[10px]">
            Forex trading
          </h1>
          <p className="text-[16px] md:text-[20px]">
            Trading forex is one of the most popular trading options. This is
            why you’ll need a cutting-edge and reliable trading platform that
            allows you to trade tight spreads on major and minor currency pairs.
            Choose from our standard or premium forex pricing modules -
            whatever’s best for, your forex trading needs.
          </p>
          <Button className="font-[550] h-11 w-18 text-[16px] my-3 bg-main-bg">
            Contact US
          </Button>
          <p className="text-[14px] md:text-[16px]">
            Margin requirement will depend on the amount of leverage allowed.
            The maximum leverage allowed is determined by the regulators and may
            differ depending upon the instrument.
          </p>
        </div>
      </div>
      <div className="bg-[url(/baner.webp)] bg-cover w-full h-[400px] container sm:h-[400px] md:h-[450px]">
        <div className="flex flex-col md:flex-row items-start justify-between pt-[30px] md:pt-[60px] ">
          {/* Left Section */}
          <div className="w-full md:w-[600px] flex flex-col gap-4 text-white">
            <h1 className="text-[40px] leading-[40px] sm:text-[50px] sm:leading-[50px] md:text-[60px] md:leading-[50px] font-[600]">
              Pushing Your Trading Forward
            </h1>
            <span className="text-[14px] sm:text-[16px]">
              Next-Gen Pricing Model
            </span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Take control of your trading needs with super-tight spreads as low
              as 0.0 for major currencies with a $5 USD commission per $100k USD
              traded.
            </p>
            <span className="text-[14px] sm:text-[16px]">
              Explore the advantages of our RAW Spread pricing.
            </span>
            <div>
              <Button className="font-[550] h-11 w-18 text-[14px] sm:text-[16px] bg-main-bg">
                Open a RAW Spread Account
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-white flex flex-col items-center mt-8 md:mt-0 hidden md:block">
            <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-[500]">
              Spreads As Low As
            </h2>
            <span className="text-[100px] sm:text-[150px] md:text-[200px] font-[700] leading-[100px] sm:leading-[150px] md:leading-[200px]">
              0.0
            </span>
          </div>
        </div>
      </div>
      <div className="py-10 container px-4">
        <div className="flex items-center justify-center flex-col">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-[600] text-center">
            Already have a live trading account?
          </h1>

          {/* Paragraph */}
          <p className="px-0 sm:px-[50px] md:px-[100px] text-[16px] sm:text-[18px] md:text-[20px] text-center mt-4">
            It's easy to fund your trading account using one of the following
            payment methods. Pick the payment option that works best for you,
            whether it’s debit card, bank wire transfer, or ACH deposit.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-center sm:gap-20 pt-6">
           
            <div className="w-[100px] sm:w-[150px] mx-auto">
              <Image
                src={masterCard}
                alt="mastercard"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100px] sm:w-[150px] mx-auto">
              <Image src={wize} alt="wize" className="w-full h-auto" />
            </div>
            <div className="w-[100px] sm:w-[150px] mx-auto">
              <Image src={paypal} alt="wize" className="w-full h-auto" />
            </div>
            <div className="w-[100px] sm:w-[150px] mx-auto">
              <Image src={scril} alt="wize" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg w-full grid grid-cols-1 md:grid-cols-3 items-center bg-main-primary container text-white py-8 mb-10">
        <h1 className="text-center text-[24px] md:text-[30px] leading-[24px] md:leading-[35px] font-[600] pb-5">
          Powerful Triding Platforms <br />
          <span className="text-main-bg">You Can Trust</span>
        </h1>

       
          <div className="w-full">
            <Image
              src={PlatformTrading}
              alt="PlatformTrading"
              className="w-full h-auto object-cover"
              quality={100} // Increase quality (default is 75)
              priority // Optional: Preload the image if it's above the fold
              sizes="(max-width: 768px) 100vw, 1200px" // Responsive sizes
            />
          </div>
          <div>
            <p className="text-center py-5 md:text-[20px]">
              Experience a range of powerful mobile platforms tailored for
              traders at all levels on your mobile device
            </p>
            <div className="flex items-center justify-center gap-6 container">
              <Button className="font-[550] h-11 w- md:w-auto text-[16px] bg-main-bg">
                Register New
              </Button>
            </div>
          </div>
       
      </div>
    </div>
  );
}
