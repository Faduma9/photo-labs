import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
//const sampleDataForPhotoListItem = {
  //id: "1",
  //location: {
    //city: "Montreal",
    //country: "Canada",
  //},
  //imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //username: "Joe Example",
 // profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//};


const App = () => {
  const favoriteCount = 5;

  return (
  //const photos = new Array(3).fill(sampleDataForPhotoListItem);
  //key={photo.id + index} photo={photo} 
  
    <div className="App">
      
      <HomeRoute favoriteCount={favoriteCount} photoData={photos} topicData={topics} />
    
     
          
     
    </div>
  
);
  }
export default App;