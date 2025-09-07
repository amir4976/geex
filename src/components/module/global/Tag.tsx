import React from "react";

type Props = {
  status: string;
  text:string;
};
function Tag({ status, text }: Props) {
  return status == "primery" ? (
    <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#AB54DB26] text-[#AB54DB]">
      <p>{text}</p>
    </div>
  ) : status == "warning" ? (
    <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#FFBB5426] text-[#FFBB54]">
      <p>{text}</p>
    </div>
  ) : status == "success" ? (
    <>
      <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#FFBB5426] text-[#00A389]">
        <p>{text}</p>
      </div>
    </>
  ) : (
    <>
      <div className="py-3 px-5 flex gap-3  rounded-2xl bg-[#2ED6A326] text-[#58CDFF]">
        <p>{text}</p>
      </div>
    </>
  );
}

export default Tag;
