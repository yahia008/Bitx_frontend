import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
        <div className='bg-black h-screen p-3 sm:flex sm:justify-center '>
      <div className='sm:bg-gray-900 sm:w-[500px] p-6 sm:rounded flex justify-center '>
        <div className="text-white mt-[100px] p-3">
          <h1 className="text-xl sm:text-[30px] font-bold mb-5">Welcome To</h1>
          <h2 className=" text-xl sm:text-[30px] font-bold mb-5"><span className="text-yellow-500">Bitx</span> Global</h2>
          <button className="sm:ml-[50px] bg-yellow-400 p-2 font-bold sm:text-xl rounded hover:bg-fuchsia-800">
            <Link href='/auth/login'> Login</Link> </button>
        </div>
      </div>

      </div>
  );
}
