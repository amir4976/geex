"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/Utils";

function Title() {
  const pathname = usePathname();

  // پیدا کردن صفحه‌ی مربوطه
  const page = navbarLinks.find((item) => item.link === pathname);

  // اگر پیدا نشد، fallback بذار
  const pageTitle = page?.title || pathname?.replace("/", "") || "صفحه ناشناس";

  return (
    <div>
      <p className="text-3xl peydaBold">{pageTitle}</p>
      <p className="text-sm peydasemi">
        به داشبورد مدرن ادمینی geex خوش آمدید
      </p>
    </div>
  );
}

export default Title;
