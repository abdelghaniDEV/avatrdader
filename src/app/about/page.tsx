import { Button } from "@/components/ui/button";
import {
  ChartCandlestick,
  ChevronRight,
  CircleCheckBig,
  RotateCcw,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import aboutImg from "@/assets/about.jpg";
import Image from "next/image";
import visionImg from "@/assets/vision.jpg";

export default function About() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh]    mb-[30px] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">About US</h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">About</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg leading-relaxed">
              Login Help English » About AvaTrade Pioneering Online Trading
              Since 2006. We are one of the most secure brokers in the industry,
              with 9 regulations across 6 continents. We offer a wide choice of
              assets, leading platforms, and generous trading conditions.
            </p>
            <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-bg">
              Register New
            </Button>
          </div>
          <div>
            <Image
              src={aboutImg}
              alt="about"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: <User />,
              title: "Customer Service",
              subtitle: "Above All Else",
            },
            {
              icon: <CircleCheckBig />,
              title: "Integrity and",
              subtitle: "Fairness",
            },
            {
              icon: <ChartCandlestick />,
              title: "Constant",
              subtitle: "Innovation",
            },
            {
              icon: <RotateCcw />,
              title: "Ongoing",
              subtitle: "Self-Improvement",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-14 h-14 bg-main-bg text-main-primary p-2 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="font-bold">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Our Values</h1>
          <p className="text-lg leading-relaxed">
            Integrity is more than just a keyword for us. We are guided by our
            customer-first approach to business, placing quality, integrity, and
            transparency as the cornerstones of everything we do.
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 items-center">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Our Vision</h1>
          <p className="text-lg leading-relaxed">
            AvaTrade is committed to empowering people to invest and trade
            confidently in an innovative and reliable environment, supported by
            best-in-class personal service and uncompromising integrity.
          </p>
          <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-primary">
            Register New
          </Button>
        </div>
        <div className="w-full md:w-[450px] mx-auto">
          <Image
            src={visionImg}
            alt="our vision"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 my-10 py-6">
        <div className="container text-center md:text-left">
          <h1 className="text-4xl font-bold">Background</h1>
          <p className="text-lg leading-relaxed">
            Since 2006 AvaTrade has expanded enormously; with over 400,000
            registered customers globally, executing more than two million
            trades a month. The company’s total trading volumes now surpass $70
            billion per month. AvaTrade’s user-oriented perspective, combined
            with solid financial backing, is unique to the field of online
            trading. From our 24-hour multilingual support desks to our broad
            range of platforms and services, we have successfully created the
            optimal trading environment for every level of trader. Our wide
            scope includes a full spectrum of trading instruments covering ,
            stocks, commodities, cryptocurrencies and indices. Ava is a
            multi-national company with regional offices and sales centers in
            UAE, Dublin, Milan, Tokyo and Sydney. The company’s administrative
            headquarters are in Dublin, Ireland. Whether you are an experienced
            trader or a novice, AvaTrade’s adaptable trading platforms and
            services aim to provide you with the right balance of simplicity and
            sophistication. It’s no wonder that AvaTrade has earned over 30
            reputable industry awards since 2009. We invite you to join the
            thousands of traders and affiliates who have chosen AvaTrade as
            their preferred trading portal. Still not ready? Take a look at the
            by our clients!
          </p>
          <Button className="font-semibold h-11 w-full md:w-auto text-lg bg-main-bg mt-4">
            Register New
          </Button>
        </div>
      </div>
    </div>
  );
}
