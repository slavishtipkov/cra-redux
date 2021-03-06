import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox";

import "./sideBar.scss";

const SideBar = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="side-bar">
      <h5 className="heading">VARDE ONE</h5>
      <div className="profile-section">
        <NavLink to="/profile" activeStyle={activeStyle}>
          Profile
        </NavLink>
      </div>
      <div className="search-bar">
        <SearchBox />
      </div>
      <div className="main-links">
        <NavLink to="/dashboard" activeStyle={activeStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/reports" activeStyle={activeStyle} exact>
          Reports
        </NavLink>
      </div>
      <NavLink to="/logout" activeStyle={activeStyle}>
        Logout
      </NavLink>
    </nav>
  );
};

export default SideBar;
