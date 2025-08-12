
import Dropdown from "@/components/module/DropDown/DropDown";
import Factors from "@/components/template/Bills/Factors/Factors";
import StatusCards from "@/components/template/Bills/StatusCard/StatusCards";
import React from "react";

function page() {

  return (
    <div className="">
      <StatusCards />
      <Dropdown/>
      <Factors/>
    </div>
  );
}

export default page;
