import React from "react";
import "../Style/Charge.css";
import recycle from "../Assets/img/recy.svg";
import petrol from "../Assets/img/petrol.svg";
import setting from "../Assets/img/setting.svg";
import car from "../Assets/img/petrocar.svg";

const Charge = () => {
  return (
    <div>
      <div className="Charge">
        <h1>Why First Charge?</h1>
        <p>
          First Charge is one amongst the foremost reliable and innovative
          company providing solutions with expertise of our extremely skillful
          engineers. First Charge aim to provide best and safe Electric Vehicle
          charging station services to EV Owners.
        </p>
        <div className="charge-main">
          <div className="charge-hero">
            <div className="charge-left">
              <div className="charge-box">
                <img src={recycle} alt="" />
                <h2>Experienced & expert Team</h2>
                <p>
                Our Owner/Partners have 10+ Year of experience in Electrical field like industrial engineering, Solar power. Our team has a high level of knowledge or a specialized set of skills in R&D.
                </p>
              </div>
              <div className="charge-box">
                <img src={petrol} alt="" />
                <h2>Innovation</h2>
                <p>
                We build future of EV charging solutions for every electric car. See our solutions at work, homes, offices, retail centers and hightway hotels.
                </p>
              </div>
            </div>
            <div className="charge-left">
              <div className="charge-box">
                <img src={setting} alt="" />
                <h2>Quality and Durability</h2>
                <p>
                We test our products beyond the industry standards to deliver the highest quality products. Our products meet the most safety standards.
                </p>
              </div>
              <div className="charge-box">
                <img src={car} alt="" />
                <h2>Convenience & Accessibility</h2>
                <p>
                Critical factors for public charging stations to be useful are that they be convenient, accessible, and reliable. We dove into these topics a bit via our surveys as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charge;
