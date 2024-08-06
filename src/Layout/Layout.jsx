import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Settings from '../Shared/Settings/Settings';
import { useTheme } from '../Provider/ThemeContext';

const Layout = () => {
    const {isDarkMode}=useTheme();
    return (
        <div className={`h-screen  ${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Settings></Settings>
            <Footer></Footer>
        </div>
    );
};

export default Layout;