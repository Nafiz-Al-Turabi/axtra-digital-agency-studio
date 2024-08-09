import React, { useState } from 'react';
import { RiShiningLine } from "react-icons/ri";
import videoIntro from './../../assets/videos/hero-3.mp4'
import { FaPlayCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import image from './../../assets/Images/1.webp'
import { HiArrowLongDown } from "react-icons/hi2";
import './Banner.css'




const Banner = () => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const toggleVideo = () => {
        setIsVideoVisible(!isVideoVisible);
    };

    const textColorClass = isVideoVisible ? 'text-white' : '';

    return (
        <div className="relative w-full h-[750px] overflow-hidden select-none">
            {isVideoVisible && (
                <video
                    className="hidden 2xl:block absolute top-0 left-0 w-full h-full object-cover z-10"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoIntro} type="video/mp4" />
                </video>
            )}
            <div className={`relative md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto px-5 md:px-0 z-20 ${textColorClass}`}>
                <div className='flex justify-between mt-16'>
                    <div className='flex items-center '>
                        <h1 className='text-2xl font-bold uppercase'>Digital</h1>
                        <hr className='w-24 border-black ml-10' />
                    </div>
                    <p className='text-4xl text-gray-400'>
                        <RiShiningLine />
                    </p>
                </div>
                <div className=''>
                    <h1 className='text-7xl md:text-[110px] lg:text-[180px] 2xl:text-[220px] font-extrabold uppercase'>Mark</h1>
                    <div className='md:flex flex-row-reverse justify-between lg:-mt-8 '>
                        <h1 className='text-7xl md:text-[110px] lg:text-[180px] 2xl:text-[220px] font-extrabold uppercase ml-28 md:ml-0'>Eting</h1>
                        <p className={`w-96 text-base md:mt-4 lg:mt-8 text-justify ${textColorClass}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate adipisci labore obcaecati sunt laudantium cum beatae qui. Inventore, consequatur.</p>
                    </div>
                </div>
            </div>
            <button
                onClick={toggleVideo}
                className=" hidden 2xl:block text-7xl absolute top-40 right-64 p-2 z-40 border-2 rounded-full "
            >
                {isVideoVisible ? <IoCloseCircle className={`${textColorClass}`} /> : <FaPlayCircle className='animate-pulse' />}
            </button>

            <div className='float-right md:mt-20 lg:mt-0 2xl:-mt-10'>
                <img src={image} alt="" className='h-96 md:h-full ' />
            </div>
            {/* Arrow */}
            <p className='absolute bottom-28 left-28 border h-24 hidden 2xl:flex items-center rounded-full slow-bounce'>
                <HiArrowLongDown className='text-5xl ' />
            </p>
        </div>
    );
};

export default Banner;
