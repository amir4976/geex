import MasterCard from "@/components/module/Financial/MasterCard/MasterCard";
import StateCharts from "@/components/module/Financial/StateCharts/StateCharts";
import AllTransfers from "@/components/template/Financial/AllTransfers/AllTransfers";
import CostsCategory from "@/components/template/Financial/CostsCategory/CostsCategory";
import Transfers from "@/components/template/Financial/Transfers/Transfers";
import React from "react";

function page() {
  return (
    <div>
      <div className="grid grid-cols-7 max-xl:grid-cols-1 gap-10 mt-10">
        <div className="col-span-5 max-xl:col-span-1">
          <div className="grid grid-cols-2 gap-10 max-xl:grid-cols-1">
            <div className="col-span-1"><StateCharts title={"هزینه ها"} price={74586000} chartData={[10,11]} baseColor={["#1BD1FD"]}secondColor={["#216DDC"]}/></div>
            <div className="col-span-1"><StateCharts title={"هزینه ها"} price={74586000} chartData={[10,11]} baseColor={["#FFA726"]} secondColor={["#FF3702"]}/></div>
          </div>
          <AllTransfers/>
        </div>
        <div className="col-span-2 max-xl:col-span-1 ">
          <MasterCard/>
          <Transfers/>
          <CostsCategory/>
        </div>
      </div>
    </div>
  );
}

export default page;
