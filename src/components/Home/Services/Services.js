import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect((() => {
        fetch('https://arcane-coast-76135.herokuapp.com/services')
            // fetch('./servicesDb.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }), [])


    return (
        <div id="services">
            <h2 className="mt-5 mb-3">Our Services</h2>
            < div className=" services-container" >
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div >
        </div >
    );
};

export default Services;