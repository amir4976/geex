import Blance from "@/components/module/Bills/blance/Blance";
import StatusCard from "@/components/module/Bills/StatusCard/StatusCard";
import React from "react";

function StatusCards() {
  return (
    <div className={"w-full grid grid-cols-2 gap-10 "}>
      <div className="grid grid-cols-2 gap-10">
        <StatusCard number={45} payStatuse={"factorSended"} />
        <StatusCard number={45} payStatuse={"notPayd"} />
        <StatusCard number={45} payStatuse={"payd"} />
        <StatusCard number={45} payStatuse={"pending"} />
      </div>

      <Blance price={10500000} lastuse={'Mon Aug 11 2025 23:04:13 GMT+0330 (Iran Standard Time)'}/>
    </div>
  );
}

export default StatusCards;
