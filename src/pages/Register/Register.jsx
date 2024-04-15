import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle, } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa6";





const Register = () => {
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);



    const { signUp, updateUserProfile, googleSignIn, gitHubSignIn, } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo")
        console.log(email, password, photo)
        setSuccess("")
        setErrorMessage("")

        // if(password.length<6){return setError, toast}
        // if(regex logic){return setError, toast}
        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters or longer");
            toast.error("Password should be at least 6 characters or longer")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Your password should be at least one upper case characters");
            toast.error("should be one upper case");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorMessage("Your password should be at least one lower case characters");
            toast.error("should be one lower case");
            return;
        }

        // Normal SignUp
        signUp(email, password, photo,)
            .then(() => {
                // update profile er vitore then er vitore eta
                updateUserProfile(photo)
                    .then(() => {
                        setSuccess("Successfully Registered")
                        // Toast
                        toast.success("Successfully Registered");
                        navigate('/login')

                    })

            })
            .catch(error => {
                // toast
                toast.error('Already created/check your password or email');
                setErrorMessage(error.message)
            })
    }


    // Social SignUp
    const handleSocialLogin = (socialProvider) => {

        socialProvider()
            .then(() => {
                // Toast
                toast.success("Successfully login");
                setSuccess("Successfully Registered")
                navigate('/login')
            })
            .catch(error => {
                // toast(error.message)
                toast.error('Wrong Password or email');
                setErrorMessage(error.message)
            })
    }
    return (
        <div className="hero p-6 ">
            <div className="hero-content flex-col w-full p-8">

                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                </div>
                <div className="card w-[100%]  shadow-2xl bg-white">
                    <form className="card-body w-full" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Type-here" name="Photo" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control mb-4 relative">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                            <span className="absolute top-3 right-2 py-10 px-6 " onClick={() => setShowPassword(!showPassword)}>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 mb-6">
                        <Toaster />
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(googleSignIn)}><FaGoogle /></button>
                        <button className="btn rounded-full" onClick={() => handleSocialLogin(gitHubSignIn)}><FaGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;