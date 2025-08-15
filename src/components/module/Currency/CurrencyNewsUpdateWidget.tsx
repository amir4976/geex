import { ArrowLeft } from "iconsax-reactjs";
import Link from "next/link";
import React from "react";

type Props = {};

function CurrencyNewsUpdateWidget({}: Props) {
  return (
    <div className="w-full h-fit bg-linear-to-r to-[#9526D2] from-[#D765FF]  flex flex-col items-start gap-10 p-10 rounded-3xl text-white ">
      <p className="text-3xl peydaBold">همه به روز رسانی اخبار ارزدیجیتال</p>
      <p className="text-md">
        درباره اطلاعات رمزنگاری که به شما در مدیریت، سازماندهی و کنترل ایمن
        دارایی هایتان کمک می کند، بیشتر بخوانید
      </p>
      <Link href="/" className="flex bg-gray-600 rounded-full px-5 py-2 hover:bg-black transition-all ">
        <p>بیشتر بدانید</p>
        <ArrowLeft />
      </Link>
    </div>
  );
}

export default CurrencyNewsUpdateWidget;
