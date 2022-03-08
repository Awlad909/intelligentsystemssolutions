import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [service , setService] = useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div className="ServiceContainer">
                <h2>SERVICE</h2>
            </div>
            <div className="container">
            <div className="serviceInfoContainer">
            {
                service.map(service => (<Service
                key={service.id}
                service={service}
                ></Service>))
            }
            </div><br /><br />
            </div>
        </div>
    );
};

export default Services;