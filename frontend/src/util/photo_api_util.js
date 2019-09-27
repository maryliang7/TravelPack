import axios from 'axios';

export const fetchPhotos =  () => {
  return axios.get(`/api/photos`);
};

export const fetchPhoto = id => {
  return axios.get(`/api/photos/${id}`);
};

export const createPhoto = photo => {
  // return axios.post(`/api/photos/uploadphoto`, photo, {
  //   headers: {
  //     'accept': 'application/json',
  //     'Accept-Language': 'en-US,en;q=0.8',
  //     'Content-Type': photo.type,
  //   }
  // });
};

export const uploadPhoto = photo => {
  return axios.post(`/api/document/upload`, photo);
}

export const deletePhoto = id => {
  return axios.delete(`/api/photos/${id}`);
};