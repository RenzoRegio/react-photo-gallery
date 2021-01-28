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
              Once clicked, it calls the performSearch function which passes data 
              to display the images. */}
              <li onClick={() => performSearch("sunset")}>
                <NavLink to="/search/sunset">Sunset</NavLink>
              </li>
              <li onClick={() => performSearch("beach")}>
                <NavLink to="/search/beach">Beach</NavLink>
              </li>
              <li onClick={() => performSearch("food")}>
                <NavLink to="/search/food">Food</NavLink>
              </li>
              <li onClick={() => performSearch("nature")}>
                <NavLink to="/search/nature">Nature</NavLink>
              </li>
              <li onClick={() => performSearch("landscape")}>
                <NavLink to="/search/landscape">Landscape</NavLink>
              </li>
            </ul>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Nav;
