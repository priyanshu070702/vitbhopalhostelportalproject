import React from "react";
import "./CSS/aboutus.css";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="head">ABOUT US</div>
      <div className="about">
        <p className="aboutHostel">
          <span>VIT Bhopal University Hostel Complaint Management System</span> is a complaint management system that allows students to register their complaints online.
          It will allow hostel authorities to easily maintain the complaints in a more efficient and effective way.
        </p>
      </div>

      <div className="creators">
        <a
          href="https://www.instagram.com/._priyanshu070702_."
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personDetail">
            <p className="name">Priyanshu Dhapodkar</p>
            <p className="collageId">20BCE10562</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/madhur_agarwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          
          <div className="personDetail">
            <p className="name">Madhur Agarwal</p>
            <p className="collageId">20BCE10677</p>
          </div>
        </a>
        
        
      </div>
    </div>
  );
}


