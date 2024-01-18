import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 

const App = () => {
  const [modalState, setModalState] = useState({ 
    displayModal: false, 
    selectedPhoto: null,
    similarPhotos: [] // Add this new state
  });

  const setDisplayModal = (display) => {
    setModalState({ ...modalState, displayModal: display });
  };

  const setSelectedPhoto = (photo) => {
    const similarPhotos = photos.filter(p => 
      p.location.city === photo.location.city && p.id !== photo.id
    );

    setModalState({ 
      ...modalState, 
      selectedPhoto: photo, 
      similarPhotos: similarPhotos // Update the state with similar photos
    });
  };

  return (
    <div className="App">
      <HomeRoute
        favoriteCount={5}
        photoData={photos}
        topicData={topics}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
      />
      {modalState.displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={modalState.selectedPhoto}
          similarPhotos={modalState.similarPhotos} // Pass similar photos to the modal
        />
      )}
    </div>
  );
};


export default App;