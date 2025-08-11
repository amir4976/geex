import Image from 'next/image'
import React from 'react'

function Transfers() {
  return (
    <div>
      <div className="mt-10">
        <p className="text-2xl">نقل و انتقالات اخیر</p>
        <p className="text-sm text-gray-500">سخنان بزرگتر و زمان درد</p>
        <div className="">
          <div className="flex gap-3 justify-between w-full mt-5 ">
            <Image
              className='rounded-2xl border-blue-400 border-2 cursor-pointer'
              src={"/assets/094ab666741a40ce629876291e35c8a8.jpg"}
              width={80}
              height={80}
              alt="user Transfers"
            />

            <Image
              className='rounded-2xl border-blue-400 border-2 cursor-pointer'
              src={"/assets/b2d9e74cfd6f82e3f7f8e0d5b81d456b.jpg"}
              width={80}
              height={80}
              alt="user Transfers"
            />
            <Image
              className='rounded-2xl border-blue-400 border-2 cursor-pointer'
              src={"/assets/b2d9e74cfd6f82e3f7f8e0d5b81d456b.jpg"}
              width={80}
              height={80}
              alt="user Transfers"
            />
            <div className="w-20 rounded-2xl flex justify-center items-center bg-gray-700 text-white text-2xl cursor-pointer">...</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfers
