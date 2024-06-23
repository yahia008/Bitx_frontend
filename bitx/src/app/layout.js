
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteChangeSpinner from "./components/routerswitch";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitx || Global",
  description: "Bitx global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}
      <RouteChangeSpinner/>
      <ToastContainer
       className="sm:mx-auto sm:w-1/2 lg:w-1/3"
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       />
      </body>
      
    </html>
  );
}
