import Allcategory from "../../Pages/AllCategory/Allcategory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Main from "../Main";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path: '/allcategories',
                element:<Allcategory></Allcategory>
            }
        ]
    },

])