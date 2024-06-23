'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';

const Txid = ({data}) => {

    useEffect(() => {
        console.log('Component mounted or post data updated', data.Transaction);
      }, [data]);
        const txData = data.Transaction

        const displayText = txData[0].type === 'deposit' ? 'phone number' : 'account number';
        const number = displayText === 'deposit'?txData[0].phone_number:txData[0].account_number

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
     const options = {
       //weekday: 'long',
     //  year: 'numeric',
     // month: 'long',
      // day: 'numeric',
      // hour: '2-digit',
       //minute: '2-digit',
      // second: '2-digit',
      //timeZoneName: 'short'
     };
     return date.toLocaleDateString('en-US', options) + ' ' + date.toLocaleTimeString('en-US', options);
   };
 
  
  return (
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded'>
      <h2 className='text-yellow-400 font-bold text-2xl'>Bixt</h2>
       <div className='border-b border-b-yellow-400 p-2'>
       <h2 className='text-white mt-5 text-center 
        font-bold'>Transaction Details</h2>
       </div>
       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>Bank name</p>
        <p>{txData[0].bank_name}</p>
       </div>
       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>amount</p>
        <p>₦:{txData[0].amount}</p>
       </div>
       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>type</p>
        <p>{txData[0].type}</p>
       </div>
       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>status</p>
        <p>{txData[0].status}</p>
       </div>

       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>Date</p>
        <p>{formatDateTime(txData[0].date)}</p>
       </div>
       <div className='mt-4 flex justify-between text-white border-b
         border-b-yellow-400 text-xs p-1'>
        <p>{displayText}</p>
        <p>{number}</p>
       </div>
      <Link href='/dasboard/transaction'>
      <div className='text-white 
       flex justify-center
        mt-6 bg-yellow-400 rounded '>
        <p>Back</p>
       </div>
       </Link> 
      </div>
      </div>
  )
}

export default Txid