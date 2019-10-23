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
  photo: photo.data
});

export const removePhoto = photoId => ({
  type: DELETE_PHOTO,
  photoId: photoId.data
});

export const fetchPhotos = (packId) => dispatch => {
  return (
  PhotoAPIUtil.fetchPhotos(packId)
  .then(photos => dispatch(receiveAllPhotos(photos)))
  .catch(err => console.log(err))
  );
}

export const fetchPhoto = data => dispatch => (
  PhotoAPIUtil.fetchPhoto(data)
  .then(photo => dispatch(receivePhoto(photo)))
  .catch(err => console.log(err))
)

//Upload to MongoDB
export const createPhoto = photo => dispatch => (
  PhotoAPIUtil.createPhoto(photo)
  .then(photo => dispatch(receivePhoto(photo)))
  .catch(err => console.log(err))  
)

//Upload to AWS
export const uploadPhoto = photo => dispatch => (
  PhotoAPIUtil.uploadPhoto(photo)
  //.then(photo => dispatch(receivePhoto(photo)))
)

//Delete from MongoDB
export const deletePhoto = data => dispatch => {
  return(
  PhotoAPIUtil.deletePhoto(data).then(photoId => dispatch(removePhoto(photoId)))
  .catch(err => console.log(err))
  )
}

//Delete from AWS
export const destroyPhoto = id => dispatch => (
  PhotoAPIUtil.destroyPhoto(id)
)