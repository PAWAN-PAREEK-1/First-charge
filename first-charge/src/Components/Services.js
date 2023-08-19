import React from 'react'
import "../Style/Services.css";
import service from "../Assets/img/service.svg";

const Services = () => {
  return (
    <div>

       <div className="service">
        <div className="left-serv">
            <h1>SERVICES</h1>
            <p>Charging an electric vehicle is possible in a variety of locations and at a variety of speeds. The cost for charging is set by the charging service provider and can even be free. First Charge provides EV fast chargers to commercial, retail, state and local government fleets and other businesses. Fast charging your EV is very simple and now quite affordable with First Charge. You can quickly connect your EV to a charger in seconds, charge to 80% or more in about 30 minutes, while you shop, eat, read, or relax. Our chargers help property owners to attract new customers, increase revenue and increase the value of their property. We offer charging options for any make of electric vehicle (EV) Hyundai, Mahindra, MG, TATA. Our system can be integrated with existing charging infrastructure or be totally self-contained.</p>
        
            <div className="btn-services">
            <a href="*">More services</a>
            </div>
        </div>
        <div className="right-serv">

        <img src={service} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Services