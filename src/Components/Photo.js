import React from "react";

const Photo = ({ photos, match }) => {
  console.log(match);
  let images;
  if (photos) {
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
    images = <li></li>;
  }
  return (
    <div className="photo-container">
      <h2></h2>
      <ul>{images}</ul>
    </div>
  );
};

export default Photo;
