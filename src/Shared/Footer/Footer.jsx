import React from 'react';
import logo from './../../assets/Images/logo-white.webp'
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-[#121212] text-white '>
            <div className='flex'>
                <div className=' px-12 py-24 border-r border-b '>
                    <div>
                        <img src={logo} alt="Logo" className='h-8' />
                    </div>
                    <p className='w-96 pt-10'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                </div>
                <div className='flex flex-col '>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Facebook</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Twitter</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Linkedin</a>
                    <a href="" className='text-xl text-center px-6 py-8  uppercase border-b hover:bg-white duration-500 hover:text-black'>Instagram</a>
                </div>
                <div className='border-l border-b flex justify-center items-center w-full'>
                    <h1 className='jelly-bounce text-[164px] uppercase '>
                        <h1 class="text-[164px] uppercase">
                            <span class="letter">L</span>
                            <span class="letter">e</span>
                            <span class="letter">t</span>
                            <span class="letter">'</span>
                            <span class="letter">s</span>
                            <span class="letter mx-5"> </span>
                            <span class="letter">T</span>
                            <span class="letter">a</span>
                            <span class="letter">l</span>
                            <span class="letter">k</span>
                        </h1>
                    </h1>
                </div>
            </div>
            <div className='flex justify-between py-16 px-12'>
                <p>© 2022 - 2025 | Alrights reserved by Wealcoder</p>
                <ul className='flex gap-10'>
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
            </div>
        </div>
    );
};

export default Footer;