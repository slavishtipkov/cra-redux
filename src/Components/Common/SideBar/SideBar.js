import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox";

import Nav from "../Navigation";
import { sideBarNavItems } from "../Navigation/constants";

import "./sideBar.scss";

const SideBar = () => {
  const activeStyle = { color: "#ffffff" };

  return (
    <div className="side-bar">
      <div className="heading-section">VARDE ONE</div>
      <div className="profile-section">PROFILE</div>
      <div className="search-section">SEARCH</div>
      <Nav items={sideBarNavItems} />
    </div>
  );
};

export default SideBar;
