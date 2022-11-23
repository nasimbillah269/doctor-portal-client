import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheard/Footer/Footer';
import Navber from '../pages/Sheard/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;