import React from "react";
import Timeline from "./TimeLine";

function RecentActivitis() {
  const data = [
    { title: "اکتیویتی", date: "تاریخ: 10" },
    { title: "اکتیویتی", date: "تاریخ: 8" },
    { title: "اکتیویتی", date: "تاریخ: 6" },
  ];
  return (
    <div className="p-7 rounded-2xl element mt-10">
        <p className="text-xl mb-6">آخرین فعالیت</p>
      <Timeline items={data} />
    </div>
  );
}

export default RecentActivitis;
