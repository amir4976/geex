import { Heart, More } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";

function ContactCard() {
  return (
    <>
      <div className="col-span-1 element p-8 rounded-4xl flex flex-col gap-6">
        <div className="  flex justify-between items-center ">
          <Image
            className="w-20 h-20 rounded-3xl bg-blue-400"
            width={75}
            height={75}
            alt="prof"
            src={"/assets/04.png"}
          />
          <div className="flex gap-5">
            <Heart />
            <More />
          </div>
        </div>

        <p className="text-xl font-bold">دیوید کولپین</p>
        <p className="text-gray-500">طراح تحرک منطقه</p>

        <div className="flex  gap-3">
          <div className=" text-blue-500">
            {" "}
            <CiPhone />
          </div>
          <p>09123456789</p>
        </div>

        <div className="flex gap-3">
          <div className=" text-blue-500">
            {" "}
            <FaRegAddressCard />
          </div>
          <p>استودیوهای پرسرعت</p>
        </div>

        <div className="flex gap-3">
          <div className=" text-blue-500">
            {" "}
            <CiMail />
          </div>
          <p>ahmadileffie</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
