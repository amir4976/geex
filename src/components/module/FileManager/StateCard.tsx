"use client";
import React from "react";
import { Dropbox } from "iconsax-reactjs";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type StateCardProps = {
  used: number; // مقدار استفاده شده
  total: number; // ظرفیت کل
};


function randomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StateCard: React.FC<StateCardProps> = ({ used, total }) => {
  const percent = Math.round((used / total) * 100);
  const series = [percent];

  const options: ApexOptions = {
    chart: {
      height: 500,
      type: "radialBar", // ✅ نیازی به as const نیست
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "25%",
          background: "#f00f0f0f",
        },
        track: {
          background: "#E5E7EB", // 🎨 رنگ ناحیه خالی (مثلاً خاکستری روشن)
          strokeWidth: "100%", // ضخامت
          opacity: 0.3, // شفافیت
          margin: 5,
        },
        dataLabels: {
          show: false, // لیبل‌ها کاملا غیرفعال شدند
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [randomColor()],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },

    stroke: {
      lineCap: "round",
    },
  };

  return (
    <>
      <div className="element rounded-3xl p-5  flex flex-col  ">
        <div className="flex gap-4 items-center">
          <Dropbox size={40} color="#2563EB" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">حافظه</span>
            <span className="text-xl peydaBold">DropBox</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-500">120gb / 250gb</p>
          <Chart
            options={options}
            series={series} // ✅ اینجا باشه فقط
            type="radialBar"
            height={120}
            width={120}
          />
        </div>
      </div>
    </>
  );
};

export default StateCard;
