import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isLiked, onToggle }) {
  return (
    <div className="photo-list__fav-icon" onClick={onToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;