import React from 'react'

type Props = {
  icon: React.ReactNode;
  title: string;
  month: string;
  value: number;
  percent: number;
    color:string;
};

function MarketPreviewCard({
    icon,
    title,
    month,
    value,
    percent,
    color
}: Props) {
    console.log(color)
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-3">
        <div
          className="w-10 h-10  rounded-full   text-white flex justify-center items-center"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div className="flex flex-col ">
          <p>{title}</p>
          <p className="text-sm text-gray-600">{month}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p>{value} $</p>
        <p className="text-sm text-gray-600">{percent}%</p>
      </div>
    </div>
  );
}

export default MarketPreviewCard