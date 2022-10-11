import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const charts = useLoaderData();
    return (
        <div className='w-full h-full mt-8'>
            <h1 className='text-center font-medium mb-5'>name x total question chart</h1>
            <LineChart
                width={500}
                height={300}
                data={charts.data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default Statistics;