import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //Google Login System
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //Register System with Email & Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login System with Email & Password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update User Information
    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //Sign Out System 
    const logOut = () => {
        return signOut(auth)
    }

    //Forget Password System
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //Observer set / onAuth State system setup
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])


    const authInfo = {
        providerLogin,
        createUser,
        login,
        forgetPassword,
        user,
        logOut,
        updateUserInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;