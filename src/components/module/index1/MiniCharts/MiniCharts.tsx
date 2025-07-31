"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  data: number[];
};

const ChartMinimal: React.FC<Props> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true }, // مهم: حذف محور و ابزارها
    },
    grid: { show: false },
    xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
    yaxis: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    colors: ["#10b981"], // سبز
  };

  const series = [
    {
      name: "Data",
      data: data,
    },
  ];

  return <ApexChart options={options} series={series} type="bar" height={80} />;
};

export default ChartMinimal;
