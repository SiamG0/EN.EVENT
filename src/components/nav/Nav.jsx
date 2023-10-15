import { useContext, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { NavLink } from "react-router-dom";

import './Nav.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-between py-2 bg-black text-white item-center'>
            <div>
                <button className="btn font-extrabold">NE.Event</button>
            </div>
            <div>
                <div className='md:hidden text-2xl mr-8 mt-5' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <nav className={`absolute lg:bg-transparent md:block z-50 md:static px-5 ${open ? 'right-1' : 'right-72'} ${open ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row gap-10 items-center'>
                        <li > <NavLink to={"/"}>Home </NavLink> </li>
                        <li > <NavLink to={"/aboutus"}>About Us</NavLink> </li>


                        <div>
                            {
                                user ? <div className=" flex items-center gap-3">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} alt={user.displayName} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
                                            <li>
                                                <button className="text-black text-base"><span className="font-medium">Name:</span> {user.displayName}</button>
                                            </li>
                                            <li><button className="text-black text-base"><span className="font-medium">Email:</span> {user.email ? user.email : "email not found"}</button></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <button onClick={logOut} className="px-5 py-2 bg-white text-black rounded-xl"
                                        >Sign Out</button>
                                    </div>
                                </div>
                                    :
                                    <div className="flex gap-2">
                                        <li > <NavLink to={"/login"}><button className=" px-5 py-2  bg-white text-black rounded-xl  ">LogIn</button> </NavLink> </li>
                                        <li > <NavLink to={"/signup"}><button className="px-5 py-2 bg-white text-black rounded-xl ">Registration</button> </NavLink> </li>
                                    </div>
                            }
                        </div>




                        <button></button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;