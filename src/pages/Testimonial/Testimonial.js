import React from "react";
import { Carousel } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Email } from "@mui/icons-material";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="TestimonialContainer">
        <div className="container">
          <Fade top>
            <div className="TestimonialInfo">
              <div className="TestimonialLeftInfo">
                <h3>Testimonial</h3><br />
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <h5>“Best It Service company i have ever seen</h5>
                    <div className="carouselInfo">
                      <div className="carouselLeftInfo">
                      <div>
                      <img
                      src="https://www.linkpicture.com/q/team_1_1.jpg"
                      alt="First slide"
                    />  
                      </div>  
                      </div>
                        <div className="carouselRightInfo">
                        <h4>Arman Rakib</h4>
                        <p>Owner <br /> Tech Life </p>  
                        </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                  <h5>“Best It Service company i have ever seen</h5>
                    <div className="carouselInfo">
                      <div className="carouselLeftInfo">
                      <div>
                      <img
                      src="https://www.linkpicture.com/q/team_1_1.jpg"
                      alt="First slide"
                    />  
                      </div>  
                      </div>
                        <div className="carouselRightInfo">
                        <h4>Arman Rakib</h4>
                        <p>Owner <br /> Tech Life </p>  
                        </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="TestimonialRightInfo">
              <h3 className="text-center">Newsletter!!!</h3>
                <p className="text-center p-2">Subscribe to our weekly Newsletter and stay tuned.</p>
                <div className="NewsletterInfo">
                  <form action="">
                    <div className="EmailInfo">
                      <div className="EmailIon"><Email className="fs-2"/></div>
                      <input type="text" name="email" id="email" placeholder="Enter your Email" />
                    </div>
                    <div className="SubscribeBtn"><button>Subscribe Now!</button></div>  
                  </form>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
