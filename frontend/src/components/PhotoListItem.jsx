import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import React from 'react';

// PhotoListItem component for displaying each photo with details and favorite button
const PhotoListItem = ({ id, location, urls, username, profile, isFavorited, onToggleFavorite, setSelectedPhoto, similarPhotos }) => {
  // Function to handle clicking on the photo, setting the selected photo
  const handleImageClick = () => {
    setSelectedPhoto({ id, location, urls, username, profile, similarPhotos });
  };

  // Render the photo item with favorite button and user details
  return (
    <div className="photo-list__item">
      {/* PhotoFavButton to like or unlike the photo */}
      <PhotoFavButton isLiked={isFavorited} onToggle={onToggleFavorite} />
      {/* Photo image, clickable to select the photo */}
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" onClick={handleImageClick} />

      {/* Displaying the uploader's details */}
      <div className="photo-list__user-details">
        {/* Uploader's profile picture */}
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        {/* Username and location */}
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

    </div>
  );
};


export default PhotoListItem;


