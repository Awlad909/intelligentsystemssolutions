import React, { useState, useEffect } from "react";
import "./ServiceDetail.css";
import { useParams } from "react-router-dom";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <div className="ServiceDetail">
        <h1>new service coming soon:{serviceId}</h1>
      </div>
    <div className="container">
        <div className="ServiceDetailInfo">
            <div><h2>{service.name}</h2></div>
            <div><h2>{service.email}</h2></div>
        </div>
    </div>
    </>
  );
};

export default ServiceDetail;
