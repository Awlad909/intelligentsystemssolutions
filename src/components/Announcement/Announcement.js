import React from "react";
import "./Announcement.css";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";

const Announcement = () => {
  return (
    <div className="AnnouncementContainer">
      <div className="InfoContainer">
        <div className="LeftInfo">
          <div className="EmailIcon">
            <small><Email /></small>
          </div>
          <div className="EmailDesc">
            <small>singlemah@gmail.com </small>
          </div> <h6>|</h6>
          <div className="PhoneIcon">
            <small><PhoneIcon /></small>
          </div>
          <div><small>01782690486</small></div>
        </div>
        <div className="RightInfo">
          <div className="SocialIcon"><a href="http://localhost:3000/"><Facebook className="text-white fs-5" /></a></div>
          <div className="SocialIcon"><a href="http://localhost:3000/"><Twitter className="text-white fs-5" /></a></div>
          <div className="SocialIcon"><a href="http://localhost:3000/"><Instagram className="text-white fs-5" /></a></div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
