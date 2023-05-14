import React from "react";
import "./CSS/userInfo.css";
import { signOut } from "./Firebase.js";
import { NavLink } from "react-router-dom";

function UserInfo() {
  return (
    <div className="section">
      <div className="userInfo">
        <div id="userData">
          <img
            src={localStorage.getItem("photo")}
            alt="user pic"
            id="userImage"
          />
          <div id="userDetails">
            <p id="userName">{localStorage.getItem("userName")}</p>
            <p id="userId">{localStorage.getItem("id")}</p>
            <p id="userEmail">{localStorage.getItem("email")}</p>
          </div>
        </div>

        <div className="signButton">
          <NavLink to="/">
            <button onClick={signOut}>Sign Out</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
