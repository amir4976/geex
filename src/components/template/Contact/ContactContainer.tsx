"use client";
import { testContact } from "@/utils/Utils";
import { HamburgerMenu, Menu } from "iconsax-reactjs";
import React, { useState } from "react";
import ContactColContainer from "./ContactColContainer";
import ContactRowContainer from "./ContactRowCantainer";

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
      {/* <ContactColContainer contactData={testContact} /> */}
      {isCol ? (
        <ContactColContainer contactData={testContact} />
      ) : (
        <ContactRowContainer contactData={testContact} />
      )}
    </div>
  );
}

export default ContactContainer;
