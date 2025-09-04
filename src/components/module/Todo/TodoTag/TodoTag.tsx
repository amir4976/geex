import { Tag } from "iconsax-reactjs";
import React from "react";

type Props = {
  status: string;
};
function TodoTag({ status }: Props) {
  return status == "team" ? (
    <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#AB54DB26] text-[#AB54DB]">
      <Tag />
      <p>تیم</p>
    </div>
  ) : status == "high" ? (
    <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#FFBB5426] text-[#FFBB54]">
      <Tag />
      <p>زیاد</p>
    </div>
  ) : status == "med" ? (
    <>
      <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#FFBB5426] text-[#00A389]">
        <Tag />
        <p>متوسط</p>
      </div>
    </>
  ) : (
    <>
      <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#2ED6A326] text-[#58CDFF]">
        <Tag />
        <p>کم</p>
      </div>
    </>
  );
}

export default TodoTag;
