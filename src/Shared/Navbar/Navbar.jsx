import React, { useState } from 'react';
import logo from './../../assets/Images/logo-black.webp'
import { IoSearch, IoCloseOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";


const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-6 py-4 rounded border-b">
      <div className="lg:mx-6 flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-11 mr-3" alt="Logo" />
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 ml-2  "
              />
            </div>
          )}
          <span className='text-3xl mx-10 text-gray-50'> | </span>
          <button
            type="button"
            className="text-3xl "
          >
            <CgMenuRight />
          </button>
        </div>
        <div className="hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col gap-10 p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Home
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Home
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  About
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  About
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Pages
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Pages
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Services
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Services
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Team
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Team
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Blog
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Blog
                </span>
              </a>
            </li>
            <li className="group relative overflow-hidden">
              <a href="#" className="block py-2 tracking-tight pr-4 pl-3 text-base text-gray-700 rounded md:p-0 uppercase">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="absolute inset-0 block transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
