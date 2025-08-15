import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { EthereumClassic } from "iconsax-reactjs";

// فقط کلاینت‌ساید ایمپورت
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CurrencyStatusCard() {
  const options: ApexOptions = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: { show: true },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    colors: ["#3b82f6"],
  };

  const series = [
    {
      name: "data",
      data: [40, 11, 20, 10, 2, 50, 60, 42],
    },
  ];

  return (
    <div className="element rounded-3xl p-10">
      <div className="w-full flex gap-3 items-center">
        <div className="w-15 h-15 bg-gray-400 rounded-full flex justify-center items-center">
          <EthereumClassic size="32" color="#fff" />
        </div>

        <div className="">
          <p className="text-2xl">اتریوم</p>
          <p className=" text-gray-600">ETH</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className="text-xl peydaBold">
          {" "}
          $ {(1350000).toLocaleString("fa-ir")}{" "}
        </p>
        <p className="text-red-500">-20%</p>
      </div>
      <div className=" mt-10">
        <ApexChart options={options} series={series} type="line" height={120} />
      </div>
    </div>
  );
}
