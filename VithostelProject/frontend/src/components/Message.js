import React from "react";
import "./CSS/message.css";

function Message({ id, userName, time, message, photo }) {
  const isCurrUser = id === localStorage.getItem("id");

  return (
    <div id="messageContainer" style={isCurrUser ? { textAlign: "right" } : {}}>
      <p className="userId">
        {id} <span>~{userName}</span>
      </p>
      <div
        id="messageBox"
        style={isCurrUser ? { backgroundColor: "#226A59" } : {}}>
        <img src={photo} alt="user" />
        <p id="message">{message}</p>
        <p id="time">{time}</p>
      </div>
    </div>
  );
}

export default Message;
