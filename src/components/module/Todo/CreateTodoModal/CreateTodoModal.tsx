
import { CloseCircle } from "iconsax-reactjs";
import React from "react";
// import Checkbox from "../TodoItem/Checkbox";

type props = {
  handleCloseModal:()=>void;
};

function CreateTodoModal({handleCloseModal}:props) {
  return (
    <div className="absolute left-0 top-0 w-full h-screen bg-black/50 flex justify-center items-center ">
      <div className="w-[600px] h-fit element p-8 rounded-2xl">
        <div className="flex justify-between">
          <p>افزودن وظیفه جدید</p>
          <div className="" onClick={() => handleCloseModal()}>
            <CloseCircle />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <textarea
            id="id"
            name="name"
            placeholder="عنوان تودو"
            className="w-full p-4 bg-transparent border border-gray-500/50 rounded-xl outline-none resize-none min-h-[150px]"
          />
        </div>
        {/* change this when databese available */}
        <div className=" mt-10">
          <p>تگ ها</p>
          <div className="flex gap-2 mt-4 ">
            {/* <Checkbox /> */}
            <input type="checkbox" />
            <p>تیم</p>
          </div>
          <div className="flex gap-2 mt-4 ">
            {/* <Checkbox /> */}
            <input type="checkbox" />
            <p>کم</p>
          </div>
          <div className="flex gap-2 mt-4 ">
            {/* <Checkbox /> */}
            <input type="checkbox" />
            <p>متوسط</p>
          </div>
          <div className="flex gap-2 mt-4 ">
            {/* <Checkbox /> */}
            <input type="checkbox" />
            <p>زیاد</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodoModal;
