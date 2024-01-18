import React, { useState, useEffect } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    modalState,
    setModalState,
    favorites,
    toggleFavorite,
    setDisplayModal,
    setSelectedPhoto
  } = useApplicationData();
  
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
          similarPhotos={modalState.similarPhotos} // Pass similar photos to the modal
          setSelectedPhoto={setSelectedPhoto}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};
export default App;