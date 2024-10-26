import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Fotter from "../shared/Fotter/Fotter";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;