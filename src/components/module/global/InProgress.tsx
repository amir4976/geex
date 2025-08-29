import Image from 'next/image'
import React from 'react'

function InProgress() {
  return (
    <div className='w-full bg-white p-10 rounded-3xl element flex justify-center items-center flex-col gap-2'>
      <Image src='/assets/maintanence.svg' alt='progress' width={400} height={400} />
      <p className='text-3xl font-bold text-center mt-5'>سایت درحال تعمیر</p>
      <p>ما باید به زودی برگردیم از شکیبایی شما متشکرم.</p>
    </div>
  )
}

export default InProgress
