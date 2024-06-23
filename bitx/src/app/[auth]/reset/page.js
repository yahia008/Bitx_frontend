'use client'
import React from 'react'
import { useFormik } from 'formik'
import { resetSchema } from '@/app/utils/handlers'

const page = () => {
    const onSubmit = ()=>{
      console.log('reset')
    }

   const {errors, handleBlur, handleChange, handleSubmit, touched, values, isSubmitting } = useFormik({
    initialValues: {
      password: '',
      confirm: '',
    },
    validationSchema:resetSchema,
    onSubmit:onSubmit
  })
  return (
    
      <div className='bg-black sm:h-screen sm:flex sm:justify-center block h-screen p-10'>
      <div className='sm:w-[500px]  bg-white shadow sm:mt-[100px] sm:h-96 h-[400px] rounded p-3'>
        <div className='mt-[30px]'>
        <h2 className='text-center font-bold text-xl mb-10 '>Reset Password</h2>
        <form onSubmit={handleSubmit}>

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
          <button type='submit' disabled={isSubmitting } 
      className='border border-blue-500 rounded p-2 
      focus:outline-none'>submit</button>
          </div>
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default page
