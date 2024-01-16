import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';

const PhotoDetailsModal = ({ setDisplayModal, setSelectedPhoto, selectedPhoto, similarPhotos, toggleFavorite, favorites }) => {
  useEffect(() => {
    console.log(similarPhotos);
  }, [similarPhotos]); 
  
  const handleClose = () => {
    setDisplayModal(false);
  };

  const handleSetSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>

      {selectedPhoto && (
        <div className="photo-details-modal__images">
          <img src={selectedPhoto.urls.full} alt={`Photo ${selectedPhoto.id}`} className="photo-details-modal__image" />
        </div>
      )}

      <h2 className="photo-details-modal__header">Similar Photos</h2>
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
          <p>No similar photos found.</p>
        )}
      </div>
    </div>
  );
};
 

export default PhotoDetailsModal;



