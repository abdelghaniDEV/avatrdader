import { ArrowRight } from "lucide-react";
import React from "react";

type boxFeta = {
    title: string;
    text: string;
 
}

export default function BoxFeta({title , text} : boxFeta) {
  return (
    <div className="flex flex-col gap-1 items-start border-[2px] p-3 cursor-pointer border-main-primary transition-transform duration-200 hover:scale-105 hover:bg-gray-100">
      <div className="flex items-center justify-between gap-2">
        <h4 className="bgstyle">{title}</h4>
        <ArrowRight className="w-6 h-6" />
      </div>
      <p className="text-[18px] pt-2">
        {/* Trade major currency pairs with
        <span className="font-[600]">tight spreads starting from 0.0 pips</span>
        and ultra-low commissions. */}
        {text}
      </p>
    </div>
  );
}
