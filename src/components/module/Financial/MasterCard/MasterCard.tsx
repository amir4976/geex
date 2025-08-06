import Image from "next/image";
import React from "react";

function MasterCard() {
  return (
    <div className="w-full overflow-hidden h-fit rounded-4xl text-white">
      <div className=" bgrainbow  p-7 flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <p>موجودی شما</p>
          <button className="text-3xl">...</button>
        </div>
        <div className="text-3xl ">876,525,000 تومان</div>

        <div className="flex justify-between mt-10 text-xl">
          <span
            className="inline-block"
            style={{ direction: "ltr", unicodeBidi: "plaintext" }}
          >
            6037********3089
          </span>
          <div className="">02/21</div>
        </div>
      </div>
      <div className=" p-5 bg-gray-500 flex justify-between items-center gap-4">
          <div className="flex flex-col justify-center">
            <span className="text-sm">نام</span>
            <p className="text-xl peydaBold">امیر احمدی</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/assets/mastercard-icon.svg"}
              alt="mastercard icon"
              width={50}
              height={50}
            />
            <p className="text-xs">استادسف</p>
          </div>
      </div>
    </div>
  );
}

export default MasterCard;
