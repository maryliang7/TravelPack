import axios from 'axios';

export const fetchPhotos =  () => {
  return axios.get(`/api/photos`);
};

export const fetchPhoto = id => {
  return axios.get(`/api/photos/${id}`);
};

export const createPhoto = photo => {
  return axios.post(`/api/photos`, photo);
};

export const deletePhoto = id => {
  return axios.delete(`/api/videos/${id}`);
};