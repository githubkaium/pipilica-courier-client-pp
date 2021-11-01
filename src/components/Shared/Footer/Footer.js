import React from 'react';
import './Footer.css';

const Footer = () => {
    const title = {
        height: '25vh',
        backgroundColor: 'skyblue'
    }

    return (
        <div style={title} className="d-flex flex-column justify-content-center align-items-center footerSection">
            <p className="footer fw-bold fs-3 pt-3">PiPiLiCa Courier</p>
            <address className="text-black">
                #House: 3 / A, Banani, Dhaka<br />
                Contact: +880 123456 <br />
                Visit us at: <a href="pipilicacourier.com">PiPiLiCa Courier</a><br />
                Email: mailtous@pipilicacourier.com <br />
            </address>
        </div >
    );
};

export default Footer;