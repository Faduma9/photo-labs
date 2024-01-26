// Importing necessary React libraries and styles
import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';

// Importing assets and components
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ setDisplayModal, setSelectedPhoto, selectedPhoto, similarPhotos, toggleFavorite, favorites }) => {
  // Effect hook for handling component updates related to selectedPhoto
  useEffect(() => {
    // Potentially for future implementation, triggered when selectedPhoto changes
  }, [selectedPhoto]);

  // Function to close the modal
  const handleClose = () => {
    setDisplayModal(false);
  };

  // Function to set the selected photo
  const handleSetSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="photo-details-modal">
      {/* Close button for the modal */}
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>

      {/* Displaying the selected photo along with its details */}
      {/* {selectedPhoto && ( */}
        <div className="photo-details-modal__images">
          <PhotoFavButton isLiked={favorites.has(selectedPhoto.id)} onToggle={() => toggleFavorite(selectedPhoto.id)} />
          <img src={selectedPhoto.urls.full} alt={`Photo ${selectedPhoto.id}`} className="photo-details-modal__image" />
          <div className="photo-details-modal__photographer-details ">
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto.profile} />
          <div className="photo-details-modal__photographer-info">
            {selectedPhoto.username}
            <div className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city},
              {selectedPhoto.location.country}
            </div>
            </div>
            </div>


      


      {/* Header for similar photos section */}
      <div className="photo-details-modal__header">Similar Photos</div>
      {/* Displaying a list of similar photos */}
      <div className="photo-details-modal__images">
        {/* {similarPhotos && similarPhotos.length > 0 ? ( */}
        
          {<PhotoList favorites={favorites} toggleFavorite={toggleFavorite} photoData={Object.values(similarPhotos)}/>}

        {/* ) : (
          <p>No similar photos available.</p> // Adding a fallback text when there are no similar photos
        )} */}
      </div>
    </div>
  </div>
      // )}
  );
};

export default PhotoDetailsModal;
