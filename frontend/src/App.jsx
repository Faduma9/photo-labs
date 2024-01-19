// Importing necessary React library and styles
import React from 'react';
import './App.scss';

// Importing custom components and hooks
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  // Destructuring the custom hook's returned values for state management and functions
  const { state, dispatch, toggleFavorite, setSelectedPhoto, setDisplayModal, fetchPhotosByTopic } = useApplicationData();

  // Function to handle topic selection, triggering photo fetching based on the selected topic
  const handleTopicSelect = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="App">
      {/* HomeRoute component displays the main content including photo and topic data */}
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        onTopicSelect={handleTopicSelect}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
      />
      {/* Conditional rendering of PhotoDetailsModal when a modal is to be displayed */}
      {state.modalState.displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={state.modalState.selectedPhoto}
          similarPhotos={state.modalState.similarPhotos}
          setSelectedPhoto={setSelectedPhoto}
          favorites={state.favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
