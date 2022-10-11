import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../questions/Questions';



const Quizzes = () => {
    const quizzes = useLoaderData();
    const questions = quizzes.data.questions
    return (
        <div>
            {
                questions.map(question => <Questions question={question} key={question.id}></Questions>)
            }
        </div>
    );
};

export default Quizzes;