import React, { useEffect, useState } from 'react';
import aboutImage from './../../assets/Images/about-img.webp';
import { MdArrowOutward } from "react-icons/md";

import './AboutUs.css'

const AboutUs = () => {
    const [hoverPosition, setHoverPosition] = useState({ x: '50%', y: '50%' });
    const [isHovered, setIsHovered] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    // for Hover effect on Explore us button
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

    // Image move up and down
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='bg-[#121212] py-20 overflow-hidden relative'>
            <div className='md:flex lg:flex 2xl:flex justify-between max-w-7xl mx-auto'>
                <div
                    className='w-full md:w-1/2 lg:w-1/2 2xl:w-1/2 2xl:mt-32'
                    style={{
                        transform: `translateY(${scrollPosition * -0.2}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <img src={aboutImage} alt="About Us" className='w-full h-auto p-4 object-cover' />
                </div>
                <div className='text-white p-4 md:w-1/2'>
                    <hr className='w-40 rotate-90 absolute top-0 border-gray-500' />
                    <h2 className='text-2xl font-bold mb-4 uppercase'>Who We Are</h2>
                    <h1 className='text-4xl font-bold mb-4 uppercase'>We are leading digital marketing agency.</h1>
                    <div className='ml-0 md:ml-0 lg:ml-0 2xl:ml-20'>
                        <p className='text-xl text-gray-500 text-justify mt-32'>We’re a team of strategic digital marketers
                            working globally with the largest brands. We believe
                            that progress only happens when you refuse to
                            play things safe. We combine ideas and behaviors,
                            and insights with design, technological data to
                            produce brand experiences that customers love.
                            Our services are designed to help you succeed.</p>
                        <button
                            className='h-32 w-32 border border-white rounded-full mt-16 relative overflow-hidden hover:text-black duration-1000 ease-in-out'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--x': hoverPosition.x,
                                '--y': hoverPosition.y,
                                '--scale': isHovered ? 3 : 0,
                            }}
                        >
                            <span className='explore-us-text relative z-10 flex justify-center items-center '>Explore Us
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

export default AboutUs;
