import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../questions/Questions';



const Quizzes = () => {
    const quizzes = useLoaderData();
    const { questions, total } = quizzes.data
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold mt-5'>Total questions:{total}</h1>
            <div className='mt-5'>
                {
                    questions.map(quiz => <Questions quiz={quiz} key={quiz.id}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizzes;