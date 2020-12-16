import React from 'react';
import './Footer.style.css';

const Footer = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style">
                © Chris Rumler &nbsp; - {new Date().getFullYear()}
            </div>
        </div >
    )
};

export default Footer;