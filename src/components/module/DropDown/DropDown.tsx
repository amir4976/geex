"use client";
import { useState, useRef, useEffect } from "react";

export default function Dropdown() {
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
        className="px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        منوی من
      </button>

      <div
        className={`origin-top transform transition-transform duration-500 ease-out absolute left-0 mt-2 w-48 rounded-xl shadow-lg bg-white  ring-opacity-5 overflow-hidden
          ${open ? "scale-y-100" : "scale-y-0"}`}
        style={{ transformOrigin: "top" }}
      >
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          گزینه ۱
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          گزینه ۲
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          گزینه ۳
        </a>
      </div>
    </div>
  );
}
