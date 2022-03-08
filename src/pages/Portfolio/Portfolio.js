import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { Fade } from "react-reveal";
import PortfolioDesc from "../PortfolioDesc/PortfolioDesc";

const Portfolio = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("Portfolio.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="PortfolioContainer">
        <div className="PortfolioInfo">
          <h3>Portfolio</h3>
          <hr className="hr" />
          <div className="SerDiv"></div>
        </div>
        <div>
          <Fade top>
            <div className="PortfolioDesc">
              {service.map((service) => (
                <PortfolioDesc
                  key={service.id}
                  service={service}
                ></PortfolioDesc>
              ))}
            </div>
          </Fade>
        </div><br /><br />
        <div className="ServiceBtn shadow-lg">
            <a href="/portfolios"><button>View all</button></a>
        </div><br /><br />
      </div>
    </div>
  );
};

export default Portfolio;
