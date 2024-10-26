import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import PropTypes from "prop-types";

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
         return <span className="loading loading-spinner loading-lg">

         </span> }
    if(!user){
        children
    }
    return (
        <div>

        </div>
    );
};

export default PrivetRout;
PrivetRout.propTypes = {
    children:PropTypes.node
}