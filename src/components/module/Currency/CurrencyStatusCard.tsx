import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { EthereumClassic } from "iconsax-reactjs";

// فقط کلاینت‌ساید ایمپورت
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CurrencyStatusCard() {
const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const options: ApexOptions = {
  chart: {
    type: "area",
    sparkline: { enabled: true },
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shade: "light",
      shadeIntensity: 0.9,
      // رنگ‌های رندوم برای انتهای گرادیانت
      gradientToColors: [randomColor(), randomColor()],
      opacityFrom: 0.6,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  grid: {
    show: true,
    borderColor: "rgba(143, 142, 142, 0.20)",
  },
  tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const name = w.globals.seriesNames[seriesIndex];
        const value = w.globals.series[seriesIndex][dataPointIndex];


        return `
      <div class="element apexcharts-tooltip-series p-3" style="direction: rtl; text-align: right; padding: 10px; font-family: var(--font-peydaSemi);">
        <strong>${value} </strong><br/>
        <span>${name} </span> <br />
      </div>
    `;
      },
    },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: { show: false },
  dataLabels: { enabled: false },
  // رنگ‌های رندوم برای خود خط
  colors: [randomColor(), randomColor()],

};

  const series = [
    {
      name: "دلار",
      data: [30, 35, 60, 10, 35, 0,38,20,100],
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
        <ApexChart options={options} series={series} type="area" height={120} />
      </div>
    </div>
  );
}
