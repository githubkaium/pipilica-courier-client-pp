import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, serService] = useState({});

    useEffect(() => {
        fetch(`https://arcane-coast-76135.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => serService(data));
    }, [])

    return (
        <div className="booking">
            <h2 className="my-2">My Bookings</h2>
            <h6 className="text-primary"><span className="text-danger">Service Name:</span> {service.name}</h6>
            <h6 className="text-primary"><span className="text-danger">Service Details:</span> {service.description}</h6>
            <h6 className="text-primary"><span className="text-danger">Service Fee:</span> {service.price}</h6>
        </div>
    );
};

export default Booking;