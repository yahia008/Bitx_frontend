import React from 'react'
import Form from './form'
import Link from 'next/link'

const Transaction = ({type}) => {
  
  const isType = type == 'deposit'
  return (
    <div  className='bg-black h-screen p-3 sm:flex sm:justify-center ' >
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded'>
      <div className='flex justify-between items-center'>
         <h2 className='text-yellow-400 font-bold text-2xl'>Bixt</h2>
         <Link href='/dasboard'>
         <h2 className='hover:text-yellow-400
          text-white font-bold text-xs sm:text-xl'>Dashboard</h2></Link>

       </div>

        
       <div className='mt-[25px] flex justify-center items-center text-white font-bold text-xl'>
            <h2>{isType?'Deposit': 'Withdraw'}</h2>
         </div>
        
         <Form isType={isType}/>

      </div>
    </div>
  )
}

export default Transaction
