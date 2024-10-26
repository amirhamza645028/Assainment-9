import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Rgister/Register";
import Carddetails from "../pages/PorpartyCard/Carddetails";
import Faq from "../pages/Home/Faq";

 
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
            element:<Carddetails></Carddetails>
           },
           {
            path:'/FAQ',
            element:<Faq></Faq>
           }

        ]
    }
])

export default Router;