'use client'
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { pinSchema } from '../utils/handlers';
import { reset_token } from '../utils/handlers';


const Resetpin = () => {

    
  const router = useRouter()
  const onSubmit =  async (values, { setSubmitting, resetForm }) => {
        
         try {
      setSubmitting(true);
      await reset_token(values, router);
    } catch (error) {
      console.log('An error', error.response?.data?.error || error.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
 const {errors, handleBlur, handleChange, handleSubmit, touched, values, isSubmitting } = useFormik({
  initialValues: {
    token:'',
    password:'',
    confirm:'',

  },
  validationSchema:pinSchema,
  onSubmit:onSubmit
})

  return (
    
   
    <div className='bg-black sm:h-screen sm:flex sm:justify-center block h-screen p-10'>
    <div className='sm:w-[500px]  bg-white shadow sm:mt-[100px] sm:h-96 h-[400px] rounded p-3'>
      <div className='mt-[30px]'>
      <h2 className='text-center font-bold text-xl mb-10 '>Reset Pin</h2>
      <form onSubmit={handleSubmit}>
        <input type='pin'
        id='token'
         value={values.token}
         onBlur={handleBlur}
         onChange={handleChange}
         className='w-full border
          border-blue-500
           rounded p-2 mb-4
            focus:outline-none'
             placeholder='Enter Reset Pin'/>
   {touched.token && errors.token ? (
      <p className='text-red-500 text-sm'>{errors.token}</p>
    ) : null}
    <input type='password' id='password'
           value={values.password}
           onBlur={handleBlur}
           onChange={handleChange}
            className='w-full border
             border-blue-500 rounded 
             p-2 mb-4 focus:outline-none'
              placeholder='New Password'/>
           {touched.password && errors.password ? (
      <p className='text-red-500 text-sm'>{errors.password}</p>
    ) : null}

          <input type='password'
          id='confirm'
          value={values.confirm}
           onBlur={handleBlur}
           onChange={handleChange}
           className='w-full border
            border-blue-500 
            rounded focus:outline-none
             p-2' placeholder='confirm Password'/>
             {touched.confirm && errors.confirm ? (
      <p className='text-red-500 text-sm'>{errors.confirm}</p>
    ) : null}
        <div className='flex justify-center mt-4 font-bold text-xl'>
       <button type='submit'  className='border
        border-blue-500 rounded p-2 
        focus:outline-none'>
          {isSubmitting ? <AiOutlineLoading3Quarters className="spinner" /> : 'Submit'}
        </button>
        </div>
        
      </form>
      </div>
    </div>
  </div>
  )
}

export default Resetpin