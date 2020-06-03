import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            className="joinInput"
            value={name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
            className="joinInput mt-20"
            value={room}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
