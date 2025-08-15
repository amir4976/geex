"use client";
import { Moon, Sun1 } from "iconsax-reactjs";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // اول null باشه تا SSR مشکل ایجاد نکنه

  useEffect(() => {
    // وقتی کامپوننت mount شد، حالت اولیه رو دقیق بخون
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    else if (saved === "light") setIsDark(false);
    else setIsDark(document.body.classList.contains("body-dark"));
  }, []);

  useEffect(() => {
    if (isDark === null) return; // هنوز مقدار اولیه لود نشده

    if (isDark) {
      document.body.classList.add("body-dark");
      document.body.classList.remove("body-light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("body-dark");
      document.body.classList.add("body-light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev); // همیشه مقدار صحیح فعلی رو تغییر میده
  };

  if (isDark === null) return null; // تا زمان لود شدن، دکمه نمایش داده نشه

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-2xl element dark:bg-gray-700"
    >
      {isDark ? <Sun1/> : <Moon/>}
    </button>
  );
}
