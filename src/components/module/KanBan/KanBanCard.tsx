import React from "react";
import Tag from "../global/Tag";

function KanBanCard() {
  return (
    <div className="w-full h-fit element rounded-2xl p-5 flex flex-col items-start ">
      <div className="">
        <Tag text={"فرانت اند"} status="primery" />
      </div>
      <div className=" flex flex-col mt-5 ">
        <p className="text-xl font-bold">توسعه داشبورد جیکس</p>
        <p className=" text-gray-500">اخرین بروز رسانی 20 دقیقه پیش</p>
      </div>
    </div>
  );
}

export default KanBanCard;
