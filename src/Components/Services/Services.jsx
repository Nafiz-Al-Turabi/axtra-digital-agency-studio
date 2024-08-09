import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { useTheme } from '../../Provider/ThemeContext';
import './Services.css'

const Services = () => {
    const [hoverPosition, setHoverPosition] = useState({ x: '50%', y: '50%' });
    const [isHovered, setIsHovered] = useState(false);
    const {isDarkMode}=useTheme();

    // for Hover effect on button
    const handleMouseEnter = (e) => {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setHoverPosition({ x: `${x}px`, y: `${y}px` });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='py-20 md:py-56 relative'>
            <div className='max-w-4xl mx-auto px-4'>
                <hr className='absolute top-20 left-1/3 w-40 rotate-90 hidden md:block' />
                <h3 className='text-gray-500 font-bold uppercase mb-5 md:text-left'>Services</h3>
                <h1 className='text-4xl font-bold uppercase md:text-7xl md:text-left'>Our Marketing Services</h1>
                <div className='mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center'>
                    <hr className='hidden md:block absolute left-1/3 rotate-90 w-40' />
                    <p className='w-full md:w-96 md:text-left mt-5 md:mt-0 md:ml-96'>
                        Consumers today rely heavily on digital means to research products. We research a brand of bldend
                        engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                        products before buying.
                    </p>
                </div>
            </div>
            <div className='max-w-7xl mx-auto mt-20'>
                <div className='md:flex justify-between gap-6 md:border-t py-16 px-4 space-y-4 md:space-y-0'>
                    <h1 className='2xl:w-1/4 text-4xl md:text-3xl 2xl:text-4xl font-bold uppercase '>Search Engine optimization</h1>
                    <div className='md:w-1/2 md:pl-10 2xl:pl-20'>
                        <p className='md:w-96 md:text-lg font-bold'>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                        <div className='font-bold mt-5'>
                            <p>+ Logo Design</p>
                            <p>+ Advertisement</p>
                            <p>+ Promotion</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <button
                            className='h-40 w-40 border md:float-right border-slate-500 rounded-full relative overflow-hidden hover:text-black duration-1000 ease-in-out mt-10 md:mt-0'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--x': hoverPosition.x,
                                '--y': hoverPosition.y,
                                '--scale': isHovered ? 3 : 0,
                            }}
                        >
                            <span className='explore-us-text relative z-10 flex justify-center items-center '>Details
                                <MdArrowOutward />
                            </span>
                            <div className='hover-bg'></div>
                        </button>
                    </div>
                </div>
                <div className='md:flex justify-between gap-6 md:border-t py-16 px-4 space-y-4 md:space-y-0'>
                    <h1 className='2xl:w-1/4 text-4xl md:text-3xl 2xl:text-4xl font-bold uppercase '>Email Marketing</h1>
                    <div className='md:w-1/2 md:pl-10 2xl:pl-20'>
                        <p className='md:w-96 md:text-lg font-bold'>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                        <div className='font-bold mt-5'>
                            <p>+ Logo Design</p>
                            <p>+ Advertisement</p>
                            <p>+ Promotion</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <button
                            className='h-40 w-40 border md:float-right border-slate-500 rounded-full relative overflow-hidden hover:text-black duration-1000 ease-in-out mt-10 md:mt-0'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--x': hoverPosition.x,
                                '--y': hoverPosition.y,
                                '--scale': isHovered ? 3 : 0,
                            }}
                        >
                            <span className='explore-us-text relative z-10 flex justify-center items-center '>Details
                                <MdArrowOutward />
                            </span>
                            <div className='hover-bg'></div>
                        </button>
                    </div>
                </div>
                <div className='md:flex justify-between gap-6 md:border-t py-16 px-4 space-y-4 md:space-y-0'>
                    <h1 className='2xl:w-1/4 text-4xl md:text-3xl 2xl:text-4xl font-bold uppercase '>Content
                    Marketing</h1>
                    <div className='md:w-1/2 md:pl-10 2xl:pl-20'>
                        <p className='md:w-96 md:text-lg font-bold'>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                        <div className='font-bold mt-5'>
                            <p>+ Logo Design</p>
                            <p>+ Advertisement</p>
                            <p>+ Promotion</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <button
                            className='h-40 w-40 border md:float-right border-slate-500 rounded-full relative overflow-hidden hover:text-black duration-1000 ease-in-out mt-10 md:mt-0'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--x': hoverPosition.x,
                                '--y': hoverPosition.y,
                                '--scale': isHovered ? 3 : 0,
                            }}
                        >
                            <span className='explore-us-text relative z-10 flex justify-center items-center '>Details
                                <MdArrowOutward />
                            </span>
                            <div className='hover-bg'></div>
                        </button>
                    </div>
                </div>
                <div className='md:flex justify-between gap-6 md:border-t py-16 px-4 space-y-4 md:space-y-0'>
                    <h1 className='2xl:w-1/4 text-4xl md:text-3xl 2xl:text-4xl font-bold uppercase '>Social
                    Marketing</h1>
                    <div className='md:w-1/2 md:pl-10 2xl:pl-20'>
                        <p className='md:w-96 md:text-lg font-bold'>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                        <div className='font-bold mt-5'>
                            <p>+ Logo Design</p>
                            <p>+ Advertisement</p>
                            <p>+ Promotion</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <button
                            className='h-40 w-40 border md:float-right border-slate-500 rounded-full relative overflow-hidden hover:text-black duration-1000 ease-in-out mt-10 md:mt-0'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--x': hoverPosition.x,
                                '--y': hoverPosition.y,
                                '--scale': isHovered ? 3 : 0,
                            }}
                        >
                            <span className='explore-us-text relative z-10 flex justify-center items-center '>Details
                                <MdArrowOutward />
                            </span>
                            <div className='hover-bg'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
