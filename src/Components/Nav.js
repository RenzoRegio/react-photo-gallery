import React from "react";
import { NavLink } from "react-router-dom";
import { Consumer } from "../Context";

const Nav = () => {
  return (
    <Consumer>
      {({ performSearch }) => {
        return (
          <nav className="main-nav">
            <ul>
              {/* On each <li> element, an onClick event handler is attached. 
              Once clicked, it calls the performSearch function and displays the images based on the 
              argument passed on performSearch(). */}
              <li onClick={() => performSearch("sunset")}>
                <NavLink to="/search/sunset">Sunset</NavLink>
              </li>
              <li onClick={() => performSearch("waterfalls")}>
                <NavLink to="/search/waterfalls">Waterfalls</NavLink>
              </li>
              <li onClick={() => performSearch("rainbows")}>
                <NavLink to="/search/rainbows">Rainbows</NavLink>
              </li>
            </ul>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Nav;
