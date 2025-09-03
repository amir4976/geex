"use client";

import React from "react";
import { navbarLinks } from "../../../utils/Utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/module/global/Logo";

function Navbar() {
  // path name for active link
  const path = usePathname();


  return (
    <div>
      <div className="element border border-gray-100/10  h-11/12 w-[300px]  rounded-4xl p-8 flex flex-col fixed top-7 right-3  gap-10  text-gray-500">
        <Logo/>

        <nav className="flex h-full w-full">
          <ul className=" w-full [&>li]:hover:bg-violet-200 [&>*]:rounded-2xl [&>*]:hover:text-violet-700 [&>*]:transition-all duration-300 flex flex-col gap-3">
            {navbarLinks.map((item, index) => (
              <li
                key={index}
                // active by path
                className={`${
                  path == item.link ? "bg-blue-400/20 text-blue-400" : ""
                }`}
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-2 font-peydaReg p-3"
                >
                  <item.Icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="">pulicy</div>
      </div>
    </div>
  );
}

export default Navbar;
