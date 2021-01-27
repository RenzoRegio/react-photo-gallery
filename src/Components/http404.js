import React from "react";
import { Link } from "react-router-dom";

const httpError = () => {
  return (
    <div class="errorContainer">
      <h1 className="error404">404</h1>
      <span className="errorText">
        Don't worry! You didn't break anything. We just can't find what you're
        looking for.
      </span>
      <Link to="/search">
        <button className="errorButton">SEARCH</button>
      </Link>
    </div>
  );
};

export default httpError;
