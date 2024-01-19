import React from 'react';

// Importing the favorite icon component and styles
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// PhotoFavButton component for toggling the favorite status of a photo
function PhotoFavButton({ isLiked, onToggle }) {
  return (
    // Clickable container for the favorite icon
    <div className="photo-list__fav-button" onClick={onToggle}> {/* Renamed class for uniqueness */}
      <div className="photo-list__fav-icon-svg">
        
        {/* FavIcon component, which changes appearance based on whether the photo is liked */}
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
