import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { auth } from '../Firebase/firebas.init';
import { FcGoogle } from 'react-icons/fc';

import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { IoIosEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';
import { toast } from 'react-toastify';



const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const {login} = use(AuthContext)
  const [see, setSee] = useState(false);
  const [email,setEmail] = useState('')

  const location = useLocation()
  const naviget = useNavigate()

  
const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   

   
    login(email, password).then(result => {
      const user = result.user
      toast.success('Successful')
      naviget(`${location.state || '/'}`)
    }).catch(err => {
      toast.error(err.message)
    })

  }

  const hnadleGoogle = () => {
      signInWithPopup(auth, googleProvider).then(result => {
        toast.success('Successful')
         naviget(`${location.state || '/'}`);
      }).catch(err => toast.error(err.message))
      
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setSee(!see)
  }

  const handleForget = (e) => {
    e.preventDefault();
    naviget('/reset', {
      state: {
      email
    }})
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <div className=" relative">
                <input
                  type={see ? 'text' : 'password'}
                  name='password'
                  className="input"
                  placeholder="Password"
                />

                <button
                  onClick={handleClick}
                  className="btn btn-xs absolute right-5 top-2 "
                >
                  {see ? <IoIosEyeOff></IoIosEyeOff> : <IoIosEye></IoIosEye>}
                </button>
              </div>
              <div>
                <button type='button' onClick={handleForget} className="link link-hover">Forgot password?</button>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <button
            onClick={hnadleGoogle}
            type="button"
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle></FcGoogle>
            Login with Google
          </button>

          <div>
            <p>
              do not have an account{' '}
              <Link
                className="font-bold text-blue-400 underline"
                to="/register"
              >
                register
              </Link>
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;