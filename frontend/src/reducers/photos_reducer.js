import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  DELETE_PHOTO
} from '../actions/photo_actions';

import {RECEIVE_PACK} from '../actions/pack_actions';

const photoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PACK: 
      let newPhoto = {}
      action.pack.photos.forEach(photo => newPhoto[photo._id] = photo)
      return newPhoto;
    case RECEIVE_ALL_PHOTOS:
      // return action.photos.data;
      return Object.assign({}, oldState, action.photos.data)
    case RECEIVE_PHOTO:
      // newState[action.photo.photo.id] = action.photo.photo;
      // return newState;
      return Object.assign({}, oldState, {[action.photo._id]: action.photo})

    case DELETE_PHOTO:
      console.log("DELETE PHOTO REDUCER");
      console.log(action);
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
}

export default photoReducer;