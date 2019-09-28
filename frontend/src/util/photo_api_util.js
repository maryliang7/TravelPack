import axios from 'axios';

export const fetchPhotos = packId => {
  return axios.get(`/api/packs/${packId}/photos/all`);
};

export const fetchPhoto = data => {
  return axios.get(`/api/packs/${data.packId}/photos/${data.scheduleId}`);
};

export const createPhoto = data => {
  console.log("ASDF");
  console.log(data);
  return axios.get(`/api/packs/${data.packId}/photos/new`, data);
};

export const uploadPhoto = photo => {
  return axios.post(`/api/document/upload`, photo);
};

export const deletePhoto = id => {
  return axios.delete(`/api/document/${id}`);
};