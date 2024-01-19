import React from "react";
import TopicListItem from "./TopicListItem";
// Adding the style for TopicList
import "../styles/TopicList.scss";

// TopicList shows a list of topics in the navigation bar
const TopicList = ({ topicData, onTopicSelect }) => {
  // This is where the list of topics gets shown on the screen
  return (
    <div className="top-nav-bar__topic-list">
      {/* For every topic, we make a button with its name */}
      {topicData.map(topic => (
        // TopicListItem is a button for each topic
        <TopicListItem 
          key={topic.id} // Each button needs a unique key
          label={topic.title} // Label of the topic to be displayed
          onClick={() => onTopicSelect(topic.id)} // What happens when you click the button
        />
      ))}
    </div>
  );
};

export default TopicList;
