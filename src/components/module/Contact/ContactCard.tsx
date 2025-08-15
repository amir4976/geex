import { More } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";

function ContactCard() {
  return (
    <>
      <div className="flex justify-between items-center  ">
        <Image className="w-20 h-20 rounded-xl bg-blue-400" width={80} height={80} alt="prof" src={'/assets/b2d9e74cfd6f82e3f7f8e0d5b81d456b.jpg'}/>
      </div>

      <div className="flex flex-col ">
        <p className="text-xl font-bold">ahmadi leffie</p>
        <p className="text-gray-500">central</p>
      </div>

      <div className="flex flex-col">
        <div className="flex  gap-3 ">
          <CiPhone />
          <p>09123456789</p>
        </div>

        <div className="flex gap-3">
          <FaRegAddressCard />
          <p>brokline,higeschool</p>
        </div>

        <div className="flex gap-3">
          <CiMail />
          <p>ahmadileffie</p>
        </div>
      </div>




      <div className=" absolute left-5 top-5 ">
        <More />
      </div>
    </>
  );
}

export default ContactCard;
