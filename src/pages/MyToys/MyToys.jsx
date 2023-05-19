import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/myToys?email=${user.email}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleUpdate = (id) => {
        navigate(`/updateToys/${id}`)
    }
    const handleDelete = (id) => {
        const isDelete = confirm('Are You Sure You want To Delete? This');
        if (isDelete) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted');
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining)
                    }
                })
        }
    }
    return (
        <div className='bg-pink-50 px-2 py-10 md:px-8'>
            <h2 className='text-center text-4xl mb-10'>My Toys</h2>
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
                                <button onClick={() => handleUpdate(toy._id)} className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white mr-4">Update</button>
                                <button onClick={() => handleDelete(toy._id)} className="btn btn-error text-white">Delete</button>
                            </th>
                        </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;