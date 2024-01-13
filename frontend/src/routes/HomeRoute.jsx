import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';

import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';


const HomeRoute = (favCount) => {
  return (
    <div className="home-route">
      <TopNavigationBar favCount={favCount} />
      <PhotoList/>
    
    </div>
    
  );
};

export default HomeRoute;
