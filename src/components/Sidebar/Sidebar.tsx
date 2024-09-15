import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar src="http://placeimg.com/640/480/animals" alt="" />

        <MoreVertIcon className="sidebar__icon" />
      </div>
      <div className="sidebar__body">
        <div className="sidebar__search">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="sidebar__bottom">
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
      </div>
    </div>
  );
}

export default Sidebar;
