import Factors from "@/components/template/Bills/Factors/Factors";
import StatusCards from "@/components/template/Bills/StatusCard/StatusCards";
import MainLayout from "@/layout/MainLayout";
import React from "react";

function page() {
  return (
    <>
      <MainLayout>
        <div className=" mt-10">
          <StatusCards />
          <Factors />
        </div>
      </MainLayout>
    </>
  );
}

export default page;
