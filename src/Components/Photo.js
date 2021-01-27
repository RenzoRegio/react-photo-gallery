import React from "react";
import NotFound from "./NotFound";
const Photo = ({ photos, value, isLoading }) => {
  let images;
  let message;
  if (photos.length > 0) {
    message = `${value} Photos`;
    images = photos.map((photo) => {
      return (
        <li key={photo.id}>
          <img
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt=""
          />
        </li>
      );
    });
  } else {
    message = <NotFound />;
    images = "";
  }

  return (
    <div className="photo-container">
      <h2>{isLoading ? "Loading..." : message}</h2>
      <ul>{images}</ul>
    </div>
  );
};

export default Photo;
