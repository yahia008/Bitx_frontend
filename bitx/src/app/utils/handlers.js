
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const  onsubmit = async(values, {setSubmitting, resetForm}, router, isLogin) => {
  setSubmitting(true);
  
  try {
    const response = isLogin
      ? await axios.post('https://bitx.onrender.com/auth/login', values)
      : await axios.post('https://bitx.onrender.com/auth/signup', values);

    if (response.status === 200 || response.status === 201) {

        if(isLogin)
          {
            const userData = response.data;
            localStorage.setItem('user', JSON.stringify(userData));
          }
     
      toast.success('request success')
      //console.log('Submitted successfully');
     // console.log(response)
      isLogin ? router.push('/dasboard') : router.push('/auth/login');
    } else {
      console.log('Submission failed', response.message);
     // setFieldError('general', response.data.message);  // For displaying a general error message
    }
  } catch (error) {
    //console.log('An error ', error.response.data.error || error.message);
    toast.error(`${error.message}`)
   // setFieldError('general', error.response?.data?.message || error.message);  // For displaying a general error message
  } finally {
    setSubmitting(false);
    resetForm();
  }
};

  export const swap = (e, router, isLogin) => {
    e.preventDefault();
    isLogin?router.push('/auth/signup'):router.push('/auth/login')
    
  }
  export const getValidationSchema = (isLogin) => {
    return Yup.object().shape({
      name: !isLogin ? Yup.string()
          .min(5, 'Name is too short')
          .max(10, 'Name is too long')
          .required('Name is required') : Yup.string(),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(5, 'Password is too short')
        //.matches(passwordRules, { message: "Please create a stronger password" })
        .required('Password is required'),
      confirm: !isLogin ? Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required') : Yup.string(),
    });
  };
  // export const basicSchema = yup.object().shape({
  //   name: yup.string()
  //   .min(5, 'Name is too short')
  //   .max(10, 'Name is too long')
  //   .required('Name is required'),
  //   email: yup.string().email("Please enter a valid email").required("Required"),
  //   password: yup
  //     .string()
  //     .min(5)
  //     .matches(passwordRules, { message: "Please create a stronger password" })
  //     .required("Required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Passwords must match")
// });

export const basicSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required")
})

export const resetSchema = Yup.object().shape({
  password:Yup.string()
  .min(5)
  .matches(passwordRules, { message: "Please create a stronger password" })
  .required("Required"),
confirm: Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")

})

export const pinSchema = Yup.object().shape({
  token:Yup.number()
  .required('PIN is required'),
  
  password:Yup.string()
  .min(5)
  .matches(passwordRules, { message: "Please create a stronger password" })
  .required("Required"),
confirm: Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
})

export const setValidationSchema = (isType) => {
  return Yup.object().shape({
    
    email: Yup.string().email('Invalid email address').required('Email is required'),
    bank_name:Yup.string().required('bank name is required'),
    account_name: Yup.string().required('account name is required'),
    amount:Yup.number()
    .positive('Amount must be a positive number')
    .min(5000, 'Amount must be at least 5000')
    //.max(30000, 'Amount must be at most 30000')
    .required('Amount is required'),
    account_number:Yup.string()
    .matches(/^\d+$/, 'Account number must be a string of numbers')
    .length(10, 'Account number must be exactly 10 digits')
    .required('Account number is required'),
  phone_number:isType?Yup.string()
  .matches(/^\d+$/, 'phone number must be a string of numbers')
  .length(11, 'phone number must be exactly 11 digits')
  .required('Phone number is required'):Yup.string()
    
  });
};

export const forgot_password = async (values, router) => {
  try {
    const response = await axios.post('https://bitx.onrender.com/auth/forgotingpassword', values);
    if (response.status === 200 || response.status === 201) {
      toast.success('An email is sent')
      router.push('/auth/reset-pin');
    } else {
      console.log('Invalid pin');
    }
  } catch (error) {
    
    toast.error('invalid email', )
     // rethrow to be caught in onSubmit
  }
};



export const reset_token = async (values, router) => {
  try {
    const response = await axios.post('https://bitx.onrender.com/auth/resetpassword', values, {
      
        headers: {
          'Content-Type': 'application/json'
        }
    })
    //console.log(response);
    //console.log(values)
    if (response.status === 200 || response.status === 201) {
      toast.success('password reset successful')
      //console.log('Password reset successful:', response.data);
      router.push('/auth/login');
    } else {
      console.log('Invalid email');
    }
  } catch (error) {
    //console.error('Error sending reset password request', error);
    toast.error('error')
  }
};


export const  onsubmiting = async  (values, {setSubmitting, resetForm}, router, isType) => {
  setSubmitting(true);
  //console.log(values)
  try {
    const response = isType? await axios.post('https://bitx.onrender.com/transaction/bank_payment', values):await axios.post('https://bitx.onrender.com/transaction/withdrawal', values);
     //ssconsole.log(response)
      //console.log(values)

    if (response.status === 200 || response.status === 201) {
      
      toast.success('Proccess your transaction')
     //console.log('Submitted successfully');
      //console.log(response)
      isType?router.push('/dasboard/payment') : router.push('/dasboard/status');
    } else {
      console.log('Submission failed', response);
     // setFieldError('general', response.data.message);  // For displaying a general error message
    }
  } catch (error) {
    toast.error(`${error.message}`)
    console.log('An error ', error || error.message);
   // setFieldError('general', error.response?.data?.message || error.message);  // For displaying a general error message
  } finally {
    setSubmitting(false);
    resetForm();
  }
};


 