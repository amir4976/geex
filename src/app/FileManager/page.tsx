import Files from "@/components/template/FileManager/Files/Files";
import StateCards from "@/components/template/FileManager/StateCards/StateCards";
import React from "react";

function FileManager() {
  return (
    <div>
      <StateCards />
      <Files />
    </div>
  );
}

export default FileManager;
