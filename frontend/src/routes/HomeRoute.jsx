// Importing styles and necessary components
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import React from 'react'; 

const HomeRoute = ({ photoData, topicData, setDisplayModal, setSelectedPhoto, favorites, toggleFavorite, onTopicSelect }) => {
  // Functionality or state can be added here if needed in future

  // Render the HomeRoute component
  return (
    <div className="home-route">
      {/* TopNavigationBar component displays the navigation bar with topic selections and favorite count */}
      <TopNavigationBar favoriteCount={favorites.size} topicData={topicData} onTopicSelect={onTopicSelect} />
      {/* PhotoList component shows a list of photos, handling favorite toggling and photo selection */}
      <PhotoList
        photoData={photoData}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
