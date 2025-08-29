// components/Timeline.js
import React from "react";
type porps = {
  title: string;
  date: string;
};

const Timeline = ({ items }: { items: porps[] }) => {
   return (
    <div className="relative pl-0">
      {items.map((item, index) => (
        <div key={index} className="flex items-start mb-8 last:mb-0 relative">
          {/* خط تایم‌لاین */}
          {index !== items.length - 1 && (
            <div className="absolute right-1.5 top-6 h-full border-r-2 border-blue-500"></div>
          )}

          {/* دایره */}
          <div className="absolute right-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10"></div>

          {/* محتوا */}
          <div className="mr-6 text-right">
            <h3 className=" font-semibold">{item.date}</h3>
            <p className="opacity-50 peydaMed text-xs"> 
                همه به جز او آنها نمی دانند که ما آنها را به چه چیزی متهم می کنیم. با چاپلوسی مگر کسانی که جز او و امثال او هستند. روش ها به یک کل منجر می شوند
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
