import React from "react";

import "../styles/PhotoListItem.scss";



    const PhotoListItem = ({ photo }) => {
    return (
      <div className="photo-list-item">
      <img src={photo.imageSource} alt={`Photo ${photo.id}`} />
        <div className="photographer-info">
        <img src={photo.profile} alt={`${photo.username}'s profile`} />
        <span className="username">{photo.username}</span>
      </div>
        <div className="photo-location">
        {photo.location.city}, {photo.location.country}
        </div>
      </div>
    );
};

export default PhotoListItem;
