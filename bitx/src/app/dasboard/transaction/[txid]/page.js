import React from 'react'
import { notFound } from 'next/navigation';
//import { fetctxid } from '@/app/utils/handlers';
import Txid from './txid';

async function fetctxid(txid) {
  console.log(`Fetching transaction with txid: ${txid}`);
  const res = await fetch(`https://bitx.onrender.com/transaction/gettx/${txid}`);
  console.log(res)
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}
const page = async ({params}) => {
  const data = await fetctxid(params.txid);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <Txid data={data}/>
    </div>
  )
}

export default page
