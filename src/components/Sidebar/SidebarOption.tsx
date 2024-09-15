import React from "react";
import "./SidebarOption.css";
import Avatar from "@material-ui/core/Avatar";
import DoneAllIcon from "@material-ui/icons/DoneAll";
const SidebarOption: React.FC = () => {
  return (
    <div className="sidebarOption">
      <Avatar alt="User" src="http://placeimg.com/640/480" />

      <div className="userInfo">
        <h3>Mircle</h3>
        <div className="lastInfo">
          <DoneAllIcon />
          <p>Hi Berai</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarOption;
