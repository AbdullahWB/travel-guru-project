import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import bgPhoto from '../assets/images/Rectangle1.png'

const Main = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgPhoto})` }}>
                <div className="hero-overlay bg-[#000] bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Header></Header>
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;