import ContactContainer from "@/components/template/Contact/ContactContainer";
import MainLayout from "@/layout/MainLayout";
import React from "react";

function page() {
  return (
    <div>
      <MainLayout>
        <ContactContainer />
      </MainLayout>
    </div>
  );
}

export default page;
