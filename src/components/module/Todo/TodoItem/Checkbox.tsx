'use client'
import React, { useState, useId } from 'react'
type prop ={
  setIsChecked: (checked: boolean) => void
}
function Checkbox({ setIsChecked }: prop) {
  const [checked, setChecked] = useState(false);
  const id = useId(); // ✅ id یکتا برای هر کامپوننت

  
  return (
    <div className="flex items-center gap-2">
      {/* چک‌باکس واقعی (کنترل‌شده) */}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setIsChecked(!checked);
        }}
        className="hidden"
      />

      {/* لیبل = ظاهر فانتزی */}
      <label htmlFor={id} className="cursor-pointer">
        <div
          className={`
            w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all duration-300
            ${
              checked
                ? "bg-blue-500 border-blue-500"
                : "border-blue-400/70 bg-transparent"
            }
          `}
        >
          {/* آیکون تیک */}
          <svg
            className={`
              w-3.5 h-3.5 text-white transition-all duration-200
              ${checked ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </label>
    </div>
  );
}

export default Checkbox
