import { Message, Notification, SearchNormal } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

function AccsessBtns() {
  return (
    <div className="flex gap-6 items-center">
      <SearchNormal size={30} />
      <Message size={30} />
      <Notification size={30} />
      <div className="profile">
        <div className="w-12 h-12 rounded-2xl relative overflow-hidden bg-gray-200 ">
          <Image src={"/assets/prof.jpg"} alt="" fill />
        </div>
      </div>
    </div>
  );
}

export default AccsessBtns;
