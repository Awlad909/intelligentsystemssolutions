import React from "react";
import './PortfolioDesc.css';

const PortfolioDesc = ({ service }) => {
  const { title, image } = service;
  return (
    <div>
      <div className="PortfolioInfoContainer shadow">
        <div className="PortfolioImg"><img src={image} alt="" /></div>
        <h3>{title}</h3>
        <div className="PortfolioBtn">
            <a href="http://www.bjobs.com.bd/" target="_blank"><button>Visit</button></a>
            </div>
      </div>
    </div>
  );
};

export default PortfolioDesc;
