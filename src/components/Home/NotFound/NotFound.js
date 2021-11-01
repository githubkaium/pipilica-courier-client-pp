import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/404.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="nofound">
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className="btn bg-danger text-white my-2">Go Home</button></Link>
        </div>
    );
};

export default NotFound;