'use client';
import { useRouter } from 'next/navigation'; 
import { useSearchParams } from 'next/navigation';
import { onsubmit, swap, getValidationSchema } from '../utils/handlers';
import { useFormik } from 'formik';
import Link from 'next/link';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';


const Auth = ({formType}) => {

  const isLogin = formType === 'login';
  const router = useRouter()

  const {errors, handleBlur, handleChange, handleSubmit, touched, values, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
    password: '',
      confirm: '',
    },

    validationSchema:getValidationSchema(isLogin),
    onSubmit:(values, formikHelpers)=>onsubmit(values, formikHelpers, router, isLogin )
  })


  return (

      <div className='bg-black sm:h-screen sm:flex sm:justify-center block h-screen p-10'>
      <div className='sm:w-[500px]  bg-white shadow sm:mt-[100px]  sm:h-96 h-[400px] rounded p-5'> 
      
      <div className='mt-5 p-4'>
      <h2 className='text-center mb-[5px] text-lg font-bold'>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}  autoComplete="off">
        {!isLogin && (
  <>
    <input
      type='text'
      id='name'
      name='name'
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='enter name'
      className='w-[100%] mb-2 p-1 rounded focus:outline-none border border-blue-500 text-sm'
    />
    {touched.name && errors.name ? (
      <p className='text-red-500 text-sm'>{errors.name}</p>
    ) : null}
  </>
)}

  
            <input type='email'
             id='email'
            value={values.email}
            onChange={handleChange} 
            onBlur={handleBlur}
             placeholder='enter email'
             className='w-[100%]
            mb-2 p-1 focus:outline-none
             border
             rounded
            border-blue-500
              text-sm'/>
           {touched.email && errors.email ? (
          <p className='text-red-500 text-sm'>{errors.email}</p>
        ) : null}
      

        <input type='password'
        placeholder='enter password'
         id='password'
         value={values.password}
         onChange={handleChange} 
         onBlur={handleBlur}
        className='w-[100%]
            mb-2 p-1 focus:outline-none border
            rounded
         border-blue-500 text-sm'/>
          {touched.password && errors.password ? (
          <p className='text-red-500 text-sm'>{errors.password}</p>
        ) : null}

{!isLogin && (
  <>
    <input
      type='password'
      id='confirm'
      value={values.confirm}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='Confirm password'
      className='w-[100%] mb-2 p-1 rounded focus:outline-none border border-blue-500 text-sm'
    />
    {touched.confirm && errors.confirm && (
      <p className='text-red-500 text-sm'>{errors.confirm}</p>
    )}
  </>
)}

            <div className='flex flex-col items-center  p-1'>

              <button type='submit'
              className='bg-blue-500
             text-white text-sm
             hover:bg-yellow-400
               rounded cursor-pointer
                focus:outline-none
               focus:bg-blue-700 p-2'
               disabled={isSubmitting}>
              {isSubmitting ? <AiOutlineLoading3Quarters className="spinner" /> : 'Submit'}


              {/*isLogin ? 'Login' : 'Sign Up'*/}
               </button>  
             
              <p onClick={(e) => swap(e, router, isLogin)} className='text-sm'>{isLogin ? 'Create an account' : 'Already have an account?'}{' '}
               <span className='text-blue-500 cursor-pointer'>
               {isLogin ? 'SignUp' : 'Login'}
              </span></p>
            </div>
            </form>

            <p className='text-center text-sm
             text-blue-900 cursor-pointer'><Link href='forgot-password'>{isLogin ? 'forgot password' : ''}</Link></p>
      </div>
     

    </div>
    </div>
  )
}

export default Auth
