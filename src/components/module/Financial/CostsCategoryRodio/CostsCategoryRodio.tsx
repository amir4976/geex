import { InfoCircle } from 'iconsax-reactjs';
import React from 'react'

type Props = {
  title: string;
  spanding: number;
  totalCosts: number;
  color: string;
};

function CostsCategoryRodio({title,spanding,totalCosts,color}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-200 p-3 rounded-2xl text-blue-400">
        <InfoCircle />
      </div>
      <div className="flex flex-col w-full gap-1 ">
        <p>{title}</p>
        <div className="w-full h-2 bg-gray-300 rounded-2xl">
          <div
            className={`w-full h-2 bg-green-500 rounded-2xl`}
            style={{
              width: `${(spanding * 100) / totalCosts}%`,
              backgroundColor: color,
            }}
          ></div>
          <div className="flex text-xs mt-1">
            <p>{`
                ${spanding}
                دلار استفاده شده/از
                ${totalCosts}
                دلار
            `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostsCategoryRodio