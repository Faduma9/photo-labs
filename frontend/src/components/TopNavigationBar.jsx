import React from 'react';

// Importing the styles specific to the TopNavigationBar component
import '../styles/TopNavigationBar.scss'
// Importing child components used within the TopNavigationBar
import FavBadge from './FavBadge';
import TopicList from './TopicList';

// The TopNavigationBar component, receiving props from its parent
const TopNavigationBar = ({ favoriteCount, topicData, onTopicSelect }) => {
  // Render the top navigation bar
  return (
    <div className="top-nav-bar">
      {/* Displaying the application logo or name */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* TopicList component for displaying and handling topic selections */}
      <TopicList topicData={topicData} onTopicSelect={onTopicSelect} />
      {/* FavBadge component to show if there are any favorite photos */}
      <FavBadge hasFavorites={favoriteCount > 0} />
    </div>
  );
};

export default TopNavigationBar;
