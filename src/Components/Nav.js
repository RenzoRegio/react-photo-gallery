import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li onClick={() => props.onSearch("sunset")}>
          <NavLink to="/search/sunset">Sunset</NavLink>
        </li>
        <li onClick={() => props.onSearch("waterfalls")}>
          <NavLink to="/search/waterfalls">Waterfalls</NavLink>
        </li>
        <li onClick={() => props.onSearch("rainbows")}>
          <NavLink to="/search/rainbows">Rainbows</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
