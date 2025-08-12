"use client";
import SendFactor from "@/components/module/Bills/SendFactor/SendFactor";
import React, { useState } from "react";

export default function Factors() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full  mx-auto">
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setCollapsed(!collapsed)}
      >
        Toggle
      </button>

      <div className="flex gap-4">
        {/* المنت سمت چپ */}
        <div
          className={`bg-blue-600 text-white rounded p-4 overflow-hidden transition-[width] duration-500 ease-in-out h-fit`}
          style={{
            width: collapsed ? "100%" : "75%",
          }}
        >
           
        </div>

        {/* المنت سمت راست */}
        <div
          className={` rounded p-4 overflow-hidden transition-[width,opacity,padding] duration-500 ease-in-out`}
          style={{
            width: collapsed ? "0" : "25%",
            opacity: collapsed ? 0 : 1,
            padding: collapsed ? "0" : "0",
            pointerEvents: collapsed ? "none" : "auto",
          }}
        >
          <SendFactor />
        </div>
      </div>
    </div>
  );
}
