import CostsCategoryRodio from '@/components/module/Financial/CostsCategoryRodio/CostsCategoryRodio';
import React from 'react'

function CostsCategory() {
  return (
    <div className="flex flex-col gap-2 mt-20 ">
      <div className="flex flex-col ">
        <p className="text-2xl ">دسته بندی هزینه ها</p>
        <p className="text-gray-500 ">سخنان بزرگان و درد روزگار</p>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <CostsCategoryRodio
            title='قسطی'
            spanding={600.26}
            totalCosts={1000}
            color='#1BD1FD'
        />
        <CostsCategoryRodio
            title='قسطی'
            spanding={450.26}
            totalCosts={1000}
            color='#216DDC'
        />
        <CostsCategoryRodio
            title='قسطی'
            spanding={700.26}
            totalCosts={1000}
            color='#FF3702'
        />
        <CostsCategoryRodio
            title='قسطی'
            spanding={890.26}
            totalCosts={1000}
            color='#FFA726'
        />
      </div>
    </div>
  );
}

export default CostsCategory
