import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import Contact from "../pages/Contact";
import About from "../pages/About";
import UpdateProfile from "../pages/UpdateProfile";
import Review from "../pages/Review";
import PrivateRoutes from "./PrivateRoutes";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/example.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/update-profile",
                element: <PrivateRoutes>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoutes>
            },
            {
               path: "/review",
               element: <PrivateRoutes>
                <Review></Review>
               </PrivateRoutes>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <PrivateRoutes>
                    <Contact></Contact>
                </PrivateRoutes>
            },
            {
                path: "/about",
                element: <PrivateRoutes>
                     <About></About>
                </PrivateRoutes>
            }
        ]
    }
]);

export default routes;