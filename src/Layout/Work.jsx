import React from 'react';
import { Link } from 'react-router';

const Work = () => {
  return (
    <div className="w-full md:max-w-[600px] mx-auto  text-center mb-[40px] mt-[40px] bg-gray-800 text-white py-6 md:px-5 px-3 shadow-sm rounded-2xl ">
      <div className=" my-[20px] ">
        <h1 className="font-bold text-3xl capitalize inline-block border-b border-blue-500  ">
          {' '}
          How It Works
        </h1>
      </div>
      <div>
        <div className="mb-2 ">
          <h3 className=" capitalize">
            first time create a account{' '}
            <Link className="font-bold text-blue-500 underline" to="/register">
              Register
            </Link>
          </h3>
        </div>
        <div className='mb-2'>
          <h3 className=' capitalize'>
            already have account{' '}
            <Link className="font-bold text-blue-500 underline" to="/login">
              Login
            </Link>
          </h3>
        </div>
        <p>
          Now you can exchange your skills with others. Here, you can share what
          you know and learn what you don’t through mutual exchange. However,
          you must behave cooperatively with everyone — otherwise, you will not
          be allowed to stay or rejoin the platform.
        </p>
      </div>
    </div>
  );
};

export default Work;