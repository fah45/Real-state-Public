import { Helmet } from "react-helmet-async";
import { Link,useNavigate} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const UpdateProfile = () => {
    const {user,updateUserProfile,loading,setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState(user.email)
    const[name,setName] = useState(user.displayName)
    const [photoUrl,setPhotoUrl] = useState(user.photoURL)

    const handleUpdate = (e)=>{
        e.preventDefault()
        updateUserProfile(name,photoUrl)
        .then(()=>{
            setUser({displayName:name,photoURL:photoUrl})
            toast.success('Successfully Updated!');
            navigate("/")
        })
        .catch()
    }
    return (
        <div className="hero ">
            <Helmet>
                <title> Update-Profile </title>
            </Helmet>
        <div className="hero-content flex-col w-full">

            <Link to="/update-profile" className="text-center">
                <h1 className="text-5xl font-bold mb-4">Want to Update Profile ?</h1>
            </Link>
            <div className="card w-[100%] shadow-2xl bg-white">
                <form className="card-body w-full" onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" value={email}  className="input input-bordered text-gray-700 bg-transparent border-gray-300 " disabled  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="Photo-Url" name="Photo_Url" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
               
            </div>
        </div>
        <Toaster />
    </div>
    );
};

export default UpdateProfile;