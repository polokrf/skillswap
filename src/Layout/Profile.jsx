import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import Loader from '../Loder/Loader';

const Profile = () => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div className="flex flex-col justify-center items-center my-[50px] p-2 md:p-0">
      <div className="md:max-w-[500px] w-full bg-gray-800 text-center text-white p-3 rounded-2xl  shadow-sm">
        <img className="mx-auto rounded-full mb-3" src={user?.photoURL} alt="" />
        <h2 className=" capitalize mb-1">
          <span className="font-bold ">Name : </span>
          {user?.displayName}
        </h2>
        <p className="mb-3">
          <span className="font-bold">Email :</span> {user?.email}
        </p>
        <div>
          
          <Link className="btn md:w-[80%] w-full" to='/update'>Update Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;