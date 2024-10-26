import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
         return <span className="loading loading-spinner loading-lg">

         </span> }
    if(!user){
       return children
    }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};

export default PrivetRout;
PrivetRout.propTypes = {
    children:PropTypes.node
}