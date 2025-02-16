import React from "react";

export default function Navbar() {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6">
        <li>Products</li>
        <li>Academy</li>
        <li>Trading Platforms</li>
        <li>Cryptocurrencies</li>
        <li>Trading Info</li>
        <li>Education</li>
        <li>Partners</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}
