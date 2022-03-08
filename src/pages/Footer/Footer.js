import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="FooterContainer">
        <div className="container">
        <div className="FooterInfo">
        <div className="FooterLeftInfo">
          <h6>
            Good Luck Center 151/7 Green Road, 9th Floor Dhaka 1205 
            <br /> Contact: 01782690486 <br /> Email: singlemah@gmail.com
          </h6>
        </div>
        <div className="FooterMiddleInfo">
          <h6>
            <a href="/#">Term & Condition</a> <br /><a href="/#"> Privacy Policy </a><br /> <a href="/#">Resources</a> <br /> <a href="/#">Carees with us</a> <br /> <a href="/#">Site map</a>
          </h6>
        </div>
        <div className="FooterRightInfo">
          <h6>
            <a href="/#">Contact us</a> <br /> <a href="/#">FAQs</a> <br /> <a href="/#">Notice</a> <br /> <a href="/#">Security Advises</a>
          </h6>
        </div>
        </div>
        </div><br />
      </div>
      <div className="SecondFooter">
            <div className="container">
            <div className="SecondFooterInfo">
                <div className="SecondFooterLeftInfo">
                   <div><a href="/#">Terms of Service</a></div>
                   <div><a href="/#">Privacy</a></div>
                   <div><a href="/#">Security</a></div>
                </div>
                <div className="SecondFooterRightInfo">
                    <p>© 2022 Intelligent System And Solution Ltd. All rights reserved</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
