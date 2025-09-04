"use client";
import { useEffect, useState } from "react";
import React from 'react'
import TodoTag from '../TodoTag/TodoTag'
import Checkbox from './Checkbox'
import { Trash } from 'iconsax-reactjs';
import { todosType } from "@/utils/types";
 
type props ={
  TodoItem:todosType
}
export  function DateDisplay({ createdAt }: { createdAt: string }) {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    const date = new Date(createdAt);
    const faDate = date.toLocaleDateString("fa-IR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const faTime = date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setFormatted(`${faDate} ساعت ${faTime}`);
  }, [createdAt]);

  return <span>{formatted}</span>;
}

function TodoItem({TodoItem}:props) {
  const [isChecked, setIsChecked] = React.useState(false)



  return (
    <div
      className={`flex justify-between items-center element rounded-3xl p-10  `}
    >
      <div className="flex gap-3">
        <Checkbox setIsChecked={setIsChecked} />
        <div className={`${isChecked ? "line-through opacity-50" : ""}`}>
          <p className="text-sm text-gray-500 ">
            <DateDisplay createdAt={TodoItem.createdAt} />
          </p>
          <p className="text-xl">{TodoItem.todo}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {TodoItem.tags.map((tag, index) => (
          <TodoTag status={tag} key={index} />
        ))}

        {/* <TodoTag  status={'Low'}/> */}
        {/* <TodoTag  status={'Team'}/> */}
        <div className="flex justify-center items-center gap-5 mx-5">
          <button>
            <Trash color="#FF1000" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem
