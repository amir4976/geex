import Dropdown from "@/components/module/DropDown/DropDown";
import ThemeToggle from "@/components/module/ToggelTheme";
import Massage from "@/components/module/TopBarActions/Massage";
import ProfileDropDown from "@/components/module/TopBarActions/ProfileDropDown";
import Search from "@/components/module/TopBarActions/Search";
import {
  HamburgerMenu,
  Message,
  Notification,
  SearchNormal,
} from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

function AccsessBtns() {
  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <HamburgerMenu />
      </div>
      <div className="flex gap-2 items-center max-md:hidden">
        <ThemeToggle />

        <Dropdown icon={<SearchNormal size={30} />} size="lg">
          <Search />
        </Dropdown>
        <Dropdown icon={<Message size={30} />} size="lg" badge={10}>
          <Massage />
        </Dropdown>
        <Dropdown icon={<Notification size={30} />} size="lg" badge={40}>
          <Massage />
        </Dropdown>

        <Dropdown
          icon={
            <div className="profile">
              <div className="w-12 h-12 rounded-2xl relative overflow-hidden bg-gray-200 ">
                <Image src={"/assets/prof1.jpg"} alt="" fill />
              </div>
            </div>
          }
          size="lg"
        >
          <ProfileDropDown/>
        </Dropdown>
      </div>
    </>
  );
}

export default AccsessBtns;
