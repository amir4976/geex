import StatCardWithLineChart from "@/components/module/index1/Card/StateCard";
import React from "react";

function StateCardContainer() {
  return (
    <div className="flex-1  grid grid-cols-1 gap-10 lg:grid-cols-3">
      <StatCardWithLineChart
        title="کاربران جدید"
        value={4750}
        percentage={-25}
        chartData={[10, 20, 15, 30, 25, 18, 22]}
      />
      <StatCardWithLineChart
        title="بازدیدها"
        value={129000}
        percentage={5}
        chartData={[50, 80, 60, 90, 85, 100, 120]}
      />
      <StatCardWithLineChart
        title="بازدیدها"
        value={129000}
        percentage={5}
        chartData={[50, 80, 60, 90, 85, 100, 120]}
      />
    </div>
  );
}

export default StateCardContainer;
