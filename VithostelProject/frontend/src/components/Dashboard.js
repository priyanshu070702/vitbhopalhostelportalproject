import React from "react";
import "./CSS/dashboard.css";
import complaints from "./images/complaintSvg.svg";
import service from "./images/service.svg";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="section">
      <div className="box">
        <div className="text">
          <p className="p1">Welcome to Hostel Complaint Management Portal</p>
          <p className="p2">All complaint and services online</p>
        </div>
      </div>
      <div id="options">
        <Link to="complaints" className="option">
          <img src={complaints} id="dbcomplaint" alt="complaints" />
          <p>COMPLAINTS</p>
        </Link>
        <Link to="services" className="option">
          <img src={service} id="dbservice" alt="services" />
          <p>SERVICES</p>
        </Link>
      </div>
    </div>
  );
}
