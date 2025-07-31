import Navbar from "@/components/template/nav/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="LayoutContainer ">
      {/* سایدبار ثابت در سمت راست */}

      <div className="max-xl:hidden">
        <div className=" navWarper ">
          <Navbar />
        </div>
      </div>
      <div className=" Elemntswarper">{children}</div>
    </main>
  );
};

export default MainLayout;
