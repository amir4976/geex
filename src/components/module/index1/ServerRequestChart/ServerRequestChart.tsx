"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";

// import react apex chart is done like this
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// parse number to persion
function toPersianDigits(num: string | number): string {
  return String(num).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
}

// get pyda font from client
const getPeydaFont = () => {
  if (typeof window === "undefined") return "PeydaWeb-SemiBold";
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--font-peydaSemi")
    .trim();
};

type props = {
  chartData: number[];
  chartDataSaccond: number[];
};

const ServerRequestChart = ({ chartData, chartDataSaccond }: props) => {
  const [font, setFont] = useState("PeydaWeb-SemiBold");

  useEffect(() => {
    setFont(getPeydaFont());
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "line",
      width: "100%",
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false },
      fontFamily: font,
    },
    grid: {
      show: false, // ← حذف گرید بک‌گراند
    },
  title: {
    text: 'درخواست های سرور',
    floating: true,
    offsetX: 0,
    offsetY: 0,
    align: "right",
    style: {
      fontSize: '19px',
      fontWeight: 'bold',
    }
  },
    colors: ["#F9C200", "#00C9A7"],
    stroke: {
      curve: "smooth",
      width: 4,
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      { name: "محصول 1", data: chartData },
      { name: "محصول 2", data: chartDataSaccond },
    ],
    xaxis: {
      categories: [
        "14:00",
        "14:10",
        "14:20",
        "14:30",
        "14:40",
        "14:50",
        "15:00",
        "15:10",
      ],
      labels: {
        style: {
          fontSize: "14px",
          colors: "#999",
        },
        formatter: (value: string) => toPersianDigits(value),
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#aaa",
        },
        formatter: (val: number): string => toPersianDigits(val),
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const name = w.globals.seriesNames[seriesIndex];
        const value = series[seriesIndex][dataPointIndex];
        return `
        <div style="direction: rtl; text-align: right; padding: 10px; font-family: var(--font-peydaSemi);">
          <strong>${value} درخواست</strong><br/>
          <span style="color: ${w.config.colors[seriesIndex]}">${name}</span>
        </div>
      `;
      },
    },
  };

  return (
    <div className="peydaSemi">
      <ReactApexChart
        options={options}
        series={options.series!}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ServerRequestChart;
