import React from 'react';
import logo from './../../assets/Images/logo-white.webp'
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-[#121212] text-white '>
            <div className='md:flex lg:flex'>
                <div className=' px-12 py-24 md:border-r md:border-b '>
                    <div>
                        <img src={logo} alt="Logo" className='h-8' />
                    </div>
                    <p className='lg:w-96 pt-10'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                </div>
                <div className='flex flex-col '>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Facebook</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Twitter</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Linkedin</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Instagram</a>
                </div>
                <div className='md:border-l md:border-b flex justify-center items-center w-full'>
                    <h1 className='jelly-bounce text-[164px] uppercase '>
                        <h1 className="text-5xl  2xl:text-[164px] py-16 uppercase">
                            <span className="letter">L</span>
                            <span className="letter">e</span>
                            <span className="letter">t</span>
                            <span className="letter">'</span>
                            <span className="letter">s</span>
                            <span className="letter mx-5"> </span>
                            <span className="letter">T</span>
                            <span className="letter">a</span>
                            <span className="letter">l</span>
                            <span className="letter">k</span>
                        </h1>
                    </h1>
                </div>
            </div>
            <div className='text-center lg:flex flex-row-reverse  justify-between pb-10 md:py-16 px-8  md:px-12'>
            <ul className='flex  md:gap-10'>
                    <li className="group relative overflow-hidden">
                        <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-white rounded md:p-0 uppercase">
                            <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                                About us
                            </span>
                            <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                About us
                            </span>
                        </a>
                    </li>
                    <li className="group relative overflow-hidden">
                        <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-white rounded md:p-0 uppercase">
                            <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                                Contact
                            </span>
                            <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                Contact
                            </span>
                        </a>
                    </li>
                    <li className="group relative overflow-hidden">
                        <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-white rounded md:p-0 uppercase">
                            <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                                career
                            </span>
                            <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                career
                            </span>
                        </a>
                    </li>
                    <li className="group relative overflow-hidden">
                        <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-white rounded md:p-0 uppercase">
                            <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                                faqs
                            </span>
                            <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                                faqs
                            </span>
                        </a>
                    </li>
                </ul>
                <p>© 2022 - 2025 | Alrights reserved by Wealcoder</p>
            </div>
        </div>
    );
};

export default Footer;