import React from "react";

// Importing styles for the photo list
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// PhotoList component for displaying a list of photos
const PhotoList = ({ photoData, toggleFavorite, favorites, setDisplayModal, setSelectedPhoto }) => {
  return (
    // Rendering the photo list as an unordered list
    <ul className="photo-list">
      {/* Mapping over each photo in the photoData array */}
      {photoData.map(photo => (
        // Each photo is listed as a list item
        <li key={photo.id}>
          {/* PhotoListItem component for each photo, passing necessary props */}
          <PhotoListItem
            id={photo.id}
            isFavorited={favorites.has(photo.id)} // Determines if the photo is favorited
            onToggleFavorite={() => toggleFavorite(photo.id)} // Handles the favorite toggle
            location={photo.location} // Location information of the photo
            urls={photo.urls} // URLs for the photo
            username={photo.user.username} // Username of the uploader
            profile={photo.user.profile} // Profile picture of the uploader
            similarPhotos={photo.similar_photos} // Array of similar photos
            setDisplayModal={setDisplayModal} // Function to display the modal
            setSelectedPhoto={setSelectedPhoto} // Function to set the selected photo
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
