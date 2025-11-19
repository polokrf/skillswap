import React from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import error from '../assets/error-404.png'

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <div className="flex items-center justify-center flex-1 ">
        <div className="my-[30px] text-center">
          <img className="my-3 block mx-auto" src={error} alt="" />
          <h2 className=" capitalize font-bold md:text-4xl text-2xl mb-2">
            Oops, page not found!
          </h2>

          <p className="text-[#627382] mb-2">
            The page you are looking for is not available.
          </p>
          <div>
            <Link to="/">
              <button className="bg-linear-to-l from-cyan-400  to-cyan-800  text-white font-bold btn">
                Go Back!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;