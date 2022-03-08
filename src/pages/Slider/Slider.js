import React from "react";
import Typical from 'react-typical';
import TypeWriterEffect from 'react-typewriter-effect';
import './Slider.css';
import SliderImg from '../../images/pc.png';

const Slider = () => {
  return (
    <div className="container">
      <div className="SliderContainer">
        <div className="SliderLeftInfo">
          <div className="SliderLeftDec">
            <h1>
              Intelligent Systems <br />& Solutions Limited
            </h1>
          </div>
          <div><br /><br /><br /><br /><br />
                <span>
                  {""}
                  <h4>
                  <Typical 
                  loop={Infinity}
                  steps={[
                      "Software Development",
                      2000,
                      "Cyber Security",
                      2000,
                      " Application Development Company",
                      2000,
                  ]}/>
                  </h4>
              </span>
          </div>
        </div>
        <div className="SliderRightInfo">
            <div className="SliderImg">
                <img src={SliderImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
