//import Fields from '@/app/components/fields'
import Forgot from '@/app/components/forgot'


export async function generateStaticParams() {
  // Return an array of params for which the page should be statically generated
  return [
    { auth: 'forgot-password' }, // You can add more static paths if needed
  ];
}

const page = () => {
 
  
  return (
    
   <div>
      <Forgot/>
   </div>
  )
}

export default page
