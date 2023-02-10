import Allcategory from "../../Pages/AllCategory/Allcategory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Login2 from "../../Pages/Login/Login2";
import Signup from "../../Pages/Signup/Signup";
import Signup2 from "../../Pages/Signup/Signup2";
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
                path:'/login2',
                element:<Login2></Login2>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/signup2',
                element:<Signup2></Signup2>
            },
            {
                path: '/allcategories',
                element:<Allcategory></Allcategory>
            }
        ]
    },

])