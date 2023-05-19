import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className='container mx-auto '>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;