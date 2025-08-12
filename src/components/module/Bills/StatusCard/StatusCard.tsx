"use client";
import { CardSend, MaximizeCircle, TickSquare, Timer } from "iconsax-reactjs";
import React, { useEffect, useState } from "react";

interface Props {
  number: number;
  payStatuse: string;
}
function StatusCard({ number, payStatuse }: Props) {
  const [Color, setColor] = useState<string>("#ffff");
  const [desc, setDesc] = useState<string>();
  const [icon, setIcon] = useState<React.ReactElement>();
  useEffect(() => {
    if (payStatuse === "pending") {
      setColor("#FFBB54");
      setDesc("فاکتور در انتظار");
      setIcon(<Timer size="32" color="#000" />);
    } else if (payStatuse === "payd") {
      setColor("#00A389");
      setDesc("فاکتور پرداخت شده");
      setIcon(<TickSquare size="32" color="#000" />);
    } else if (payStatuse === "notPayd") {
      setColor("#FF5B5B");
      setDesc("فاکتور پرداخت نشده");
      setIcon(<MaximizeCircle color="#000" size="24" />);
    } else if (payStatuse === "factorSended") {
      setColor("#AB54DB");
      setDesc("فاکتور ارسال شد");
      setIcon(<CardSend size="32" color="#000" />);
    }
  }, [payStatuse]);

  return (
    <div
      className={` w-full h-fit p-8 col-span-1 rounded-3xl text-white`}
      style={{ backgroundColor: Color }}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-4xl"> {number}</p>
          <p className="text-xs">{desc}</p>
        </div>
        <div className="p-2 bg-white rounded-2xl">{icon}</div>
      </div>
    </div>
  );
}

export default StatusCard;
