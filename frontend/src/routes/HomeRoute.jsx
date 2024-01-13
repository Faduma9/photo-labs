import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ favoriteCount, photoData, topicData }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favoriteCount} topicData={topicData} />
      <PhotoList photoData={photoData} />  
    </div>
  );
};


export default HomeRoute;