import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SignUp from "../components/SignIn/SignUp";
import SignIn from "../SignIn/SignIn";
import AboutUs from "../components/AboutUs/AboutUs";
import PrivateRouter from "./PrivateRouter";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import Blogs from "../components/Blogs/Blogs";



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
                element: <PrivateRouter><AboutUs></AboutUs></PrivateRouter>
            },
            {
                path: "/details",
                element: <PrivateRouter><DetailsPage></DetailsPage></PrivateRouter>
            },
            {
                path: "/blog",
                element: <PrivateRouter><Blogs></Blogs></PrivateRouter>
            }
        ]
    }
])

export default Router;