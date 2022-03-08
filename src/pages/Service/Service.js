import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { name, image, desc, id } = service;
  return (
    <div>
      <div className="serviceCard">
        <div className="serviceInfo">
          <div className="ServiceImg"><img src={image} alt="" /></div><br />
          <h2>{name}</h2>
          <p>{desc}</p>
          <div className="ReadBtn shadow-lg">
            <button><Link to={`/service/${id}`}className="text-decoration-none text-primary Link">Read More</Link></button>
          </div><br />
        </div>
      </div>
      <div className="circleThree"></div>
    </div>
  );
};

export default Service;
