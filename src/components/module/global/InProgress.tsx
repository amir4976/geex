import Image from 'next/image'
import React from 'react'

function InProgress() {
  return (
    <div className='w-full bg-white p-10 rounded-3xl element flex justify-center items-center flex-col gap-2'>
      <Image src='/assets/maintanence.svg' alt='progress' width={400} height={400} />
      <h3 className='text-3xl font-bold text-center mt-5'>In Progress</h3>
    </div>
  )
}

export default InProgress
