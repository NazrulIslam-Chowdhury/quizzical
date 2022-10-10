import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-red-300 w-full flex  justify-between p-3">
            <div className='bg-red-300 w-full'>
                <div onClick={() => setOpen(!open)} className="h-8 w-8 text-black font-bolder md:hidden">
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                <div className={`bg-red-300 flex md:flex-row sm:flex-col w-full space-x-5 font-semibold absolute md:static duration-500 ease-in ${open ? 'top-6 mt-4' : 'top-[-120px]'}`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/topics'>Your Topics</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Quizzes</h1>
            </div>
        </div>
    );
};

export default Header;