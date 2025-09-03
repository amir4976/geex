import Input from "@/components/module/auth/inputs/Input";
import Logo from "@/components/module/global/Logo";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="w-full  flex h-screen  absolute left-0 right-0 top-0 element">
        <div className=" w-full flex justify-center items-center flex-col">
          <div className="w-full md:w-1/3 lg:w-2/3 xl:w-1/3">
            <Logo />
            <p className="text-3xl mt-10">ورود به حساب کاربری شما 👋</p>
            <Input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              title={"ایمیل شما"}
            />
            <Input
              type="password"
              placeholder="پسورد خود را وارد کنید"
              title={"رمز عبور"}
            />
          </div>

          <div className="w-full  md:w-1/3 lg:w-2/3 xl:w-1/3 mt-10">
            <button className="w-full h-14 bg-purple-500 text-white rounded-2xl">
              ورود
            </button>
          </div>

          <div className=" mt-5 flex w-1/3 items-center gap-3">
            <div className="w-full border h-0 border-gray-500/50"></div>
            یا
            <div className="w-full border h-0 border-gray-500/50"></div>
          </div>

          <div className="opacity-80 mt-3">
            {" "}
            حساب کاربری ندارید ؟{" "}
            <Link href="/signup" className="text-blue-500">
              حساب کاربری بسازید
            </Link>{" "}
          </div>
        </div>
        <div className="flex w-3/5 items-center justify-center p-14 max-lg:hidden bg-gray-500/5">
          <Image src={"/assets/4.svg"} width={800} height={800} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
