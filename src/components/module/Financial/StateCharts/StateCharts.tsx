"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

import { ArrowUp, ArrowUp2 } from "iconsax-reactjs";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const getPeydaFont = () => {
  if (typeof window === "undefined") return "PeydaWeb-SemiBold";
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--font-peydaSemi")
    .trim();
};
type Props = {
  title: string;
  price: number;
  chartData: number[];
  baseColor: string[];
  secondColor: string[];
};

function StateCharts({
  title,
  price,
  chartData,
  baseColor,
  secondColor,
}: Props) {
  const [font, setFont] = useState("PeydaWeb-SemiBold");

  useEffect(() => {
    setFont(getPeydaFont());
  }, []);

  const options: ApexOptions = {
    series: [
      {
        name: "بازدید",
        data: [200, 304, 700, 401, 200, 80, 900],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      fontFamily: font,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end", // فقط بالا
        borderRadiusWhenStacked: "last", // برای استک‌ها
        columnWidth: 30,

        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark", // تول‌تیپ مشکی
      style: {
        fontSize: "12px",
        fontFamily: font,
      },
      marker: {
        show: true,
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: secondColor,
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    colors: baseColor,
  };

  return (
    <div className="rounded-4xl p-8 bg-white flex flex-col gap-10">
      <p className="text-2xl">{title}</p>
      <div className="flex w-full justify-between items-center">
        <div className="">
          <div className="flex gap-3 text-green-500 ">
            <ArrowUp2 />
            2.5%
          </div>
        </div>
        <div className="text-2xl">
          {Number(price).toLocaleString("fa-ir")} تومان
        </div>
      </div>
      <div className="">
        <ApexChart
          options={options}
          series={options.series!}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}

export default StateCharts;
