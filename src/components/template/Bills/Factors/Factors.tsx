"use client";
import FactorList from "@/components/module/Bills/FactorList/FactorList";
import SendFactor from "@/components/module/Bills/SendFactor/SendFactor";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import React, { useState } from "react";

export default function Factors() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full mt-10 ">
      {/* دکمه فقط روی دسکتاپ نمایش داده می‌شود */}
      <button
        className="hidden md:inline-block element absolute left-2 top-2/3 z-50  shadow px-2 py-2 rounded hover:bg-blue-100 transition mb-4"
        onClick={() => setCollapsed(!collapsed)}
      >
        {
          collapsed ? 
          <ArrowRight2/>
          :
          <ArrowLeft2/>
          
        }
      </button>

      <div
        className={`flex flex-col md:flex-row ${collapsed ? "" : "gap-4" } transition-all duration-500 ease-in-out`}
      >
        {/* المنت سمت چپ */}
        <div
          className={` rounded p-4  h-fit transition-all duration-500 ease-in-out
            ${
              collapsed
                ? "md:w-full w-full"
                : "md:w-3/4 w-full"
            }
          `}
        >
          {/* محتوای دلخواه */}
          <FactorList/>
        </div>

        {/* المنت سمت راست */}
        <div
          className={`rounded   transition-all duration-500 ease-in-out
            ${
              collapsed
                ? "md:w-0 opacity-0 p-0 pointer-events-none"
                : "md:w-1/4 opacity-100 p-4 pointer-events-auto"
            }
            w-full
          `}
        >
          <SendFactor />
        </div>
      </div>
    </div>
  );
}
