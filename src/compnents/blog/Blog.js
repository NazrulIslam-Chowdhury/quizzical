import React from 'react';

const Blog = () => {

    return (
        <div className='text-center mt-8'>
            <div className='bg-gradient-to-r from-red-300 to-violet-300 text-start rounded p-8 mt-8 ml-3 mr-3'>
                <h1 className='font-medium'><span className='text-lg font-bold'>Q1:</span> What is the purpose of React Router?</h1>
                <p className='font-medium'><span className='text-lg font-bold'>Ans:</span> React Router is a standard library system build for React.It is used to create routing in a React app.It runs through the routes without reloading the page.</p>
            </div>
            <div className='bg-gradient-to-r from-red-300 to-violet-300 text-start rounded p-8 mt-8 ml-3 mr-3'>
                <h1 className='font-medium'><span className='text-lg font-bold'>Q2:</span> How does the context API works?</h1>
                <p className='font-medium'><span className='text-lg font-bold'>Ans:</span> Context API provides user to pass the data around the components without 'props drilling'.It works through 'createContext' and 'useContext'.</p>
            </div>
            <div className='bg-gradient-to-r from-red-300 to-violet-300 text-start rounded p-8 mt-8 ml-3 mr-3'>
                <h1 className='font-medium'><span className='text-lg font-bold'>Q3:</span>What is useRef hook?</h1>
                <p className='font-medium'><span className='text-lg font-bold'>Ans:</span> 'useHref' is a hook that returns a 'url'.That can be used to link to the given 'to' location.It can  be used outside the Router also.</p>
            </div>
        </div>
    );
};

export default Blog;