"use client";

import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

// فقط کلاینت‌ساید ایمپورت
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  title: string;
  value: number;
  percentage: number;
  chartData: number[];
};

const StatCardWithLineChart: React.FC<Props> = ({
  title,
  value,
  percentage,
  chartData,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    colors: ["#3b82f6"],
  };

  const series = [
    {
      name: "data",
      data: chartData,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl p-5 shadow-sm w-full">
           {/* متن سمت راست */}
      <div className="w-full md:w-2/3 flex flex-col  text-right mt-4 md:mt-0 gap-5">
        <span className="text-lg text-gray-800">{title}</span>
        <span className="text-2xl font-bold">{value.toLocaleString("fa-IR")}</span>
        <span
          className={`text-sm font-medium ${
            percentage < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {percentage}%
        </span>
      </div>
      {/* چارت سمت چپ */}
      <div className="w-full md:w-1/3">
        <ApexChart options={options} series={series} type="line" height={80} />
      </div>


    </div>
  );
};

export default StatCardWithLineChart;
