import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/icons8-logo-48.png'
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const handleOut = () => {
    logOut().then(() => {
     
      toast.success('Successful')
      
    
    }).catch(err => toast.err(err.message))
  }
  const navBare = <>
    <li ><NavLink className='font-bold' to='/'>Home</NavLink></li>
    <li ><NavLink className='font-bold' to='/profile'>My Profile</NavLink></li>
  </>
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar md:max-w-[1440px] w-full mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navBare}
            </ul>
          </div>
          <div className='flex  justify-center items-center'>
            <img className='w-[30px] md:w-[50px]' src={logo} alt="" />
            <h2 className=" text-xl md:font-bold bg-linear-to-r from-[#2b5797] to-[#61b34e]  bg-clip-text text-transparent">
              SkillSwap
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBare}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center ">
              <img
                className="w-[50px] rounded-full mr-2 "
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
              <Link onClick={handleOut} className="btn">
                Log-Out
              </Link>
            </div>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;