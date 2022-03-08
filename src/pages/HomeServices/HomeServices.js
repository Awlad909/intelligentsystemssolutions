import React, { useEffect, useState } from "react";
import './HomeServices.css';
import HomeService from '../HomeService/HomeService';
const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="ServicesContainer">
      <h3>What can we do for you</h3>
      <hr className="hr" />
      <div className="SerDiv"></div>
      <div className="container">
        <div className="ServiceCard">
            {
              services.map(service=>(<HomeService
              key={service.id}
              service={service}
              ></HomeService>))
            }
        </div><br /><br />
            <div className="ServiceBtn shadow-lg">
            <a href="/services"><button>View all</button></a>
            </div><br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

export default HomeServices;
