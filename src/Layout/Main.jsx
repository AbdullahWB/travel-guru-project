import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import bgPhoto from '../assets/images/Rectangle1.png'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className="hero place-items-start min-h-screen" style={{ backgroundImage: `url(${bgPhoto})` }}>
                <div className="hero-overlay bg-[#000] bg-opacity-60"></div>
                <div className="text-neutral-content mx-auto w-[80%]">
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;