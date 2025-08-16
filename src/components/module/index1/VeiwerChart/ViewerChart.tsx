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

function ViewerChart() {
  const [font, setFont] = useState("PeydaWeb-SemiBold");

  useEffect(() => {
    setFont(getPeydaFont());
  }, []);

  const options: ApexOptions = {
    series: [
      {
        name: "بازدید",
        data: [200, 304, 700, 401,200, 80, 900],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      fontFamily: font,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },

    xaxis: {
      categories: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سشنبه",
        "چهار شنبه",
        "پنج شنبه",
        "حمعه",
      ],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const name = w.globals.seriesNames[seriesIndex];
        const value = w.globals.series[seriesIndex][dataPointIndex];
        const category = w.globals.labels[dataPointIndex];
        console.log(category)

        return `
      <div class="element apexcharts-tooltip-series p-3" style="direction: rtl; text-align: right; padding: 10px; font-family: var(--font-peydaSemi);">
        <strong>${value} </strong><br/>
        <span>${name} </span> <br />
        <span>${category}</span>
      </div>
    `;
      },
    },
  };

  return (
    <div>
      <div className="peydaSemi p-5">
        <div className="flex justify-between items-center mb-5">
          <p className="text-3xl peydaBold">بازدیدکنندگان</p>
          <a href="#" className="text-blue-400">
            مشاهده بیشتر
          </a>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-3xl peydaBold">98,425k</div>
          <div className="">
            <p className="text-sm peydaSemi text-green-700">+2.5%</p>
            <p className="text-xs peydaSemi  text-gray-700">نسبت به هفته گذشته</p>
          </div>
        </div>

        <ReactApexChart
          options={options}
          series={options.series!}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
}

export default ViewerChart;
