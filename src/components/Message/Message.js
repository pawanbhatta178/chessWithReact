import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

export default function Message({ message: { user, text }, name }) {
  let isSentbyCurrentUser = false;
  name = name.trim().toLowerCase();

  if (user === name) {
    isSentbyCurrentUser = true;
  }

  return isSentbyCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
}
