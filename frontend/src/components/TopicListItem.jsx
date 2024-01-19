import React from "react";

// Importing the styles specific to the TopicListItem component
import "../styles/TopicListItem.scss";

// TopicListItem component, designed to render individual topics as clickable items
const TopicListItem = ({ label, onClick }) => {
  // Render a button for each topic item
  return (
    <button className="topic-list-item" onClick={onClick}>
      {label} {/* Displaying the label of the topic */}
    </button>
  );
};

export default TopicListItem;
