/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
<<<<<<< HEAD
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebse.config";
import PropTypes from "prop-types";
=======
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../Firebase/firebse.config'
>>>>>>> a88369bacb8850717d006e22029afb9ce6456f16

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

<<<<<<< HEAD
    const updateUserProfile = (Profile) =>{
        setLoding(true)
        return updateProfile(auth.currentUser,Profile)

    }

    const LogOut = () => {
        setLoding(true)
        return signOut(auth)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('This is current user ', currentUser)
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
        signInWithGoogle,
        signInwithGithub,
        updateUserProfile,
        LogOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Authprovider;

Authprovider.propTypes = {

    children: PropTypes.node
}
=======
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
>>>>>>> a88369bacb8850717d006e22029afb9ce6456f16
