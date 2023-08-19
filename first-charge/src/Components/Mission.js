import React from 'react'
import "../Style/Mission.css";
import mission from "../Assets/img/mission.svg";

const Mission = () => {
  return (
    <div>
      <div className="mission-vision">
                <div className="mission">
                  <div className="mission-left1">
                    <div className="mission-left">
                            <h3>About Us</h3>
                            <h2>Why Choose us?</h2>
                            <p>First Charge is pioneering new ways for pushing the accelerator on e-mobility.</p>
                            <p>We are passionate team players believe in science & technology innovations and.</p>
                            <p>We choose to promote the green technology adoption in renewables and</p>
                    </div>
                    </div>
                    <div className="mission-right">
                                <img src={mission} alt="" />
                    </div>
                </div>
      </div>

    </div>
  )
}

export default Mission