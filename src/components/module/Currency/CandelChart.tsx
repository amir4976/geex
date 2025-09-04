"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Dropdown from "../DropDown/DropDown";
import { Bitcoin, Ethereum, More, Litecoin } from "iconsax-reactjs";
import { btc, etr, ltc } from "./CurrencyTestData";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function CandelChart() {
  const [ShowCurrency, setShowCarrency] = useState("btc");
  const [data, setData] = useState(btc);
  useEffect(() => {
    const currency = () => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.prices); // آرایه [timestamp, price]
        });
    };
    currency();
  }, []);

  const chengeCurrency = (e: string) => {
    setShowCarrency(e);
    if (e === "btc") {
      setData(btc);
    } else if (e === "etr") {
      setData(etr);
    } else if (e === "ltc") {
      setData(ltc);
    }
  };
  const option: ApexOptions = {
    series: [
      {
        data,
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];

        return `
        <div class="element">
          <div class="apexcharts-tooltip-series p-3">
            <div>Open: <span>${o}</span></div>
            <div>High: <span>${h}</span></div>
            <div>Low: <span>${l}</span></div>
            <div>Close: <span>${c}</span></div>
          </div>
        </div>
      `;
      },
    },
  };

  return (
    <div className="p-10 rounded-3xl element mt-10">
      <p className="text-2xl peydaBold">دارایی های اصلی</p>
      <div className="flex justify-between mt-10 max-md:flex-col ">
        <div className="flex gap-3">
          <button
            className={` px-8 py-3   rounded-xl flex gap-5 ${
              ShowCurrency == "btc" ? "bg-black/50" : ""
            }`}
            onClick={() => chengeCurrency("btc")}
          >
          <Bitcoin color={"#FFDE21"}/>
           BTC
          </button>
          <button
            className={` px-8 py-3   rounded-xl flex gap-5 ${
              ShowCurrency == "etr" ? "bg-black/50" : ""
            }`}
            onClick={() => chengeCurrency("etr")}
          >
            <Ethereum color={"#0B6765"}/>
            ETR
          </button>
          <button
            className={` px-8 py-3   rounded-xl flex gap-5 ${
              ShowCurrency == "ltc" ? "bg-black/50" : ""
            }`}
            onClick={() => chengeCurrency("ltc")}
          >
          <Litecoin/>
            LTC
          </button>
        </div>
        <div className="p-1 rounded-2xl bg-blue-500/10">
          <Dropdown icon={<More />} size="sm">
            <p className="text-md peydaBold p-3 cursor-pointer ">ویرایش</p>
            <p className="text-md peydaBold p-3 cursor-pointer ">حذف</p>
          </Dropdown>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-row  flex-wrap ">
          <div className="border-l border-gray-300 w-fit h-20 flex gap-3 flex-col p-5">
            <p className="text-sm text-gray-500">بیت کوبین</p>
            <p className="text-xl peydaBold">BTC / USD</p>
          </div>
          <div className="border-l border-gray-300 w-fit h-20 flex gap-3 flex-col p-5">
            <p className="text-sm text-gray-500">قیمت را علامت گذاری کنید</p>
            <p className="text-xl peydaBold">148.42 -3.28%</p>
          </div>
          <div className="border-l border-gray-300 w-fit h-20 flex gap-3 flex-col p-5">
            <p className="text-sm text-gray-500">نرخ تامین مالی</p>
            <p className="text-xl peydaBold">-0,0252%/hr</p>
          </div>
          <div className="border-l border-gray-300 w-fit h-20 flex gap-3 flex-col p-5">
            <p className="text-sm text-gray-500">مقدار</p>
            <p className="text-xl peydaBold">104k</p>
          </div>
        </div>
      </div>

      <div id="chart">
        <ApexChart
          options={option}
          series={option.series}
          type="candlestick"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default CandelChart;
