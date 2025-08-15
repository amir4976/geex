import Title from "@/components/module/title/Title";
import React from "react";
import AccsessBtns from "../../AccsessBtns/AccsessBtns";


function TopBarContainer() {

  
  return (
    <div className="flex justify-between items-center p-2 ">
      <Title  />
      <AccsessBtns />
    </div>
  );
}

export default TopBarContainer;
