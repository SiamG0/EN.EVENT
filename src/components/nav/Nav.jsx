import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { NavLink } from "react-router-dom";

import './Nav.css'

const Nav = () => {
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
                <nav className={`absolute bg-white lg:bg-transparent md:block z-50 md:static px-5 ${open ? 'right-1' : 'right-72'} ${open ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row gap-10 items-center'>
                        <li > <NavLink to={"/"}>Home </NavLink> </li>
                        <li > <NavLink to={"/aboutus"}>About Us</NavLink> </li>
                        
                       
                        <li > <NavLink to={"/login"}><button className=" px-5 py-2 bg-white text-black rounded-xl  ">LogIn</button> </NavLink> </li>
                        <li > <NavLink to={"/signup"}><button className="px-5 py-2 bg-white text-black rounded-xl ">Registration</button> </NavLink> </li>
                        
                        
                        <button></button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;