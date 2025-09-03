import Input from "@/components/module/auth/inputs/Input";
import Logo from "@/components/module/global/Logo";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="w-full  flex h-screen  absolute left-0 right-0 top-0 element transition-none">
        <div className=" w-full flex justify-center items-center flex-col">
          <div className="w-full md:w-1/3 lg:w-2/3 xl:w-1/3  flex flex-col justify-center items-center">
                <Logo/>
            <p className="text-2xl mt-10">خوشحالیم که قراره عضو ما باشی❤</p>
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
            <Input
              type="password"
              placeholder="پسورد خود را وارد کنید"
              title={"تایید رمز عبور"}
            />
          </div>
          <div className="flex w-1/3 mt-5 items-start ">
            <div className="flex items-center mb-4">
              <label
                htmlFor="default-checkbox"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm bg-transparent checked:bg-blue-600 checked:border-blue-600 checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center transition-all duration-200"
                />
                <p className="opacity-80">
                  با ایجاد یک حساب کاربری با ما موافقت می کنید
                  <span className="text-blue-400">
                    <Link href={"/"}>شرایط و ضوابط سیاست حفظ حریم خصوصی</Link>
                  </span>
                </p>
              </label>
            </div>
          </div>

          <div className="w-full  md:w-1/3 lg:w-2/3 xl:w-1/3 ">
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
            حساب کاربری دارید ؟{" "}
            <Link href="/signin" className="text-blue-500">
           وارد شوید
            </Link>{" "}
          </div>
        </div>
        <div className="flex w-3/5 items-center justify-center p-14 bg-gray-500/5 max-lg:hidden ">
          <Image src={"/assets/11.svg"} width={800} height={800} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
