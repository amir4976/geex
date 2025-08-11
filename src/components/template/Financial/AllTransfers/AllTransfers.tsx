import TransferUserCard from "@/components/module/Financial/TransferUserCard/TransferUserCard";
import {
 
  ArrowDown2,
  Calendar,
  Filter,
  SearchNormal,
} from "iconsax-reactjs";
import React from "react";

function AllTransfers() {
  return (
    <div className="w-full h-fit rounded-3xl bg-white mt-10 ">
      {/*  //^section header  */}
      <div className="">
        <div className="flex justify-between items-center px-10 py-6">
          <p>همه تراکنش ها</p>

          <div className=" flex gap-2">
            <button className="bg-blue-200 border border-blue-500 text-blue-600  px-6 py-4 rounded-2xl">
              مشاهده همه
            </button>
            <button className="bg-blue-200 border border-blue-500 text-blue-600  px-6 py-4 rounded-2xl">
              دز حال انجام
            </button>
            <button className="bg-blue-200 border border-blue-500 text-blue-600  px-6 py-4 rounded-2xl">
              درخواست ها
            </button>
          </div>

          <div className="flex text-xs gap-3">
            <Calendar size={20} />
            <SearchNormal size={20} />
            <Filter size={20} />
          </div>
        </div>
      </div>

      <div className="px-10 opacity-50 ">
        <hr />
      </div>

      <div className="flex flex-col gap-1">
        <TransferUserCard />
        <TransferUserCard />
        <TransferUserCard />
        <TransferUserCard />
      </div>
      <div className="flex justify-center items-center mt-10 ">
        <button
          className={
            "flex bg-gray-950 rounded-2xl px-6 py-3 text-white items-center gap-2 text-sm"
          }
        >
          بیشتر <ArrowDown2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default AllTransfers;
