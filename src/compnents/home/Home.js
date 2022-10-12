import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-red-300 to-violet-300 lg:p-48 md:p-48  text-center mt-8 ml-3 mr-3 rounded">
            <h1 className='text-6xl text-center font-medium'>Q<span className='text-5xl'>uizzical</span></h1>
            <p className='text-center mt-4 text-lg font-medium'>Want to test your knowledge about programming? <br /> You can use oue site.We provide you with many quiz in different topics</p>
            <button className='bg-violet-300 hover:bg-violet-500 font-bold text-xl mt-6 px-4 py-2 rounded'> <Link to='/topics'>Test your brilliancy<ArrowLongRightIcon className='text-black h-6 w-6 inline font-bold' /></Link>  </button>
        </div>
    );
};

export default Home;