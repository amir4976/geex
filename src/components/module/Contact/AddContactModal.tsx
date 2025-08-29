import { CloseCircle } from "iconsax-reactjs";
import React from "react";

function AddContactModal({
  setisShowModal,
}: {
  setisShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full h-screen fixed bg-black/50 top-0 left-0 z-50 flex justify-center ">
      <div className="element w-4/4 h-fit mt-20  md:w-2/4 lg:w-1/4 sm:w-2/4 xl:2/4  p-10 rounded-xl flex flex-col gap-2">
        <div className="w-full">
          <div className="flex justify-between mb-5" >
            <p>ایجاد مخاطب</p>
           <div className=" cursor-pointer" onClick={()=>setisShowModal(false)}>
             <CloseCircle />
           </div>

          </div>
     
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3 p-4 focus:outline-none"
            type="text"
            placeholder="نام"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  p-4 focus:outline-none"
            type="text"
            placeholder="نقش"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  p-4 focus:outline-none"
            type="text"
            placeholder="شماره"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3  p-4 focus:outline-none"
            type="text"
            placeholder="ادرس"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full h-10 border border-gray-500/20 rounded-xl mt-3 p-4 focus:outline-none "
            type="text"
            placeholder="جیمیل"
          />
        </div>
        <div className="">
          {" "}
          <button className="p-4 py-3 bg-blue-500/20 hover:bg-blue-500 hover:text-white rounded-2xl  mt-2">
            ایجاد مخاطب
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
