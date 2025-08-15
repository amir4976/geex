import MarketPreviewCard from "@/components/module/Currency/MarketPreviewCard";
import { BinanceCoin, Bitcoin, Ethereum, Litecoin } from "iconsax-reactjs";
import React from "react";

function MarketPreviews() {
  const currencies = [
    {
      icon: <Bitcoin />,
      title: "Bitcoin",
      month: "Aug 2025",
      value: 45231.76,
      percent: 4.52,
      color:"#FFAB2D"
    },
    {
      icon: <Ethereum />,
      title: "Ethereum",
      month: "Aug 2025",
      value: 3125.4,
      percent: -2.13,
      color:"#00ADA3"
    },
    {
      icon: <Litecoin />,
      title: "Litecoin",
      month: "Aug 2025",
      value: 82.13,
      percent: 1.87,
      color:"#374C98"
    },
    {
      icon: <BinanceCoin/>,
      title: "Biancecoin",
      month: "Aug 2025",
      value: 142.66,
      percent: -0.45,
      color:"#23292F"
    },
    {
      icon: <BinanceCoin/>,
      title: "Biancecoin",
      month: "Aug 2025",
      value: 142.66,
      percent: -0.45,
      color:"#23292F"
    },
  ];

  return (
    <div className="w-full  element p-5 flex rounded-3xl  flex-col gap-7">
      <p>پیش نمایش مارکت</p>
      {currencies.map((currency, index) => (
        <MarketPreviewCard
          key={index}
          icon={currency.icon}
          title={currency.title}
          month={currency.month}
          value={currency.value}
          percent={currency.percent}
          color={currency.color}
        />
      ))}
    </div>
  );
}

export default MarketPreviews;
