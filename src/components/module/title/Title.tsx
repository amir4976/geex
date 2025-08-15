"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/Utils";
// type Props = {
//   title: string;
//   desc: string;
// };

function Title() {
  const pathname = usePathname();
  const pagetitle = navbarLinks.filter((item) => item.link == pathname);
  console.log(pagetitle[0].title);

  return (
    <div className="">
      <p className="text-3xl peydaBold">{pagetitle[0].title}</p>
      <p className="text-sm peydasemi">به داشبورد مدرن ادمینیgeex خوش امدید</p>
    </div>
  );
}

export default Title;
