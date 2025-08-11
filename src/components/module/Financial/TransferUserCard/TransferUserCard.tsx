import { ArrowDown, ArrowDown2, ArrowUp, ArrowUp2 } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

function TransferUserCard() {
  return (
    <div className="flex justify-between items-center py-2 px-10 ">
      <div className="flex w-full items-center gap-4">
        <div className="w-19 h-19 rounded-xl bg-[#DEF7EF] flex justify-center items-center">
          <ArrowDown2 size="32" color="#753E0A" variant="Bold" />
        </div>
        <div className="">
          <p className="text-xl peydaBold">حواله بانکی</p>
          <p className="text-xs text-gray-500">5 سپتامبر 2020 در 11:56 ق.ظ</p>
        </div>
      </div>

      <div className="flex w-full items-center gap-4 justify-between">
        <div className="flex items-center gap-4 ">
          <div className="w-19 h-19 rounded-xl bg-[#DEF7EF] relative overflow-hidden">
            <Image
              src={"/assets/094ab666741a40ce629876291e35c8a8.jpg"}
              width={80}
              height={80}
              alt="logo"
            />
          </div>
          <div className="">
            <p className="text-xl peydaBold">ایزابلا سیرایت</p>
            <p className="text-xs text-gray-500">5 @thomasedis</p>
          </div>
        </div>
        <div className="text-2xl peydaBold text-red-500">- $98.21</div>
      </div>
    </div>
  );
}

export default TransferUserCard;
