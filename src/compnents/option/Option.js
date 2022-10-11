import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-lg font-medium'> <input type="checkbox" name="" id="" /> {option}</h1>
        </div>
    );
};

export default Option;