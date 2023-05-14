import React from "react";
import "./CSS/complaints.css";
import wifi from "./images/noconnection.svg";
import carpenter from "./images/carpenter.svg";
import electrician from "./images/electrician.svg";
import service from "./images/service.svg";
import mess from "./images/mess.png";
import washroom from "./images/washroom.png";

import { Link } from "react-router-dom";

export default function Complaints() {
  return (
    <div className="section">
      

      <div className="otherService">
        <Link to="wifiComplaint" className="carpenter complaint">
        <img src={wifi} alt="wifi router" />
          <p>WIFI COMPLAINTS</p>
        </Link>
        <Link to="carpenterComplaint" className="carpenter complaint">
          <img src={carpenter} alt="carpenter" />
          <p>CARPENTER</p>
        </Link>
        <Link to="waterComplaint" className="carpenter complaint">
          <img src={washroom} alt="carpenter" />
          <p>WASHROOM</p>
        </Link>
        <Link to="messComplaint" className="carpenter complaint">
          <img src={mess} alt="carpenter" />
          <p>MESS</p>
        </Link>
        <Link to="electricityComplaint" className="electrician complaint">
          <img src={electrician} alt="electrician" />
          <p>ELECTRICIAN</p>
        </Link>
        <Link to="otherComplaint" className="electrician complaint">
          <img src={service} alt="service" />
          <p>OTHERS</p>
        </Link>
      </div>
    </div>
  );
}
