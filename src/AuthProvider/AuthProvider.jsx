import React, { createContext, useState } from 'react'
import { app } from '../firebase-config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = () => {
     const [user , setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const CreateUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     };

     const Login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     };

     const Logout = () => {
          return signOut(auth);
     };

     const GoogleLogin = () => {
          return signInWithPopup(auth, googleProvider);
     };

     const authInfo = {
          CreateUser, Login, Logout, GoogleLogin
     }


     return (
          <div>AuthProvider</div>
     )
}

export default AuthProvider