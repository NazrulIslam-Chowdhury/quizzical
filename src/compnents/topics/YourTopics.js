import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../topic/Topic';

const YourTopics = () => {
    const topics = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 ml-10
        mr-10 mt-8'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default YourTopics;