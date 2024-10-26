import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebse.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)


    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = (provider) => {
        setLoding(true)
        return signInWithPopup(auth, provider)
    }
    const signInwithGithub = (provider) => {
        setLoding(true)
        return signInWithPopup(auth, provider)
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