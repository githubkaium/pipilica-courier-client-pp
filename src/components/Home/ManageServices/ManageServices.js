import React, { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure to Delete?')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            <h2>My Services</h2>
            <div className="d-flex flex-wrap manageServices">
                {
                    services.map(service => <div key={service._id} className="m-2 p-2 border rounded singleService">
                        <h3>{service.name}</h3>
                        <p>Service Charge: {service.price}</p>
                        <button onClick={() => handleDelete(service._id)} className="btn btn-danger my-2">Delete</button>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ManageServices;