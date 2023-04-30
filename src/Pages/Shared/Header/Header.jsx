import React from 'react';
import logo from '../../../assets/images/Frame.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className='mt-5'>
            <div className="navbar bg-transparent flex justify-between">
                <div className="navbar-start w-[100%]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">News</Link></li>
                            <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Destination</Link></li>
                            <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Blog</Link></li>
                            <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Contact</Link></li>
                            <div className="form-control w-auto">
                                <input type="text" placeholder="Search your Destination..." className="p-0 pl-1 input input-bordered bg-transparent border-primary border-2" />
                            </div>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='w-full h-full' src={logo} alt="" />
                    </Link>
                    <div className="form-control lg:flex hidden w-[60%]">
                        <input type="text" placeholder="Search your Destination..." className="input input-bordered bg-transparent border-primary border-2 text-primary" />
                    </div>
                </div>
                <div className='w-[100%] flex justify-between'>
                <div className="navbar-center hidden lg:flex lg:justify-between">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">News</Link></li>
                        <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Destination</Link></li>
                        <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Blog</Link></li>
                        <li className='text-xl font-normal text-white hover:text-primary'><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="">
                    <Link className="btn btn-primary text-white">Get started</Link>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Header;