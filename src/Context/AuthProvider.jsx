import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { auth } from '../Firebase/firebas.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useLocation } from 'react-router';



const AuthProvider = ({ children }) => {

  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState();
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
   
  const login = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, crueentUser => {
     
      
      setUser(crueentUser);
        setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  const logOut = () => {
    return signOut(auth);
  };
  const update = person => {
    return updateProfile(auth.currentUser, person);
  };
  const restPassword = (email) => {
   return sendPasswordResetEmail(auth,email)
  }
  
  
  const person = {
    user,
    register,
    login,
    logOut,
    loading,
    setUser,
    update,
    restPassword
} 
  return (
    <AuthContext value={person}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;