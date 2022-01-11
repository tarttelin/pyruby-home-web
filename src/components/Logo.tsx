import React from 'react';
import './logo.css';


const Logo = () => {
    return (
        <div className="logo-container">
        <div className="logo-animate">
            <div className="logo-square logo-1"></div>
            <div className="logo-square logo-2"></div>
            <div className="logo-square logo-3"></div>
            <div className="logo-square logo-4"></div>
            <div className="logo-square logo-5"></div>
            <div className="logo-square logo-6"></div>
            <div className="logo-square logo-7"></div>
            <div className="logo-square logo-8"></div>
            <div className="logo-square logo-9"></div>
        </div>
        <h1><span className="logo-py">Py</span><span className="logo-ruby">Ruby</span></h1>
    </div>
    )
}

export default Logo;