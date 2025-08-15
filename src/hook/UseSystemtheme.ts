// hooks/useSystemTheme.ts
"use client";
import { useEffect } from "react";

export function useSystemTheme() {
  useEffect(() => {
    const setTheme = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isDark) {
        document.body.classList.add("body-dark");
        document.body.classList.remove("body-light");
      } else {
        document.body.classList.add("body-light");
        document.body.classList.remove("body-dark");
      }
    };

    // اولین بار
    setTheme();

    // اگر کاربر تم سیستم رو عوض کرد
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);

    // پاکسازی
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", setTheme);
    };
  }, []);
}