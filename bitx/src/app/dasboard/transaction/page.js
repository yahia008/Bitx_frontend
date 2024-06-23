'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';

const page = ({params}) => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);
  //const [error, setError] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const storeData = localStorage.getItem('user');
    if (!storeData) {
      router.push('/auth/login');
      return;
    }
    //console.log(storeData)
    const parseData = JSON.parse(storeData)
    const token = parseData.token
    //console.log(token)
     setUser(parseData)

     const fetchTransactions = async () => {
      try {
        const res = await fetch('https://bitx.onrender.com/transaction/novex', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
         
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
       // console.log('Transactions response:', data.user);
        setTransactions(data.user);
       
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
        
        // Fetch does not provide a direct way to access headers like Axios does in case of an error
      }
      
    };

      
      
    if (token) {
      fetchTransactions();
    }
    
    
  }, [router])

  const formatDateTime = (isoString) => {
   const date = new Date(isoString);
    const options = {
      //weekday: 'long',
    //  year: 'numeric',
    // month: 'long',
     // day: 'numeric',
     // hour: '2-digit',
     // minute: '2-digit',
      //second: '2-digit',
     //timeZoneName: 'short'
    };
    return date.toLocaleDateString('en-US', options) + ' ' + date.toLocaleTimeString('en-US', options);
  };


  if (!user) {
    return <div >fetching data</div>;
  }

  return (
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
     
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded overflow-auto'>
      <div className='border-b border-b-yellow-400 mb-3 flex justify-between items-center'>
      <h2 className='text-yellow-400 font-bold text-2xl mt-2 '>Bixt</h2>
     <Link href='/dasboard'><FaArrowLeft className='text-lg text-yellow-400 hover:white'/></Link> 
      </div>
      <h1 className='text-white text-center mb-3'>Transactions</h1> 
      <div className='text-white flex justify-between text-sm'>
              <p>amount</p>
              <p>type</p>
              <p>date</p>
        </div>

      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <Link href={`/dasboard/transaction/${transaction._id}`}>
          <div key={transaction._id} className='text-white mt-4 flex 
          justify-between sm:text-xm text-[10px]
          hover:bg-pink-200
          cursor-pointer
           bg-yellow-400
           rounded p-2 w-full'>
           
            <p>{transaction.amount}</p>
            <p>{transaction.type}</p>
            <p>{formatDateTime(transaction.date)}</p>
            {/* Add more transaction details as needed */}
          </div>
          </Link>
        ))
      ) : (
        <p className='mt-5 text-white'>No transactions found.</p>
      )}
      </div>
      </div>
  )
}

export default page
