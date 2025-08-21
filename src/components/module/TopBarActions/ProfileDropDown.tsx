import {
  DollarCircle,
  InfoCircle,
  Logout,
  Profile2User,
  Setting2,
  User,
} from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

function ProfileDropDown() {
  return (
    <div>
      <div className="w-full flex bg-gray-950/5 p-3 rounded-2xl gap-3">
        <Image
          src={"/assets/prof1.jpg"}
          width={60}
          height={60}
          alt="profile"
          className="rounded-2xl"
        />
        <div className="flex flex-col justify-center">
          <p className="text-peydaBold text-xl">محاب عالم</p>
          <p className="text-xs ">مدیر سیستم</p>
        </div>
      </div>
      <ul
        className={
          "[&>li]:flex [&>li]:gap-3 [&>li]:py-3  [&>li]:hover:text-blue-500 [&>li]:px-2 [&>li]:rounded-2xl mt-5 text-gray-500/70  "
        }
      >
        <li>
          <User />
          <span>مشخصات</span>
        </li>
        <li>
          <Setting2 />
          <span>تنظیمات</span>
        </li>
        <li>
          <DollarCircle />
          <span>صورتحساب</span>
        </li>
        <li>
          <Profile2User />
          <span>فعالیت</span>
        </li>
        <li>
          <InfoCircle />
          <span>راهنمایی</span>
        </li>
      </ul>
      <div className="w-full flex justify-center items-center gap-2 bg-red-400/10  p-3 rounded-2xl hover:bg-red-600/60 hover:text-white transition-all ">
       <Logout/>
        خارج شدن
      </div>
    </div>
  );
}

export default ProfileDropDown;
