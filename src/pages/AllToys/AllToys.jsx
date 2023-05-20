import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import setTittle from '../shared/titleFixer';

const AllToys = () => {
    const searchRef = useRef(null)
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(false)
    const { totalToys, allToys } = useLoaderData()
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(5);
    const [searchText, setSearchText] = useState('');
    const totalPages = Math.ceil(totalToys / limit)
    const pageNumbers = [...Array(totalPages).keys()];
    const navigate = useNavigate()
    const [filteredArray, setFilteredArray] = useState([])


    useEffect(() => {

        setLoading(true)
        const url = `http://localhost:5000/allToys?page=${page}&limit=${limit}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
                setSearchText('')
                setFilteredArray([])
            })
    }, [page, limit])
    const handleViewDetails = (id) => {
        navigate(`/toyDetails/${id}`)
    }
    const handleUpdateText = (e) => {
        const text = e.target.value;
        setSearchText(text.toLowerCase());
    }
    const handleSearch = () => {
        const filteredToy = allToys?.filter(toy => toy.toyName.toLowerCase().includes(searchText))
        setFilteredArray(filteredToy)
        console.log(filteredToy)
    }
    setTittle('All Toys')
    return (
        <div className='bg-pink-50 px-2 py-10 md:px-8'>
            <h2 className='text-center text-4xl mb-10'>All Seller Toys</h2>
            <Loading loading={loading}>
                <div className="form-control mb-6">
                    <div className="input-group">
                        <div className='relative'>
                            <input ref={searchRef} onChange={handleUpdateText} type="text" placeholder="Search…" className="input input-bordered" />
                            {searchText && <button
                                onClick={() => {
                                    setSearchText('');
                                    searchRef.current.value = '';
                                    setFilteredArray([]);
                                }}
                                className='absolute top-1/4 right-2'>x</button>}

                        </div><button
                            title='Click to Search'
                            onClick={handleSearch}
                            className="btn btn-square btn-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>



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
                            {/* for search */}
                            {filteredArray.length!==0 && toys.map(toy => <tr key={toy._id}>

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
                            {/* for toys */}
                            {!filteredArray.length && toys.map(toy => <tr key={toy._id}>

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
                    <div className='mt-6 flex items-center justify-center'>
                        <div className="  btn-group">
                            <div className="btn-group">
                                {pageNumbers.map(nm =>
                                    <button
                                        key={nm}
                                        onClick={() => setPage(nm)}
                                        className={`btn ${page === nm ? 'btn-active' : ''}`}
                                    >{nm + 1}</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Loading>
        </div>
    );
};

export default AllToys;