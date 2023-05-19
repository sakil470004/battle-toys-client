import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/allToys`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleViewDetails = (id) => {
        navigate(`/toyDetails/${id}`)
    }
   
    return (
        <div className='bg-pink-50 px-2 py-10 md:px-8'>
        <h2 className='text-center text-4xl mb-10'>All Seller Toys</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {toys.map(toy => <tr key={toy._id}>

                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-24 ">
                                    <img src={toy?.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>


                        </td>
                        <td>
                            <span className="text-2xl">{toy?.toyName}</span>
                        </td>
                        <td>{toy?.sellerName}</td>
                        <td>{toy?.price}</td>
                        <td>{toy?.availableQuantity}</td>
                        <th className=''>
                            <button onClick={() => handleViewDetails(toy._id)} className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white mr-4">View Details</button>
                           
                        </th>
                    </tr>
                    )}
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default AllToys;