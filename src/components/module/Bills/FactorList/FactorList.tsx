"use client";
import { ArrowDown2, Element3, HamburgerMenu } from "iconsax-reactjs";
import React from "react";
import HeroTable from "./HeroTable"; // این همون جدولیه که از Hero UI کپی کردی

interface Factor {
  id: number;
  name: string;
  price: string;
  status: string;
  date: string;
}
interface FactorHeader {
  id: number;
  name: string;
  price: string;
  status: string;
  date: string;
  profile:string;
}

type TableColumn<T> = {
  key: keyof T;
  label: string;
};

function FactorList() {
  const columns: TableColumn<FactorHeader>[] = [
    { key: "id", label: "شناسه" },
    { key: "profile", label: "تصویر" },
    { key: "name", label: "دریافت کننده" },
    { key: "date", label: "تاریخ" },
    { key: "price", label: "مقدار" },
    { key: "status", label: "وضعیت" },
  ];

  const data: Factor[] = [
    {
      id: 1,
      name: "فاکتور 1",
      price: "200,000",
      status: "پرداخت شده",
      date: "lorem",
    },
    {
      id: 2,
      name: "فاکتور 2",
      price: "350,000",
      status: "در انتظار",
      date: "lorem",
    },
    {
      id: 3,
      name: "فاکتور 2",
      price: "350,000",
      status: "در انتظار",
      date: "lorem",
    },
    {
      id: 4,
      name: "فاکتور 2",
      price: "350,000",
      status: "در انتظار",
      date: "lorem",
    },
  ];
  return (
    <div>
      {/* header */}
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-2xl peydaBold">لیست فاکتورها</p>
          <p className="text-md text-gray-500">آنها در پرواز او موفق می‌شوند</p>
        </div>
        <div className="[&>*]:bg-fuchsia-400 [&>*]:p-3 [&>*]:rounded-2xl gap-2 flex justify-center items-center">
          <button className="flex gap-1">
            جدیدترین <ArrowDown2 />
          </button>
          <button>
            <HamburgerMenu />
          </button>
          <button>
            <Element3 />
          </button>
        </div>
      </div>
      {/* end header */}

      <div className="w-full h-fit rounded-3xl py-5 element mt-10">
        <HeroTable
          columns={columns}
          data={data}
          onSelect={(item: unknown) => console.log("انتخاب شد:", item)}
        />
      </div>
    </div>
  );
}

export default FactorList;
