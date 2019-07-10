import React from "react";
import { NavLink } from "react-router-dom";

import Hoverable from "../HoverableComponent";

import "./nav.scss";

const Nav = ({ items }) => {
  return (
    <ul className="nav">
      {items.map(item => (
        <NavItem key={item.id} to={item.to} title={item.title} />
      ))}
    </ul>
  );
};

const NavItem = ({ to, title }) => (
  <li className={`nav-item-li-item ${title}`}>
    <Hoverable className="hoverable-component">
      {hovered => (
        <NavLink className={`nav-item ${hovered ? "hovered" : ""}`} to={to}>
          {title}
        </NavLink>
      )}
    </Hoverable>
  </li>
);

export default Nav;
