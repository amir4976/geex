"use client";
import ContactCard from "@/components/module/Contact/ContactCard";
import { HamburgerMenu, Menu } from "iconsax-reactjs";
import React, { useState } from "react";

function ContactContainer() {
  const [isCol, setIsCol] = useState(true);
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between items-center">
        <button className="px-6 py-4  bg-blue-400 rounded-2xl">
          مخاطب جدید
        </button>
        <div className="flex gap-4 items-center">
          <button className="px-6 py-4 bg-blue-400/40 hover:bg-blue-400 rounded-2xl border-blue-400 border transition-all">
            مورد علاقه
          </button>
          <button
            className={`p-4 rounded-2xl  ${
              !isCol ? "bg-blue-400" : "bg-blue-400/40"
            }`}
            onClick={() => setIsCol(false)}
          >
            <HamburgerMenu />
          </button>
          <button
            className={`p-4 rounded-2xl  ${
              !isCol ? "bg-blue-400/40" : "bg-blue-400"
            }`}
            onClick={() => setIsCol(true)}
          >
            <Menu />
          </button>
        </div>
      </div>

      <div
        className={`grid  ${
          isCol ? "grid-cols-1" : "grid-cols-4"
        } gap-4 transition-all mt-10`}
      >
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
        <div className={`col-span-1 max-md:col-span-4 element rounded-2xl p-10 w-full flex ${!isCol ?"flex-col  " :"justify-between "} gap-5 relative`}>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
