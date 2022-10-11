
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
            <button onClick={toastOnClick} className='bg-violet-300 hover:bg-violet-400 text-lg font-medium p-3 mx-3 rounded'> <input type="checkbox" name="" id="" /> {option}</button>
            <ToastContainer />

        </div>
    );
};

export default Option;