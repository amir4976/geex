"use client";
import { Eye, EyeSlash, Message } from "iconsax-reactjs";
import React, { useState } from "react";

interface prop {
  title: string;
  type: string;
  placeholder: string;
}

function Input({ title, type, placeholder }: prop) {
  const [isShowPassword, setIsshowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full  mt-5">
      <p className="mr-3">{title}</p>
      <div className="element flex px-5 rounded-2xl border border-gray-500/40 items-center mt-3">
        {type === "password" ? (
          <>
            <input
              type={isShowPassword ? "text" : "password"}
              className="w-full h-14 focus:outline-none"
              placeholder={placeholder}
            />
            <span className="cursor-pointer">
              {isShowPassword ? (
                <EyeSlash onClick={() => setIsshowPassword(false)} />
              ) : (
                <Eye onClick={() => setIsshowPassword(true)} />
              )}
            </span>

          </>
        ) : type === "email" ? (
          <>
            <input
              type="email"
              className="w-full h-14 focus:outline-none"
              placeholder={placeholder}
            />
            <div className="">
              <Message />
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-full h-14 focus:outline-none"
              placeholder={placeholder}
            />
            <div className="">
              <Message />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Input;
