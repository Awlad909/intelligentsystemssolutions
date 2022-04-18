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
              src="https://www.okokitsolutions.com/wp-content/uploads/2021/03/conduct-the-perfect-meeting-3.png"
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
              src="https://blog.commlabindia.com/wp-content/uploads/2012/12/classroom-training-1.jpg"
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
