import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className='bg-pink-50'>
        <div className='container mx-auto '>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
        </div>
    );
};

export default Main;