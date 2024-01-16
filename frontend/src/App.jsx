import React, { useState, useEffect } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 

const App = () => {
  const [modalState, setModalState] = useState({ 
    displayModal: false, 
    selectedPhoto: null,
    similarPhotos: [] 
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
    const similarPhotos = photos.filter(p => 
      p.location.city === photo.location.city && p.id !== photo.id
    );
    console.log("selected",photo)
    setModalState(prevState => ({ 
      ...prevState, 
      selectedPhoto: photo, 
      similarPhotos: similarPhotos
    }));
  };

  useEffect(() => {
    if (modalState.selectedPhoto) {
      setDisplayModal(true);
    }
  }, [modalState.selectedPhoto]);
  

  return (
    <div className="App">
      <HomeRoute
        photoData={photos}
        topicData={topics}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {modalState.displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={modalState.selectedPhoto}
          similarPhotos={modalState.similarPhotos} 
          setSelectedPhoto={setSelectedPhoto}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};


export default App;
