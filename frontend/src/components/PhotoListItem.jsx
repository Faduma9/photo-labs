import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


  const PhotoListItem = ({ id, location, imageSource, username, profile }) => {

  return (
    <div className="photo-list__item">
          <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" />

    <div className="photo-list__user-details">
    <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
    
    <div className="photo-list__user-info">
    <span>{username}</span>
    
    <div className="photo-list__user-location">
      {location.city}, {location.country}
      </div>
        </div>
      </div>
      <PhotoFavButton />
    </div>
  );
};
export default PhotoListItem;