import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Pricing from "../Pricing/Pricing";
import "./Pricings.css";

const Pricings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Pricing.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="PortfolioInfo">
        <h3>Pricing</h3>
        <hr className="hr" />
        <div className="SerDiv"></div>
      </div>
      <Fade top>
      <div className="PricingCard">
        {data.map((item) => (
          <Pricing key={item.id} item={item} />
        ))}
      </div><br /><br />
      </Fade>
    </div>
  );
};

export default Pricings;
