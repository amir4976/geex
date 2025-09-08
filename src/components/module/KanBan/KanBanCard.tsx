import React from "react";
import Tag from "../global/Tag";
import { timeSince } from "@/utils/PreviosTime";

type props ={
    title:string,
    createdAt:string,
    tag:string
}
function KanBanCard({ title, createdAt,tag}: props) {
  const colorMange = ()=>{
    switch (tag) {
      case "frontend":
        return "primery"
        break;
      case "backend":
        return "warning"
        break
      case "ui":
        return "sacsess"
        break
      case "righing":
        return "primery"
        break
      case "debug":
        return "" 
        default:
        break;
    }
  }
  return (
    <div className="w-full h-fit element rounded-2xl p-5 flex flex-col items-start ">
      <div className="">
        <Tag text={tag} status={`${colorMange()}`} />
      </div>
      <div className=" flex flex-col mt-5 ">
        <p className="text-xl font-bold">{title}</p>
        <p className=" text-gray-500">{timeSince(createdAt)}</p>
      </div>
    </div>
  );
}

export default KanBanCard;
