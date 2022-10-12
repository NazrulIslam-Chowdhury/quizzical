import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../compnents/header/Header';
import Footer from '../compnents/footer/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;