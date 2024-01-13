import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import React, { useState } from 'react'; 

const HomeRoute = ({ photoData, topicData }) => {
  const [favorites, setFavorites] = useState(new Set());
  const toggleFavorite = photoId => {
    setFavorites(prev => new Set(prev.has(photoId) ? prev.delete(photoId) && prev : prev.add(photoId)));
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favorites.size} topicData={topicData} />
      <PhotoList photoData={photoData} toggleFavorite={toggleFavorite} favorites={favorites} />
  
    </div>
  );
};

export default HomeRoute;