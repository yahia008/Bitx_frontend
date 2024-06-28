
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteChangeSpinner from "./components/routerswitch";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitx || Global",
  description: "Bitx global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
          <link rel="preload" href="https://bitxchange.netlify.app/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
          {/* Other <head> elements */}
        </Head>
      
      <body className={inter.className}>{children}
      <Suspense fallback={<div>Loading...</div>}>
          <RouteChangeSpinner />
        </Suspense>

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
