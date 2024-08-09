import React, { useState } from 'react';
import logo from './../../assets/Images/logo-black.webp'
import logoWhite from './../../assets/Images/logo-white.webp'
import { IoSearch, IoCloseOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useTheme } from '../../Provider/ThemeContext';
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";


const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showMoreItems, setShowMoreItems] = useState(false);

  const handleButtonClick = () => {
    setShowMoreItems(!showMoreItems);
  };


  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <nav className={isDarkMode ? " border-gray-200 px-4 sm:px-6 py-4 rounded border-b" : " border-gray-200 px-4 sm:px-6 py-4 rounded border-b"}>
        <div className="lg:mx-6 flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src={isDarkMode ? logoWhite : logo} className="h-11 mr-3" alt="Logo" />
          </a>
          <div className="flex md:order-2 items-center">
            {
              searchOpen ?
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="text-2xl"
                >
                  <IoCloseOutline />
                </button>
                :
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="text-2xl"
                >
                  <IoSearch />
                </button>
            }
            {searchOpen && (
              <div className='absolute top-20 right-20 bg-[#f4f4f4] p-4 rounded-md z-50 '>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 ml-2  "
                />
              </div>
            )}
            <span className='text-3xl mx-10 text-gray-50'> | </span>
            <button
              type="button"
              className="text-3xl "
              onClick={toggleSideNav}
            >
              <CgMenuRight />
            </button>
          </div>
          <div className="hidden  w-full md:flex md:w-auto md:order-1">
            <ul className="hidden 2xl:flex flex-col gap-10 p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Home
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Home
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    About
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    About
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Pages
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Pages
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Services
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Services
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Team
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Team
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Blog
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Blog
                  </span>
                </a>
              </li>
              <li className="group relative overflow-hidden">
                <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base  rounded md:p-0 uppercase">
                  <span className="block transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
                    Contact
                  </span>
                  <span className="absolute inset-0 block transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      {
        isSideNavOpen &&
        (
          <div className='fixed top-0 left-0 text-white bg-black h-screen w-full z-50'>
            <div className='flex'>
              <div className='hidden 2xl:block 2xl:w-[15%] border-r border-gray-800'>
                <div className='border-b border-gray-800 p-10'>
                  <img src={logoWhite} alt="" className='h-12' />
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
              <div className='w-full 2xl:w-[65%] h-screen overflow-hidden'>
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
              <div className='hidden 2xl:block 2xl:w-1/4 bg-[#121212] h-screen'>

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
            <button className=' absolute top-2 right-2 h-12 w-12 bg-slate-700 flex justify-center items-center rounded-full mr-5 mt-5 hover:text-gray-400 duration-300 z-20'
              onClick={toggleSideNav}>
              <IoMdClose />
            </button>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
