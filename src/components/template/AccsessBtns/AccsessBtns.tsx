import Dropdown from "@/components/module/DropDown/DropDown";
import ThemeToggle from "@/components/module/ToggelTheme";
import { Message, Notification, SearchNormal } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
 
function AccsessBtns() {
  return (
    <div className="flex gap-2 items-center">
      <ThemeToggle />

      <Dropdown icon={<SearchNormal size={30}  />} size="lg" >
        lorem
      </Dropdown>
      <Dropdown icon={ <Message size={30}  />} size="lg" badge={10} >
        lorem
      </Dropdown>
      <Dropdown icon={<Notification size={30} />} size="lg" badge={40}>
        lorem
      </Dropdown>

     
      
     
      <div className="profile">
        <div className="w-12 h-12 rounded-2xl relative overflow-hidden bg-gray-200 ">
          <Image src={"/assets/prof.jpg"} alt="" fill />
        </div>
      </div>
    </div>
  );
}

export default AccsessBtns;
