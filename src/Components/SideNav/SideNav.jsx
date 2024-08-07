import React, { useState } from 'react';
import logo from './../../assets/Images/logo-white.webp'
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { FaPlus,FaMinus } from "react-icons/fa";


const SideNav = () => {
    const [showMoreItems, setShowMoreItems] = useState(false);

    const handleButtonClick = () => {
        setShowMoreItems(!showMoreItems);
    };
    return (
        <div className='fixed top-0 bg-black h-screen w-full z-50'>
            <div className='flex'>
                <div className='w-[15%] border-r border-gray-800'>
                    <div className='border-b border-gray-800 p-10'>
                        <img src={logo} alt="" className='h-12' />
                    </div>
                    <div className='p-10 mt-56'>
                        <h1 className='text-2xl font-bold mb-8'>Follow Us</h1>
                        <div className='flex flex-col'>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Behance</a>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Instagram</a>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Dribble</a>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Facebook</a>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Twitter</a>
                            <a href="" className='text-lg font-semibold hover:text-gray-600 duration-300'>Youtube</a>
                        </div>
                    </div>
                </div>
                <div className='w-[65%] h-screen overflow-hidden'>
                    <ul className='mt-32 overflow-y-auto h-full'>
                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    Home
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    Home
                                </span>
                            </a>
                            <button
                                onClick={handleButtonClick}
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                {showMoreItems ? <FaMinus /> : <FaPlus />}
                            </button>
                        </li>

                        {/* Conditionally render more items */}
                        {showMoreItems && (
                            <div className='pl-16 py-5'>
                                <li className='text-2xl mb-10 hover:tracking-wider duration-300 font-bold'>
                                    <a href="">Digital Maketing</a>
                                </li>
                                <li className='text-2xl mb-10 hover:tracking-wider duration-300 font-bold'>
                                    <a href="">Digital Maketing dark</a>
                                </li>
                                <li className='text-2xl mb-10 hover:tracking-wider duration-300 font-bold'>
                                    <a href="">Design Studio</a>
                                </li>
                                <li className='text-2xl mb-10 hover:tracking-wider duration-300 font-bold'>
                                    <a href="">Design Studio dark</a>
                                </li>
                                <li className='text-2xl mb-10 hover:tracking-wider duration-300 font-bold'>
                                    <a href="">Digital Agency</a>
                                </li>
                                
                            </div>
                        )}

                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    About
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    About
                                </span>
                            </a>
                            <button
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                <FaPlus />
                            </button>
                        </li>
                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    Services
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    Services
                                </span>
                            </a>
                            <button
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                <FaPlus />
                            </button>
                        </li>
                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    Pages
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    Pages
                                </span>
                            </a>
                            <button
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                <FaPlus />
                            </button>
                        </li>
                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    Blog
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    Blog
                                </span>
                            </a>
                            <button
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                <FaPlus />
                            </button>
                        </li>
                        <li className="flex justify-between group relative overflow-hidden border-y border-gray-800 p-6 ">
                            <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-5xl font-bold rounded md:p-0 uppercase">
                                <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-20">
                                    Contact
                                </span>
                                <span className="absolute p-6 inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                    Contact
                                </span>
                            </a>
                            <button
                                className='bg-[#121212] h-12 w-12 flex justify-center items-center'>
                                <FaPlus />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='w-1/4 bg-[#121212] h-screen'>
                    <button className='text-2xl float-right h-12 w-12 bg-slate-700 flex justify-center items-center rounded-full mr-5 mt-5 hover:text-gray-400 duration-300 z-20'>
                        <IoMdClose />
                    </button>
                    <div className='relative'>
                        <input type="text" className='w-80 p-4 rounded-full mt-32 ml-5 bg-transparent border border-gray-500 focus:outline-none ' placeholder='Search Keyword' />
                        <button className='text-2xl absolute top-[214px] right-10 hover:text-gray-500 duration-300'>
                            <IoMdSearch />
                        </button>
                    </div>
                    <div className='mt-32 ml-6'>
                        <h1 className='text-2xl font-semibold mb-6'>Get in touch</h1>
                        <p className='text-lg pb-2'>+(02) - 094 980 547</p>
                        <p className='text-lg pb-2'>info@extradesign.com</p>
                        <p className='text-lg pb-2'>230 Norman Street New York,<br /> QC (USA) H8R 1A1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;