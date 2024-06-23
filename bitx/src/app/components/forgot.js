'use client';
import React from 'react'
import { basicSchema } from '../utils/handlers';
import { useFormik } from 'formik'
import Link from 'next/link';
import { forgot_password } from '../utils/handlers';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Forgot = () => {
  const router = useRouter()
    const onSubmit =  async (values, { setSubmitting, resetForm }) => {
        
       
      try {
        setSubmitting(true);
        await forgot_password(values, router);
      } catch (error) {
        console.log('An error', error.response?.data?.error || error.message);
      } finally {
        setSubmitting(false);
        resetForm();
      }
    };
    
      
      const {errors, handleBlur, handleChange, handleSubmit, touched, values, isSubmitting } = useFormik({
         initialValues: {
          
           email: ''
         },
    
         validationSchema:basicSchema,
         onSubmit:onSubmit
      })
    
  return (
    <div className='bg-black sm:h-screen sm:flex sm:justify-center block h-screen p-10'>
    <div className='sm:w-[500px]  bg-white shadow sm:mt-[100px] sm:h-96 h-[400px] rounded p-3'>
      <div className='mt-[30px]'>
      <h2 className='text-center font-bold text-xl mb-10 '>Forgot Password</h2>
      <form onSubmit={handleSubmit}>

      <input type='email'
      name='email'
      id='email'
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.email}
     className='w-full border border-blue-500 
     rounded p-2 mb-4 focus:outline-none'
      placeholder='Enter Email'/>
       {touched.email && errors.email ? (
          <p className='text-red-500 text-sm'>{errors.email}</p>
        ) : null}
      

    <div className='flex justify-center mt-4 font-bold text-xl'>
    
      <button type='submit' disabled={isSubmitting } 
      className='border border-blue-500 rounded p-2 
      focus:outline-none'>
        {isSubmitting ? <AiOutlineLoading3Quarters className="spinner" /> : 'Submit'}</button>
      
    
    </div>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Forgot
