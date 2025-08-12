import { ArrowDown2, SearchNormal } from "iconsax-reactjs";
import React from "react";
import Dropdown from "../../DropDown/DropDown";

function SendFactor() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="">
        <p className="text-2xl">ارسال فاکتورها</p>
        <p className="text-gray-600 text-sm">آنها در پرواز او موفق می شوند</p>
      </div>
      <div className="w-full bg-white p-4 flex flex-col gap-10">
        <p>گیرنده را انتخاب کنید</p>
        <div className="w-full h-10 bg-gray-200 overflow-hidden rounded-3xl relative px-3 text-gray-700">
          <input
            type="text"
            className="w-10/12 h-full focus:outline-none"
            placeholder="نام یوزر را انتخاب کنید"
          />
          <SearchNormal className="absolute left-2 top-2 " />
        </div>
        {/* fix it by drop down */}
        <p>گیرنده را انتخاب کنید</p>
        <div className="w-full h-10 bg-gray-200 overflow-hidden rounded-3xl flex justify-between items-center relative px-3 text-gray-700">
          <p> سرویس تعمیر و نگهدرای</p>
          <ArrowDown2 />
        </div>
      </div>
    </div>
  );
}

export default SendFactor;
