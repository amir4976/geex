"use client";
import { testContact } from "@/utils/Utils";
import { ElementPlus, HamburgerMenu, Heart, Menu } from "iconsax-reactjs";
import React, { useState } from "react";
import ContactColContainer from "./ContactColContainer";
import ContactRowContainer from "./ContactRowCantainer";
import AddContactModal from "@/components/module/Contact/AddContactModal";

function ContactContainer() {
  const [isCol, setIsCol] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const addNewContact = async () => {
    setIsShowModal(true);
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between items-center">
        <button
          onClick={() => addNewContact()}
          className="px-6 py-4 text-white  bg-fuchsia-400 rounded-2xl cursor-pointer flex gap-2"
        >
          <span className="max-xl:hidden">مخاطب جدید</span>
          <ElementPlus />
        </button>
        <div className="flex gap-4 items-center">
          <button className="px-6 py-4 flex items-center gap-2 bg-blue-400/20 hover:bg-fuchsia-400 hover:text-white rounded-2xl border-blue-400 border transition-all ">
            <span className="max-xl:hidden"> مورد علاقه (20)</span>
            <Heart size="15" />
          </button>
          <button
            className={`p-4 rounded-2xl  ${
              !isCol ? "bg-fuchsia-400 text-white" : "bg-blue-400/40 "
            }`}
            onClick={() => setIsCol(false)}
          >
            <HamburgerMenu />
          </button>
          <button
            className={`p-4 rounded-2xl  ${
              !isCol ? "bg-blue-400/40" : "bg-fuchsia-400 text-white"
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
      <div className="">
        {isShowModal ? (
          <AddContactModal setisShowModal={setIsShowModal} />
        ) : null}
      </div>
    </div>
  );
}

export default ContactContainer;
