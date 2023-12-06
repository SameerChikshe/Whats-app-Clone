import React, { useEffect, useState } from "react";
import "./PersonalChat.scss";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFileRounded,
  InsertEmoticonRounded,
  KeyboardVoiceRounded,
  MoreVert,
  SearchRounded,
} from "@mui/icons-material";
import db from "../firebase";
import { useParams } from "react-router-dom";

export const PersonalChat = () => {
  const [randomNr, setRandomNr] = useState("1");
  const [input, setInput] = useState("")
  const [personName,setPersonName] = useState("")
  const {chatId} = useParams()

  useEffect(()=>{
    if(chatId){
    db.collection("WhatsApp Chats").doc(chatId).onSnapshot((snapshot)=>
      setPersonName(snapshot.data().name)
    )
  }
  },[chatId])

  useEffect(() => {
    setRandomNr(Math.floor(Math.random() * 5000));
  }, []);

    const sendMessage =(e)=>{
        e.preventDefault();
        console.log("you typed", input)
        setInput("")
    }

  return (
    <div className="PersonalChat">
      <div className="PersonalChat_header">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=Harley${randomNr}`}
        />

        <div className="PersonalChat_headerInfo">
          <h3>{personName}</h3>
          <p>Last seen at 13:29PM</p>
        </div>

        <div className="PersonalChat_headerRight">
          <IconButton>
            <SearchRounded />
          </IconButton>
          <IconButton>
            <AttachFileRounded />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="PersonalChat_body">
        <div className={`PersonalChat_msg ${true && "received"}`}>
          <span className="PersonalChat_name">Person 1</span>
          Hello this is sameer .....
          <span className="PersonalChat_timestamp">3:56PM</span>
        </div>
      </div>
      <div className="PersonalChat_footer">
        <IconButton>
        <InsertEmoticonRounded/>
        </IconButton>
        <form>
        <input value={input} onChange={(event)=> setInput(event.target.value)} type="text" placeholder="Type a message"/>
        <button type="submit" onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
        <KeyboardVoiceRounded/>
        </IconButton>
      </div>
    </div>
  );
};
