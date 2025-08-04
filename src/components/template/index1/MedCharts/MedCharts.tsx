import ViewerChart from "@/components/module/index1/VeiwerChart/ViewerChart";
import React from "react";
import SummeryChart from '../../../module/index1/summeryChart/SummeryChart';

function MedCharts() {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className=" col-span-1 bg-white rounded-4xl p-5">
            <ViewerChart/>
        </div>
        <div className=" col-span-1 bg-white rounded-4xl p-5">
            <SummeryChart/>
        </div>
      </div>
    </div>
  );
}

export default MedCharts;
