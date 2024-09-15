import React from "react";
import "./Main.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../Chat/Chat";
function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Main;
