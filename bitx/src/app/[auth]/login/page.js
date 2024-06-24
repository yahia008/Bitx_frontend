import Auth from '@/app/components/auth'

export async function generateStaticParams() {
  // Return an array of params for which the page should be statically generated
  return [
    { auth: 'login' }, // You can add more static paths if needed
  ];
}

const page = () => {

  return (
    <div>
        <Auth formType='login'/>
    </div>
    
  )
}

export default page
