"use client"
import StateCard from "@/components/module/FileManager/StateCard";
import React from "react";

function StateCards() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-4 md:grid-cols-2 rounded-3xl   md:gap-8 mt-10">
        <StateCard used={40} total={100}/>
        <StateCard used={30} total={100}/>
        <StateCard used={10} total={100}/>
        <StateCard used={80} total={100}/>
      </div>
    </div>
  );
}

export default StateCards;
