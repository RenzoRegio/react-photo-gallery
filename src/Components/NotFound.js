import React from "react";

/**
 * Renders the NotFound component on the Photo component. The purpose of this component is to show the user that his/her search has no results.
 */

const NotFound = () => {
  return (
    <div className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </div>
  );
};

export default NotFound;
