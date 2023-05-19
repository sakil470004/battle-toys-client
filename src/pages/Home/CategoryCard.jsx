import React from 'react';

const CategoryCard = ({toy}) => {
    const {image,_id,name,price,rating,category}=toy

    const handleDetails=()=>{
        
    }
    return (
        <div className="card card-compact h-[550px] bg-base-100 shadow-xl">
            <figure><img className='object-cover' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>rating : {rating}</p>
                <p className='text-2xl text-pink-500'>Price : {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDetails} className="btn btn-error text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;