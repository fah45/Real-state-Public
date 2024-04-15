import { Link } from "react-router-dom";


const UpdateProfile = () => {
    return (
        <div className="hero ">
        <div className="hero-content flex-col w-full">

            <Link to="/update-profile" className="text-center">
                <h1 className="text-5xl font-bold mb-4">Want to Update Profile ?</h1>
            </Link>
            <div className="card w-[100%] shadow-2xl bg-white">
                <form className="card-body w-full">
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
                        <input type="text" placeholder="Photo-Url" name="Photo_Url" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Update</button>
                    </div>
                   
                </form>
               
            </div>
        </div>
    </div>
    );
};

export default UpdateProfile;