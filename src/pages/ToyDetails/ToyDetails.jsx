import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { toyName,
        subCategory,
        price,
        rating,
        availableQuantity,
        details,
        img,
        sellerName,
        sellerEmail } = toy
    // console.log(toy)
    return (
        <div className='bg-pink-50 px-2 py-10 md:px-8'>
            <h2 className='text-center text-4xl mb-10'>Toy Details for <span className='text-pink-600'> {toyName} </span></h2>
            <div className="hero min-h-screen shadow-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;