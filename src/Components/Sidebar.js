import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Avatar, IconButton } from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  DonutLargeRounded,
  MoreVert,
  SearchRounded,
} from "@mui/icons-material";
import { Chats } from "./Chats";
import db from "../firebase";


export const Sidebar = () => {
  const [chat, setChat] = useState("");

  useEffect(() => {
    db.collection("WhatsApp Chats").onSnapshot((snapshot) =>
      setChat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://api.dicebear.com/7.x/personas/svg?seed=Trouble"/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeRounded />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineRounded />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchRounded />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <Chats addNewChat={true} />

        {chat.length > 0 &&
          chat.map((list) => (
            <Chats name={list.data.name} id={list.id} key={list.id} msg={list.data.msg} />
          ))}
      </div>
    </div>
  );
};
