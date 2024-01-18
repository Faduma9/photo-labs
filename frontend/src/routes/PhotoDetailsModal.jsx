import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ setDisplayModal, setSelectedPhoto, selectedPhoto, similarPhotos, toggleFavorite, favorites }) => {
  useEffect(() => {
    console.log(selectedPhoto);
  }, [selectedPhoto]); // Add similarPhotos as a dependency

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
      {/* Displaying the larger selected photo */}
      {selectedPhoto && (
        <div className="photo-details-modal__images">
          <PhotoFavButton isLiked={favorites.has(selectedPhoto.id)} onToggle={() => toggleFavorite(selectedPhoto.id)} />
          <img src={selectedPhoto.urls.full} alt={`Photo ${selectedPhoto.id}`} className="photo-details-modal__image" />
          <div className="photo-details-modal__photographer">
      <img src={selectedPhoto.profile} alt={`Photographer ${selectedPhoto.username}`} className="photo-details-modal__photographer-profile" />
      {selectedPhoto.username}
      </div>
        </div>
      )}

      {/* Similar Photos Section */}
      <h2 className="photo-details-modal__header">Similar Photo</h2>
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
          <p></p>
        )}
      </div>
    </div>
  );
};
 
export default PhotoDetailsModal;