import React from "react";

function AddContactModal() {
  return (
    <div className="w-full h-screen fixed bg-black/50 top-0 left-0 z-50 flex justify-center items-center">
      <div className="element w-4/4 md:w-2/4 lg:w-1/4 sm:w-2/4 xl:2/4  p-10 rounded-3xl flex flex-col gap-2">
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3 px-2 "
            type="text"
            placeholder="نام"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  px-2"
            type="text"
            placeholder="نقش"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  px-2"
            type="text"
            placeholder="شماره"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  px-2"
            type="text"
            placeholder="ادرس"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3 px-2 "
            type="text"
            placeholder="جیمیل"
          />
        </div>
        <button className="w-full  bg-blue-400 rounded-2xl p-2 mt-2">
          {" "}
          add{" "}
        </button>
      </div>
    </div>
  );
}

export default AddContactModal;
