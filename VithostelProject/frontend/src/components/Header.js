import React from 'react';
import './CSS/header.css'
import vitlogo from './images/vitlogo.png';

export default function Header() {
  return (
    <div className="header">
      <img src={vitlogo} alt="vitlogo"/>
      <div className="name">
        <h1>VIT Bhopal Hostel Complaint Management Portal</h1>
      </div>
    </div>
  )
}
