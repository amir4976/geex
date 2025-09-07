"use client";
import React, { useState } from "react";
import TodoList from "@/components/template/TodoList/TodoList";
import TodoNav from "@/components/template/TodoList/TodoNav";
import { TodoListTest } from "@/utils/testData";
import { todosType } from "@/utils/types";
import { InfoCircle } from "iconsax-reactjs";

function Maintodo() {
  const [todoList, setTodoList] = useState<todosType[]>(TodoListTest);
  const [todoNav, setTodoNav] = useState("all");
  //list actions
  const setAll = () => {    
    setTodoList(TodoListTest);
    setTodoNav("all");
  };
  const setImportance = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("high")));
    setTodoNav("importance");
  };
  const setCompleted = () => {
    setTodoList(TodoListTest.filter((item) => item.completed));
    setTodoNav("completed");
  };
  const setDeleted = () => {
    setTodoNav("deleted");
  };
  const setDeadend = () => {
    const now = new Date();
    const day = (now.getDay() + 6) % 7; // هفته از شنبه شروع میشه

    const startOfWeek = new Date(now);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(now.getDate() - day);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const filtered = TodoListTest.filter((todo) => {
      const created = new Date(todo.createdAt);
      return created >= startOfWeek && created <= endOfWeek;
    });
    console.log(filtered);
    setTodoList(filtered);
    setTodoNav("deadend");
  };

  const teamTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("team")));
    setTodoNav("team");
  };
  const highTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("high")));
    setTodoNav("high");
  };
  const medTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("med")));
    setTodoNav("med");
  };
  const lowTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("low")));
    setTodoNav("low");
  };

// title page  
  const showNavTitle = ()=>{
    if (todoNav === "all") {
      return "همه";
    } else if (todoNav === "importance") {
      return "مهم";
    } else if (todoNav === "completed") {
      return "تکمیل شده";
    } else if (todoNav === "deleted") {
      return "حذف شده";
    } else if (todoNav === "deadend") {
      return "سر رسید";
    } else if (todoNav === "team") {
      return "تیم";
    } else if (todoNav === "high") {
      return "با اهمیت";
    } else if (todoNav === "med") {
      return "اهمیت متوسط";
    } else if (todoNav === "low") {
      return "کم اهمیت";
    } else {
      return "All";
    }
  }


  return (
    <div className="flex mt-10 gap-10">
      {/* we change the date for todo list show */}
      <TodoNav
        setAll={setAll}
        TodoListTest={TodoListTest}
        setImportance={setImportance}
        setCompleted={setCompleted}
        setDeleted={setDeleted}
        setDeadend={setDeadend}
        teamTag={teamTag}
        highTag={highTag}
        medTag={medTag}
        lowTag={lowTag}
      />

      <div className="w-full flex-1 ">
        <div className="flex items-center text-3xl font-bold gap-3">
          <InfoCircle size={30} variant="Bold" />
          <p>لیست تودو:</p>
          <p>{showNavTitle()}</p>
        </div>
        <TodoList TodoListTest={todoList} />
      </div>
    </div>
  );
}

export default Maintodo;
