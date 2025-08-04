import React from 'react'

function TestimonialCard() {
  return (
    <div className="w-full bg-white rounded-4xl flex flex-col gap-6  p-6">
      <div className="flex  gap-3 ">
        <div className="profile w-14 h-14 rounded-full bg-gray-300"></div>
        <div className="flex flex-col">
            <div className=" font-peydasemi text-lg">حان دوو</div>
            <div className="text-gray-700 font-peydaMed text-md">هان دو</div>
        </div>
      </div>
        <div className="">
            همه به جز او آنها نمی دانند که ما آنها را به چه چیزی متهم می کنیم. با چاپلوسی مگر کسانی کهد
        </div>

        <div className="flex text-sm gap-3">
            <div className="">بایگانی</div>
            <button className=""> قبول کردن</button>
        </div>
    </div>
  );
}

export default TestimonialCard
