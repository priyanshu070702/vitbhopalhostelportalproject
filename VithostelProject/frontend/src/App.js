import React, { useEffect, useState } from "react";
import "./App.css";
import error404 from "./components/images/error404.svg";
import signInFirst from "./components/images/signInFirst.svg";
import SideNavigation from "./components/SideNavigation.js";
import SignIn from "./components/SignIn.js";
import AfterSignedIn from "./components/AfterSignedIn.js";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Services from "./components/Services.js";
import Complaints from "./components/Complaints.js";
import SendMail from "./components/SendComplaint.js";
import AboutUs from "./components/AboutUs.js";
import UserInfo from "./components/UserInfo.js";
import NotFound from "./components/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, db } from "./components/Firebase.js";

function App() {
  const [isUserSigned, setIsUserSigned] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) setIsUserSigned(true);
    else {
      setIsUserSigned(false);
    }
  });

  function showNav() {
    const navBar = document.querySelector(".hamburgerMenu");
    navBar.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("activeNav");
    });
  }

  const [wifiemails, setWifiEmails] = useState("");
  const [roomemails, setRoomEmails] = useState("");
  const [carptemails, setCarptEmails] = useState("");
  const [elecemails, setElecEmails] = useState("");
  const [wateremails, setWaterEmails] = useState("");
  const [messemails, setMessEmails] = useState("");
  const [otheremails, setOtherEmails]= useState("");

  function getEmails(event, setState) {
    db.collection("emails")
      .doc(event)
      .get()
      .then((doc) => setState(doc.data().email));
  }

  useEffect(() => {
    getEmails("electricityComplaint", setElecEmails);
    getEmails("wifiComplaints", setWifiEmails);
    getEmails("roomCleaners", setRoomEmails);
    getEmails("carpenterComplaint", setCarptEmails);
    getEmails("waterComplaint", setWaterEmails);
    getEmails("messComplaint",setMessEmails);
    getEmails("otherComplaint",setOtherEmails);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <div className="sidebar">
            <nav>
              <SideNavigation />
            </nav>
          </div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="complaints" element={<Complaints />} />
              <Route
                path="service"
                element={
                  <Services isUserSigned={isUserSigned} email={roomemails} />
                }
              />
              <Route
                path="complaints/wifiComplaint"
                element={
                  <SendMail
                    isUserSigned={isUserSigned}
                    complaintHead="Wifi"
                    email="wifi@vitbhopal.ac.in"
                    category={["Not Working", 
                    "Slow", 
                    "Connection Issue",
                    "Others"]}
                  />
                }
              />
              <Route
                path="complaints/electricityComplaint"
                element={
                  <SendMail
                    complaintHead="Electricity"
                    isUserSigned={isUserSigned}
                    email="electricity@vitbhopal.ac.in"
                    category={["Lamp", 
                    "Switch", 
                    "Light Bulb", 
                    "Fan"]}
                  />
                }
              />
              <Route
                path="complaints/carpenterComplaint"
                element={
                  <SendMail
                    complaintHead="Carpenter"
                    isUserSigned={isUserSigned}
                    email="carpenter@vitbhopal.ac.in"
                    category={[
                      "Drawer",
                      "Chair",
                      "Study Table",
                      "Almirah",
                      "Handle",
                    ]}
                  />
                }
              />
              <Route
                path="complaints/waterComplaint"
                element={
                  <SendMail
                    complaintHead="Water"
                    isUserSigned={isUserSigned}
                    email="water@vitbhopal.ac.in"
                    category={[
                      "Toilet Seat",
                      "Shower",
                      "Water Problem",
                    ]}
                  />
                }
              />
              <Route
                path="complaints/messComplaint"
                element={
                  <SendMail
                    complaintHead="Mess"
                    isUserSigned={isUserSigned}
                    email="mess@vitbhopal.ac.in"
                    category={[
                      "Food",
                      "Staff",
                      "Other",
                    ]}
                  />
                }
              />
              <Route
                path="complaints/otherComplaint"
                element={
                  <SendMail
                    isUserSigned={isUserSigned}
                    complaintHead="Others"
                    email="othercomp@vitbhopal.ac.in"
                    category={["Ragging", 
                    "Theft", 
                    "Others"]}
                  />
                }
              />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="userInfo" element={<UserInfo />} />
              <Route path="*" element={<NotFound errorImage={error404} />} />
            </Routes>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
