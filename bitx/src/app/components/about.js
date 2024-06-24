import React from 'react'
import Link from 'next/link';
const About = () => {
  return (
    <div className='bg-black h-screen p-4 sm:flex sm:justify-center'>
    <div className='sm:bg-gray-900 sm:w-[500px] p-3 sm:rounded text-white h-[500px] overflow-auto text-xs'>
      <h1 className='mb-4'>About Us</h1>
      <h2 className='text-sm font-bold mb-2'>Welcome to <span className='text-yellow-400'>Bitx</span> Global</h2>

      <div>
        <p className='mb-2'>
          In the ever-evolving and often overwhelming world of cryptocurrency, Bitx Global stands out as a beacon of clarity and opportunity.
          Our mission is simple yet profound: to abstract our users from the noise of the crypto market and deliver consistent, reliable profits.
        </p>

        <h2 className='text-sm font-bold mb-2'>
          Our Vision
        </h2>
        <p className='mb-2'>
          We envision a world where everyone, regardless of their level of expertise, can benefit from the immense opportunities presented by the cryptocurrency market. Our goal is to simplify the complexities and eliminate the chaos, allowing our users to enjoy the rewards without the hassle.
        </p>

        <h2 className='text-sm font-bold mb-2'>How We Do It</h2>
        <p className='mb-2'>
          Using advanced algorithms and expert analysis, we filter through market noise to identify the most lucrative opportunities, ensuring our users investments work smarter, not harder.
        </p>

        <h2 className='text-sm font-bold mb-2'>Join Us</h2>
        <p className='mb-2'>
          Experience the future of crypto investing with Bitx Global. Let us guide you to success in the world of digital assets.
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <Link href='/dasboard'>
          <button className='bg-blue-400 text-white font-bold text-sm p-2 hover:bg-yellow-400 rounded'>
            Back
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default About