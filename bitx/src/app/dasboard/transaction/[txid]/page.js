
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


export async function generateStaticParams() {
  const storeData = localStorage.getItem('user');
  const parseData = JSON.parse(storeData)
  const token = parseData.token
  const res = await fetch('https://bitx.onrender.com/transaction/novex',  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }});
  const data = await res.json();
  const transactionIds = data.user.map(transaction => transaction._id);

  return transactionIds.map((txid) => ({
    params: { txid },
  }));
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
