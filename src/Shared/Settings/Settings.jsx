import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useTheme } from '../../Provider/ThemeContext';



const Settings = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleSettings = () => {
        setOpen(!isOpen);
    };

    const { isDarkMode, toggleDarkMode } = useTheme()
    return (
        <div className={`hidden lg:block fixed top-32 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} right-0`}>
            <div className='bg-black w-56 h-56 p-3 '>
                <div>
                    <h1 className='text-xl font-medium text-white mt-3 mb-2'>Cursor</h1>
                    <select className='w-full p-2 bg-[#121212] text-white'>
                        <option value="Default">Default</option>
                        <option value="animated">Animated</option>
                    </select>
                </div>
                <div>
                    <h1 className='text-xl font-medium text-white mt-5 mb-2'>Mode</h1>
                    <div className='flex space-x-2'>
                        <button
                            className={`w-full text-lg px-5 py-2 rounded ${!isDarkMode ? 'bg-gray-900' : 'bg-gray-600'} text-white`}
                            onClick={!isDarkMode ? null : toggleDarkMode}
                        >
                            Light
                        </button>
                        <button
                            className={`w-full text-lg px-5 py-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-600'} text-white`}
                            onClick={isDarkMode ? null : toggleDarkMode}
                        >
                            Dark
                        </button>
                    </div>
                </div>
            </div>
            <button className='w-12 h-12 text-white bg-black bg-opacity-50 flex justify-center items-center absolute top-24 -left-12'
                onClick={toggleSettings}
            >
                {isOpen ? <IoCloseOutline className='text-2xl' /> : <IoMdSettings className='text-2xl animate-spin' />}


            </button>
        </div>
    );
};

export default Settings;