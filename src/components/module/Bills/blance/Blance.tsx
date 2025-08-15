import React from "react";
import Dropdown from "../../DropDown/DropDown";
import Link from "next/link";
import { More } from "iconsax-reactjs";

type Props = {
  price: number;
  lastuse: string;
};

function Blance({ price, lastuse }: Props) {
  return (
    <div className=" bg-[#464255] rounded-3xl bg-blanced p-8 text-white flex flex-col justify-between items-start">
      <div className="flex justify-between w-full  ">
        <p>بالانس</p>
        <Dropdown title="" icon={<More/>}  size="sm">
 
           <Link href="/payment" className="text-black  py-2 hover:text-blue-400 leading-5">پرداخت</Link>
           <Link href="/payment" className="text-black  py-2 hover:text-blue-400 leading-5">پرداخت</Link>
           <Link href="/payment" className="text-black  py-2 hover:text-blue-400 leading-5">پرداخت</Link>
           <Link href="/payment" className="text-black  py-2 hover:text-blue-400 leading-5">پرداخت</Link>
      
        </Dropdown>
      </div>
      <div className="text-5xl peydaBold ">
        {price.toLocaleString("fa-ir")} تومان
      </div>
      <div className="">{new Date(lastuse).toLocaleString("fa-ir")}</div>
      <div
        className="bg-[]  py-1 px-4 inline-block rounded-xl text-white text-center  "
        style={{ background: "rgba(255, 187, 84, 0.15)" }}
      >
        کیف پول
      </div>
    </div>
  );
}

export default Blance;
