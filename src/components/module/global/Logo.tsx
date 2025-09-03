"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
function Logo() {
  const [isDark, setIsDark] = useState(false);

  //  useEffect for dark mode class chack for dark mode class
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDark = () => {
        setIsDark(document.body.classList.contains("body-dark"));
      };

      checkDark(); // first time
      const observer = new MutationObserver(checkDark);
      observer.observe(document.body, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);
  return (
    <div>
      <Image
        src={!isDark ? "/assets/logo-dark.svg" : "/assets/logo-lite.svg"}
        alt="alt"
        width={180}
        height={180}
      />
    </div>
  );
}

export default Logo;
