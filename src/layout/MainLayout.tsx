import { Home2 } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-5  ">
      {/* سایدبار ثابت در سمت راست */}

      <div className="col-span-1 text-black p-8  ">
        <div className="bg-white h-11/12 w-[310px]  rounded-4xl p-6 flex flex-col fixed top-10 gap-10 ">
          <Image
            src="/assets/logo-dark.svg"
            alt="alt"
            width={180}
            height={180}
          />

          <nav className="flex h-full w-full ">
            <ul className="[&>*]:p-3  w-full [&>li]:hover:bg-violet-200  [&>*]:rounded-2xl [&>*]:hover:text-violet-700 [&>*]:transition-all duration-1000 gap-10 ">
              <li>
                <Home2 />
              </li>
              <li>
                <Home2 />
              </li>
              <li>
                <Home2 />
              </li>
              <li>
                <Home2 />
              </li>
              <li>
                <Home2 />
              </li>
            </ul>
          </nav>
          <div className="">pulicy</div>
        </div>
      </div>

      {children}
    </main>
  );
};

export default MainLayout;
