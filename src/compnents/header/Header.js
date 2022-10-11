import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    let activeStyle = {
        textDecoration: "underline red  3px",
    }

    return (
        <div className="bg-red-300 w-full flex  justify-between p-3">

            <div onClick={() => setOpen(!open)} className="h-8 w-8 bg-red-300 text-black font-bolder md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <div className={`bg-red-300  w-full space-x-5 font-semibold absolute md:static duration-500 ease-in ml-8 ${open ? 'top-6 mt-4' : 'top-[-120px]'}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/topics'>Your Topics</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/statistics'>Statistics</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/blog'>Blog</NavLink>
            </div>

            <div>
                <h1 className='text-3xl font-bold'>Q<span className='text-2xl'>uizzical</span></h1>
            </div>
        </div>
    );
};

export default Header;