import React from 'react';
import brand from './../../assets/Images/creative.webp';
import brand1 from './../../assets/Images/1.webp';
import brand2 from './../../assets/Images/2.webp';
import brand3 from './../../assets/Images/3.webp';
import brand4 from './../../assets/Images/4.webp';
import brand5 from './../../assets/Images/5.webp';
import brand6 from './../../assets/Images/6.webp';
import { useTheme } from '../../Provider/ThemeContext';

const Brands = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className=' max-w-7xl mx-auto py-10 md:py-0 2xl:py-20'>
            <h1 className='text-center text-xl md:text-2xl my-10 uppercase'>We worked with global largest brands</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-10 ml-12 md:ml-16 lg:ml-20 2xl:ml-0 '>
                <div className='flex items-center'>
                    <img src={brand} alt="Brand Image" />
                </div>
                <div className='flex items-center'>
                    <img src={brand2} alt="Brand Image" />
                </div>
                <div className='flex items-center'>
                    <img src={brand3} alt="Brand Image" />
                </div>
                <div className='flex items-center'>
                    <img src={brand4} alt="Brand Image" />
                </div>
                <div className='flex items-center'>
                    <img src={brand5} alt="Brand Image" />
                </div>
                <div className='flex items-center'>
                    <img src={brand6} alt="Brand Image" />
                </div>
            </div>
        </div>
    );
};

export default Brands;