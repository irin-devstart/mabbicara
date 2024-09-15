import React, { useEffect, useRef } from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import MicIcon from "@material-ui/icons/Mic";

const Chat: React.FC = () => {
  const chatRef = useRef<any>();
  useEffect(() => {
    console.log("JAJAJJA");

    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  const chatContainer = () => (
    <>
      <div className="chat__container" id="you">
        <div className="chat__display" id="you">
          <h3>
            your Hi BeraiExercitation duis laboris velit irure dolore laboris
            ipsum consectetur voluptate.
          </h3>
          <p>23:19</p>
        </div>
      </div>
      <div className="chat__container" id="other">
        <div className="chat__display" id="other">
          <h3>
            Outrer Hi BeraiExercitation duis laboris velit irure dolore laboris
            ipsum consectetur voluptate.
          </h3>
          <p>23:19</p>
        </div>
      </div>
    </>
  );
  return (
    <div className="chat">
      <div className="chat__top">
        <div className="userInfo">
          <Avatar src="http://placeimg.com/640/480/animals" alt="" />
          <h3>User Name</h3>
        </div>
        <div className="icon">
          <SearchIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="chat__body" ref={chatRef}>
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
        {chatContainer()}
      </div>
      <div className="chat__bottom">
        <InsertEmoticonIcon />
        <AttachmentIcon className="iconAttach" />
        <form action="">
          <input type="text" placeholder="Type a messege" />
          <button type="submit">Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
