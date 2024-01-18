import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';


const PhotoDetailsModal = ({ setDisplayModal, selectedPhoto, similarPhotos }) => {
  const handleClose = () => {
    setDisplayModal(false);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>

      {/* Displaying the larger selected photo */}
      {selectedPhoto && (
        <div className="photo-details-modal__images">
          <img src={selectedPhoto.urls.full} alt={`Photo ${selectedPhoto.id}`} className="photo-details-modal__image" />
        </div>
      )}

      {/* Similar Photos Section */}
      <h2 className="photo-details-modal__header">Similar Photos</h2>
      <div className="photo-details-modal__images">
        {similarPhotos && similarPhotos.map(photo => (
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
          />
        ))}
      </div>
    </div>
  );
};


export default PhotoDetailsModal;