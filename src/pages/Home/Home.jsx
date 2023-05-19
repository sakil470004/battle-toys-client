import React from 'react';
import Banner from './Banner';
import Gallery from './Gallary';

const Home = () => {
    return (
        <div className='px-2 md:p-0'>
            <Banner/>
            <Gallery/>
        </div>
    );
};

export default Home;