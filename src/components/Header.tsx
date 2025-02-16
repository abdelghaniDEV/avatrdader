"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, UserCircle } from "lucide-react";
import Logo from "../assets/Al-Ansari-Exchange-Logo.png"
import Image from "next/image";
import Navbar from "./Navbar";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#e7e9ff] py-3 flex items-center justify-center text-[#565a8e] hidden md:block">
        <h5 className="text-center">
          Trading CFDs and FX Options entails risk and could result in the loss
          of your capital.
        </h5>
      </div>

      {/* Header */}
      <div className="bg-main-primary py-1 text-white">
        <div className="flex items-center justify-center md:justify-between container">
          {/* Logo */}
          <div className="w-[130px] md:w-[200px]">
            <Image src={Logo} alt="LOGO" className="object-cover" />
          </div>

          {/* Help and Language */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>|</li>
              <li>Help</li>
              <li>|</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation and Buttons */}
      <div className="container md:flex items-center justify-between py-2 relative">
        <Navbar />
        {/* Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="flex gap-4 flex-col items-center text-[16px] absolute md:static top-10 border-t-[1px] left-0 bg-white md:bg-transparent w-full md:w-auto z-10 p-4 md:p-0 shadow-lg md:shadow-none"
            >
              <li onClick={() => setIsMenuOpen(false)}>Products</li>
              <li onClick={() => setIsMenuOpen(false)}>Academy</li>
              <li onClick={() => setIsMenuOpen(false)}>Trading Platforms</li>
              <li onClick={() => setIsMenuOpen(false)}>Cryptocurrencies</li>
              <li onClick={() => setIsMenuOpen(false)}>Trading Info</li>
              <li onClick={() => setIsMenuOpen(false)}>Education</li>
              <li onClick={() => setIsMenuOpen(false)}>Partners</li>
              <li onClick={() => setIsMenuOpen(false)}>About Us</li>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Login and Register Buttons */}
        <div className="hidden md:flex items-center gap-1">
          <Button className="bg-inherit text-main-primary font-[600]">
            Login
          </Button>
          <Button className="font-[500] h-8 bg-main-bg">
            <span>Register New</span>
          </Button>
        </div>

        {/* Mobile Menu and User Icon */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <Menu
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={toggleMenu}
          />
          <UserCircle className="w-[30px] h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;