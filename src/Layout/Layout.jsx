import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Settings from '../Shared/Settings/Settings';
import { useTheme } from '../Provider/ThemeContext';
import SideNav from '../Components/SideNav/SideNav';

const Layout = () => {
    const {isDarkMode}=useTheme();
    return (
        <div className={`  ${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Settings></Settings>
            {/* <SideNav></SideNav> */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;