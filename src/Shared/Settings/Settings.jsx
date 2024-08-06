import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";



const Settings = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleSettings = () => {
        setOpen(!isOpen);
    };
    return (
        <div className={`hidden lg:block fixed top-32 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} right-0`}>
            <div className='bg-[#121212] w-56 h-56 p-3 '>
                <div>
                    <h1 className='text-xl font-medium text-white mt-3 mb-2'>Cursor</h1>
                    <select className='w-full p-2 bg-black text-white'>
                        <option value="Default">Default</option>
                        <option value="animated">Animated</option>
                    </select>
                </div>
                <div>
                    <h1 className='text-xl font-medium text-white mt-5 mb-2'>Mode</h1>
                    <div className='flex space-x-2'>
                        <button className='w-full text-lg bg-gray-600 text-white px-5 py-2 rounded'>Light</button>
                        <button className='w-full text-lg bg-gray-600 text-white px-5 py-2 rounded'>Dark</button>
                    </div>
                </div>
            </div>
            <button className='w-12 h-12 text-white bg-black flex justify-center items-center absolute top-24 -left-12'
                onClick={toggleSettings}
            >
                {isOpen ? <IoCloseOutline className='text-2xl' /> :   <IoMdSettings className='text-2xl animate-spin' />}
               
                
            </button>
        </div>
    );
};

export default Settings;