import React from "react";
import { Link } from "react-router-dom";
import "./Software.css";

const Software = () => {
  return (
    <>
      <div className="SoftwareContainer">
        <h1>SOFTWARE</h1>
      </div>
      <div className="SoftwareInfo">
        <div className="SoftwareImg">
        <img
          src="https://intelligentsystems.com.bd/upload/software/5d68efde35dfc.png"
          alt=""
        />
        </div>
        <h3>Online Appointment <br /> Management System</h3>
        <div className="ReadBtn shadow-lg">
          <button>
            <Link to="/service" className="text-decoration-none Link">
              Read More
            </Link>
          </button>
        </div><br />
        <div className="circle"></div>
      </div><br /><br />
    </>
  );
};

export default Software;
