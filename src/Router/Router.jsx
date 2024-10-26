import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Rgister/Register";
import Carddetails from "../pages/PorpartyCard/Carddetails";
import Faq from "../pages/Home/Faq";
import PrivetRout from "../provider/PrivetRout";

 
const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
           {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch("/data.json"),
           },
           {
            path:'/Login',
            element:<Login></Login>
           },
           
           {
            path:'/Register',
            element:<Register></Register>
           },
           {
            path:'/cartDtls/:id',
            element:<PrivetRout><Carddetails></Carddetails></PrivetRout>,
            loader: () => fetch("/data.json")

           },
           {
            path:'/FAQ',
            element:<PrivetRout><Faq></Faq></PrivetRout>
           }

        ]
    }
])

export default Router;