import React, { createContext, useEffect, useState } from "react";
import app from "../../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut ,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //For Signup

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //for signIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn

  const googleProvider= new GoogleAuthProvider()
  const googleSignIn= ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  //logOut
  const logOut= () =>{
    setLoading(true)
    return signOut(auth)
  }

// 
const updateUser= (userInfo)=> {
    return updateProfile(user, userInfo)
}

  //User state

  useEffect(
    ()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unsubscribe()
    }
  )

const authInfo= {
    signUp, logIn, googleSignIn, logOut, user, updateUser
}

  return <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;
