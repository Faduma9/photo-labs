// Importing necessary React libraries and styles
import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';

// Importing assets and components
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
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
      {selectedPhoto && (
        <div className="photo-details-modal__images">
          <PhotoFavButton isLiked={favorites.has(selectedPhoto.id)} onToggle={() => toggleFavorite(selectedPhoto.id)} />
          <img src={selectedPhoto.urls.full} alt={`Photo ${selectedPhoto.id}`} className="photo-details-modal__image" />
          <div className="photo-details-modal__photographer">
            <img src={selectedPhoto.profile} alt={`Photographer ${selectedPhoto.username}`} className="photo-details-modal__photographer-profile" />
            {selectedPhoto.username}
            <div className="photo-details-modal__location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
      )}

      {/* Header for similar photos section */}
      <h2 className="photo-details-modal__header">Similar Photos</h2>
      {/* Displaying a list of similar photos */}
      <div className="photo-details-modal__images">
        {similarPhotos && similarPhotos.length > 0 ? (
          similarPhotos.map(photo => (
            <PhotoListItem
              key={photo.id}
              id={photo.id}
              location={photo.location}
              urls={photo.urls}
              username={photo.user.username}
              profile={photo.user.profile}
              isFavorited={favorites.has(photo.id)}
              onToggleFavorite={() => toggleFavorite(photo.id)}
              setDisplayModal={setDisplayModal}
              setSelectedPhoto={handleSetSelectedPhoto}
            />
          ))
        ) : (
          <p>No similar photos available.</p> // Adding a fallback text when there are no similar photos
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
