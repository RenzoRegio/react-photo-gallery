import React from "react";
import { Route } from "react-router-dom";
import { Consumer } from "../Context";

//Components
import Search from "./Search";
import NotFound from "./NotFound";

const Photo = ({ match }) => {
  return (
    <Consumer>
      {({ photos, isLoading }) => {
        let images;
        let message;

        // Where the images and message variables are determined to provide data to the form or would render the NotFound component.
        if (photos.length > 0) {
          // If the photos state (retrieved from App.js through the Consumer) is greater than 0 - meaning there is at least 1 object in the array, then we would return the message and images variables with the populated data from the photos state.
          const query = match.params.value;
          message = `${query} photos`;
          images = photos.map((photo) => (
            <li className="img" key={photo.id}>
              <img
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
              />
            </li>
          ));
        } else {
          // If the photos state does not contain any object, then we will return the NotFound component as well as a null images variable.
          message = <NotFound />;
          images = null;
        }

        //Returns the JSX of the the Photo component.
        return (
          <React.Fragment>
            <Route path="/search/:value" component={Search} />
            <div className="photo-container">
              <h2>{isLoading ? "Loading..." : message}</h2>
              <ul>{images}</ul>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Photo;
