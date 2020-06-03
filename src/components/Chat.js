import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket;

const Chat = () => {
  const ENDPOINT = "localhost:5000";
  const [message, setMessage] = useState("");
  const [sendClicked, setSendClicked] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState([]);
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("newMessage", (message) =>
      setNewMessage([...newMessage, message])
    );
  }, [ENDPOINT, sendClicked, newMessage]);

  const handleChange = (event) => {
    message.trim() === "" ? setIsTyping(false) : setIsTyping(true);
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    socket.emit("message", { message: message });
  };

  return (
    <div>
      <h1>Chat</h1>
      <p>{newMessage.map((mes) => mes)}</p>
      <input
        name="message"
        placeholder="Your message to opponent goes here.."
        value={message}
        onChange={handleChange}
      />
      <button onClick={sendMessage}>SEND</button>
    </div>
  );
};

export default Chat;
