import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Rgister/Register";
import Carddetails from "../pages/PorpartyCard/Carddetails";
import Faq from "../pages/Home/Faq";
import PrivetRout from "../provider/PrivetRout";
import About from "../pages/About/About";
import Profile from "../pages/User/Profile";
import Contact from "../pages/contact/Contact";

 
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
                path:'/About',
                element:<About></About>
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
           },
           {
            path:'/profile',
            element:<Profile></Profile>
           },
           {
            path:"/contact",
            element:<Contact></Contact>
           }

        ]
    }
])

export default Router;