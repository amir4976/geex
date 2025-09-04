"use client";
import React, { useState } from "react";
import TodoList from "@/components/template/TodoList/TodoList";
import TodoNav from "@/components/template/TodoList/TodoNav";
import { TodoListTest } from "@/utils/testData";
import { todosType } from "@/utils/types";

function Maintodo() {
  const [todoList, setTodoList] = useState<todosType[]>(TodoListTest);
  //list actions 
  const setAll = () => {
    setTodoList(TodoListTest);
  };
  const setImportance = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("high")));
  };
  const setCompleted = () => {
    setTodoList(TodoListTest.filter((item) => item.completed));
  };
  const setDeleted = () => {};
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
    console.log(filtered)
    setTodoList(filtered);
  };

  const teamTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("team")));
  };
  const highTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("high")));
  };
  const medTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("med")));
  };
  const lowTag = () => {
    setTodoList(TodoListTest.filter((item) => item.tags.includes("low")));
  };

  return (
    <div className="flex mt-10 gap-10">
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
        <TodoList TodoListTest={todoList} />
      </div>
    </div>
  );
}

export default Maintodo;
