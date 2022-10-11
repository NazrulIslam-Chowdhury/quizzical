import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {

    const toastOnClick = () => {
        if (option === correctAnswer) {
            toast('correct', { position: toast.POSITION.TOP_CENTER });
        }
        else {
            toast('wrong', { position: toast.POSITION.TOP_CENTER });
        }
    }

    return (
        <div className='mt-5 mb-5'>
            <button onClick={toastOnClick} className='text-lg font-medium'> <input type="checkbox" name="" id="" /> {option}</button>
            <ToastContainer />
        </div>
    );
};

export default Option;