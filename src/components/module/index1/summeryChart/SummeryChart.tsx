"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const getPeydaFont = () => {
  if (typeof window === "undefined") return "PeydaWeb-SemiBold";
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--font-peydaSemi")
    .trim();
};

function SummeryChart() {
  const [font, setFont] = useState("PeydaWeb-SemiBold");

  useEffect(() => {
    setFont(getPeydaFont());
  }, []);

  const options: ApexOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
      fontFamily: font,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      fontFamily: font,
    },

    labels: ["آپلیکیشن", "ویژه", "دیگر", "خرید", "خرید"],
    // colors: ["#008000", "#000080", "#000000", "#000080", "#000080"],
  };

  return (
    <div>
      <div className="peydaSemi p-5">
        <div className="flex justify-between items-center mb-5">
          <p className="text-3xl peydaBold">خلاصه نمودار</p>
          <a href="#" className="text-blue-400">
            مشاهده بیشتر
          </a>
        </div>


        <ReactApexChart
          options={options}
            series={options.series!}
          type="donut"
          height={300}
        />
      </div>
    </div>
  );
}

export default SummeryChart;
