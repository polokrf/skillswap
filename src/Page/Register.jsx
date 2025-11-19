import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebas.init';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const googleProvider = new GoogleAuthProvider()

const Register = () => {
  const { register,setUser,update } = use(AuthContext);
   const [see, setSee] = useState(false);
  const [error, setError] = useState(null);
  const naviget = useNavigate()

  

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const chakPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    setError('');

    if (!chakPassword.test(password)) {
      setError(
        'Password must be at least 6 characters long and include both uppercase and lowercase letters.'
      );
      return;
    }
    // https://i.ibb.co.com/Cst5kJWT/icons8-man-in-yellow-t-shirt-100.png
    register(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Successful');
        const person = {
          displayName: name,
          photoURL: photo,
        };
        update(person)
          .then(ruselt => {
            setUser(user);
          })
          .catch(err => console.log(err));
        naviget('/');
      })
      .catch(err => {
        toast.error(err.message);
      });
  }
  const hnadleGoogle = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      toast.success('Successful');
      naviget('/')
    }).catch(err => toast.error(err.message))
    
  }

   const handleClick = e => {
     e.preventDefault();
     setSee(!see);
   };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* photo url */}
              <label className="label">Photo-URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo-URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
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

              <button className="btn btn-neutral mt-4">Register</button>
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
          {error && <p className="text-red-400">{error}</p>}
          <div>
            <p>
              already have an account{' '}
              <Link className="font-bold text-blue-400 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;