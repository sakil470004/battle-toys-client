import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'

const Navbar = () => {
    const navElement = <>

        <li><Link className='' to={'/'}>Home</Link></li>
        <li><Link className='' to={'/addtoy'}>Add Toy</Link></li>
        <li><Link className='' to={'/mytoys'}>My Toys</Link></li>
        <li><Link className='' to={'/alltoys'}>All Toys</Link></li>
    </>
    return (
        <div className="navbar bg-pink-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-slate-500 lg:hidden">
                      |||
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <Link to={'/'} className=""><img src={logo} width={100} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navElement}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to={'/login'} className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white px-6">Login</Link>
                
            </div>
        </div>
    );
};

export default Navbar;