import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SignUp from "../components/SignIn/SignUp";
import SignIn from "../SignIn/SignIn";
import AboutUs from "../components/AboutUs/AboutUs";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <SignIn></SignIn>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default Router;