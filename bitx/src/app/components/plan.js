import Link from 'next/link'
import React from 'react'

const Plan = () => {

const data = [
    {id:1, plan:'Basic Bot', price:'5000', duration:'60days'},
    {id:2, plan:'standard Bot', price:'10000', duration:'90days'},
    {id:3, plan: 'premium Bot', price:'20000', duration:'120days'}


]

  return (
    <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded mt-5'>
        <div className='flex justify-center items-center text-white font-bold text-base sm:text-lg'>
            <h2>Select Bot</h2>
        </div>

        <div className='border border-yellow-400 mt-5 h-[90%] overflow-auto p-3'>
         <div >
            {
                data.map((item) => {
                    return (
                        <Link href='/dasboard/deposit' key={item.id}>
                            <div className='flex justify-between items-center text-sm font-bold rounded p-2 mb-4 hover:bg-indigo-950 bg-yellow-400 text-white'>
                                <p>{item.plan}</p>
                                <p>&#8358;{item.price}</p>
                                <p>{item.duration}</p>

                            </div>
                            </Link>
                    )
                })
            }
           
            </div>   
         <div className='flex justify-center items-center  text-white  '>
         <Link href='/dasboard'> <h2 className='bg-yellow-400 p-3 hover:bg-violet-950 rounded'>Back</h2></Link></div>
        </div>

        </div>

        </div>
  )
}

export default Plan
