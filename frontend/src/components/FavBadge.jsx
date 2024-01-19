import React from 'react';
import FavIcon from './FavIcon';

// Importing the styles for the favorite badge
import '../styles/FavBadge.scss';

// FavBadge shows a badge if there are favorite photos.
const FavBadge = ({ hasFavorites }) => { // photos
  return (
    // Container for the favorite badge
    <div className='fav-badge'>
      {/* FavIcon component, displayAlert is triggered based on the hasFavorites prop */}
      <FavIcon displayAlert={hasFavorites}/>
    </div>
  ) 
};

export default FavBadge;
