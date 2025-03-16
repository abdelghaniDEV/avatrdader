"use client";
import SelectCountry from "@/components/SelectCountry";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type dataLead = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  balanes?: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Contact() {
  const [data, setData] = useState<dataLead>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
  });
  const [errors, setErrors] = useState<dataLead>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
  });

  const [country, setCountry] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkData = () => {
    let isValid = true;
    const errors: dataLead = {
      fullName: "",
      email: "",
      phone: "",
      country: "",
    };

    if (data.fullName.trim() === "") {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (data.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (data.phone.trim() === "") {
      errors.phone = "Phone is required";
      isValid = false;
    }

    if (country.trim() === "") {
      errors.country = "Country is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    setData({...data , country : country})
  },[country])

  const handelSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkData()) {
      // Send form data to server
      try {
        // Set initial balance to 0
        const response = await axios.post(`${apiUrl}/leads`, data, {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        });
        console.log("Form submitted successfully", response);
      } catch (e) {
        console.error("Error sending form data", e);
      }
    }
  };

  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh] relative bg-[#F3F3F3] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">
              Contact Us
            </h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Contact</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 mx-auto flex justify-center items-center flex-col">
        <div className="flex items-center flex-col justify-center">
          <div className="text-[40px] font-[600]">Contact</div>
          <p>Enter your information and we will contact you.</p>
        </div>
        <Card className="p-2 my-4">
          <div className="w-[600px]">
            <div>
              <div className="flex flex-col gap-5 p-4">
                <form
                  onSubmit={handelSubmit}
                  className="flex flex-col gap-5 p-4"
                >
                  <div className="flex flex-col gap-2 relative">
                    <Label>
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      onChange={handleChange}
                      className={`${errors.fullName && "border-red-500"}`}
                    />
                    {errors.fullName && (
                      <p className="text-[12px] text-red-500 absolute bottom-[-18px]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2 relative">
                    <Label>
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      onChange={handleChange}
                      className={`${errors.email && "border-red-500"}`}
                    />
                    {errors.email && (
                      <p className="text-[12px] text-red-500 absolute bottom-[-18px]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <SelectCountry setCountry={setCountry} />
                    {errors.country && (
                      <p className="text-[12px] text-red-500 absolute bottom-[-18px]">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <Label>
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Enter phone Number"
                      onChange={handleChange}
                      className={`${errors.phone && "border-red-500"}`}
                    />
                    {errors.phone && (
                      <p className="text-[12px] text-red-500 absolute bottom-[-18px]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className=" cursor-pointer">
                    Create Lead
                  </Button>
                </form>

                {/* Address */}

                {/* City & ZIP Code */}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
