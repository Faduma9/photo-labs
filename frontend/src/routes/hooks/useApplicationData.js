import { useState, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [modalState, setModalState] = useState({ 
    displayModal: false, 
    selectedPhoto: null,
    similarPhotos: [] // Add this new state
  });
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = photoId => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(photoId)) {
        newFavorites.delete(photoId);
      } else {
        newFavorites.add(photoId);
      }
      return newFavorites;
    });
  };

  const setDisplayModal = (display) => {
    setModalState({ ...modalState, displayModal: display });
  };

  const setSelectedPhoto = (photo) => {



   console.log("selected",photo)
    setModalState(prevState => ({ 
      ...prevState, 
      selectedPhoto: photo, 
     similarPhotos: Object.values(photo.similarPhotos)
    }));
  };

  useEffect(() => {
    if (modalState.selectedPhoto) {
      setDisplayModal(true);
    }
  }, [modalState.selectedPhoto]);

  return {
    modalState,
    setModalState,
    favorites,
    toggleFavorite,
    setDisplayModal,
    setSelectedPhoto
  };
};
  export default useApplicationData;