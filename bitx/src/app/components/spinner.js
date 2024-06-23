import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
//import styles from './Spinner.module.css'; // Add your CSS styling for the spinner

const Spinner = () => {
  return (
    <div className='flex justify-center items-center bg-black h-screen'>
      <h1>
      <BounceLoader color="#36d7b7" />
      </h1>
     
    </div>
  );
};

export default Spinner;

 