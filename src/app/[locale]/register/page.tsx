"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import home01 from "@/assets/home01.jpg";
import Image from "next/image";
import SelectCountry from "@/components/SelectCountry";
import axios from "axios";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export type regesterData = {
  email: string;
  password: string;
  country: string;
  fullName: string;
  phone: string;
  confirmPassword: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [data, setData] = useState<regesterData>({
    email: "",
    password: "",
    country: "",
    fullName: "",
    phone: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<regesterData>({
    email: "",
    password: "",
    country: "",
    fullName: "",
    phone: "",
    confirmPassword: "",
  });

  const [errorServer, setErrorServer] = useState("");

  const [country, setCountry] = useState<string>("");

  const t = useTranslations("register");
  const locale = useLocale();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const validateForm = () => {
    let isValid: boolean = true;
    const newErrors: regesterData = {
      email: "",
      password: "",
      country: "",
      fullName: "",
      phone: "",
      confirmPassword: "",
    };

    // check full name
    if (!data.fullName) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // check email
    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      newErrors.email = "Invalid email address";
      isValid = true;
    }

    // check password
    if (!data.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // check country
    if (!country) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    // check confirm password
    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // check phone
    if (!data.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(data.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    setData({ ...data, country: country });
  }, [country]);

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registering user...");
      console.log("Data before sending:", data);

      try {
        const response = await axios.post(`${apiUrl}/auth/register`, data, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 201 || response.status === 200) {
          console.log("User registered successfully:", response.data);
        } else {
          console.error("Registration failed:", response.data);
        }
      } catch (error) {
        console.error("Failed to register user", error);
        
      }
    }
  };

  return (
    <div className="md:pl-10 border-t-[1px]">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden">
          <div
            className={`absolute bg-main-bg w-20 h-[300px] rotate-45 top-[-140px] ${
              locale == "ar" && "hidden"
            }`}
          ></div>

          <h1 className="text-[40px] font-[500] pt-10  text-center text-main-primary">
            {t("title")}
          </h1>
          <p className="text-center py-4">{t("subtitle")}</p>
          {errorServer && (
            <p className="text-[15px] text-red-600 text-center absolute left-[50%] translate-x-[-50%]  ">
              {errorServer}
            </p>
          )}
          <form
            onSubmit={handelSubmit}
            className="flex flex-col gap-4 px-10 py-4  md:px-20 "
          >
            <div className="flex flex-col gap-2 relative">
              <Label>{t("fullName")}</Label>
              <Input
                type="text"
                name="fullName"
                placeholder={t("fullName")}
                onChange={handleInputChange}
                className={`${
                  errors.fullName && "border-[1px] border-red-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>{t("email")}</Label>
              <Input
                type="text"
                name="email"
                placeholder={t("email")}
                onChange={handleInputChange}
                className={`${errors.email && "border-[1px] border-red-500"}`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 relative">
                <Label>{t("Phone")}</Label>
                <Input
                  type="text"
                  name="phone"
                  placeholder={t("Phone")}
                  onChange={handleInputChange}
                  className={`${errors.phone && "border-[1px] border-red-500"}`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 relative">
                <SelectCountry setCountry={setCountry} />
                {errors.country && (
                  <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>{t("password")}</Label>
              <Input
                type="text"
                name="password"
                placeholder={t("password")}
                onChange={handleInputChange}
                className={`${
                  errors.password && "border-[1px] border-red-500"
                }`}
              />
              {errors.password && (
                <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>{t("confirmPassword")}</Label>
              <Input
                type="text"
                name="confirmPassword"
                placeholder={t("confirmPassword")}
                onChange={handleInputChange}
                className={`${
                  errors.confirmPassword && "border-[1px] border-red-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-[11px] text-red-500 absolute bottom-[-17px]">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <Button type="submit">{t("submit")}</Button>
            <div className="flex items-center gap-2 justify-center">
              <p>{t("terms")}</p>
              <Link href={"/login"} className="text-main-primary font-[500]">
                {t("login")}
              </Link>
            </div>
          </form>
        </div>
        <div className="w-fll h-full hidden md:block">
          <Image
            src={home01}
            alt="register"
            width={100}
            height={100}
            className="w-full h-full bg-cover rounded-tl-[10px] rounded-b-[10px]"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
