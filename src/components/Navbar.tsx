import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6">
        <li>
          <HoverCard>
            <HoverCardTrigger className="cu cursor-pointer hover:text-main-primary">
              Products
            </HoverCardTrigger>
            <HoverCardContent className="mt-4 mx-4">
              <div className="flex flex-col gap-2 font-[700] uppercase">
                <Link
                  href={"/products/forex"}
                  className="hover:text-main-bg"
                >
                  FOREX
                </Link>
                <Link
                  href={"/products/cfd-trading"}
                  className="hover:text-main-bg"
                >
                  CFD TRADING
                </Link>
                <Link
                  href={"/products/stocks"}
                  className="hover:text-main-bg"
                >
                  STOCKES
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <HoverCard>
            <HoverCardTrigger className="cu cursor-pointer hover:text-main-primary">
              Trading Platforms
            </HoverCardTrigger>
            <HoverCardContent className="mt-4">
              <div className="flex flex-col gap-2 font-[700] uppercase">
                <Link
                  href={"/trading-platforms/metatrader-4"}
                  className="hover:text-main-bg"
                >
                  MetaTrader 4
                </Link>
                <Link
                  href={"/trading-platforms/metatrader-5"}
                  className="hover:text-main-bg"
                >
                  MetaTrader 5
                </Link>
                <Link
                  href={"/trading-platforms/web-trader"}
                  className="hover:text-main-bg"
                >
                  Web Trader
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
        <Link href={"/cryptocurrencies"} className="hover:text-main-primary">
          Cryptocurrencies
        </Link>
        <Link href={"/trading-info"} className="hover:text-main-primary">
          Trading Info
        </Link>

        <Link href={"/about"} className="hover:text-main-primary">
          About Us
        </Link>
      </ul>
    </div>
  );
}
