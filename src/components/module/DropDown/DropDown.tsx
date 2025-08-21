"use client";
import { useState, useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "med" | "lg";
  title?: string;
  icon?: React.ReactNode;
  badge?: number;
}

export default function Dropdown({
  title,
  children,
  size,
  icon,
  badge,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // بستن با کلیک بیرون
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={rootRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2  rounded-md focus:outline-none "
      >
        {title}
        {icon}
        {badge && (
          <span
            className={`absolute top-0 right-2 text-xs ${
              badge > 30 ? "bg-[#FFAB2D]" : "bg-blue-500"
            } text-white rounded-md w-5 h-5 flex items-center justify-center `}
          >
            {badge > 99 ? "99+" : badge}
          </span>
        )}
      </button>

      <div
        className={`origin-top z-50 transform transition-transform duration-500 ease-out absolute left-0 mt-2 rounded-xl shadow-lg element  ring-opacity-5 overflow-hidden flex flex-col p-5 text-right 
          ${size === "sm" && "w-44"}
          ${size === "med" && "w-54"}
          ${size === "lg" && "w-88"}
          ${open ? "scale-y-100 " : "scale-y-0 opacity-0"}`}
        style={{ transformOrigin: "top" }}
      >
        {children}
      </div>
    </div>
  );
}
