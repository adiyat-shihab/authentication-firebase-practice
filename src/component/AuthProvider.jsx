import { createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.config.js";
import { Navigate, redirect } from "react-router-dom";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkUser, setCheckUser] = useState(false);
  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCheckUser(true);
      })
      .catch((error) => {
        console.log(error.message);
        setCheckUser(false);
      });
  };
  const authInfo = {
    handleSignUp,
    handleSignIn,
    user,
    checkUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
