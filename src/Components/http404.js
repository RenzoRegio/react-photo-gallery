import React from "react";
import { Link } from "react-router-dom";

/**
 * Rendered to the screen if the URL path does not exist causing a 404 or not-found error. Executed and Accessed by Switch and Route in App.js.
 */

const httpError = () => {
  return (
    <div className="errorContainer">
      <h1 className="error404">404</h1>
      <span className="errorText">
        Don't worry! You didn't break anything. We just can't find what you're
        looking for.
      </span>
      <Link to="/">
        <button className="errorButton">SEARCH</button>
      </Link>
    </div>
  );
};

export default httpError;
