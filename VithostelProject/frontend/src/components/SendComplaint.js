import React from "react";
import axios from "axios";
import back from "./images/goback.png";
import "./CSS/sendMail.css";

import { Link } from "react-router-dom";

function SendMail({ complaintHead, email, category, isUserSigned }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isUserSigned) alert("Please Sign In first");
    else {
      if (
        window.confirm(
          `proceed with registering ${complaintHead.toLowerCase()} complaint`
        )
      ) {
        const floor = document.getElementById("complaintFloor");
        const roomNo = document.getElementById("complaintRoomNo");
        const comp = document.getElementById("complaintMsg");
        const cat = document.getElementById("category")

        let userData = {
          complaintHead: complaintHead,
          fname: localStorage.getItem("fname"),
          id: localStorage.getItem("id"),
          userEmail: localStorage.getItem("email"),
          toEmail: email,
          hostel: document.getElementById("hostel").value,
          floor: floor.value,
          roomNo: roomNo.value,
          complaint: comp.value,
          category : cat.value,
        };

        try{
          async function sendData(){
            const response = await axios.post("https://vitbhopalhostel-default-rtdb.firebaseio.com/userData.json",{...userData})
            console.log(response);
          }
          sendData();
        }
        catch(err){
          console.log(err);
        }

        fetch("/complaints", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        floor.value = "";
        roomNo.value = "";
        comp.value = "";
        cat.value="";
      }
    }
  };

  return (
    <div className="section">
      <h1 className="generalHead">
        <Link to="/complaints" id="insideComplaint">
          <img src={back} alt="go back" /> {complaintHead} complaint
        </Link>{" "}
      </h1>
      <form id="complaintSection" autoComplete="off" onSubmit={handleSubmit}>
        <div id="complaintContainer">
          <div id="infos">
            <select
              id="hostel"
              className="category complaintInput"
              title="Select your hostel">
              <option disabled className="choice">Hostel</option>
              <option value="Block-1">Block-1 (Old)</option>
              <option value="Block-2">Block-2</option>
              <option value="Block-3">Block-3</option>
              <option value="Girls">Girls</option>
            </select>

            <input
              type="number"
              id="complaintFloor"
              className="complaintInput floorRoom"
              placeholder="Floor"
              min={0}
              max={7}
              required
              title="Enter your floor number"
            />
            <input
              autoCapitalize="on"
              id="complaintRoomNo"
              type="text"
              className="complaintInput floorRoom"
              placeholder="Room No."
              required
              title="Enter your room number"
            />

            {category ? (
              <select
                id="category"
                className="category complaintInput"
                title="Select complaint category">
                <option disabled>Category</option>
                {category.map((cat) => (
                  <option value={cat}>{cat}</option>
                ))}
              </select>
            ) : (
              ""
            )}
          </div>
          <textarea
            className="complaintInput"
            id="complaintMsg"
            placeholder="Enter the complaint message"
            required></textarea>
          {/* <p id="complaintQuery">
            ~ This complaint will be forwarded to {complaintHead.toLowerCase()}
            -management
            {complaintHead === "Wifi" ? " (madhur.agarwal2020@vitbhopal.ac.in)" : ""}
          </p> */}
        </div>
        <duv className="signButton">
          <button id="sendComplaint" type="submit">
            Send
          </button>
        </duv>
      </form>
    </div>
  );
}

export default SendMail;
