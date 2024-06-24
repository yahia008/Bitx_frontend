import Auth from '@/app/components/auth'


export async function generateStaticParams() {
  // Return an array of params for which the page should be statically generated
  return [
    { auth: 'signup' }, // You can add more static paths if needed
  ];
}

const page = () => {
    const Signup = 'signUp'
  return (
    <div>
     <Auth formType='signup'/>
    </div>
  )
}

export default page
