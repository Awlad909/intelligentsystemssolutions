import React from "react";
import { Link } from "react-router-dom";
import './Pricing.css';

const Pricing = ({ item }) => {
  const { title,price,hosting,domain,email,width } = item;
  return (
    <div>
      <div className="PricingContainer">
          <div className="PricingCardInfo shadow-lg">
            <div className="PricingCardDesc">
                <h6>{title}</h6>
                <p className="fs-4">$ <span className="fs-2 Price">{price}</span></p>  <br />  
                <p>{hosting}</p>    
                <p>{domain}</p>    
                <p>{email}</p>    
                <p>{width}</p>    
            </div>
            <div className="ViewBtn shadow-lg">
          <button>
            <Link to="/" className="text-decoration-none text-white Link">
              View Details
            </Link>
          </button>
        </div><br />      
        </div>
    </div>
    </div>
  );
};

export default Pricing;
