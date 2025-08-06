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


function getLast60MinutesSlots(): string[] {
  const now = new Date();

  // گرد کردن به نزدیک‌ترین ۱۰ دقیقه بالا
  now.setMinutes(Math.ceil(now.getMinutes() / 10) * 10);
  now.setSeconds(0);
  now.setMilliseconds(0);

  const result: string[] = [];

  // از ۶ بازه ۱۰ دقیقه‌ای قبل (شامل خود زمان فعلی) شروع کن
  for (let i = 6; i >= 0; i--) {
    const slot = new Date(now.getTime() - i * 10 * 60 * 1000);
    const hours = String(slot.getHours()).padStart(2, "0");
    const minutes = String(slot.getMinutes()).padStart(2, "0");
    result.push(`${hours}:${minutes}`);
  }

  return result;
}

type props = {
  chartData: number[];
  chartDataSaccond: number[];
};



const randomArray = ()=>{
  const myArray = [];
  for (let i = 0; i < 7; i++) {
    myArray.push(Math.floor(Math.random() * 100));
  }
  return myArray;
}

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
      text: "درخواست های سرور",
      floating: true,
      offsetX: 0,
      offsetY: 0,
      align: "right",
      style: {
        fontSize: "19px",
        fontWeight: "bold",
      },
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
      { name: "محصول 1", data: randomArray() },
      { name: "محصول 2", data: randomArray()  },
    ],
    xaxis: {
      categories:getLast60MinutesSlots(),
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
