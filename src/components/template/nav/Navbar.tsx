import {
  Calendar,
  DocumentText,
  Home2,
  LayoutMaximize,
  Setting2,
} from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-white h-11/12 w-[300px]  rounded-4xl p-6 flex flex-col fixed top-7 right-3  gap-10  text-gray-500">
        <Image src="/assets/logo-dark.svg" alt="alt" width={180} height={180} />

        <nav className="flex h-full w-full">
          <ul className="[&>*]:p-3 w-full [&>li]:hover:bg-violet-200 [&>*]:rounded-2xl [&>*]:hover:text-violet-700 [&>*]:transition-all duration-300 flex flex-col gap-3">
            <li>
              <div className="flex items-center gap-2 font-peydaReg">
                <Home2 size="25" />
                <span>خانه</span>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <LayoutMaximize size="25" />
                <span>طرح‌بندی</span>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <Calendar size="25" />
                <span>برنامه</span>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <Setting2 size="25" />
                <span>ویژگی‌ها</span>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <DocumentText size="25" />
                <span>صفحات</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="">pulicy</div>
      </div>
    </div>
  );
}

export default Navbar;
