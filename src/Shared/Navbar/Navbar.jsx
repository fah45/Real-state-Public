import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [success, setSuccess] = useState("")
    // const [errorMessage, setErrorMessage] = useState("")

    const handleSignOut = () => {

        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
        <li><NavLink to="/review">Review</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </>



    return (

        <div className="navbar bg-base-100">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Harmony</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end mx-auto gap-6">
            {user ?
                <div className="flex items-center gap-4">
                    <button className="btn btn-sm bg-[#F9A51A]" onClick={handleSignOut}>Sign out</button>
                    <div className="">
                        <img className="rounded-full h-10 w-10" src={user.photoURL} alt="" />
                    </div>
                </div> :
                <div className="flex items-center gap-4">
                    <Link to={"/login"}>
                        <button className="btn btn-sm bg-[#F9A51A]">Login</button>
                    </Link>
                    <Link to={"/register"}>
                        <button className="btn btn-sm bg-[#F9A51A]">Register</button>
                    </Link>
                    <div className="">
                        <img className="rounded-full h-10 w-10" src="/blank-user.jpg" alt="" />
                    </div>
                </div>

            }
            </div>
        </div>
    );
};

export default Navbar;