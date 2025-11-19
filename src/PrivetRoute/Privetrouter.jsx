import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loder/Loader';

const Privetrouter = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation()
  if (loading) {
    return <Loader></Loader>
  }
  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
   
  
};

export default Privetrouter;