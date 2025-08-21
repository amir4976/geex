import Image from "next/image";
import React from "react";


function MassageCard(){
  return(
            <div className="flex py-5 gap-3">
          <div className="w-1/6">
            <Image src={"/assets/04.png"} width={50} height={50} alt="10" />
          </div>

          <div className="flex flex-col w-5/6">
            <div className="flex justify-between items-center">
              <p> احمد احمد </p>
              <p className="text-xs text-amber-600"> 2 ساعت قبل</p>
            </div>
            <div className="flex text-xs w-full ">
              لورم اپیسون متن ساختگی با تولید نامفهوم برای صنعت چاپ و نمایش....
              <div className="p-1 bg-blue-500 rounded-full text-white ">10</div>
            </div>
          </div>
        </div>
  )
}

function Massage() {
  return (
    <div>
      <div className="w-full py-4  bg-gray-500/20 text-center rounded-2xl ">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <p> پیام ها </p>
          <div className="badge text-sm bg-amber-500 p-1  text-white rounded-full">
            10
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <MassageCard/>
        <MassageCard/>
        <MassageCard/>
      </div>
    </div>
  );
}

export default Massage;

