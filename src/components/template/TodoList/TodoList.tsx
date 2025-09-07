"use client"
import { InfoCircle } from "iconsax-reactjs";
import React from "react";
import TodoItem from "@/components/module/Todo/TodoItem/TodoItem";
import  Pagination  from "@/components/module/global/Pagination";
import { todosType } from "@/utils/types";


type props= {
  TodoListTest:todosType[]
}
function TodoList({ TodoListTest }:props) {
  const [page, setPage] = React.useState(1);
  const pageSize = 5;
  console.log(TodoListTest)
  const paginatedData = TodoListTest.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="w-full">

      <div className="flex flex-col gap-5 mt-5">
        {paginatedData.map((item, index) => {
          return <TodoItem key={index} TodoItem={item} />;
        })}

        <Pagination
          data={TodoListTest}
          page={page}
          pageSize={pageSize}
          handlePageChange={setPage}
        />
      </div>
    </div>
  );
}

export default TodoList;
