import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
  return (
    
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded '>
     <div className='flex flex-col text-white items-center font bold mt-[40px] '>
     <h2  className='mt-2 text-sm'>Your balance will be updated one your transaction is verified</h2>
        <h2 className='m-2'> thank you</h2>
        <FaCheckCircle className="text-green-500 text-5xl" />
        <Link href='/dasboard'>
            <button
             className='bg-yellow-400 
              p-2 text-white rounded hover:bg-fuchsia-800
               font-bold mt-4
               '>Dashboard</button>
            </Link>
     </div>
      </div>
      </div>
       
    
  )
}

export default page