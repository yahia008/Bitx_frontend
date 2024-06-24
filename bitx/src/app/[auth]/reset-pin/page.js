
import Resetpin from "@/app/components/reset_pin"

export async function generateStaticParams() {
  // Return an array of params for which the page should be statically generated
  return [
    { auth: 'reset-pin' }, // You can add more static paths if needed
  ];
}

const page = () => {

  return (
      <Resetpin/>
  )
}

export default page