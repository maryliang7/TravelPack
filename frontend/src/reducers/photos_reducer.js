import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  DELETE_PHOTO
} from '../actions/photo_actions';

const photoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      console.log("RECEIVE ALL PHOTOS REDUCER");
      console.log(action.photos.data);
      return action.photos.data;
    // case RECEIVE_PHOTO:
    //   newState[action.photo.photo.id] = action.photo.photo;
    //   return newState;
    case DELETE_PHOTO:
      console.log("DELETE PHOTO REDUCER");
      console.log(action.photoId);
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
}

export default photoReducer;