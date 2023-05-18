import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="  bg-pink-50">
        <div className=" w-full md:w-1/3 mx-auto py-[35vh] md:py-52">
          
          <div className="card  shadow-2xl bg-slate-500">
          <h2 className="text-center text-4xl text-white pt-10 ">Register Here </h2>

            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white">Register</button>
                  <p  className="lr text-white text-center">Already Account Here? Go to <Link className="text-pink-400 font-bold" to={'/login'}>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;