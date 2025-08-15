import Factors from "@/components/template/Bills/Factors/Factors";
import StatusCards from "@/components/template/Bills/StatusCard/StatusCards";
import React from "react";

function page() {
  return (
    <div className=" mt-10">
      <StatusCards />
      <Factors />
    </div>
  );
}

export default page;
