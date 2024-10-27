<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
=======
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
>>>>>>> a88369bacb8850717d006e22029afb9ce6456f16

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

<<<<<<< HEAD
         </span> }
    if(!user){
       return children
    }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};
=======
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
>>>>>>> a88369bacb8850717d006e22029afb9ce6456f16

  return children
}

export default PrivateRoute
