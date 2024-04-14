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
                element: <UpdateProfile></UpdateProfile>
            },
            {
               path: "/review",
               element: <Review></Review>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
]);

export default routes;