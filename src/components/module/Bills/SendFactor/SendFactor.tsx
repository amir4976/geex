import { ArrowDown2, DollarCircle, SearchNormal, Send } from "iconsax-reactjs";
import React from "react";

function SendFactor() {
  return (
    <div className="w-full flex flex-col gap-10 ">
      <div className="">
        <p className="text-2xl">ارسال فاکتورها</p>
        <p className="text-gray-600 text-sm">آنها در پرواز او موفق می شوند</p>
      </div>
      <div className="w-full element p-4 flex flex-col gap-10 rounded-3xl">
        <div className="flex flex-col gap-2">
          <p>گیرنده را انتخاب کنید</p>
          <div className="w-full flex justify-between items-center h-14 bg-black/10 overflow-hidden rounded-2xl relative px-3 text-gray-700">
            <input
              type="text"
              className="w-10/12 h-full focus:outline-none"
              placeholder="نام یوزر را انتخاب کنید"
            />
            <SearchNormal />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* fix it by drop down */}
          <p>گیرنده را انتخاب کنید</p>
          <div className="w-full h-14 bg-blue-500/10 overflow-hidden rounded-2xl flex justify-between items-center relative px-3 text-blue-500/50">
            <p> سرویس تعمیر و نگهدرای</p>
            <ArrowDown2 />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>برچسب</p>
          <div className="w-full h-14 border border-gray-300  overflow-hidden rounded-2xl flex justify-between items-center relative px-3 text-gray-700">
            <DollarCircle />
            <input
              type="number"
              min={1}
              className="w-10/12 h-full focus:outline-none"
              placeholder="نام یوزر را انتخاب کنید"
            />
          </div>
        </div>

        <button className="w-full rounded-2xl bg-blue-500 flex justify-center items-center h-14  gap-2">
          <Send  color="#fff" variant="Bold"/>
          <p className="text-white text-md">ارسال فاکتور</p>
        </button>
      </div>
    </div>
  );
}

export default SendFactor;
