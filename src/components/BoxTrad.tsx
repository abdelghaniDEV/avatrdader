import Image from "next/image";
import React from "react";
import EurUsd from "@/assets/Eur_Usd.png"
import { ArrowLeft } from "lucide-react";

export default function BoxTrad() {
  return (
    <div>
  <div className="bg-white flex items-center gap-10 text-[14px] py-1 px-3 rounded-[10px] transition-transform duration-200 hover:scale-105 hover:bg-gray-100">
    <div className="w-[35px]">
      <Image src={EurUsd} alt="EurUsd" className="object-cover" />
    </div>
    <div className="text-[12px]">
      <h5>EUR/USD</h5>
    </div>
    <div>
      <span>1.04904</span>
    </div>
    <div className="text-green-400">
      <span>0.28%</span>
    </div>
    <ArrowLeft />
  </div>
</div>

  );
}
