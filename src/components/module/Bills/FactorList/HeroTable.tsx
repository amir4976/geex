"use client";

import { Link, More, Printer } from "iconsax-reactjs";
import React, { useState } from "react";
import Dropdown from "../../DropDown/DropDown";

type TableColumn<T> = {
  key: keyof T;
  label: string;
};

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onSelect?: (item: T) => void; // اضافه شد
}
interface Factor {
  id: number;
  name: string;
  price: string;
  status: string;
  date:string;
}
export default function HeroUICheckboxTable<T extends Record<string,Factor>>({
  columns,
  data,

}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const allSelected = selectedRows.size === data.length && data.length > 0;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((_, idx) => idx)));
    }
  };

  const toggleRow = (idx: number) => {
    const updated = new Set(selectedRows);
    if (updated.has(idx)) {
      updated.delete(idx);
    } else {
      updated.add(idx);
    } 
    setSelectedRows(updated);
  };

  return (
    <div className="">
      <table className="min-w-full text-sm ">
        <thead className=" text-xs uppercase h-20 border-b border-gray-200/50">
          <tr>
            {/* ستون انتخاب همه */}
            <th className="">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
            </th>

            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className="px-6 py-3 text-right font-semibold"
              >
                {col.label}
              </th>
            ))}

            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => {
              const isSelected = selectedRows.has(idx);
              return (
                <tr
                  key={idx}
                  className={`border-b border-gray-200/50  h-20   hover:border-l-blue-500 transition-all ${
                    isSelected ? "bg-blue-500/10" : "element"
                  }`}
                >
                  {/* چک‌باکس هر ردیف */}
                  <td className="px-4 py-6  flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRow(idx)}
                      className="w-4 h-4 accent-blue-600 cursor-pointer"
                    />
                  </td>
                  {columns.map((col) => (
                    <td key={String(col.key)} className="px-6 py-4">
                      {String(row[col.key])}
                    </td>
                  ))}

                  <td className="text-center">
                    <button className="ml-3">
                      <Link />
                    </button>
                    <button className="">
                      <Printer />
                    </button>
                    <Dropdown icon={<More color={"#5e5e5e"} />} size="sm">
                      <button
                        className="text-black text-right  py-2 hover:text-blue-400 leading-5"
                      >
                       ویرایش
                      </button>
                      <button
                        className="text-black text-right  py-2 hover:text-red-400 leading-5"
                      >
                       حذف
                      </button>
                      
                    </Dropdown>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-6 py-4 text-center text-gray-500"
              >
                هیچ داده‌ای یافت نشد
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
