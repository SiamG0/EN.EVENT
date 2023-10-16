import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const SocailAuth = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const socialMediaSingIn = media => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("user logged in successful")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div>
                <h1 onClick={()=> socialMediaSingIn(googleSignIn)} className="flex items-center gap-5 cursor-pointer border-2 px-5 rounded-md py-3 text-2xl mt-5 text-white bg">Continue With <FaGoogle></FaGoogle></h1>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocailAuth;