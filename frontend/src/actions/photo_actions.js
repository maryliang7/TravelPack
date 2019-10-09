import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: DELETE_PHOTO,
  photoId: photo.id
});

export const fetchPhotos = (packId) => dispatch => (
  PhotoAPIUtil.fetchPhotos(packId)
  .then(photos => dispatch(receiveAllPhotos(photos)))
  .catch(err => console.log(err))
)

export const fetchPhoto = id => dispatch => (
  PhotoAPIUtil.fetchPhoto(id)
  .then(photo => dispatch(receivePhoto(photo)))
  .catch(err => console.log(err))
)

export const createPhoto = photo => dispatch => (
  PhotoAPIUtil.createPhoto(photo)
  .then(photo => dispatch(receivePhoto(photo)))
  .catch(err => console.log(err))  
)

export const uploadPhoto = photo => dispatch => (
  PhotoAPIUtil.uploadPhoto(photo)
  //.then(photo => dispatch(receivePhoto(photo)))
)

export const deletePhoto = id => dispatch => (
  PhotoAPIUtil.deletePhoto(id).then(photo => dispatch(removePhoto(photo)))
  .catch(err => console.log(err))
)