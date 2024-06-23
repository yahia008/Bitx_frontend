'use client'
import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import { setValidationSchema } from '../utils/handlers'
import { useRouter } from 'next/navigation'
import { onsubmiting } from '../utils/handlers'

const Form = ({isType}) => {
  
const onsubmit = (values) => {
  console.log(values)
}
  const router = useRouter()
  
  const {errors, handleBlur, handleChange, handleSubmit, touched, values, isSubmitting } = useFormik({
    initialValues: {
    email: '',
    bank_name: '',
    account_name: '',
    amount:'',
    account_number:'',
    phone_number:''
    },

    validationSchema:setValidationSchema(isType),
    onSubmit:(values, formikHelpers)=>onsubmiting(values, formikHelpers, router, isType )
  
  })
  

  return (
    <div className='mt-[15px]'>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id='email'
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
             {touched.email && errors.email ? (
      <p className='text-red-500 text-sm'>{errors.email}</p>
    ) : null}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id='bank_name'
              value={values.bank_name}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Bank name"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
             {touched.bank_name && errors.bank_name ? (
      <p className='text-red-500 text-sm'>{errors.bank_name}</p>
    ) : null}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id='account_name'
              value={values.account_name}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Account name"
              className="w-full p-2 border-b-2
               border-yellow-500 
               focus:outline-none text-sm"
            />
             {touched.account_name && errors.account_name ? (
      <p className='text-red-500 text-sm'>{errors.account_name}</p>
    ) : null}
          </div>
          <div className="mb-4">
            <input
              type="number"
              id='amount'
              value={values.amount}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
             {touched.amount && errors.amount ? (
      <p className='text-red-500 text-sm'>{errors.amount}</p>
    ) : null}
          </div>
         
          
             <div className="mb-4">
            <input
              type="text"
              id='account_number'
              value={values.account_number}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="account number"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
            {touched.account_number && errors.account_number && (
      <p className='text-red-500 text-sm'>{errors.account_number}</p>
    )}
    </div>
            
          {isType && ( <div className="mb-4">
            <input
            type="text"
            id='phone_number'
            value={values.phone_number}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="phone number"
            className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
          />
          {touched.phone_number && errors.phone_number && (
      <p className='text-red-500 text-sm'>{errors.phone_number}</p>
    )}
          </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white
              font-bold py-2 px-4 rounded focus:outline-none
               focus:bg-yellow-600"
            >
              Submit
            </button>
            
           
          </div>
        </form>
    </div>
  )
}

export default Form
