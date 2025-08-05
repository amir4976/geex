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

function ColChart() {
  const [font, setFont] = useState("PeydaWeb-SemiBold");

  useEffect(() => {
    setFont(getPeydaFont());
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 380,
      type: "bar",
      stacked: true,
      fontFamily: font,
         toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        horizontal: false,
      },
    },

    series: [
      {
        name: "PRODUCT A",
        data: [14, 25, 21, 17, 12, 13, 11],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15],
      },
    ],
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
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return toPersianDigits(val);
        },
        align: "right",
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: { show: false },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const name = w.globals.seriesNames[seriesIndex];
        const value = w.globals.series[seriesIndex][dataPointIndex];
        return `
      <div style="direction: rtl; text-align: right; padding: 10px; font-family: var(--font-peydaSemi);">
        <strong>${toPersianDigits(value)} درخواست</strong><br/>
        <span style="color: ${
          w.config.colors?.[seriesIndex] || "#000"
        }">${name}</span>
      </div>
    `;
      },
    },
  };

  return (
    <div>
      <div className="peydaSemi">
        <div className="">
          <p className="text-2xl">وضعیت سرور</p>

          <p className="text-gray-400">بگذار درد واقعی به دنبالش بیاید.</p>
        </div>
        <ReactApexChart
          options={options}
          series={options.series!}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}

export default ColChart;
