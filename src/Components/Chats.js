import React, { useEffect, useState } from "react";
import "./Chats.scss";
import { Avatar } from "@mui/material";
import db from "../firebase";
import { Link } from "react-router-dom";

export const Chats = ({ addNewChat = false, name, id, msg }) => {
  const [randomNr, setRandomNr] = useState("1");

  useEffect(() => {
    setRandomNr(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const RoomName = prompt("Please enter person name");
    if (RoomName) {
      db.collection("WhatsApp Chats").add({
        name: RoomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/room/${id}`}>
    <div className="Chats">
      <Avatar
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Sammy${randomNr}`}
      />
      <div className="Chats_info">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
    </div>
    </Link>
  ) : (
    <div className="Chats">
      <h2 onClick={createNewChat}>Add New Chat</h2>
    </div>
  );
};
