import React from 'react';
import { RingLoader } from 'react-spinners';


const Loader = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <RingLoader />
    </div>
  );
};

export default Loader;