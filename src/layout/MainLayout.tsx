import TopBarContainer from "@/components/template/index1/topbarContainer/TopBarContainer";
import Navbar from "@/components/template/nav/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="MainLayoutContainer ">
      {/* سایدبار ثابت در سمت راست */}

      <div className="max-xl:hidden">
        <div className=" SideBarNavContainer ">
          <Navbar />
        </div>
      </div>
      <div className=" MainElementContainer">
        <div className="w-full ">
          {/* topbar */}
          <TopBarContainer />
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
