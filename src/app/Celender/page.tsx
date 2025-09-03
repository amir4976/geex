import InProgress from "@/components/module/global/InProgress";
import MainLayout from "@/layout/MainLayout";
import React from "react";

function page() {
  return (
    <div>
      <MainLayout>
        <InProgress />
      </MainLayout>
    </div>
  );
}

export default page;
