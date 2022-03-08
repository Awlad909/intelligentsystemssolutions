import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Contact.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.810331,
  lng: -23.810331,
};

const Contact = () => {
  return (
    <>
      <div className="ContactContainer">
        <h1>CONTACT</h1>
      </div>
      <div className="container">
        <div className="ContactInfo">
          <div className="ContactLeftInfo">
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="ContactRightInfo">
            <form action="">
              <input type="text" name="name" id="name" placeholder="Name" />
              <br />
              <input type="text" name="email" id="email" placeholder="Email" />
              <br />
              <input type="text" name="phone" id="phone" placeholder="Phone" />
              <br />
              <textarea type="text" name="message" placeholder="Type your message/Feedback here" ></textarea><br />
              <button className="SendBtn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div className="ContactSecondInfo">
            <div className="ContactEmailInfo">
            <div className="EmailIconDetail fs-1"><EmailIcon className="fs-1"/></div>
                <h5>MAIL & WEBSITE</h5>
                <div className="MailIconInfo">
                <div><EmailIcon/></div>
                <div><p>help@intelligentsystems.com.bd</p></div>   
                </div>
                <div className="WebsiteIconInfo">
                <div><LanguageIcon className="text-primary"/></div>
                <div><a href="http://localhost:3000/">http://intelligentsystems.com.bd</a></div>   
                </div>
            </div>
            <div className="ContactNmbrInfo">
              <div className="PhoneIconDetail fs-1"><PhoneIphoneIcon className="fs-1"/></div>
                <h5>CONTACT</h5> 
                <div className="PhoneIconInfo">
                <div><PhoneIphoneIcon className="fs-6"/></div>
                <div><p>01xxxxxxxxx</p></div>  
                </div>
            </div>
            <div className="ContactAddressInfo">
            <div className="LocationIconDetail fs-1"><LocationOnIcon className="fs-1"/></div>
                <h5>ADDRESS</h5>
                <div className="LocationInfo">
                <div><LocationOnIcon className="fs-6"/></div>
                <div> <p>Good Luck Center 151/7 Green Road, 7th Floor Dhaka 1205 Bangladesh Mobile: +880 1799446655 IP Phone: +880-966-677-9191 E-Fax: (571)766-2629</p></div>  
                </div>
            </div>    
        </div>      
    </div><br /><br />
    </>
  );
};

export default Contact;
