import React from "react";
import { Link } from "react-router-dom";
import TrainingSlider from "../TrainingSlider/TrainingSlider";
import "./Training.css";

const Training = () => {
  return (
    <>
      <div className="TrainingContainer">
        <h3>TRAINING'S</h3>
      </div>
      <div className="TrainingInfo">
        <div className="TrainingLeftInfo">
          <div className="TrainingImg">
            <img
              src="https://intelligentsystems.com.bd/upload/training/corporate-it-training-solutions_74e6f9.jpeg"
              alt=""
            />
          </div>
          <h3>Corporate IT Training Solutions</h3>
          <div className="ReadBtn shadow-lg">
            <button>
              <Link to="/service" className="text-decoration-none Link">
                Read More
              </Link>
            </button>
          </div> <br />
          <div className="circleOne"></div>
        </div>
        <div className="TrainingRightInfo">
          <div className="TrainingImg">
            <img
              src="https://intelligentsystems.com.bd/upload/training/classroom-training_a94ba2.jpeg"
              alt=""
            />
          </div>
          <h3>Classroom Training</h3>
          <div className="ReadBtn shadow-lg">
            <button>
              <Link to="/service" className="text-decoration-none Link">
                Read More
              </Link>
            </button>
          </div><br />
          <div className="circleTwo"></div>
        </div>
      </div><br /><br /><br />
      <TrainingSlider/>
    </>
  );
};

export default Training;
