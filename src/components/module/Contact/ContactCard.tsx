import { Heart, More } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";

interface Props {
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
}
function ContactCard({ contact }: Props) {
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
