import React from "react";
import "./InfoBar.css";

import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

export default function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon"></img>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon} alt="close icon"></img>
        </a>
      </div>
    </div>
  );
}
