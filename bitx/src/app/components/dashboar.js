"use client"

import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { FaHistory, FaInfoCircle, FaCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';



const Dashboard = () => {

  const data = [
    { id: 1, icon: <FaHistory />, title: 'Transaction History', route:'./dasboard/transaction' },
    { id: 2, icon: <FaCog />, title: 'Settings', route:'/auth/login', 
      handler:(router)=>{
        localStorage.removeItem('user')
        router.push('/auth/login')
       }  },
    { id: 3, icon: <FaInfoCircle />, title: 'About Us', route:'/dasboard/about' }
  ];
    const router = useRouter()

  const [user, setUser] = useState();

  useEffect(() => {
  const storedUser = localStorage.getItem('user');
  //console.log(storedUser)
  if (!storedUser) {
      router.push('/auth/login');
  } else {
    try {
      const parsedUser = JSON.parse(storedUser);
      const id = parsedUser.user._id

      const fetcdata = async()=>{
        try {
        const res = await fetch(`https://bitx.onrender.com/auth/getuser/${id}`)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data);
        setUser(data)
      }catch(error){
        console.error('Failed to fetch user data', error);
        router.push('/auth/login');
      }
      }
      fetcdata()
     

      
      //console.log(user)

  } catch (error) {
      console.error('Failed to parse user data from localStorage', error);
      localStorage.removeItem('user'); // Remove corrupted data
      router.push('/login');
  }
  }
}, [router]);

if (!user) {
  
  return <p>Loading...</p>;
}


const formattedBalance = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
}).format(user.user.balance);


  return (
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded'>
            <div className='flex justify-between items-center'>
                <h2 className='text-yellow-400 font-bold text-2xl'>Bixt</h2>
              <Link href='/auth/login'> <FiLogOut
               onClick={()=>{localStorage.removeItem('user');
                router.push('/login');}} className='text-yellow-400 
                text-2xl hover:text-white'/></Link> 
            </div>

            <div className=' bg-yellow-400 flex flex-col  items-center p-6
             rounded h-[150px] mt-4'>
                <div className='text-white font-bold mb-2 text-2xl'>{user.user.name}</div>
               
                <h2 className='text-white font-bold text-3xl'>
                  <span className=" font-bold text-white"></span>{formattedBalance}</h2>
                </div>
                <div className='flex justify-evenly items-center mt-[30px] w-full p-3'>
        <Link href='/dasboard/withdrawal'> <div className='flex flex-col items-center p-2 hover:bg-fuchsia-800 hover:rounded cursor-pointer'><RiMoneyDollarCircleLine className="text-yellow-400 text-4xl" /> 
         <p className='text-white text-xs'>withdraw</p>
         </div>         
         </Link>
         <Link href='/dasboard/deposit'> <div className= 'flex flex-col items-center p-2 hover:bg-fuchsia-800 hover:rounded cursor-pointer'><GiReceiveMoney className="text-yellow-400 text-4xl" />
      <p className='text-white text-xs'>Top up</p>
      </div>
      </Link>
        <div className='flex flex-col items-center  p-2 hover:bg-fuchsia-800 hover:rounded cursor-pointer'><IoMdHelpCircleOutline className="text-yellow-400 text-4xl" />
        <p className='text-white text-xs'>customer care</p>
        </div>
      
                  
                </div>
      <div className='mt-4 '>
      {data.map((item) => (
        item.handler ? (
          <button
            key={item.id}
            onClick={() => item.handler(router)}
            className='flex justify-between mb-3 text-sm w-full cursor-pointer items-center p-2 rounded hover:bg-fuchsia-800 text-white bg-yellow-400'
          >
            <p>{item.title}</p>
            {item.icon}
          </button>
        ) : (
          <Link href={item.route} key={item.id}>
            <div className='flex justify-between mb-3 text-sm cursor-pointer items-center p-2 rounded hover:bg-fuchsia-800 text-white bg-yellow-400'>
              <p>{item.title}</p>
              {item.icon}
            </div>
          </Link>
        )
      ))}
      
      </div>

      </div>
    </div>
  )
} 

export default Dashboard
