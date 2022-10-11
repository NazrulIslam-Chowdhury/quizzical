import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Option from '../option/Option';

const Questions = ({ quiz }) => {
    console.log(quiz)
    const { question, options } = quiz;
    return (
        <div className='bg-gradient-to-r from-red-300 to-violet-300 mt-5 ml-3 mr-3 rounded relative'>
            <div>
                <h1 className='text-xl font-medium'><span className='font-bold'>Question:</span> {question}</h1>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    options.map(option => <Option option={option}></Option>)
                }
            </div>
            <button className='lg:absolute md:absolute sm:relative top-2 right-12'><EyeIcon className='h-6 w-6' /></button>
        </div>
    );
};

export default Questions;