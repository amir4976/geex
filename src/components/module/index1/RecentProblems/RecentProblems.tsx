import Image from "next/image";
import React from "react";

function RecentProblems() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <p className="text-2xl ">مشکلات اخیر</p>
        <p className="text-gray-500">سخنان بزرگتر و زمان درد</p>
      </div>
      <div className=" flex flex-col gap-5">
        <Problems />
        <Problems />
        <Problems />
      </div>
    </div>
  );
}

export function Problems() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3">
          {" "}
          <div className="w-16 h-16 bg-white rounded-3xl flex justify-center items-center ">
            <Image src={'/assets/logo-g.png'} alt="" width={30} height={30}/>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="text-md">گوگل</p>
            <p className="text-gray-500 text-sm">https://www.google.com</p>
          </div>
        </div>
        <button className="text-white bg-red-500 rounded-xl px-5 h-10">پایین</button>
      </div>
    </>
  );
}

export default RecentProblems;
