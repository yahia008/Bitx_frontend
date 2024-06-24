import Reset from "@/app/components/rese"


export async function generateStaticParams() {
  // Return an array of params for which the page should be statically generated
  return [
    { auth: 'reset' }, // You can add more static paths if needed
  ];
}

const page = () => {
   
  return (
    <Reset/>
     
  )
}

export default page
