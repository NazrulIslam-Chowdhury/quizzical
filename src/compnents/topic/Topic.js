import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { logo, name, total, id } = topic;
    return (
        <div className='bg-gradient-to-r from-red-300 to-violet-300 p-5 rounded'>
            <img className='h-40 w-52 rounded' src={logo} alt="" />
            <div>
                <p className='text-3xl font-bold'>{name}</p>
                <p className='text-lg font-medium mt-2'>Total quiz:{total}</p>
                <button className='bg-violet-300 hover:bg-violet-500 font-bold text-xl mt-6 px-4 py-2 rounded'> <Link to={`/topic/${id}`}>Start Quizzing<ArrowLongRightIcon className='text-black h-6 w-6 inline font-bold' /></Link>  </button>
            </div>

        </div>
    );
};

export default Topic;