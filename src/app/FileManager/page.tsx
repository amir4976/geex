import Files from "@/components/template/FileManager/Files/Files";
import StateCards from "@/components/template/FileManager/StateCards/StateCards";
import MainLayout from "@/layout/MainLayout";
import React from "react";

function FileManager() {
  return (
    <div>
      <MainLayout>
        <StateCards />
        <Files />
      </MainLayout>
    </div>
  );
}

export default FileManager;
