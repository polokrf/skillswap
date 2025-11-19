import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

const Google = () => {
  const emailRef = useRef();
  const { restPassword } = use(AuthContext);
  const [email, setEmail] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.state.email) {
      setEmail(location.state?.email)
    }
  },[location])
  console.log(location)

  const handleReset = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    restPassword(email).then(result => {
     setEmail('')
      toast.success('send email password')
    }).catch(err => toast.error(err.message))
  };
  return (
    <div className='flex flex-col justify-center items-center mt-[50px] p-2 '>
      <form onSubmit={handleReset} className='bg-gray-800 w-full md:max-w-[400px] p-6  rounded-2xl'>
        <label className='label block text-white font-bold'>Email</label>
        <input className='input w-full my-4' value={email} onChange={(e)=> setEmail(e.target.value)} ref={emailRef} type="email"  name='email' placeholder='Email'/>
        <div>
          <button className='btn btn-primary w-full'>Reset-Password</button>
        </div> 
      </form>
    </div>
  );
};

export default Google;