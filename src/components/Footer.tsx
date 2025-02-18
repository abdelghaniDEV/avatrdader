import React from "react";
import logo from "../assets/Al-Ansari-Exchange-Logo.png";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import aword01 from "../assets/award-footer-2.png";
import aword02 from "../assets/award-footer-1.png";
import aword03 from "../assets/award-footer-3.png";
import aword04 from "../assets/award-footer-4.png";
import aword05 from "../assets/award-footer-5.png";
import aword06 from "../assets/award-footer-6.png";

export default function Footer() {
  return (
    <div>
      <div className="py-8">
        <h2 className="text-center text-[40px] pb-3 font-[600]">Our Awards</h2>
        <div className=" grid grid-cols-7 gap-5 container">
          <Image src={aword01} alt="aword1" />
          <Image src={aword02} alt="aword1" />
          <Image src={aword03} alt="aword1" />
          <Image src={aword04} alt="aword1" />
          <Image src={aword05} alt="aword1" />
          <Image src={aword06} alt="aword1" />
          <Image src={aword06} alt="aword1" />
        </div>
      </div>
      <div className="bg-main-primary w-full  text-neutral-400  p-10">
        <div className="grid md:grid-cols-4 gap-[20px] md:gap-[70px] pb-10">
          <div>
            <Image src={logo} alt="logo" className="w-[150px]" />
            <p className="w-[300px] pt-5">
              Our smart digital menu for restaurants is powered by technology
              that has been used in the hospitality business since 2018
            </p>
          </div>
          <div>
            <h4 className="pb-4 text-[20px] text-white">Everything you need</h4>
            <ul className="flex flex-col gap-2">
              <li>Full menu customization</li>
              <li>Add Stunning Images and Dish Descriptions</li>
              <li>Real-Time Menu Updates</li>
              <li>Multi-Language Support</li>
              <li>QR Code Integration for Easy Access</li>
            </ul>
          </div>
          <div>
            <h4 className="pb-4 text-[20px] text-white">Pages</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Everything you need</a>
              </li>
              <li>
                <a href="#">Why restaurant operators love us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-4 text-[20px] text-white">Get In Touch</h4>
            <div className="flex gap-2 mb-2 items-center">
              <Mail className="w-4 h-4" />
              <p className="">denioMenu@gmail.com</p>
            </div>
            <div className="flex gap-2 mb-2 items-center">
              <Phone className="w-4 h-4" />
              <p className="">+212636998077</p>
            </div>
            <ul className="flex  gap-2 text-white items-center">
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Linkedin className="h-[20px] w-[20px]" />
              </li>
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Instagram className="h-[20px] w-[20px]" />
              </li>
              <li className="b bg-neutral-600 p-[5px] rounded-[10px] ">
                <Facebook className="h-[20px] w-[20px]" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="md:flex text-center justify-between pt-10">
          <div>
            <p>@2025 Dineo, All rights Reserved </p>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
