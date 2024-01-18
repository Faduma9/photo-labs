import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import React, { useState } from 'react';

const HomeRoute = ({ photoData, topicData, setDisplayModal, setSelectedPhoto }) => {
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
  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favorites.size} topicData={topicData} />
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