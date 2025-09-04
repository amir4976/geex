import CreateTodoModal from "@/components/module/Todo/CreateTodoModal/CreateTodoModal";
import { todosType } from "@/utils/types";
import {
  InfoCircle,
  Menu,
  Tag,
  TickCircle,
  Timer,
  Trash,
} from "iconsax-reactjs";
import React from "react";


type props = {
  TodoListTest: todosType[];
  setImportance: () => void;
  setCompleted: () => void;
  setDeleted: () => void;
  setDeadend: () => void;
  teamTag: () => void;
  highTag: () => void;
  medTag: () => void;
  lowTag: () => void;
  setAll: () => void;
};


// import action functions for todo list
function TodoNav({
  setAll,
  setImportance,
  setCompleted,
  setDeleted,
  setDeadend,
  teamTag,
  highTag,
  medTag,
  lowTag,
}: props) {
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal =()=>{
    setShowModal(false);
  }

  return (
    <div className="w-[350px] element rounded-3xl min-h-[770px] max-h-[770px] border-gray-500/20 border py-4 px-5 max-lg:hidden">

      {/* add a new todo also showing modal */}
      <button
        className="w-full h-14 rounded-2xl bg-purple-500 text-white cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        اضافه کردن تودو +
      </button>

      <ul className="w-full flex flex-col gap-8 my-10 px-6 [&>*]:flex [&>*]:gap-3 [&>*]:opacity-60 [&>*]:hover:opacity-100 [&>*]:hover:text-purple-500 [&>*]:cursor-pointer">
        <li onClick={setAll}>
          <Menu />
          <p>تمام تودو ها</p>
        </li>
        <li onClick={setImportance}>
          <InfoCircle />
          <div>مهم</div>
        </li>
        <li onClick={setCompleted}>
          <TickCircle />
          <div>تکمیل شده</div>
        </li>
        <li onClick={setDeleted}>
          <Trash />
          <div>حذف شده ها</div>
        </li>
        <li onClick={setDeadend}>
          <Timer />
          <div>نزدیک به موعود</div>
        </li>
      </ul>

      <p>تگ ها</p>

      <ul className="w-full flex flex-col gap-8 mt-10 px-6 [&>*]:flex [&>*]:gap-3 [&>*]:opacity-60 [&>*]:hover:opacity-100 [&>*]:hover:text-purple-500 [&>*]:cursor-pointer">
        <li onClick={teamTag}>
          <Tag />
          <div>تیم</div>
        </li>
        <li onClick={lowTag}>
          <Tag />
          <div>کم</div>
        </li>
        <li onClick={medTag}>
          <Tag />
          <div>متوسط</div>
        </li>
        <li onClick={highTag}>
          <Tag />
          <div>بالا</div>
        </li>
      </ul>
      {/* i put modal here for semplacity  */}
      {showModal ? <CreateTodoModal  handleCloseModal={handleCloseModal} /> : null}
    </div>
  );
}

export default TodoNav;
