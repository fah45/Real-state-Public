import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa6";





const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn, twitterSignIn, facebookSignIn } = useContext(AuthContext)
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        setSuccess("")
        setErrorMessage("")

        if(password.length <6){
            setErrorMessage("Password should be at least 6 characters or longer");
            toast.error("Password should be at least 6 characters or longer")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrorMessage("Your password should be at least one upper case characters");
            toast.error("should be one upper case");
            return;
        }

        signIn(email, password)
            .then(() => {
                setSuccess("Logged In Successful")
                // Toast
                
                toast.success('Successfully created!');
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // Toast
                toast.error('login again');
                setErrorMessage(error.message)
            })
    }

    // Social Login
    const handleSocialLogin = (socialProvider) => {

        socialProvider()
            .then(() => {
                setSuccess("Logged In Successful")
                toast.success("Successfully login");
                navigate(location?.state ? location.state : '/')
            } // navigate after login
               // Toast
                
            )
            .catch(error=>{
                // toast(error.message)
                toast.error('Wrong Password or email');
                setErrorMessage(error.message)
            })
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                </div>
                <div className="card w-[30%] shadow-2xl bg-white">
                    <form className="card-body w-full" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control mb-4 relative">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Password</span>
                            </label>
                            <input  type={ showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                            <span className="absolute top-3 right-2 py-10 px-6 " onClick={()=> setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            {
                                errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-4">
                        <Toaster />
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 mb-6">
                    <Toaster />
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(googleSignIn)}><FaGoogle /></button>
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(gitHubSignIn)}><FaGithub /></button>
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(twitterSignIn)}><FaTwitter /></button>
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(facebookSignIn)}><FaFacebook /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;