import React from "react";
import "./About.css";
import AboutImg from "../../images/team.png";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="AboutInfo">
        <Fade top>
        <div className="AboutLeftInfo">
          <h3>About us</h3><div className="div"></div>
          <img src={AboutImg} alt="" />
        </div>
        <div className="AboutRightInfo">
          <div className="AboutRightDesc">
            <p>
              Intelligent Systems & Solutions Limited is the most prominent
              Software Development, Hardware Supply, Computer Accessories,
              E-Commerce based company in Bangladesh. We are committed to serve
              our customers with our services with guaranteed satisfaction with
              their product and services. At our software development company,
              we create digital solutions for international corporations, small
              businesses and other organizations with an aim to open up new
              possibilities for expansion, process automatisation and continuous
              improvement. We are a team of experienced developers, creators, designers and project managers you can rely on. Techlife is obliged to keep their commitment.
            </p>
          </div>
        </div>
        </Fade>
      </div><br /><br />
    </div>
  );
};

export default About;
