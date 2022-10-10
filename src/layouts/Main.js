import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../compnents/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;