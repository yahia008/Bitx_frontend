'use client'
import React from 'react'
import Link from 'next/link';
import { toast } from 'react-toastify';

const Status = () => {
  return (
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded'>

        <div className='flex flex-col justify-center text-white items-center mt-[20px] p-1 text-base'>

              <h2 className='mb-4 text-white font-bold text-sm sm:text-base'>Complete Your Transaction by Bank Transfer</h2>
              <h2 className='text-white mb-2 font-bold'>Account Number</h2>
              <p className='mt-2'>6102634625</p>
              <h2 className='text-white mt-2 font-bold'>Bank Name</h2>
              <p className='mt-2'>opay</p>

              <h2 className='text-white mt-2 font-bold'>Account Name</h2>
              <p className='mt-2'>tijjani yahya</p>
         

            <Link href='/dasboard/status'>
            <button
            onClick={()=>toast.success('your transaction will be verified')}
             className='bg-yellow-400 
              p-2 text-white rounded hover:bg-fuchsia-800
               font-bold mt-4
               '>Confirm</button>
            </Link>
              
        </div>
    
        </div>
        </div>
  )
}

export default Status
