import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, description, price, img } = service;
    return (
        <div className="service m-3 pb-3">
            <div>
                <img height={250} src={img} alt="" />
            </div>
            <h3 className="mt-3 py-2 bg-white">{name}</h3>
            <h6 className="text-white">Charge : {price}</h6>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning text-primary"><span>Booking</span> {name}</button>
            </Link>
        </div>
    );
};

export default Service;