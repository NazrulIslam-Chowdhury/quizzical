import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    let activeStyle = {
        backgroundColor: 'white',
        padding: '2px 6px',
        borderRadius: '5px'
    }

    return (
        <div className="bg-red-300  flex  justify-between p-3">

            <div onClick={() => setOpen(!open)} className="h-8 w-8 text-black font-bolder md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <div className={`bg-red-300  space-x-5 font-semibold absolute md:static duration-500 ease-in ml-8 mt-2 ${open ? 'top-6 mt-4' : 'top-[-120px]'}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/topics'>Your Topics</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/statistics'>Statistics</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/blog'>Blog</NavLink>
            </div>

            <div className='flex'>
                <h1 className='text-3xl font-bold mr-5'> Q<span className='text-2xl'>uizzical</span></h1>
                <QuestionMarkCircleIcon className='h-11 w-11 mr-3'></QuestionMarkCircleIcon>

            </div>
        </div>
    );
};

export default Header;