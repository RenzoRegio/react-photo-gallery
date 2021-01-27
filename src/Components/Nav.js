import React from "react";
import Photo from "./Photo";

import { Consumer } from "../Context";

const Nav = ({ match }) => {
  const value = match.params.value;
  return (
    <Consumer>
      {(context) => {
        return (
          <Photo
            photos={context.photos}
            value={value}
            isLoading={context.isLoading}
          />
        );
      }}
    </Consumer>
  );
};

export default Nav;
