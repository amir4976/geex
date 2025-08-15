// components/ThemeInit.tsx
"use client";
import { useSystemTheme } from "@/hook/UseSystemtheme";

export default function ThemeInit() {
  useSystemTheme();
  return null; // چیزی رندر نمی‌کنه
}
