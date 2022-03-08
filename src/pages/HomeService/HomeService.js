import React from "react";
import './HomeService.css';

const HomeService = (props) => {
  const { name, image, desc } = props.service;
  return (
    <div className="container">
      <div className="ServiceInfo">
        <div className="ServiceImg"><img src={image} alt="" /></div><br /><br />
        <a href="/service"><h4>{name}</h4></a><br />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default HomeService;
