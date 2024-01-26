import { useReducer, useEffect } from 'react';



// Defining the types of actions that can be performed in our app
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL_DISPLAY: 'TOGGLE_MODAL_DISPLAY',// Showing or hiding the modal
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
}
// Initial state of our application data
const initialState = {
  modalState: { displayModal: false, selectedPhoto: null, similarPhotos: [] },
  favorites: new Set(),
  photoData: [],
  topicData: [],

};
// Function to handle changes in our app's state
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorites: state.favorites.filter(fav => fav !== action.payload) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, modalState: { ...state.modalState, selectedPhoto: action.payload, displayModal: true, similarPhotos: Object.values(action.payload.similarPhotos) } };
    case ACTIONS.TOGGLE_MODAL_DISPLAY:
      return { ...state, modalState: { ...state.modalState, displayModal: action.payload } };
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.has(action.payload);
      const updatedFavorites = new Set(state.favorites);
      if (isFavorite) {
        updatedFavorites.delete(action.payload);
      } else {
        updatedFavorites.add(action.payload);
      }
      return { ...state, favorites: updatedFavorites };


    default:
      throw new Error(`Unsupported action type: ${action.type}`);

  }

}
// Custom hook to manage our application data
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

    // Functions to update our application's state
  const toggleFavorite = photoId => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };
  const setSelectedPhoto = photo => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  const setDisplayModal = (display) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL_DISPLAY, payload: display });
  };
  const fetchPhotosByTopic = (topicId) => {
        // Fetching photos from the server based on a topic
    fetch(`api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error("Failed to fetch photos by topic:", error));
  };
  // Fetching initial data for photos and topics when the component mounts
  useEffect(() => {
    fetch(`api/photos`)
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error("Failed to fetch photos:", error));
  }, []);
  useEffect(() => {
    fetch(`api/topics`)
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => console.error("Failed to fetch topics:", error));
  }, []);

  // Returning the state and functions to update it
  return {
    state,
    dispatch,
    toggleFavorite,
    setSelectedPhoto,
    setDisplayModal,
    fetchPhotosByTopic
  };
};
export default useApplicationData;