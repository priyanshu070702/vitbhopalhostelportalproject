//import React from "react";
import React, { useEffect, useState } from "react";
import "./CSS/sideNav.css";
import dashboard from "./images/dashboard.png";
import home from "./images/home.png";
import services from "./images/services.png";
import complaints from "./images/complaint.png";
import aboutUs from "./images/aboutus.png";
import SignIn from "./SignIn";
import AfterSignedIn from "./AfterSignedIn";
import vitlogo from './images/vitlogo.png';
import { NavLink } from "react-router-dom";
import { auth, db } from "./Firebase.js";

export default function SideNavigation() {
  const [isUserSigned, setIsUserSigned] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) setIsUserSigned(true);
    else {
      setIsUserSigned(false);
    }
  });
  return (
    <div className="navigation">
      <div className="madhu">
        <h1>VIT Bhopal</h1>
      </div>
    
      <ul>
        <li className="items">
          <NavLink to="/" className="link">
            <img src={home} alt="home" className="navIcon" />{" "}
            Home
          </NavLink>
        </li>
        {/* <li className="items">
          <NavLink to="/dashboard" className="link">
            <img src={dashboard} alt="Dashboard" className="navIcon" />{" "}
            Dashboard
          </NavLink>
        </li> */}
        <li className="items">
          <NavLink to="/complaints" className="link">
            <img src={complaints} alt="complaints" className="navIcon" />{" "}
            Complaints
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/services" className="link">
            <img src={services} alt="services" className="navIcon" /> Services
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/aboutus" className="link">
            <img src={aboutUs} alt="aboutUs" className="navIcon" /> About Us
          </NavLink>
        </li>
      </ul>
      
      <div className="signin">
              {!isUserSigned ? <SignIn /> : <AfterSignedIn />}
      </div>
    </div>
  );
}
