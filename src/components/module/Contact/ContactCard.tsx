"use client"
import { Heart, More } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "../DropDown/DropDown";
interface Props {
  contact: {
    name: string;
    email: string;
    title:string;
    phone: string;
    company: string;
  };
}
function ContactCard({ contact }: Props) {
    const [isFav, setIsFav] = useState(false)
  const handleFav = () => {
    setIsFav(!isFav)
  }
  // const handleDelete = () => {
  //   console.log("delete")
  // }

  return (
    <>
      <div className="col-span-4  sm:col-span-3 lg:col-span-1 element p-8 rounded-4xl flex flex-col gap-6">
        <div className="  flex justify-between items-center ">
          <Image
            className="w-20 h-20 rounded-3xl bg-blue-400"
            width={75}
            height={75}
            alt="prof"
            src={"/assets/04.png"}
          />
          <div className="flex gap-5">
            <button onClick={handleFav}>
              {isFav ? (
                <Heart className="text-red-500" variant="Bold" />
              ) : (
                <Heart className="text-gray-500" />
              )}
            </button>
            <Dropdown icon={<More />} size="med" >
              <>
              <div className="p-2 hover:bg-amber-800/40 rounded-xl">حذف</div>
              <div className="p-2 hover:bg-purple-500/40 rounded-xl">ویرایش</div>
              </>
            </Dropdown>
          </div>
        </div>

        <p className="text-xl font-bold">{contact.name}</p>
        <p className="text-gray-500">{contact.title}</p>

        <div className="flex  gap-3">
          <div className=" text-blue-500">
            {" "}
            <CiPhone />
          </div>
          <p>{contact.phone}</p>
        </div>

        <div className="flex gap-3">
          <div className=" text-blue-500">
            {" "}
            <FaRegAddressCard />
          </div>
          <p>{contact.company}</p>
        </div>

        <div className="flex gap-3">
          <div className=" text-blue-500">
            {" "}
            <CiMail />
          </div>
          <p>{contact.email}</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
