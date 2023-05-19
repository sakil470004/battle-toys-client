import React, { useEffect, useState } from 'react';
import LatestProductCard from './LatestProductCard';

const LatestProduct = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/latest')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    return (
        <div className='my-20 shadow-md rounded-lg md:p-4'>
            <h2 className='text-4xl text-pink-400 text-center mb-3 font-bold'>Latest Toys</h2>
            <p className='text-gray-400 font-bold text-center mb-10'>The Toys Your Child Need Most</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    toys.map(toy => <LatestProductCard key={toy._id} toy={toy} />)
                }
            </div>
        </div>
    );
};

export default LatestProduct;